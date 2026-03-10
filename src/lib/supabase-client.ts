"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "@/lib/supabase-config";

let browserClient: SupabaseClient | null = null;

export function createSupabaseBrowserClient() {
  const { url, anonKey, authConfigured } = getSupabaseEnv();

  if (!authConfigured || !url || !anonKey) {
    return null;
  }

  if (!browserClient) {
    browserClient = createBrowserClient(url, anonKey);
  }

  return browserClient;
}
