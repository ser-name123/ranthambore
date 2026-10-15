import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase';
import { parseRedirectBody } from '@/lib/redirects.server';

export async function PUT(request: Request, ctx: RouteContext<'/api/admin/redirects/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { id } = await ctx.params;
  const parsed = parseRedirectBody(await request.json().catch(() => null));
  if (parsed instanceof NextResponse) return parsed;
  const { data, error } = await getSupabaseAdmin()
    .from('redirects')
    .update({ ...parsed, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select('*')
    .maybeSingle();
  if (error) {
    const dup = error.code === '23505';
    return NextResponse.json({ error: dup ? `A redirect from ${parsed.from_path} already exists.` : error.message }, { status: dup ? 409 : 500 });
  }
  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ item: data });
}

export async function DELETE(_request: Request, ctx: RouteContext<'/api/admin/redirects/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { id } = await ctx.params;
  const { error } = await getSupabaseAdmin().from('redirects').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
