"use client";
import {
  Layers3,
  FileText,
  BriefcaseBusiness,
  MessagesSquare,
} from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { readiness } from "@/lib/progress";
import {
  PageHeader,
  EmptyState,
  ButtonLink,
  ProgressBar,
  PrototypeNote,
} from "@/components/ui/primitives";
import { MatchRing } from "@/components/career/CareerCards";
export function ReadinessPage() {
  const { state } = useCareerAI();
  const career = getCareer(state.selectedCareer);
  if (!career)
    return (
      <EmptyState
        title="Choose a career to measure your progress"
        description="Your target path helps connect your skills, CV, portfolio, and practice into a useful progress guide."
        action="Choose a career"
        href="/careers"
      />
    );
  const r = readiness(state);
  const items = [
    {
      title: "Skill Readiness",
      value: r.skill,
      icon: Layers3,
      desc: "Average coverage of target skill levels using your self-ratings and roadmap practice credit.",
      href: "/skill-gap",
      action: "Review skill levels",
    },
    {
      title: "CV Readiness",
      value: r.cv,
      icon: FileText,
      desc: "Completeness of contact details, summary, education, projects, skills, and achievements.",
      href: "/cv-builder",
      action: "Improve my CV",
    },
    {
      title: "Portfolio Readiness",
      value: r.portfolio,
      icon: BriefcaseBusiness,
      desc: "Based on described projects, project context, and an optional portfolio link in your CV.",
      href: "/cv-builder",
      action: "Add a portfolio project",
    },
    {
      title: "Interview Readiness",
      value: r.interview,
      icon: MessagesSquare,
      desc: "Combines five-question session coverage and simulated feedback for this career. A new session starts this indicator over.",
      href: "/interview",
      action: "Practice my interview",
    },
  ];
  return (
    <>
      <PageHeader
        eyebrow="PROGRESS YOU CAN ACT ON"
        title="Your job readiness"
        description={`${career.name} · Bring your preparation into focus.`}
      >
        <ButtonLink href="/jobs" variant="secondary">
          Explore demo opportunities
        </ButtonLink>
      </PageHeader>
      <div className="readiness-grid">
        <section className="panel overall-readiness">
          <h2>Overall Readiness</h2>
          <MatchRing value={r.overall} label="Prototype score" large />
          <p>This is a prototype score based on your current progress.</p>
          <p style={{ marginTop: 14 }}>
            It is a learning guide, not an objective hiring prediction.
          </p>
          <ButtonLink href="/roadmap" className="mt-6">
            Take my next step
          </ButtonLink>
        </section>
        <div className="readiness-items">
          {items.map(({ title, value, icon: Icon, desc, href, action }) => (
            <section className="readiness-item" key={title}>
              <span className="career-icon">
                <Icon size={22} />
              </span>
              <div>
                <h3>
                  <span>{title}</span>
                  <span className="accent">{value}%</span>
                </h3>
                <ProgressBar value={value} label={title} />
                <p>{desc}</p>
                <ButtonLink href={href} variant="ghost">
                  {action}
                </ButtonLink>
              </div>
            </section>
          ))}
        </div>
      </div>
      <PrototypeNote>
        Overall score weights: skills 40%, CV 25%, portfolio 15%, interview
        practice 20%. Ratings are heuristic and self-reported.
      </PrototypeNote>
    </>
  );
}
