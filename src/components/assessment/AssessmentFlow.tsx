"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Compass, LockKeyhole } from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { recommendCareers } from "@/lib/careerEngine";
import {
  Button,
  ProgressBar,
  EmptyState,
  Reveal,
} from "@/components/ui/primitives";
import { AssessmentQuestion } from "./AssessmentQuestion";
export function AssessmentFlow() {
  const { state, answerQuestion, selectCareer } = useCareerAI();
  const router = useRouter();
  const [index, setIndex] = useState(() => {
      const i = assessmentQuestions.findIndex((q) => !state.assessment[q.id]);
      return i === -1 ? 0 : i;
    }),
    [analyzing, setAnalyzing] = useState(false),
    [error, setError] = useState("");
  useEffect(() => {
    if (!analyzing) return;
    const timer = setTimeout(() => router.push("/results"), 1100);
    return () => clearTimeout(timer);
  }, [analyzing, router]);
  if (!state.profile.onboarded)
    return (
      <div className="assessment-layout">
        <EmptyState
          title="Let’s start with your profile"
          description="Share your interests and current skills so the assessment can connect with your goals."
          action="Set up my profile"
          href="/onboarding"
        />
      </div>
    );
  if (analyzing)
    return (
      <div className="assessment-layout">
        <div className="empty-state panel">
          <div className="empty-icon">
            <Sparkles size={32} />
          </div>
          <h2>Connecting the dots…</h2>
          <p>
            Comparing your interests, skills, and responses across eight career
            paths.
          </p>
          <ProgressBar value={100} label="Career analysis" />
          <p className="text-small">
            Transparent rules. A thoughtful starting point.
          </p>
        </div>
      </div>
    );
  const question = assessmentQuestions[index],
    answered = Object.keys(state.assessment).length;
  const next = () => {
    if (!state.assessment[question.id]) {
      setError("Choose the answer that feels closest to you.");
      return;
    }
    setError("");
    if (index === assessmentQuestions.length - 1) {
      const result = recommendCareers(state.profile, state.assessment);
      selectCareer(result[0].career.slug);
      setAnalyzing(true);
    } else setIndex((i) => i + 1);
  };
  return (
    <div className="assessment-layout">
      <div className="assessment-heading">
        <span className="career-icon">
          <Compass size={23} />
        </span>
        <span>
          <h2>Your career assessment</h2>
          <p>Take your time. Follow your curiosity.</p>
        </span>
      </div>
      <div className="panel flow-card">
        <div className="flow-step-count">
          <span>
            Question {index + 1} of {assessmentQuestions.length}
          </span>
          <span>{answered} answered</span>
        </div>
        <ProgressBar
          value={(answered / assessmentQuestions.length) * 100}
          label="Assessment answers completed"
        />
        <Reveal key={question.id}>
          <div className="eyebrow">DISCOVER YOUR DIRECTION</div>
          <h1>{question.question}</h1>
          <p className="muted">{question.hint}</p>
          <AssessmentQuestion
            question={question}
            answer={state.assessment[question.id]}
            onAnswer={(id) => {
              answerQuestion(question.id, id);
              setError("");
            }}
          />
        </Reveal>
        {error && (
          <p role="alert" className="field-error">
            {error}
          </p>
        )}
        <div className="flow-controls">
          <Button
            variant="ghost"
            onClick={() => {
              setIndex((i) => i - 1);
              setError("");
            }}
            disabled={index === 0}
          >
            Back
          </Button>
          <Button onClick={next}>
            {index === assessmentQuestions.length - 1
              ? "Discover my career paths"
              : "Next question"}
            {index === assessmentQuestions.length - 1 && <Sparkles size={16} />}
          </Button>
        </div>
      </div>
      <p className="assessment-tip">
        <LockKeyhole size={16} />
        Your answers stay in this browser. Profile matches are suggestions to
        explore, not fixed judgments about your future.
      </p>
    </div>
  );
}
