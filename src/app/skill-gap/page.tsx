import type { Metadata } from "next";
import { SkillGapPage } from "@/components/skill-gap/SkillGapPage";
export const metadata: Metadata = { title: "Skill gap" };
export default function Page() {
  return <SkillGapPage />;
}
