import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { buildAutoRobots, buildAutoSitemap, buildRobots, buildSitemap } from '@/lib/seo-files.server';

// What the generator would produce right now, and what is currently live — for the admin preview/download.
export async function GET() {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  const [autoRobots, autoSitemap, liveRobots, liveSitemap] = await Promise.all([buildAutoRobots(), buildAutoSitemap(), buildRobots(), buildSitemap()]);
  return NextResponse.json({ autoRobots, autoSitemap, liveRobots, liveSitemap });
}
