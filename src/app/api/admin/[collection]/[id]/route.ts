import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { cmsTable, CmsTable, dbError, parseCmsBody, revalidateCms, saveRevision } from '@/lib/cms-admin.server';
import { handleUrlChange, itemPath } from '@/lib/redirects.server';

function table(collection: string): CmsTable | null {
  return collection === 'pages' || collection === 'packages' ? collection : null;
}

const SELECT = 'id, slug, data, published, sort_order, updated_at';

export async function PUT(request: Request, ctx: RouteContext<'/api/admin/[collection]/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { collection, id } = await ctx.params;
  const t = table(collection);
  if (!t) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const parsed = parseCmsBody(t, await request.json().catch(() => null));
  if (parsed instanceof NextResponse) return parsed;

  const { data: current } = await cmsTable(t).select('slug, data, published').eq('id', id).maybeSingle();
  if (!current) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (JSON.stringify(current.data) !== JSON.stringify(parsed.data)) {
    await saveRevision(t, id, current.data, current.published, admin.email);
  }

  const update: Record<string, unknown> = { slug: parsed.slug, data: parsed.data, updated_at: new Date().toISOString() };
  if (parsed.published !== undefined) update.published = parsed.published;
  if (parsed.sort_order !== undefined) update.sort_order = parsed.sort_order;

  const { data, error } = await cmsTable(t).update(update).eq('id', id).select(SELECT).single();
  if (error) return dbError(error);
  return finish(t, current.slug, data, admin.email);
}

/** Changes only the URL slug (used by URLs & Redirects). */
export async function PATCH(request: Request, ctx: RouteContext<'/api/admin/[collection]/[id]'>) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const { collection, id } = await ctx.params;
  const t = table(collection);
  if (!t) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const body = (await request.json().catch(() => null)) as { slug?: unknown } | null;
  const { data: current } = await cmsTable(t).select('slug, data, published').eq('id', id).maybeSingle();
  if (!current) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const parsed = parseCmsBody(t, { data: { ...current.data, slug: body?.slug } });
  if (parsed instanceof NextResponse) return parsed;
  if (parsed.slug === current.slug) {
    return NextResponse.json({ item: { id, ...current }, linksUpdated: 0 });
  }
  await saveRevision(t, id, current.data, current.published, admin.email);
  const { data, error } = await cmsTable(t)
    .update({ slug: parsed.slug, data: { ...current.data, slug: parsed.slug }, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select(SELECT)
    .single();
  if (error) return dbError(error);
  return finish(t, current.slug, data, admin.email);
}

async function finish(t: CmsTable, oldSlug: string, item: { slug: string }, email: string) {
  let linksUpdated = 0;
  let redirectFrom: string | null = null;
  if (oldSlug !== item.slug) {
    redirectFrom = itemPath(t, oldSlug);
    ({ linksUpdated } = await handleUrlChange(redirectFrom, itemPath(t, item.slug), email));
  }
  revalidateCms(t);
  // The rewritten item (links pointing to itself) is returned so the editor stays current.
  if (linksUpdated) {
    const { data } = await cmsTable(t).select(SELECT).eq('slug', item.slug).single();
    if (data) item = data;
  }
  return NextResponse.json({ item, linksUpdated, redirectFrom });
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
