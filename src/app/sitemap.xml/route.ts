import { buildSitemap } from '@/lib/seo-files.server';

// Built per request from admin settings (the data itself is cached), so edits show immediately.
export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response(await buildSitemap(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=0, s-maxage=300' },
  });
}
