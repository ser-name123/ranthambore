import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { cmsTable, CmsTable, dbError, parseCmsBody, revalidateCms } from '@/lib/cms-admin.server';

// Collection routes for /api/admin/pages and /api/admin/packages.
function table(collection: string): CmsTable | null {
  return collection === 'pages' || collection === 'packages' ? collection : null;
}

export async function GET(_request: Request, ctx: RouteContext<'/api/admin/[collection]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const t = table((await ctx.params).collection);
  if (!t) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const { data, error } = await cmsTable(t)
    .select('id, slug, data, published, sort_order, updated_at')
    .order('sort_order', { ascending: true })
    .order('updated_at', { ascending: true });
  if (error) return dbError(error);
  return NextResponse.json({ items: data });
}

export async function POST(request: Request, ctx: RouteContext<'/api/admin/[collection]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const t = table((await ctx.params).collection);
  if (!t) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const parsed = parseCmsBody(t, await request.json().catch(() => null));
  if (parsed instanceof NextResponse) return parsed;

  const { data, error } = await cmsTable(t)
    .insert({ slug: parsed.slug, data: parsed.data, published: parsed.published ?? false, sort_order: parsed.sort_order ?? 999 })
    .select('id, slug, data, published, sort_order, updated_at')
    .single();
  if (error) return dbError(error);
  revalidateCms(t);
  return NextResponse.json({ item: data });
}

// Bulk reorder: { order: [id, id, ...] }
export async function PATCH(request: Request, ctx: RouteContext<'/api/admin/[collection]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const t = table((await ctx.params).collection);
  if (!t) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const { order } = await request.json().catch(() => ({}));
  if (!Array.isArray(order) || !order.every((id) => typeof id === 'string')) {
    return NextResponse.json({ error: 'Invalid order.' }, { status: 400 });
  }
  const results = await Promise.all(order.map((id: string, i: number) => cmsTable(t).update({ sort_order: i }).eq('id', id)));
  const failed = results.find((r) => r.error);
  if (failed?.error) return dbError(failed.error);
  revalidateCms(t);
  return NextResponse.json({ success: true });
}
