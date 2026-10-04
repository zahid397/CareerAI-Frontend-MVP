import type { Metadata } from "next";
import { CareersPage } from "@/components/career/CareersPage";
export const metadata: Metadata = { title: "Explore careers" };
export default function Page() {
  return <CareersPage />;
}
