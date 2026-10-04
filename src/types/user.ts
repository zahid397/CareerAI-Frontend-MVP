import type { AssessmentAnswers } from "./assessment";
export interface UserProfile {
  name: string;
  education: string;
  status: string;
  location: string;
  interests: string[];
  skills: string[];
  skillLevels: Record<string, number>;
  workStyle: string;
  learningTime: string;
  onboarded: boolean;
}
export interface CVItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}
export interface CVData {
  name: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
  education: CVItem[];
  experience: CVItem[];
  projects: CVItem[];
  skills: string;
  achievements: string;
  template: "classic" | "modern";
}
export interface InterviewFeedback {
  technical: number;
  clarity: number;
  completeness: number;
  positives: string[];
  improvements: string[];
}
export interface InterviewAnswer {
  questionId: string;
  answer: string;
  feedback: InterviewFeedback;
}
export interface InterviewSession {
  careerSlug: string;
  role: string;
  difficulty: string;
  kind: string;
  answers: InterviewAnswer[];
  finished: boolean;
}
export interface AppState {
  profile: UserProfile;
  assessment: AssessmentAnswers;
  selectedCareer: string;
  completedTasks: Record<string, string[]>;
  cv: CVData;
  interview: InterviewSession | null;
  theme: "dark" | "light";
  savedJobs: string[];
  demo: boolean;
}
