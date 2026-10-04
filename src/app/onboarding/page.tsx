import type { Metadata } from "next";
import { OnboardingFlow } from "@/components/assessment/OnboardingFlow";
export const metadata: Metadata = { title: "Your profile" };
export default function Page() {
  return <OnboardingFlow />;
}
