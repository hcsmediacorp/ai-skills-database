import { NextResponse } from "next/server";
import { createServiceSupabaseClient, publicSkillUrl } from "@/lib/supabase/server";
import type { Skill } from "@/lib/types";

function escapeLike(value: string) {
  return value.replace(/[\\%_]/g, (match) => `\\${match}`).replace(/[{},]/g, "");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();
  const tag = searchParams.get("tag")?.trim();
  const supabase = createServiceSupabaseClient();

  let query = supabase.from("skills").select("*").order("created_at", { ascending: false });
  if (tag) query = query.contains("tags", [tag]);
  if (q) {
    const safe = escapeLike(q);
    query = query.or(`title.ilike.%${safe}%,description.ilike.%${safe}%`);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  let skills = (data ?? []) as Skill[];
  if (q) {
    const needle = q.toLowerCase();
    skills = skills.filter(
      (skill) =>
        skill.title.toLowerCase().includes(needle) ||
        skill.description.toLowerCase().includes(needle) ||
        skill.tags.some((skillTag) => skillTag.includes(needle))
    );
  }

  return NextResponse.json({
    skills: skills.map((skill) => ({ ...skill, raw_url: publicSkillUrl(skill.slug) }))
  });
}
