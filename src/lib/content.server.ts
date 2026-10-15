import { unstable_cache } from 'next/cache';
import { getSupabaseAdmin, isSupabaseConfigured } from './supabase';
import { DEFAULT_SITE_CONTENT, SITE_CONTENT_KEYS, SiteContent, SiteContentKey } from './site-content';
import type { CmsPage, TourPackage } from './cms';

export const SITE_CONTENT_TAG = 'site-content';

type ContentRow = { key: string; value: unknown };

async function loadContentRows(): Promise<ContentRow[]> {
  const { data, error } = await getSupabaseAdmin().from('site_content').select('key, value');
  // Throwing keeps a failed read out of the cache.
  if (error) throw new Error(`site_content read failed: ${error.message}`);
  return data ?? [];
}

// Merging happens outside the cache, so new fields in DEFAULT_SITE_CONTENT
// always appear even when cached rows were stored by an older deploy.
function buildSiteContent(rows: ContentRow[]): SiteContent {
  const content: SiteContent = structuredClone(DEFAULT_SITE_CONTENT);
  for (const row of rows) {
    if (SITE_CONTENT_KEYS.includes(row.key as SiteContentKey)) {
      mergeSection(content, row.key as SiteContentKey, row.value);
    }
  }
  return content;
}

async function loadSiteContent(): Promise<SiteContent> {
  return buildSiteContent(await loadContentRows());
}

const isPlainObject = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);

// Saved objects are deep-merged over defaults so fields added later still get a value.
// Arrays and primitives from the database replace the default when the type matches.
function deepMerge(fallback: unknown, value: unknown): unknown {
  if (isPlainObject(fallback)) {
    if (!isPlainObject(value)) return fallback;
    const out: Record<string, unknown> = { ...fallback };
    for (const [k, v] of Object.entries(value)) out[k] = k in fallback ? deepMerge(fallback[k], v) : v;
    return out;
  }
  if (Array.isArray(fallback)) return Array.isArray(value) ? value : fallback;
  if (fallback === undefined || fallback === null) return value;
  return typeof value === typeof fallback ? value : fallback;
}

function mergeSection<K extends SiteContentKey>(content: SiteContent, key: K, value: unknown) {
  content[key] = deepMerge(content[key], value) as SiteContent[K];
}

const getCachedContentRows = unstable_cache(loadContentRows, ['site-content-rows'], {
  tags: [SITE_CONTENT_TAG],
});

/** Website content for rendering. Falls back to defaults if the database is unreachable. */
export async function getSiteContent(): Promise<SiteContent> {
  if (!isSupabaseConfigured) return DEFAULT_SITE_CONTENT;
  try {
    return buildSiteContent(await getCachedContentRows());
  } catch (err) {
    console.error('Using default site content:', err);
    return DEFAULT_SITE_CONTENT;
  }
}

export const PAGES_TAG = 'cms-pages';
export const PACKAGES_TAG = 'cms-packages';

interface Row<T> {
  slug: string;
  data: T;
  updated_at: string;
}

async function loadPublished<T>(table: 'pages' | 'packages'): Promise<Row<T>[]> {
  const { data, error } = await getSupabaseAdmin()
    .from(table)
    .select('slug, data, updated_at')
    .eq('published', true)
    .order('sort_order', { ascending: true })
    .order('updated_at', { ascending: true });
  if (error) throw new Error(`${table} read failed: ${error.message}`);
  return (data ?? []) as Row<T>[];
}

const getCachedPages = unstable_cache(() => loadPublished<CmsPage>('pages'), ['cms-pages'], { tags: [PAGES_TAG] });
const getCachedPackages = unstable_cache(() => loadPublished<TourPackage>('packages'), ['cms-packages'], {
  tags: [PACKAGES_TAG],
});

async function safe<T>(fn: () => Promise<T[]>): Promise<T[]> {
  if (!isSupabaseConfigured) return [];
  try {
    return await fn();
  } catch (err) {
    console.error(err);
    return [];
  }
}

/** Published pages, in admin sort order. */
export async function getPublishedPages(): Promise<Row<CmsPage>[]> {
  return safe(getCachedPages);
}

export async function getPublishedPage(slug: string): Promise<CmsPage | null> {
  const pages = await getPublishedPages();
  return pages.find((p) => p.slug === slug)?.data ?? null;
}

/** Published tour packages, in admin sort order. */
export async function getPublishedPackages(): Promise<Row<TourPackage>[]> {
  return safe(getCachedPackages);
}

export async function getPublishedPackage(slug: string): Promise<TourPackage | null> {
  const packages = await getPublishedPackages();
  return packages.find((p) => p.slug === slug)?.data ?? null;
}

/** Uncached read of a page or package in any state, for draft-mode previews. */
export async function getDraftItem<T>(table: 'pages' | 'packages', slug: string): Promise<T | null> {
  if (!isSupabaseConfigured) return null;
  const { data } = await getSupabaseAdmin().from(table).select('data').eq('slug', slug).maybeSingle();
  return (data?.data as T) ?? null;
}

/** Uncached read for the admin panel, so editors always see what is stored. */
export async function getSiteContentFresh(): Promise<SiteContent> {
  return loadSiteContent();
}
