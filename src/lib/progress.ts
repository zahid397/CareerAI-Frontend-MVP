import type { AppState } from "@/types/user";
import { getCareer } from "@/data/careers";
import { getRoadmap } from "@/data/roadmaps";
export function roadmapProgress(state: AppState, slug = state.selectedCareer) {
  const total =
    getRoadmap(slug)?.phases.reduce((n, p) => n + p.tasks.length, 0) ?? 0;
  return total
    ? Math.round(((state.completedTasks[slug]?.length ?? 0) / total) * 100)
    : 0;
}
export function skillLevel(
  state: AppState,
  skillId: string,
  slug = state.selectedCareer,
) {
  const initial =
    state.profile.skillLevels[skillId] ??
    (state.profile.skills.includes(skillId) ? 40 : 0);
  const count =
    getRoadmap(slug)
      ?.phases.flatMap((p) => p.tasks)
      .filter(
        (t) =>
          t.skillId === skillId && state.completedTasks[slug]?.includes(t.id),
      ).length ?? 0;
  return Math.min(100, initial + count * 5);
}
export function cvReadiness(state: AppState) {
  const c = state.cv;
  return Math.min(
    100,
    (c.name.trim() ? 10 : 0) +
      (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email) ? 10 : 0) +
      (c.phone.trim() ? 5 : 0) +
      (c.location.trim() ? 5 : 0) +
      (c.summary.trim().length >= 60 ? 15 : 0) +
      (c.education.some((e) => e.title.trim() && e.organization.trim())
        ? 15
        : 0) +
      (c.experience.some((e) => e.title.trim() && e.description.trim())
        ? 10
        : 0) +
      (c.projects.some(
        (p) => p.title.trim() && p.description.trim().length >= 30,
      )
        ? 15
        : 0) +
      (c.skills.split(",").filter((s) => s.trim()).length >= 3 ? 10 : 0) +
      (c.achievements.trim() ? 5 : 0),
  );
}
export function readiness(state: AppState) {
  const career = getCareer(state.selectedCareer);
  const skill = career
    ? Math.round(
        (career.skills.reduce(
          (sum, s) => sum + Math.min(1, skillLevel(state, s.id) / s.target),
          0,
        ) /
          career.skills.length) *
          100,
      )
    : 0;
  const cv = cvReadiness(state);
  const project = state.cv.projects.filter(
    (p) => p.title.trim() && p.description.trim().length >= 30,
  );
  const portfolio = Math.min(
    100,
    project.length * 35 +
      (project.some((p) => p.organization.trim()) ? 15 : 0) +
      (state.cv.website.trim() ? 15 : 0),
  );
  const answers =
    state.interview?.careerSlug === state.selectedCareer
      ? state.interview.answers
      : [];
  const interview = answers.length
    ? Math.round(
        answers.reduce(
          (sum, a) =>
            sum +
            (a.feedback.technical +
              a.feedback.clarity +
              a.feedback.completeness) /
              3,
          0,
        ) / 5,
      )
    : 0;
  const overall = Math.round(
    skill * 0.4 + cv * 0.25 + portfolio * 0.15 + interview * 0.2,
  );
  return { skill, cv, portfolio, interview, overall };
}
export const learningMinutes = (time: string) =>
  time === "30 min/day"
    ? 30
    : time === "2 hours/day"
      ? 120
      : time === "3+ hours/day"
        ? 180
        : 60;
