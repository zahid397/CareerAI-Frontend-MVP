import type { Metadata } from "next";
import { CareerAIProvider } from "@/hooks/useCareerAI";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";
import { AgentTools } from "@/components/layout/AgentTools";
export const metadata: Metadata = {
  title: {
    default: "CareerAI — Your next chapter starts here",
    template: "%s | CareerAI",
  },
  description:
    "Explore your strengths, discover career paths, and build a practical learning roadmap. Career guidance for students and young professionals in Bangladesh.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <CareerAIProvider>
          <AgentTools />
          <AppShell>{children}</AppShell>
        </CareerAIProvider>
      </body>
    </html>
  );
}
