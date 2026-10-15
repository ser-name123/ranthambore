import { NextResponse } from 'next/server';
import { ENQUIRY_STATUSES, getSupabaseAdmin } from '@/lib/supabase';
import { requireAdmin } from '@/lib/admin-auth';

export async function PATCH(request: Request, ctx: RouteContext<'/api/admin/enquiries/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { id } = await ctx.params;

  const body = await request.json().catch(() => ({}));
  const update: Record<string, string | null> = {};
  if (body.status !== undefined) {
    if (!ENQUIRY_STATUSES.includes(body.status)) {
      return NextResponse.json({ error: 'Invalid status.' }, { status: 400 });
    }
    update.status = body.status;
  }
  if (body.admin_notes !== undefined) {
    update.admin_notes = typeof body.admin_notes === 'string' ? body.admin_notes.slice(0, 5000) : null;
  }
  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: 'Nothing to update.' }, { status: 400 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from('enquiries')
    .update(update)
    .eq('id', id)
    .select('*')
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ enquiry: data });
}

export async function DELETE(_request: Request, ctx: RouteContext<'/api/admin/enquiries/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { id } = await ctx.params;

  const { error } = await getSupabaseAdmin().from('enquiries').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
