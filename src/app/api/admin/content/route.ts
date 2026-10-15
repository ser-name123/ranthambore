import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { getSupabaseAdmin } from '@/lib/supabase';
import { requireAdmin } from '@/lib/admin-auth';
import { saveRevision } from '@/lib/cms-admin.server';
import { getSiteContentFresh, SITE_CONTENT_TAG } from '@/lib/content.server';
import { DEFAULT_SITE_CONTENT, SITE_CONTENT_KEYS, SiteContentKey } from '@/lib/site-content';

const isCanonical = (v: string) => (v.startsWith('/') && !v.startsWith('//')) || /^https?:\/\/[^\s]+$/i.test(v);

export async function GET() {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;

  const [content, { data: rows }] = await Promise.all([
    getSiteContentFresh(),
    getSupabaseAdmin().from('site_content').select('key, updated_at'),
  ]);
  const updatedAt = Object.fromEntries((rows ?? []).map((r) => [r.key, r.updated_at]));
  return NextResponse.json({ content, updatedAt });
}

export async function PUT(request: Request) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;

  const { key, value } = await request.json().catch(() => ({}));
  if (!SITE_CONTENT_KEYS.includes(key)) {
    return NextResponse.json({ error: 'Unknown content section.' }, { status: 400 });
  }
  // Must have the same top-level shape (array vs object) as the default.
  const expectArray = Array.isArray(DEFAULT_SITE_CONTENT[key as SiteContentKey]);
  if (value === null || typeof value !== 'object' || Array.isArray(value) !== expectArray) {
    return NextResponse.json({ error: 'Invalid content value.' }, { status: 400 });
  }

  if (key === 'seo') {
    try {
      const url = new URL(value.siteUrl);
      if (!/^https?:$/.test(url.protocol)) throw new Error();
    } catch {
      return NextResponse.json({ error: 'Website URL must be a full address like https://example.com' }, { status: 400 });
    }
    if (typeof value.homeCanonical === 'string' && value.homeCanonical.trim() && !isCanonical(value.homeCanonical.trim())) {
      return NextResponse.json({ error: 'Homepage canonical must start with / or https://' }, { status: 400 });
    }
  }
  if (key === 'seoFiles') {
    if (value.sitemapMode === 'custom' && !/<(urlset|sitemapindex)[\s>]/.test(String(value.sitemapCustom ?? ''))) {
      return NextResponse.json({ error: 'The custom sitemap must be valid sitemap XML (it should contain <urlset> or <sitemapindex>).' }, { status: 400 });
    }
    if (value.robotsMode === 'custom' && !/user-agent\s*:/i.test(String(value.robotsCustom ?? ''))) {
      return NextResponse.json({ error: 'The custom robots.txt must contain at least one “User-agent:” line.' }, { status: 400 });
    }
  }

  const { data: current } = await getSupabaseAdmin().from('site_content').select('value').eq('key', key).maybeSingle();
  if (current && JSON.stringify(current.value) !== JSON.stringify(value)) {
    await saveRevision('content', key, current.value, null, admin.email);
  }

  const updated_at = new Date().toISOString();
  const { error } = await getSupabaseAdmin()
    .from('site_content')
    .upsert({ key, value, updated_at });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Expire immediately so the next page view shows the edit.
  revalidateTag(SITE_CONTENT_TAG, { expire: 0 });
  return NextResponse.json({ success: true, updated_at });
}
