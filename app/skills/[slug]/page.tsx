import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createServiceSupabaseClient, publicSkillUrl } from "@/lib/supabase/server";
import type { Skill } from "@/lib/types";

export const dynamic = "force-dynamic";

async function getSkill(slug: string): Promise<(Skill & { markdown: string; raw_url: string }) | null> {
  const supabase = createServiceSupabaseClient();
  const { data, error } = await supabase.from("skills").select("*").eq("slug", slug).single();
  if (error || !data) return null;

  const skill = data as Skill;
  const rawUrl = publicSkillUrl(skill.slug);
  const markdown = await fetch(rawUrl, { cache: "no-store" }).then((response) =>
    response.ok ? response.text() : ""
  );

  return { ...skill, raw_url: rawUrl, markdown };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const skill = await getSkill(params.slug);
  return skill ? { title: skill.title, description: skill.description } : { title: "Skill not found" };
}

export default async function SkillPage({ params }: { params: { slug: string } }) {
  const skill = await getSkill(params.slug);
  if (!skill) notFound();

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {skill.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h1 className="text-4xl font-black tracking-tight">{skill.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{skill.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={skill.raw_url} download>
              <Download size={16} />
              Download .md
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={skill.raw_url} target="_blank" rel="noreferrer">
              Open raw URL
            </a>
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="p-0">
          <pre className="max-h-[70vh] overflow-auto rounded-2xl p-6 text-sm leading-6">
            <code>{skill.markdown}</code>
          </pre>
        </CardContent>
      </Card>
    </section>
  );
}
