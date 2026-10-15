import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getSupabaseAdmin } from './supabase';
import { PACKAGES_TAG, PAGES_TAG, SITE_CONTENT_TAG } from './content.server';
import type { CmsTable } from './cms-admin.server';

// URL redirects (applied by src/proxy.ts) and the bookkeeping done when a
// page or package URL changes.

export interface RedirectRow {
  id: string;
  from_path: string;
  to_path: string;
  status_code: number;
  hits: number;
  note: string | null;
  created_at: string;
  updated_at: string;
}

export const REDIRECT_CODES = [301, 302, 307, 308];

/** Public path of a page or package. */
export function itemPath(table: CmsTable, slug: string): string {
  return table === 'packages' ? `/packages/${slug}` : `/${slug}`;
}

/** Lower-case path without query, hash or trailing slash. */
export function normalizePath(path: string): string {
  let p = path.trim().split(/[?#]/)[0].toLowerCase();
  if (!p.startsWith('/')) p = `/${p}`;
  p = p.replace(/\/{2,}/g, '/');
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p;
}

// Paths the proxy never redirects, so the site and admin can't be locked out.
const PROTECTED = [/^\/$/, /^\/admin(\/|$)/, /^\/api(\/|$)/, /^\/_next(\/|$)/, /^\/robots\.txt$/, /^\/sitemap\.xml$/];

/** Validates a redirect from the admin form; returns the row fields or an error response. */
export function parseRedirectBody(body: unknown): { from_path: string; to_path: string; status_code: number; note: string | null } | NextResponse {
  const b = (body ?? {}) as Record<string, unknown>;
  const rawFrom = typeof b.from_path === 'string' ? b.from_path : '';
  const rawTo = typeof b.to_path === 'string' ? b.to_path.trim() : '';
  if (!rawFrom.trim() || !rawTo) return NextResponse.json({ error: 'Both "Old URL" and "New URL" are required.' }, { status: 400 });
  if (/^https?:\/\//i.test(rawFrom.trim())) {
    return NextResponse.json({ error: 'Old URL must be a path on this site, e.g. /old-page' }, { status: 400 });
  }
  const from_path = normalizePath(rawFrom);
  if (!/^\/[a-z0-9\-._~/%]*$/.test(from_path)) {
    return NextResponse.json({ error: 'Old URL may only contain letters, numbers, dashes and slashes.' }, { status: 400 });
  }
  if (PROTECTED.some((re) => re.test(from_path))) {
    return NextResponse.json({ error: `"${from_path}" can't be redirected.` }, { status: 400 });
  }
  const isAbsolute = /^https?:\/\/\S+$/i.test(rawTo);
  if (!isAbsolute && !(rawTo.startsWith('/') && !rawTo.startsWith('//') && !/\s/.test(rawTo))) {
    return NextResponse.json({ error: 'New URL must start with / or https://' }, { status: 400 });
  }
  const to_path = rawTo;
  if (!isAbsolute && normalizePath(to_path) === from_path) {
    return NextResponse.json({ error: 'Old and new URL are the same.' }, { status: 400 });
  }
  const status_code = REDIRECT_CODES.includes(Number(b.status_code)) ? Number(b.status_code) : 301;
  const note = typeof b.note === 'string' && b.note.trim() ? b.note.trim().slice(0, 200) : null;
  return { from_path, to_path, status_code, note };
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Replaces links to `oldPath` with `newPath` in every string of a JSON value. Returns [value, changed]. */
export function rewriteLinks<T>(value: T, oldPath: string, newPath: string): [T, number] {
  let count = 0;
  const exact = new RegExp(`^${escapeRe(oldPath)}(?=$|[?#])`);
  const inHtml = new RegExp(`(href=["'])${escapeRe(oldPath)}(?=["'?#])`, 'g');
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') {
      let s = v;
      if (exact.test(s)) {
        s = s.replace(exact, newPath);
        count++;
      }
      if (s.includes('href=')) {
        s = s.replace(inHtml, (_m, pre: string) => {
          count++;
          return pre + newPath;
        });
      }
      return s;
    }
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') {
      return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, walk(x)]));
    }
    return v;
  };
  const out = walk(value) as T;
  return [out, count];
}

/**
 * Called after a page/package URL changed from `oldPath` to `newPath`:
 * adds a 301 from the old URL, points existing redirects at the new URL
 * (no chains) and updates links across site content, pages and packages.
 */
export async function handleUrlChange(oldPath: string, newPath: string, createdBy: string): Promise<{ linksUpdated: number }> {
  const db = getSupabaseAdmin();

  // A redirect from the new URL would hide the page itself.
  await db.from('redirects').delete().eq('from_path', newPath);
  await db.from('redirects').update({ to_path: newPath, updated_at: new Date().toISOString() }).eq('to_path', oldPath);
  await db
    .from('redirects')
    .upsert({ from_path: oldPath, to_path: newPath, status_code: 301, note: `URL changed (by ${createdBy})`, updated_at: new Date().toISOString() }, { onConflict: 'from_path' });

  let linksUpdated = 0;
  const [content, pages, packages] = await Promise.all([
    db.from('site_content').select('key, value'),
    db.from('pages').select('id, data'),
    db.from('packages').select('id, data'),
  ]);
  for (const row of content.data ?? []) {
    const [value, n] = rewriteLinks(row.value, oldPath, newPath);
    if (n) {
      linksUpdated += n;
      await db.from('site_content').update({ value, updated_at: new Date().toISOString() }).eq('key', row.key);
    }
  }
  for (const [table, res] of [['pages', pages], ['packages', packages]] as const) {
    for (const row of res.data ?? []) {
      const [data, n] = rewriteLinks(row.data, oldPath, newPath);
      if (n) {
        linksUpdated += n;
        await db.from(table).update({ data }).eq('id', row.id);
      }
    }
  }
  for (const tag of [SITE_CONTENT_TAG, PAGES_TAG, PACKAGES_TAG]) revalidateTag(tag, { expire: 0 });
  return { linksUpdated };
}

/** A new page/package at `path` must not be shadowed by an old redirect. */
export async function clearRedirectFrom(path: string) {
  await getSupabaseAdmin().from('redirects').delete().eq('from_path', path);
}
