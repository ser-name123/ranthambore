import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase';

// Full stored version, so the editor can load it for restoring.
export async function GET(_request: Request, ctx: RouteContext<'/api/admin/revisions/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { id } = await ctx.params;

  const { data, error } = await getSupabaseAdmin().from('revisions').select('id, entity, ref, data, published, created_at').eq('id', id).maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ revision: data });
}
