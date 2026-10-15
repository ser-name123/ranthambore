import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getSupabaseAdmin } from './supabase';
import { PACKAGES_TAG, PAGES_TAG } from './content.server';
import { RESERVED_SLUGS } from './cms';
import { sanitizeRichContent } from './sanitize.server';

export type CmsTable = 'pages' | 'packages';

const TAGS: Record<CmsTable, string> = { pages: PAGES_TAG, packages: PACKAGES_TAG };

export function revalidateCms(table: CmsTable) {
  revalidateTag(TAGS[table], { expire: 0 });
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Validates the document and returns the row fields to store, or an error response. */
export function parseCmsBody(table: CmsTable, body: unknown): { slug: string; data: Record<string, unknown>; published?: boolean; sort_order?: number } | NextResponse {
  const b = body as { data?: Record<string, unknown>; published?: unknown; sort_order?: unknown };
  const data = b?.data;
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return NextResponse.json({ error: 'Invalid content.' }, { status: 400 });
  }
  const slug = typeof data.slug === 'string' ? data.slug.trim().toLowerCase() : '';
  if (!SLUG_RE.test(slug) || slug.length > 80) {
    return NextResponse.json({ error: 'URL slug may only contain lowercase letters, numbers and dashes.' }, { status: 400 });
  }
  if (table === 'pages' && RESERVED_SLUGS.includes(slug)) {
    return NextResponse.json({ error: `"${slug}" is reserved. Choose another URL.` }, { status: 400 });
  }
  if (!Array.isArray(data.blocks)) {
    return NextResponse.json({ error: 'Invalid blocks.' }, { status: 400 });
  }
  const canonical = (data.seo as { canonical?: unknown } | undefined)?.canonical;
  if (typeof canonical === 'string' && canonical.trim() && !(canonical.trim().startsWith('/') && !canonical.trim().startsWith('//')) && !/^https?:\/\/\S+$/i.test(canonical.trim())) {
    return NextResponse.json({ error: 'Canonical URL must start with / or https://' }, { status: 400 });
  }
  return {
    slug,
    data: sanitizeRichContent({ ...data, slug }),
    published: typeof b.published === 'boolean' ? b.published : undefined,
    sort_order: Number.isInteger(b.sort_order) ? (b.sort_order as number) : undefined,
  };
}

export function dbError(error: { code?: string; message: string }) {
  const message = error.code === '23505' ? 'Another item already uses this URL slug.' : error.message;
  return NextResponse.json({ error: message }, { status: error.code === '23505' ? 409 : 500 });
}

export function cmsTable(table: CmsTable) {
  return getSupabaseAdmin().from(table);
}

export type RevisionEntity = CmsTable | 'content';
const KEEP_REVISIONS = 30;

/** Stores the version that is about to be overwritten, keeping the newest KEEP_REVISIONS per item. */
export async function saveRevision(entity: RevisionEntity, ref: string, data: unknown, published: boolean | null, createdBy: string) {
  const db = getSupabaseAdmin();
  const { error } = await db.from('revisions').insert({ entity, ref, data, published, created_by: createdBy });
  if (error) {
    console.error('Revision save failed:', error.message);
    return;
  }
  const { data: old } = await db
    .from('revisions')
    .select('id')
    .eq('entity', entity)
    .eq('ref', ref)
    .order('created_at', { ascending: false })
    .range(KEEP_REVISIONS, KEEP_REVISIONS + 100);
  if (old?.length) await db.from('revisions').delete().in('id', old.map((r) => r.id));
}
