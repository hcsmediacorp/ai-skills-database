import { NextResponse } from "next/server";
import { createServiceSupabaseClient, publicSkillUrl } from "@/lib/supabase/server";
import type { Skill } from "@/lib/types";

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase.from("skills").select("*").eq("slug", params.slug).single();
  if (error || !data) return NextResponse.json({ error: "Skill not found" }, { status: 404 });

  const skill = data as Skill;
  const rawUrl = publicSkillUrl(skill.slug);
  const markdown = await fetch(rawUrl, { cache: "no-store" }).then((response) =>
    response.ok ? response.text() : ""
  );

  return NextResponse.json({ skill: { ...skill, raw_url: rawUrl, markdown } });
}
