"use client";
import { useState } from "react";
import { MessagesSquare, Sparkles, Check, RotateCcw } from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { careers, getCareer } from "@/data/careers";
import { getInterviewQuestions } from "@/data/interviewQuestions";
import { evaluateAnswer } from "@/lib/interviewEngine";
import {
  PageHeader,
  Button,
  ButtonLink,
  ProgressBar,
  Badge,
  PrototypeNote,
} from "@/components/ui/primitives";
import { Modal } from "@/components/ui/Modal";
import { InterviewFeedbackCard } from "./InterviewQuestionCard";
const roles: Record<string, string[]> = {
  "software-engineering": [
    "Frontend Developer",
    "React Developer",
    "Web Development Intern",
  ],
  "data-analytics": ["Data Analyst", "Reporting Analyst"],
  "ai-machine-learning": ["Machine Learning Intern", "Junior ML Engineer"],
  cybersecurity: ["Security Analyst", "Security Operations Intern"],
  "cloud-devops": ["DevOps Associate", "Cloud Support Associate"],
  "ui-ux-design": ["Product Designer", "UX Research Intern"],
  "digital-marketing": [
    "Digital Marketing Associate",
    "Content Marketing Associate",
  ],
  "finance-business-analytics": ["Business Analyst", "Financial Analyst"],
};
export function InterviewPage() {
  const { state } = useCareerAI();
  return (
    <>
      <PageHeader
        eyebrow="FIND YOUR VOICE"
        title="Interview practice"
        description="Five focused questions. Space to think. Practical feedback to try again."
      />
      {state.interview ? (
        <InterviewSession
          key={`${state.interview.careerSlug}-${state.interview.role}-${state.interview.kind}`}
        />
      ) : (
        <InterviewSetup />
      )}
      <PrototypeNote>
        Frontend simulation: feedback checks answer length, keywords, and
        structure. It may miss correct phrasing and does not measure actual
        interview ability.
      </PrototypeNote>
    </>
  );
}
function InterviewSetup() {
  const { state, setInterview } = useCareerAI();
  const [slug, setSlug] = useState(state.selectedCareer || careers[0].slug),
    [role, setRole] = useState(roles[slug][0]),
    [difficulty, setDifficulty] = useState("Junior"),
    [kind, setKind] = useState("Technical");
  return (
    <div className="panel interview-setup">
      <span className="career-icon" style={{ marginBottom: 20 }}>
        <MessagesSquare size={25} />
      </span>
      <h2>A little practice goes a long way.</h2>
      <p>
        Choose a path and role. Answer in your own words, then use the feedback
        to make your explanation clearer.
      </p>
      <div className="form-grid">
        <label>
          Career
          <select
            aria-label="Career"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setRole(roles[e.target.value][0]);
            }}
          >
            {careers.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Role
          <select
            aria-label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles[slug].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label>
          Difficulty
          <select
            aria-label="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Junior</option>
            <option>Intermediate</option>
          </select>
        </label>
        <label>
          Session type
          <select
            aria-label="Session type"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          >
            <option>Technical</option>
            <option>Behavioral</option>
          </select>
        </label>
      </div>
      <div className="inline-actions" style={{ marginTop: 27 }}>
        <Button
          onClick={() =>
            setInterview({
              careerSlug: slug,
              role,
              difficulty,
              kind,
              answers: [],
              finished: false,
            })
          }
        >
          <Sparkles size={16} />
          Start practice session
        </Button>
        <span className="muted text-small">5 questions · no timer</span>
      </div>
    </div>
  );
}
function InterviewSession() {
  const { state, setInterview } = useCareerAI();
  const session = state.interview!;
  const questions = getInterviewQuestions(session.careerSlug, session.kind);
  const [index, setIndex] = useState(
      Math.min(session.answers.length, questions.length - 1),
    ),
    [answer, setAnswer] = useState(""),
    [restart, setRestart] = useState(false);
  const question = questions[index],
    saved = session.answers[index];
  const submit = () => {
    if (answer.trim().length < 20) return;
    const feedback = evaluateAnswer(question, answer, session.difficulty);
    setInterview({
      ...session,
      answers: [
        ...session.answers.slice(0, index),
        { questionId: question.id, answer: answer.trim(), feedback },
      ],
    });
  };
  const next = () => {
    if (index === questions.length - 1)
      setInterview({ ...session, finished: true });
    else {
      setIndex((i) => i + 1);
      setAnswer("");
    }
  };
  const averages = { technical: 0, clarity: 0, completeness: 0 };
  if (session.answers.length) {
    for (const key of ["technical", "clarity", "completeness"] as const)
      averages[key] = Math.round(
        session.answers.reduce((sum, a) => sum + a.feedback[key], 0) /
          session.answers.length,
      );
  }
  return (
    <>
      {session.finished ? (
        <div className="interview-summary">
          <section className="panel summary-hero">
            <span className="career-icon">
              <Check size={29} />
            </span>
            <Badge tone="mint">Session complete</Badge>
            <h2 style={{ marginTop: 18 }}>You showed up. That’s progress.</h2>
            <p>
              {session.role} · {session.difficulty} · {session.kind}
            </p>
            <div className="feedback-grid">
              {[
                { label: "Technical understanding", value: averages.technical },
                { label: "Clarity", value: averages.clarity },
                { label: "Completeness", value: averages.completeness },
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
            <p className="text-small">
              Review your answers, compare the sample explanations, and practice
              one improvement at a time.
            </p>
            <div
              className="inline-actions"
              style={{ justifyContent: "center", marginTop: 23 }}
            >
              <Button onClick={() => setRestart(true)}>
                <RotateCcw size={15} />
                Practice again
              </Button>
              <ButtonLink href="/readiness" variant="secondary">
                View my readiness
              </ButtonLink>
            </div>
          </section>
          {session.answers.map((a, i) => (
            <details className="panel summary-question" key={a.questionId}>
              <summary>
                {i + 1}. {questions[i].question}
              </summary>
              <p>{a.answer}</p>
              <InterviewFeedbackCard
                feedback={a.feedback}
                question={questions[i]}
              />
            </details>
          ))}
        </div>
      ) : (
        <div className="interview-session">
          <div
            className="inline-actions"
            style={{ justifyContent: "space-between", marginBottom: 18 }}
          >
            <span className="muted text-small">
              {session.role} · {session.difficulty} · {session.kind}
            </span>
            <Button variant="ghost" onClick={() => setRestart(true)}>
              Change session
            </Button>
          </div>
          {state.selectedCareer &&
            state.selectedCareer !== session.careerSlug && (
              <p className="prototype-note">
                This session is for {getCareer(session.careerSlug)?.name}. Start
                a new session to practice your selected career.
              </p>
            )}
          <div className="panel interview-question">
            <div className="flow-step-count">
              <span>
                Question {index + 1} of {questions.length}
              </span>
              <Badge>{session.answers.length} answered</Badge>
            </div>
            <ProgressBar
              value={(session.answers.length / questions.length) * 100}
              label="Interview session progress"
            />
            <h2>{question.question}</h2>
            <p>
              {session.difficulty === "Intermediate"
                ? `${question.hint} ${question.followUp}`
                : question.hint}
            </p>
            <label htmlFor="interview-answer">Your answer</label>
            <textarea
              id="interview-answer"
              style={{ marginTop: 8 }}
              value={saved?.answer ?? answer}
              readOnly={!!saved}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Start with the main idea, explain why, and give an example…"
            />
            <div className="interview-bottom">
              <span>
                {
                  (saved?.answer ?? answer).trim().split(/\s+/).filter(Boolean)
                    .length
                }{" "}
                words ·{" "}
                {session.difficulty === "Intermediate"
                  ? "Aim for 90+ words and a tradeoff"
                  : "Aim for 45+ words with an example"}
              </span>
              {saved ? (
                <Button onClick={next}>
                  {index === questions.length - 1
                    ? "See my session summary"
                    : "Next Question"}
                </Button>
              ) : (
                <Button onClick={submit} disabled={answer.trim().length < 20}>
                  Submit answer
                </Button>
              )}
            </div>
            {saved && (
              <InterviewFeedbackCard
                feedback={saved.feedback}
                question={question}
              />
            )}
          </div>
        </div>
      )}
      {restart && (
        <Modal
          title="Start a new practice session?"
          onClose={() => setRestart(false)}
        >
          <p>
            Your current session and its readiness contribution will be
            replaced. You can choose another career, role, or difficulty.
          </p>
          <div className="modal-actions">
            <Button variant="secondary" onClick={() => setRestart(false)}>
              Keep this session
            </Button>
            <Button
              onClick={() => {
                setInterview(null);
                setRestart(false);
              }}
            >
              Start a new session
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
