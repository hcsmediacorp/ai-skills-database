import { createServiceSupabaseClient } from "@/lib/supabase/server";
export function slugify(input:string){return input.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"") || "skill";}
export async function createUniqueSlug(title:string){const supabase=createServiceSupabaseClient(); const base=slugify(title); let candidate=base, suffix=2; while(true){const {data,error}=await supabase.from("skills").select("slug").eq("slug",candidate).maybeSingle(); if(error) throw error; if(!data) return candidate; candidate=`${base}-${suffix++}`;}}
