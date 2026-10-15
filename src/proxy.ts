import { NextResponse, type NextRequest } from 'next/server';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';

// Applies the redirects managed in Admin → SEO & Google → URLs & Redirects.
// The list is cached in memory for a few seconds so most requests skip the database.

type Rule = { id: string; to: string; status: number };

const TTL_MS = 15_000;
let cache: { at: number; rules: Map<string, Rule> } | null = null;
let loading: Promise<Map<string, Rule>> | null = null;

async function loadRules(): Promise<Map<string, Rule>> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.rules;
  if (!loading) {
    loading = (async () => {
      const { data, error } = await getSupabaseAdmin().from('redirects').select('id, from_path, to_path, status_code');
      if (error) throw error;
      const rules = new Map<string, Rule>(data.map((r) => [r.from_path, { id: r.id, to: r.to_path, status: r.status_code }]));
      cache = { at: Date.now(), rules };
      return rules;
    })().finally(() => {
      loading = null;
    });
  }
  return loading;
}

function normalize(pathname: string): string {
  let p = pathname.toLowerCase().replace(/\/{2,}/g, '/');
  try {
    p = decodeURIComponent(p);
  } catch {}
  return p.length > 1 ? p.replace(/\/+$/, '') : p;
}

export async function proxy(request: NextRequest) {
  if (!isSupabaseConfigured) return NextResponse.next();
  let rules: Map<string, Rule>;
  try {
    rules = await loadRules();
  } catch (e) {
    console.error('Redirects unavailable:', (e as Error).message);
    return NextResponse.next(); // never take the site down because of redirects
  }
  const path = normalize(request.nextUrl.pathname);
  const rule = rules.get(path);
  if (!rule) return NextResponse.next();

  const target = new URL(rule.to, request.nextUrl.origin);
  if (target.origin === request.nextUrl.origin && normalize(target.pathname) === path) return NextResponse.next();
  // Keep campaign parameters (utm_*, gclid…) unless the target sets its own query.
  if (target.origin === request.nextUrl.origin && !target.search) target.search = request.nextUrl.search;

  void getSupabaseAdmin()
    .rpc('increment_redirect_hits', { rid: rule.id })
    .then(({ error }) => error && console.error('Redirect hit count failed:', error.message));

  return NextResponse.redirect(target, rule.status);
}

export const config = {
  // Skip the admin, APIs, Next internals and static files (old .html/.php URLs still go through).
  matcher: ['/((?!api|admin|_next/static|_next/image|.*\\.(?:png|jpe?g|gif|webp|avif|svg|ico|css|js|map|txt|xml|woff2?|ttf|otf|mp4|webm|pdf|json)$).+)'],
};
