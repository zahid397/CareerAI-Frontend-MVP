import { emptyCV } from "@/data/cvTemplates";
import { careers } from "@/data/careers";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { skills } from "@/data/skills";
import { getRoadmap } from "@/data/roadmaps";
import type { AppState, CVItem, InterviewFeedback } from "@/types/user";
export const STORAGE_KEY = "careerai:state:v1";
export function initialState(): AppState {
  return {
    profile: {
      name: "",
      education: "",
      status: "",
      location: "",
      interests: [],
      skills: [],
      skillLevels: {},
      workStyle: "",
      learningTime: "1 hour/day",
      onboarded: false,
    },
    assessment: {},
    selectedCareer: "",
    completedTasks: {},
    cv: { ...emptyCV, education: [], experience: [], projects: [] },
    interview: null,
    theme: "dark",
    savedJobs: [],
    demo: false,
  };
}
const record = (value: unknown): Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
const str = (v: unknown) => (typeof v === "string" ? v.slice(0, 20000) : "");
const strings = (v: unknown) =>
  Array.isArray(v)
    ? v.filter((s): s is string => typeof s === "string").slice(0, 200)
    : [];
const percent = (v: unknown) =>
  typeof v === "number" && Number.isFinite(v)
    ? Math.max(0, Math.min(100, Math.round(v)))
    : 0;
const cvItems = (v: unknown): CVItem[] =>
  Array.isArray(v)
    ? v.slice(0, 20).map((item) => {
        const r = record(item);
        return {
          id: str(r.id),
          title: str(r.title),
          organization: str(r.organization),
          period: str(r.period),
          description: str(r.description),
        };
      })
    : [];
export function sanitizeState(value: unknown): AppState {
  const r = record(value),
    p = record(r.profile),
    c = record(r.cv),
    defaults = initialState();
  const levels = record(p.skillLevels),
    answers = record(r.assessment),
    completed = record(r.completedTasks);
  const profile = {
    ...defaults.profile,
    name: str(p.name),
    education: str(p.education),
    status: str(p.status),
    location: str(p.location),
    interests: strings(p.interests),
    skills: strings(p.skills).filter((id) => skills.some((s) => s.id === id)),
    skillLevels: Object.fromEntries(
      skills
        .filter((s) => s.id in levels)
        .map((s) => [s.id, percent(levels[s.id])]),
    ),
    workStyle: str(p.workStyle),
    learningTime: str(p.learningTime) || "1 hour/day",
    onboarded: p.onboarded === true,
  };
  const assessment = Object.fromEntries(
    assessmentQuestions
      .filter((q) => q.options.some((o) => o.id === answers[q.id]))
      .map((q) => [q.id, str(answers[q.id])]),
  );
  const completedTasks = Object.fromEntries(
    careers.map((career) => {
      const valid = new Set(
        getRoadmap(career.slug)?.phases.flatMap((phase) =>
          phase.tasks.map((t) => t.id),
        ) ?? [],
      );
      return [
        career.slug,
        [
          ...new Set(
            strings(completed[career.slug]).filter((id) => valid.has(id)),
          ),
        ],
      ];
    }),
  );
  let interview: AppState["interview"] = null;
  const session = record(r.interview);
  if (
    careers.some((career) => career.slug === session.careerSlug) &&
    Array.isArray(session.answers)
  ) {
    interview = {
      careerSlug: str(session.careerSlug),
      role: str(session.role),
      difficulty: str(session.difficulty),
      kind: str(session.kind) || "Technical",
      finished: session.finished === true,
      answers: session.answers.slice(0, 5).map((value) => {
        const a = record(value),
          f = record(a.feedback);
        const feedback: InterviewFeedback = {
          technical: percent(f.technical),
          clarity: percent(f.clarity),
          completeness: percent(f.completeness),
          positives: strings(f.positives),
          improvements: strings(f.improvements),
        };
        return {
          questionId: str(a.questionId),
          answer: str(a.answer),
          feedback,
        };
      }),
    };
  }
  return {
    profile,
    assessment,
    selectedCareer: careers.some((career) => career.slug === r.selectedCareer)
      ? str(r.selectedCareer)
      : "",
    completedTasks,
    cv: {
      name: str(c.name),
      email: str(c.email),
      phone: str(c.phone),
      location: str(c.location),
      website: str(c.website),
      summary: str(c.summary),
      education: cvItems(c.education),
      experience: cvItems(c.experience),
      projects: cvItems(c.projects),
      skills: str(c.skills),
      achievements: str(c.achievements),
      template: c.template === "modern" ? "modern" : "classic",
    },
    interview,
    theme: r.theme === "light" ? "light" : "dark",
    savedJobs: strings(r.savedJobs),
    demo: r.demo === true,
  };
}
export function readStorage(): { state: AppState; warning: string } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return {
      state: raw ? sanitizeState(JSON.parse(raw)) : initialState(),
      warning: "",
    };
  } catch {
    return {
      state: initialState(),
      warning:
        "Saved data could not be read. You can continue with a fresh profile.",
    };
  }
}
export function writeStorage(state: AppState): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
