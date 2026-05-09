import { SearchExperience } from "@/components/search-experience";
import { createServiceSupabaseClient, publicSkillUrl } from "@/lib/supabase/server";
import type { Skill } from "@/lib/types";

export const dynamic = "force-dynamic";

async function getSkills(): Promise<Skill[]> {
  if (process.env.NEXT_PHASE === "phase-production-build") return [];

  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase.from("skills").select("*").order("created_at", { ascending: false });
  if (error) return [];

  return ((data ?? []) as Skill[]).map((skill) => ({ ...skill, raw_url: publicSkillUrl(skill.slug) }));
}

export default async function HomePage() {
  const skills = await getSkills();
  const tags = Array.from(new Set(skills.flatMap((skill) => skill.tags))).sort().slice(0, 24);

  return (
    <>
      <section className="relative overflow-hidden px-4 py-20 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,.20),transparent_35%)]" />
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Public .md skill library
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Curated markdown skills for humans and AI models
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Search, download, and fetch production-grade skills from raw public URLs that work for browsers,
            scripts, and AI websearch.
          </p>
        </div>
      </section>
      <SearchExperience initialSkills={skills} initialTags={tags} />
    </>
  );
}
