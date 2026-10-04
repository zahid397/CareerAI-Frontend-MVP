import type { Metadata } from "next";
import { CVBuilderPage } from "@/components/cv/CVBuilderPage";
export const metadata: Metadata = { title: "CV builder" };
export default function Page() {
  return <CVBuilderPage />;
}
