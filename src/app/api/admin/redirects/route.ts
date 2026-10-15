import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase';
import { parseRedirectBody } from '@/lib/redirects.server';

export async function GET() {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { data, error } = await getSupabaseAdmin().from('redirects').select('*').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ items: data });
}

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const parsed = parseRedirectBody(await request.json().catch(() => null));
  if (parsed instanceof NextResponse) return parsed;
  const { data, error } = await getSupabaseAdmin().from('redirects').insert(parsed).select('*').single();
  if (error) {
    const dup = error.code === '23505';
    return NextResponse.json({ error: dup ? `A redirect from ${parsed.from_path} already exists.` : error.message }, { status: dup ? 409 : 500 });
  }
  return NextResponse.json({ item: data });
}
