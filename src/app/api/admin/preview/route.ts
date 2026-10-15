import { NextResponse } from 'next/server';
import { draftMode } from 'next/headers';
import { requireAdmin } from '@/lib/admin-auth';

function safePath(path: string | null): string {
  // Only same-site paths, never protocol-relative or absolute URLs.
  return path && path.startsWith('/') && !path.startsWith('//') ? path : '/';
}

// GET /api/admin/preview?path=/some-page  — turns on draft mode so unpublished pages render.
export async function GET(request: Request) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  (await draftMode()).enable();
  return NextResponse.redirect(new URL(safePath(new URL(request.url).searchParams.get('path')), request.url));
}

// Turns draft mode off (the exit link uses /api/admin/preview/exit).
export async function DELETE() {
  (await draftMode()).disable();
  return NextResponse.json({ success: true });
}
