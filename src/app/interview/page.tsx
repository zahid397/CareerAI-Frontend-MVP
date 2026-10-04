import type { Metadata } from "next";
import { InterviewPage } from "@/components/interview/InterviewPage";
export const metadata: Metadata = { title: "Interview practice" };
export default function Page() {
  return <InterviewPage />;
}
