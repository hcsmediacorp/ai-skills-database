import { createClient } from "@supabase/supabase-js";
import { getRequiredEnv } from "@/lib/env";

export function createServiceSupabaseClient() {
  return createClient(
    getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL"),
    getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false } }
  );
}

export function publicSkillUrl(slug: string) {
  const base = getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL").replace(/\/$/, "");
  return `${base}/storage/v1/object/public/skills/${encodeURIComponent(slug)}.md`;
}
