"use client";
import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { roadmapProgress } from "@/lib/progress";
interface BrowserTool {
  name: string;
  description: string;
  inputSchema: object;
  annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
  execute: (input: unknown) => unknown;
}
type ToolDocument = Document & {
  modelContext?: {
    registerTool: (
      tool: BrowserTool,
      options: { signal: AbortSignal },
    ) => void | Promise<void>;
  };
};
// Optional, feature-detected browser standard. Never contacts a server.
export function AgentTools() {
  const api = useCareerAI(),
    latest = useRef(api);
  latest.current = api;
  useEffect(() => {
    const registry = (document as ToolDocument).modelContext;
    if (!registry?.registerTool) return;
    const lifecycle = new AbortController();
    const tools: BrowserTool[] = [
      {
        name: "read_career_workspace",
        description:
          "Read the selected career and roadmap progress from this local workspace.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        annotations: { readOnlyHint: true, untrustedContentHint: false },
        execute: () => ({
          career: latest.current.state.selectedCareer || null,
          roadmapProgress: roadmapProgress(latest.current.state),
          assessmentAnswers: Object.keys(latest.current.state.assessment)
            .length,
        }),
      },
      {
        name: "select_career_path",
        description:
          "Choose a valid career path, updating the same skill gap, roadmap, and dashboard as the visible career selection button.",
        inputSchema: {
          type: "object",
          properties: { slug: { type: "string" } },
          required: ["slug"],
          additionalProperties: false,
        },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute: (input) => {
          const slug =
            input && typeof input === "object" && "slug" in input
              ? (input as { slug: unknown }).slug
              : null;
          if (typeof slug !== "string" || !getCareer(slug))
            throw new Error("Choose a valid career slug.");
          flushSync(() => latest.current.selectCareer(slug));
          return {
            career: latest.current.state.selectedCareer,
            roadmapProgress: roadmapProgress(latest.current.state),
          };
        },
      },
    ];
    for (const tool of tools) {
      try {
        void Promise.resolve(
          registry.registerTool(tool, { signal: lifecycle.signal }),
        ).catch(() => undefined);
      } catch {
        /* Unsupported implementations leave normal UI intact. */
      }
    }
    return () => lifecycle.abort();
  }, []);
  return null;
}
