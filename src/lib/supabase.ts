import { createClient } from "@supabase/supabase-js";
import { insertDemoLead } from "@/lib/demo-store";
import { getSupabaseEnv } from "@/lib/supabase-config";

type LeadInsert = {
  full_name: string;
  phone: string;
  email: string;
  level: string;
  interest: string;
  message: string;
};

function getSupabaseConfig() {
  const { url, serviceRoleKey } = getSupabaseEnv();

  if (!url || !serviceRoleKey) {
    return null;
  }

  return { url, serviceRoleKey };
}

export async function insertLead(payload: LeadInsert) {
  const config = getSupabaseConfig();

  if (!config) {
    await insertDemoLead(payload);

    return {
      ok: true as const,
      storage: "local" as const,
    };
  }

  const supabase = createClient(config.url, config.serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const { error } = await supabase.from("course_leads").insert(payload);

  if (error) {
    return { ok: false as const, reason: error.message };
  }

  return { ok: true as const, storage: "supabase" as const };
}
