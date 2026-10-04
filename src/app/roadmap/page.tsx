import type { Metadata } from "next";
import { RoadmapPage } from "@/components/roadmap/RoadmapPage";
export const metadata: Metadata = { title: "Your roadmap" };
export default function Page() {
  return <RoadmapPage />;
}
