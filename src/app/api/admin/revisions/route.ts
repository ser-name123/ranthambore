import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase';

// GET /api/admin/revisions?entity=pages&ref=<id>  — newest first, without the stored data.
export async function GET(request: Request) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;

  const url = new URL(request.url);
  const entity = url.searchParams.get('entity');
  const ref = url.searchParams.get('ref');
  if (!entity || !ref || !['pages', 'packages', 'content'].includes(entity)) {
    return NextResponse.json({ error: 'entity and ref are required' }, { status: 400 });
  }
  const { data, error } = await getSupabaseAdmin()
    .from('revisions')
    .select('id, created_at, created_by, published')
    .eq('entity', entity)
    .eq('ref', ref)
    .order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ revisions: data });
}
