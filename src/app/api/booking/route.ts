import { NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';
import { getSiteContent } from '@/lib/content.server';
import { fillTemplate, waHref } from '@/lib/site-content';

function text(value: unknown, max = 200): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed || null;
}

function count(value: unknown, fallback: number): number {
  const n = typeof value === 'number' ? value : parseInt(String(value ?? ''), 10);
  return Number.isFinite(n) && n >= 0 && n <= 100 ? Math.floor(n) : fallback;
}

function date(value: unknown): string | null {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: the hidden "website" field is only filled in by bots. Pretend success, store nothing.
  if (typeof body.website === 'string' && body.website.trim()) {
    return NextResponse.json({ success: true, referenceId: 'RWL-0000', savedToDatabase: false, message: 'Enquiry received.', whatsappUrl: '' });
  }

  const name = text(body.name, 120);
  const phone = text(body.phone, 30);
  if (!name || !phone) {
    const { forms } = await getSiteContent();
    return NextResponse.json({ error: forms.errors.required }, { status: 400 });
  }

  const referenceId = `RWL-${new Date().getFullYear()}-${randomBytes(3).toString('hex').toUpperCase()}`;
  const enquiry = {
    reference_id: referenceId,
    name,
    phone,
    email: text(body.email, 160),
    safari_date: date(body.safari_date),
    safari_mode: text(body.safari_mode),
    timing_preference: text(body.timing_preference),
    zone_preference: text(body.zone_preference),
    adults: count(body.adults, 1),
    children: count(body.children, 0),
    nationality: text(body.nationality, 60),
    notes: text(body.notes, 2000),
    source: text(body.source, 60),
    page_url: text(body.page_url, 300),
    consent: typeof body.consent === 'boolean' ? body.consent : null,
  };

  // Never report success (or send the visitor to the thank-you page) unless the enquiry is in the admin.
  const { contact, forms } = await getSiteContent();
  if (!isSupabaseConfigured) {
    return NextResponse.json({ error: forms.errors.network }, { status: 503 });
  }
  const { error } = await getSupabaseAdmin().from('enquiries').insert(enquiry);
  if (error) {
    console.error('Enquiry insert failed:', error.message);
    return NextResponse.json({ error: forms.errors.network }, { status: 500 });
  }
  const savedToDatabase = true;
  const whatsappUrl = waHref(
    contact.whatsapp,
    fillTemplate(forms.whatsappTemplate, {
      ref: referenceId,
      name,
      phone,
      email: enquiry.email,
      date: enquiry.safari_date,
      vehicle: enquiry.safari_mode,
      shift: enquiry.timing_preference,
      zone: enquiry.zone_preference,
      adults: enquiry.adults,
      children: enquiry.children,
      nationality: enquiry.nationality,
      notes: enquiry.notes,
    })
  );

  return NextResponse.json({
    success: true,
    referenceId,
    savedToDatabase,
    message: forms.successMessage,
    whatsappUrl,
  });
}
