export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  data?: ContactFormData;
  error?: string;
}

export interface SupabaseContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
  updated_at: string;
}

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}