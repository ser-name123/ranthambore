import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { hashPassword, requireAdmin, verifyPassword } from '@/lib/admin-auth';

export async function GET() {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;
  return NextResponse.json({ admin });
}

// Update name/email, and optionally the password (requires the current one).
export async function PUT(request: Request) {
  const admin = await requireAdmin();
  if (admin instanceof NextResponse) return admin;

  const body = await request.json().catch(() => ({}));
  const update: Record<string, string> = { updated_at: new Date().toISOString() };

  if (typeof body.name === 'string' && body.name.trim()) update.name = body.name.trim().slice(0, 80);
  if (typeof body.email === 'string' && body.email.trim()) {
    const email = body.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
    }
    update.email = email;
  }

  if (body.newPassword !== undefined) {
    if (typeof body.newPassword !== 'string' || body.newPassword.length < 8) {
      return NextResponse.json({ error: 'New password must be at least 8 characters.' }, { status: 400 });
    }
    const { data } = await getSupabaseAdmin()
      .from('admin_users')
      .select('password_hash')
      .eq('id', admin.id)
      .single();
    if (!data || typeof body.currentPassword !== 'string' || !(await verifyPassword(body.currentPassword, data.password_hash))) {
      return NextResponse.json({ error: 'Current password is incorrect.' }, { status: 400 });
    }
    update.password_hash = await hashPassword(body.newPassword);
  }

  const { data: updated, error } = await getSupabaseAdmin()
    .from('admin_users')
    .update(update)
    .eq('id', admin.id)
    .select('id, email, name')
    .single();

  if (error) {
    const message = error.code === '23505' ? 'That email is already used by another admin.' : error.message;
    return NextResponse.json({ error: message }, { status: 400 });
  }
  return NextResponse.json({ admin: updated });
}
