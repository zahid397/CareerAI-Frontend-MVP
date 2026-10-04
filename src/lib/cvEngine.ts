import type { CVData } from "@/types/user";
import type { Career } from "@/types/career";
export function suggestSummary(cv: CVData, career?: Career): string {
  const skillList = cv.skills
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);
  const education = cv.education.find((e) => e.title.trim())?.title;
  const project = cv.projects.find((p) => p.title.trim())?.title;
  const sentences = [
    `${education ? `${education} learner` : `Aspiring ${career?.shortName ?? "early-career professional"}`} developing practical skills${skillList.length ? ` in ${skillList.join(", ")}` : " through focused learning"}.`,
    project
      ? `Current work includes ${project}, with an emphasis on clear decisions and a useful user experience.`
      : "Seeking opportunities to apply learning through practical projects and team collaboration.",
  ];
  if (cv.summary.trim().length > 35)
    sentences.push(
      `Focus: ${cv.summary
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 160)
        .replace(/[.!?]+$/, "")}.`,
    );
  return sentences.join(" ");
}
export function cvAsText(cv: CVData): string {
  return [
    cv.name,
    [cv.email, cv.phone, cv.location, cv.website].filter(Boolean).join(" | "),
    cv.summary,
    ...(["education", "experience", "projects"] as const).flatMap((section) =>
      cv[section].length
        ? [
            section.toUpperCase(),
            ...cv[section].map(
              (item) =>
                `${item.title} | ${item.organization} | ${item.period}\n${item.description}`,
            ),
          ]
        : [],
    ),
    cv.skills ? `SKILLS\n${cv.skills}` : "",
    cv.achievements ? `ACHIEVEMENTS\n${cv.achievements}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
}
