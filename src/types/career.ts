export type Axis =
  | "code"
  | "data"
  | "design"
  | "business"
  | "security"
  | "cloud";
export interface CareerSkill {
  id: string;
  target: number;
  priority: "High" | "Medium" | "Low";
}
export interface Career {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  overview: string;
  responsibilities: string[];
  interests: string[];
  axes: Axis[];
  tools: string[];
  workStyles: string[];
  skills: CareerSkill[];
  levels: { beginner: string[]; intermediate: string[]; advanced: string[] };
  projects: string[];
  interviewTopics: string[];
}
export interface CareerMatch {
  career: Career;
  match: number;
  reasons: string[];
  strengths: string[];
  gaps: string[];
}
