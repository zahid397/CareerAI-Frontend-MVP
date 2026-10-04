export interface RoadmapTask {
  id: string;
  title: string;
  detail: string;
  skillId: string;
}
export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  hours: number;
  skills: string[];
  tasks: RoadmapTask[];
  resource: { label: string; url: string };
}
export interface Roadmap {
  careerSlug: string;
  phases: RoadmapPhase[];
}
