import type { CVData } from "@/types/user";
export const cvTemplates = [
  {
    id: "classic" as const,
    name: "Classic",
    description: "A focused, single-column CV.",
  },
  {
    id: "modern" as const,
    name: "Modern",
    description: "An accent header with the same clear structure.",
  },
];
export const emptyCV: CVData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  website: "",
  summary: "",
  education: [],
  experience: [],
  projects: [],
  skills: "",
  achievements: "",
  template: "classic",
};
