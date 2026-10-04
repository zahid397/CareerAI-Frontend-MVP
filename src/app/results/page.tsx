import type { Metadata } from "next";
import { ResultsPage } from "@/components/career/ResultsPage";
export const metadata: Metadata = { title: "Your career profile" };
export default function Page() {
  return <ResultsPage />;
}
