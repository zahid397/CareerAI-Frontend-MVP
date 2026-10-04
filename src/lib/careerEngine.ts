import { careers } from "@/data/careers";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import type { CareerMatch } from "@/types/career";
import type { UserProfile } from "@/types/user";
import type { AssessmentAnswers } from "@/types/assessment";
import { skillName } from "@/data/skills";
export function recommendCareers(
  profile: UserProfile,
  answers: AssessmentAnswers,
): CareerMatch[] {
  return careers
    .map((career) => {
      const interestHits = career.interests.filter((i) =>
        profile.interests.includes(i),
      );
      const owned = career.skills.filter((s) => profile.skills.includes(s.id));
      const answerFit =
        assessmentQuestions.reduce((sum, q) => {
          const option = q.options.find((o) => o.id === answers[q.id]);
          return (
            sum +
            Math.max(0, ...career.axes.map((axis) => option?.scores[axis] ?? 0))
          );
        }, 0) /
        (assessmentQuestions.length * 5);
      const interestFit =
        interestHits.length / Math.max(1, career.interests.length);
      const skillFit = owned.length / Math.max(1, career.skills.length);
      const educationFit = ["Diploma", "Bachelor's", "Master's"].includes(
        profile.education,
      )
        ? 3
        : profile.education
          ? 2
          : 0;
      const workFit = career.workStyles.includes(profile.workStyle)
        ? 3
        : profile.workStyle
          ? 1
          : 0;
      const match = Math.round(
        Math.min(
          96,
          30 +
            24 * interestFit +
            18 * skillFit +
            22 * answerFit +
            educationFit +
            workFit,
        ),
      );
      const reasons = [
        interestHits.length
          ? `Your interest in ${interestHits.join(" and ")} connects with this path.`
          : "This path offers a different direction worth exploring.",
        owned.length
          ? `You already bring ${owned
              .slice(0, 3)
              .map((s) => skillName(s.id))
              .join(", ")}.`
          : "You can start with foundational skills and small projects.",
        answerFit > 0.5
          ? "Your responses show interest in the kinds of tasks this career involves."
          : "Explore a small project to see whether the daily work suits you.",
        career.workStyles.includes(profile.workStyle)
          ? `Your preference for ${profile.workStyle.toLowerCase()} work aligns with common ways teams collaborate.`
          : "Compare the work environment with your own preferences.",
      ];
      return {
        career,
        match,
        reasons,
        strengths: owned.map((s) => skillName(s.id)),
        gaps: career.skills
          .filter((s) => !profile.skills.includes(s.id))
          .slice(0, 5)
          .map((s) => skillName(s.id)),
      };
    })
    .sort((a, b) => b.match - a.match);
}
export const assessmentComplete = (answers: AssessmentAnswers) =>
  assessmentQuestions.every((q) =>
    q.options.some((o) => o.id === answers[q.id]),
  );
