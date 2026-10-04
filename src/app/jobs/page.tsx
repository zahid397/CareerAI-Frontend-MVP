import type { Metadata } from "next";
import { JobsPage } from "@/components/jobs/JobsPage";
export const metadata: Metadata = { title: "Demo opportunities" };
export default function Page() {
  return <JobsPage />;
}
