import type { Metadata } from "next";
import { ReadinessPage } from "@/components/dashboard/ReadinessPage";
export const metadata: Metadata = { title: "Job readiness" };
export default function Page() {
  return <ReadinessPage />;
}
