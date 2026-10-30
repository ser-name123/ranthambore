import { NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';
import { getLinkedServiceOptions, getSectionServiceOptions, getSiteContent } from '@/lib/content.server';
import { fillTemplate, waHref } from '@/lib/site-content';
import { markdownToHtml } from '@/lib/rich-text';

// Saves a "Service Request Form" submission to the service_requests table.
// Nothing is reported as sent unless the database insert succeeded.

function text(value: unknown, max = 200): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed || null;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

/**
 * Services a visitor may pick: the card titles of every price section whose button opens this form
 * (used by those popups, and by this form in "linked" mode), plus the admin's own list in manual mode
 * or when nothing is linked yet. Matches what the browser shows (getSiteContentResolved).
 */
async function allowedServices(f: { optionsMode: string; serviceOptions: string[] }): Promise<Set<string>> {
  const [linked, sections] = await Promise.all([getLinkedServiceOptions(), getSectionServiceOptions()]);
  const useAdminList = f.optionsMode !== 'linked' || linked.length === 0;
  // Sections that set their own choices in the page editor (e.g. Cab Transfers → vehicle types).
  return new Set([...linked, ...sections, ...(useAdminList ? f.serviceOptions : [])]);
}

/** Today in India, as YYYY-MM-DD. */
function todayIst(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
}

// Light per-IP limit so the form can't be used to flood the admin.
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { serviceForm: f, contact } = await getSiteContent();

  // Honeypot: the hidden "website" field is only filled in by bots. Pretend success, store nothing.
  if (typeof body.website === 'string' && body.website.trim()) {
    return NextResponse.json({ success: true, referenceId: 'SRV-0000', message: f.successMessage, whatsappUrl: '' });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'local';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a few minutes or WhatsApp us.' }, { status: 429 });
  }

  const name = text(body.name, 120);
  const phoneRaw = text(body.phone, 30);
  const email = text(body.email, 160);
  const service = text(body.service, 160);
  const message = text(body.message, 2000);
  const people = Number.parseInt(String(body.people ?? ''), 10);
  const date = typeof body.preferred_date === 'string' && body.preferred_date ? body.preferred_date : null;

  if (!name || !phoneRaw || !service || !Number.isFinite(people) || (f.emailRequired && !email) || (f.dateRequired && !date)) {
    return NextResponse.json({ error: f.errors.required }, { status: 400 });
  }
  const phone = phoneRaw.replace(/[\s\-().]/g, '');
  if (!/^\+?\d{7,15}$/.test(phone)) return NextResponse.json({ error: f.errors.phone }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return NextResponse.json({ error: f.errors.email }, { status: 400 });
  if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || date < todayIst())) {
    return NextResponse.json({ error: f.errors.date }, { status: 400 });
  }
  if (people < 1 || people > Math.max(1, f.peopleMax || 50)) return NextResponse.json({ error: f.errors.required }, { status: 400 });
  if (!(await allowedServices(f)).has(service)) return NextResponse.json({ error: f.errors.required }, { status: 400 });
  if (f.consent.trim() && body.consent !== true) return NextResponse.json({ error: f.errors.consent }, { status: 400 });

  if (!isSupabaseConfigured) {
    return NextResponse.json({ error: f.errors.network }, { status: 503 });
  }

  const referenceId = `SRV-${new Date().getFullYear()}-${randomBytes(3).toString('hex').toUpperCase()}`;
  const { error } = await getSupabaseAdmin()
    .from('service_requests')
    .insert({
      reference_id: referenceId,
      name,
      phone,
      email,
      service,
      people,
      preferred_date: date,
      message,
      page_url: text(body.page_url, 300),
      consent: f.consent.trim() ? true : null,
    });
  if (error) {
    console.error('Service request insert failed:', error.message);
    return NextResponse.json({ error: f.errors.network }, { status: 500 });
  }

  const values = { ref: referenceId, name, phone, email, service, people, date, message };
  // The thank-you message is always sent as HTML: the admin's text is converted first, then the
  // visitor's own input is escaped so it can never become markup.
  const escaped = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, typeof v === 'string' ? escapeHtml(v) : v]));
  return NextResponse.json({
    success: true,
    referenceId,
    message: fillTemplate(markdownToHtml(f.successMessage), escaped),
    whatsappUrl: f.successWhatsapp ? waHref(contact.whatsapp, fillTemplate(f.whatsappTemplate, values)) : '',
  });
}
