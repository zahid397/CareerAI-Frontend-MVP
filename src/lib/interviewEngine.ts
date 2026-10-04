import type { InterviewQuestion } from "@/data/interviewQuestions";
import type { InterviewFeedback } from "@/types/user";
export function evaluateAnswer(
  question: InterviewQuestion,
  answer: string,
  difficulty: string,
): InterviewFeedback {
  const text = answer.toLowerCase().trim(),
    words = text.split(/\s+/).filter(Boolean).length;
  const concepts = question.concepts.filter((group) =>
    group.some((term) => text.includes(term)),
  ).length;
  const target = difficulty === "Intermediate" ? 90 : 45;
  const technical = Math.round((concepts / question.concepts.length) * 100);
  const clarity = Math.min(
    100,
    Math.round(
      Math.min(1, words / 25) * 70 +
        (/[.!?]/.test(text) ? 15 : 0) +
        (/for example|for instance|because|first|then|so that/.test(text)
          ? 15
          : 0),
    ),
  );
  const completeness = Math.min(
    100,
    Math.round(
      Math.min(1, words / target) * 50 +
        (concepts / question.concepts.length) * 50,
    ),
  );
  return {
    technical,
    clarity,
    completeness,
    positives: [
      ...(concepts >= 2
        ? ["You covered several core concepts from this question."]
        : []),
      ...(words >= 25
        ? ["You gave enough detail to begin a useful discussion."]
        : []),
      ...(/example|for instance/.test(text)
        ? ["An example helps make your explanation concrete."]
        : []),
    ],
    improvements: [
      ...(concepts < question.concepts.length
        ? [
            `Consider discussing: ${question.concepts
              .filter((group) => !group.some((term) => text.includes(term)))
              .map((group) => group[0])
              .join(", ")}.`,
          ]
        : []),
      ...(words < target
        ? ["Develop your explanation with a concrete example and one tradeoff."]
        : []),
      ...(!/[.!?]/.test(text)
        ? ["Use short sentences to make the answer easier to follow."]
        : []),
    ],
  };
}
