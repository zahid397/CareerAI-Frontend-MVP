import type { Axis } from "./career";
export interface AssessmentOption {
  id: string;
  label: string;
  description: string;
  scores: Partial<Record<Axis, number>>;
}
export interface AssessmentQuestion {
  id: string;
  question: string;
  hint: string;
  options: AssessmentOption[];
}
export type AssessmentAnswers = Record<string, string>;
