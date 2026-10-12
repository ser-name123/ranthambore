import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

export interface SafariEnquiryPayload {
  reference_id?: string;
  name: string;
  phone: string;
  email?: string;
  safari_date?: string;
  safari_mode?: string;
  timing_preference?: string;
  zone_preference?: string;
  adults?: number;
  children?: number;
  nationality?: string;
  hotel_required?: boolean;
  pickup_required?: boolean;
  notes?: string;
}

export interface PackageEnquiryPayload {
  reference_id?: string;
  package_name: string;
  name: string;
  phone: string;
  email?: string;
  travel_date?: string;
  adults?: number;
  children?: number;
  hotel_preference?: string;
  notes?: string;
}
