import { getPublishedPackages, getPublishedPages, getSiteContent } from './content.server';
import { absoluteUrl, canonicalFor } from './seo';

const ALWAYS_BLOCKED = ['/admin', '/api/'];

/** robots.txt as generated from the admin settings (ignores custom mode). */
export async function buildAutoRobots(): Promise<string> {
  const { seo, seoFiles } = await getSiteContent();
  const lines = ['User-agent: *'];
  if (seoFiles.robotsBlockAll) {
    lines.push('Disallow: /');
  } else {
    lines.push('Allow: /');
    const blocked = [...ALWAYS_BLOCKED, ...seoFiles.robotsDisallow.map((p) => p.trim()).filter(Boolean)];
    for (const path of [...new Set(blocked)]) lines.push(`Disallow: ${path}`);
  }
  lines.push('', `Sitemap: ${absoluteUrl('/sitemap.xml', seo.siteUrl)}`);
  return lines.join('\n') + '\n';
}

export async function buildRobots(): Promise<string> {
  const { seoFiles } = await getSiteContent();
  if (seoFiles.robotsMode === 'custom' && seoFiles.robotsCustom.trim()) return seoFiles.robotsCustom.trim() + '\n';
  return buildAutoRobots();
}

const xmlEscape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

interface Entry {
  url: string;
  lastModified?: string;
  changeFrequency: string;
  priority: number;
}

/** sitemap.xml as generated from published pages/packages and the admin settings (ignores custom mode). */
export async function buildAutoSitemap(): Promise<string> {
  const [{ seo, seoFiles }, pages, packages] = await Promise.all([getSiteContent(), getPublishedPages(), getPublishedPackages()]);
  const base = seo.siteUrl;
  const excluded = new Set(seoFiles.sitemapExclude.map((p) => absoluteUrl(p.trim(), base)).filter(Boolean));
  const entries: Entry[] = [];

  // Only list a URL when it is its own canonical: duplicates point Google at the main page instead.
  const add = (path: string, canonical: string | undefined, entry: Omit<Entry, 'url'>) => {
    const url = absoluteUrl(path, base);
    if (canonical && absoluteUrl(canonicalFor(canonical, path), base) !== url) return;
    if (excluded.has(url)) return;
    entries.push({ url, ...entry });
  };

  add('/', seo.homeCanonical, { changeFrequency: 'weekly', priority: 1 });
  if (seoFiles.sitemapIncludePages) {
    for (const p of pages) {
      if (p.data.seo?.noindex) continue;
      if (p.data.group === 'legal' && !seoFiles.sitemapIncludeLegal) continue;
      add(`/${p.slug}`, p.data.seo?.canonical, { lastModified: p.updated_at, changeFrequency: 'monthly', priority: p.data.group === 'legal' ? 0.3 : 0.8 });
    }
  }
  if (seoFiles.sitemapIncludePackages) {
    for (const p of packages) {
      if (p.data.seo?.noindex) continue;
      add(`/packages/${p.slug}`, p.data.seo?.canonical, { lastModified: p.updated_at, changeFrequency: 'monthly', priority: 0.9 });
    }
  }
  for (const extra of seoFiles.sitemapExtra.map((e) => e.trim()).filter(Boolean)) {
    const url = absoluteUrl(extra, base);
    if (!entries.some((e) => e.url === url)) entries.push({ url, changeFrequency: 'monthly', priority: 0.5 });
  }

  const body = entries
    .map((e) =>
      [
        '  <url>',
        `    <loc>${xmlEscape(e.url)}</loc>`,
        e.lastModified ? `    <lastmod>${new Date(e.lastModified).toISOString()}</lastmod>` : '',
        `    <changefreq>${e.changeFrequency}</changefreq>`,
        `    <priority>${e.priority.toFixed(1)}</priority>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export async function buildSitemap(): Promise<string> {
  const { seoFiles } = await getSiteContent();
  if (seoFiles.sitemapMode === 'custom' && seoFiles.sitemapCustom.trim()) return seoFiles.sitemapCustom.trim() + '\n';
  return buildAutoSitemap();
}
