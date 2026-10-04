"use client";
import type { InterviewFeedback } from "@/types/user";
import type { InterviewQuestion } from "@/data/interviewQuestions";
import { ProgressBar, CheckList, Badge } from "@/components/ui/primitives";
export function InterviewFeedbackCard({
  feedback,
  question,
}: {
  feedback: InterviewFeedback;
  question: InterviewQuestion;
}) {
  return (
    <div className="feedback-panel">
      <Badge tone="violet">Simulated practice feedback</Badge>
      <div className="feedback-grid">
        {[
          { label: "Technical understanding", value: feedback.technical },
          { label: "Clarity", value: feedback.clarity },
          { label: "Completeness", value: feedback.completeness },
        ].map(({ label, value }) => (
          <div className="feedback-score" key={label}>
            <span>
              {label}
              <strong>{value}%</strong>
            </span>
            <ProgressBar value={value} label={label} />
          </div>
        ))}
      </div>
      <div className="feedback-content">
        <div>
          <h3>What worked</h3>
          <CheckList
            items={
              feedback.positives.length
                ? feedback.positives
                : [
                    "You made a start. Use this feedback to develop your explanation.",
                  ]
            }
          />
        </div>
        <div>
          <h3>What to develop</h3>
          <ul>
            {(feedback.improvements.length
              ? feedback.improvements
              : [
                  "Practice a follow-up: explain a tradeoff and how you would verify your reasoning.",
                ]
            ).map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
      <details className="sample-answer">
        <summary>Explore a sample answer</summary>
        <p>{question.sample}</p>
        <p>
          <strong>Try a follow-up:</strong> {question.followUp}
        </p>
      </details>
    </div>
  );
}
