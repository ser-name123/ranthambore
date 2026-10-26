// scripts/set-admin.mjs
// Usage: node --env-file=.env.local scripts/set-admin.mjs [email] [password] [name]
import { createClient } from '@supabase/supabase-js';
import { promisify } from 'node:util';
import { scrypt, randomBytes } from 'node:crypto';

const scryptAsync = promisify(scrypt);

async function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = await scryptAsync(password, salt, 64);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

const email = (process.argv[2] || 'admin@ranthamborewildlifetour.com').trim().toLowerCase();
const password = process.argv[3] || 'admin123';
const name = process.argv[4] || 'Admin';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local');
  process.exit(1);
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  const password_hash = await hashPassword(password);
  const { data, error } = await supabase
    .from('admin_users')
    .upsert(
      {
        email,
        name,
        password_hash,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'email' }
    )
    .select('id, email, name');

  if (error) {
    console.error('Failed to set admin:', error.message);
    process.exit(1);
  }

  console.log(`✅ Admin user ready:`);
  console.log(`   Email: ${data[0].email}`);
  console.log(`   Name: ${data[0].name}`);
  console.log(`   Password: ${password}`);
}

main();
