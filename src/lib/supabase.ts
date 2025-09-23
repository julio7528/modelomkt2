import { createClient } from '@supabase/supabase-js';
import type { SupabaseConfig } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const config: SupabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
};