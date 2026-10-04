"use client";
import type { AssessmentQuestion as Question } from "@/types/assessment";
export function AssessmentQuestion({
  question,
  answer,
  onAnswer,
}: {
  question: Question;
  answer?: string;
  onAnswer: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="sr-only">{question.question}</legend>
      <div className="question-options">
        {question.options.map((option, i) => (
          <button
            key={option.id}
            className={`question-option ${answer === option.id ? "selected" : ""}`}
            aria-pressed={answer === option.id}
            onClick={() => onAnswer(option.id)}
          >
            <span className="option-letter">{String.fromCharCode(65 + i)}</span>
            <span>
              <strong>{option.label}</strong>
              <small>{option.description}</small>
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}
