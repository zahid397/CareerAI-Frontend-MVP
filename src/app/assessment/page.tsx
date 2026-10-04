import type { Metadata } from "next";
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow";
export const metadata: Metadata = { title: "Career assessment" };
export default function Page() {
  return <AssessmentFlow />;
}
