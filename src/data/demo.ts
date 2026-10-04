import { initialState } from "@/lib/storage";
import { getRoadmap } from "@/data/roadmaps";
import type { AppState } from "@/types/user";
export function createDemoState(theme: AppState["theme"]): AppState {
  const state = initialState();
  state.theme = theme;
  state.demo = true;
  state.profile = {
    name: "Zahid Hasan",
    education: "Bachelor's",
    status: "Student",
    location: "Dhaka",
    interests: ["Technology", "AI", "Business"],
    skills: ["javascript", "react", "python", "sql"],
    skillLevels: { javascript: 70, react: 60, python: 45, sql: 40 },
    workStyle: "Remote",
    learningTime: "1 hour/day",
    onboarded: true,
  };
  state.assessment = {
    work: "build",
    problems: "logic",
    math: "okay",
    programming: "yes",
    focus: "app",
    technology: "experiment",
    environment: "deep",
    activity: "website",
    reward: "reliable",
    learn: "frontend",
  };
  state.selectedCareer = "software-engineering";
  state.completedTasks[state.selectedCareer] =
    getRoadmap(state.selectedCareer)
      ?.phases.slice(0, 2)
      .flatMap((p) => p.tasks.map((t) => t.id)) ?? [];
  state.cv = {
    name: "Zahid Hasan",
    email: "zahid@example.com",
    phone: "",
    location: "Dhaka, Bangladesh",
    website: "",
    summary:
      "Computer science student building accessible React applications. Comfortable with JavaScript, Python, and SQL, and currently developing testing and collaboration skills through practical projects.",
    education: [
      {
        id: "demo-education",
        title: "BSc in Computer Science (in progress)",
        organization: "Sample University · demo",
        period: "2024–present",
        description:
          "Focus: web development, programming fundamentals, and database concepts.",
      },
    ],
    experience: [],
    projects: [
      {
        id: "demo-project",
        title: "Campus Event Planner",
        organization: "Personal learning project",
        period: "2026",
        description:
          "Built a responsive React interface for browsing student events, with search, filters, and saved events. Used local storage to preserve selections and tested keyboard navigation.",
      },
    ],
    skills: "JavaScript, React, Python, SQL",
    achievements: "",
    template: "modern",
  };
  return state;
}
