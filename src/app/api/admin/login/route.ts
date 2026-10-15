import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { setSessionCookie, verifyPassword } from '@/lib/admin-auth';

// Simple per-process throttle against password guessing.
const failedAttempts = new Map<string, { count: number; until: number }>();
const MAX_ATTEMPTS = 5;
const LOCK_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  const { email, password } = await request.json().catch(() => ({}));
  if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }

  const key = email.trim().toLowerCase();
  const attempt = failedAttempts.get(key);
  if (attempt && attempt.count >= MAX_ATTEMPTS && attempt.until > Date.now()) {
    return NextResponse.json({ error: 'Too many failed attempts. Try again in 10 minutes.' }, { status: 429 });
  }

  const { data: user } = await getSupabaseAdmin()
    .from('admin_users')
    .select('id, email, name, password_hash')
    .eq('email', key)
    .maybeSingle();

  if (!user || !(await verifyPassword(password, user.password_hash))) {
    const count = attempt && attempt.until > Date.now() ? attempt.count + 1 : 1;
    failedAttempts.set(key, { count, until: Date.now() + LOCK_MS });
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  failedAttempts.delete(key);
  const response = NextResponse.json({ admin: { id: user.id, email: user.email, name: user.name } });
  setSessionCookie(response, user.id);
  return response;
}
