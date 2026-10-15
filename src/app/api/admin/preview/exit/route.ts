import { NextResponse } from 'next/server';
import { draftMode } from 'next/headers';

// Leaves draft/preview mode and returns to the page.
export async function GET(request: Request) {
  (await draftMode()).disable();
  const path = new URL(request.url).searchParams.get('path');
  const target = path && path.startsWith('/') && !path.startsWith('//') ? path : '/';
  return NextResponse.redirect(new URL(target, request.url));
}
