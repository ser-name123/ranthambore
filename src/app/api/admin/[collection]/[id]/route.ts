import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { cmsTable, CmsTable, dbError, parseCmsBody, revalidateCms, saveRevision } from '@/lib/cms-admin.server';

function table(collection: string): CmsTable | null {
  return collection === 'pages' || collection === 'packages' ? collection : null;
}

export async function PUT(request: Request, ctx: RouteContext<'/api/admin/[collection]/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { collection, id } = await ctx.params;
  const t = table(collection);
  if (!t) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const parsed = parseCmsBody(t, await request.json().catch(() => null));
  if (parsed instanceof NextResponse) return parsed;

  const { data: current } = await cmsTable(t).select('data, published').eq('id', id).maybeSingle();
  if (!current) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (JSON.stringify(current.data) !== JSON.stringify(parsed.data)) {
    await saveRevision(t, id, current.data, current.published, admin.email);
  }

  const update: Record<string, unknown> = { slug: parsed.slug, data: parsed.data, updated_at: new Date().toISOString() };
  if (parsed.published !== undefined) update.published = parsed.published;
  if (parsed.sort_order !== undefined) update.sort_order = parsed.sort_order;

  const { data, error } = await cmsTable(t).update(update).eq('id', id).select('id, slug, data, published, sort_order, updated_at').single();
  if (error) return dbError(error);
  revalidateCms(t);
  return NextResponse.json({ item: data });
}

export async function DELETE(_request: Request, ctx: RouteContext<'/api/admin/[collection]/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { collection, id } = await ctx.params;
  const t = table(collection);
  if (!t) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const { error } = await cmsTable(t).delete().eq('id', id);
  if (error) return dbError(error);
  revalidateCms(t);
  return NextResponse.json({ success: true });
}
