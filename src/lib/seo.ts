import type { Metadata } from 'next';
import type { PageSeo } from './cms';
import type { SeoContent } from './site-content';
import { toPlainText } from './rich-text';

/** "/about-us" or a full URL → full URL on the site domain. Full URLs are returned unchanged. */
export function absoluteUrl(pathOrUrl: string, siteUrl: string): string {
  if (!pathOrUrl) return '';
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const base = siteUrl.replace(/\/+$/, '');
  return `${base}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

/** The canonical for a page: the admin override if set, otherwise the page's own path. */
export function canonicalFor(override: string | undefined, path: string): string {
  const value = override?.trim();
  return value ? value : path;
}

/** Metadata for a CMS page or package, falling back to the page name and site-wide defaults. */
export function buildMetadata(seo: PageSeo, fallback: { title: string; description: string; image: string }, path: string, site: SeoContent): Metadata {
  const title = seo.title || fallback.title;
  const description = seo.description || toPlainText(fallback.description) || site.description;
  const image = (site.shareImageForAll && site.ogImage) || seo.ogImage || fallback.image || site.ogImage;
  const keywords = seo.keywords.split(',').map((k) => k.trim()).filter(Boolean);
  const canonical = canonicalFor(seo.canonical, path);

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical },
    robots: seo.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.siteName,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
  };
}
