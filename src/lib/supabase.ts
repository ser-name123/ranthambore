import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Server-only Supabase client using the service_role key. All tables have RLS
// enabled without public policies, so every read/write goes through here.
// Never import this file from a Client Component.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && serviceRoleKey);

let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  }
  if (!client) {
    client = createClient(supabaseUrl!, serviceRoleKey!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

export const ENQUIRY_STATUSES = ['New Enquiry', 'Contacted', 'Quoted', 'Confirmed', 'Cancelled'] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export interface Enquiry {
  id: string;
  reference_id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  safari_date: string | null;
  safari_mode: string | null;
  timing_preference: string | null;
  zone_preference: string | null;
  adults: number | null;
  children: number | null;
  nationality: string | null;
  notes: string | null;
  source: string | null;
  page_url: string | null;
  consent: boolean | null;
  status: EnquiryStatus;
  admin_notes: string | null;
}
