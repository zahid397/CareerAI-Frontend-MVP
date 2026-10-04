"use client";
import Link from "next/link";
import {
  Compass,
  Route,
  FileText,
  MessagesSquare,
  Sparkles,
  ScanLine,
} from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { getRoadmap } from "@/data/roadmaps";
import { skillName } from "@/data/skills";
import { recommendCareers, assessmentComplete } from "@/lib/careerEngine";
import { roadmapProgress, readiness, skillLevel } from "@/lib/progress";
import {
  PageHeader,
  EmptyState,
  Button,
  ButtonLink,
  Badge,
  CareerIcon,
  Reveal,
  PrototypeNote,
} from "@/components/ui/primitives";
import { StatCard } from "./StatCard";
import { SkillBar } from "@/components/skill-gap/SkillBar";
import { RoadmapTimeline } from "@/components/roadmap/RoadmapTimeline";
export function DashboardPage() {
  const { state, loadDemo } = useCareerAI();
  const career = getCareer(state.selectedCareer);
  if (!career)
    return (
      <>
        <PageHeader
          title={
            state.profile.name
              ? `Welcome, ${state.profile.name.split(" ")[0]} 👋`
              : "Your next chapter starts here"
          }
          description="A little clarity can go a long way. Let’s turn your interests into a practical career plan."
        />
        <EmptyState
          title="Build a path that feels like yours"
          description="Start with a short assessment or explore a complete sample workspace."
          action={
            state.profile.onboarded
              ? "Continue assessment"
              : "Start career assessment"
          }
          href={state.profile.onboarded ? "/assessment" : "/onboarding"}
        >
          <Button variant="ghost" onClick={loadDemo}>
            Try Zahid’s demo
          </Button>
        </EmptyState>
      </>
    );
  const ready = readiness(state),
    roadmap = getRoadmap(career.slug)!,
    completed = state.completedTasks[career.slug] ?? [],
    nextPhase = roadmap.phases.find((p) =>
      p.tasks.some((t) => !completed.includes(t.id)),
    ),
    nextTask = nextPhase?.tasks.find((t) => !completed.includes(t.id));
  const match =
      recommendCareers(state.profile, state.assessment).find(
        (m) => m.career.slug === career.slug,
      )?.match ?? 0,
    hasAssessment = assessmentComplete(state.assessment);
  const hour = Number(
    new Intl.DateTimeFormat("en", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "Asia/Dhaka",
    }).format(new Date()),
  );
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  return (
    <>
      <PageHeader
        eyebrow="YOUR CAREER, IN MOTION"
        title={`${greeting}, ${state.profile.name.split(" ")[0] || "friend"} 👋`}
        description="You do not have to figure it all out today. Just take your next step."
      >
        <ButtonLink href="/careers" variant="secondary">
          Explore careers
        </ButtonLink>
        {state.demo && <Badge tone="violet">Demo profile</Badge>}
      </PageHeader>
      <Reveal>
        <div
          className="panel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 22,
          }}
        >
          <div className="inline-actions">
            <span className={`career-icon icon-${career.color}`}>
              <CareerIcon name={career.icon} />
            </span>
            <span>
              <small className="muted">YOUR CAREER PATH</small>
              <h2 style={{ marginTop: 4 }}>{career.name}</h2>
            </span>
          </div>
          <ButtonLink href="/results" variant="ghost">
            View career profile
          </ButtonLink>
        </div>
      </Reveal>
      <div className="stat-grid">
        {[
          {
            label: "Profile Match",
            value: hasAssessment ? match : 0,
            icon: Compass,
            note: hasAssessment
              ? "Based on your responses"
              : "Complete your assessment",
          },
          {
            label: "Roadmap Progress",
            value: roadmapProgress(state),
            icon: Route,
            note: `${completed.length} of 24 learning tasks`,
            tone: "mint",
          },
          {
            label: "CV Readiness",
            value: ready.cv,
            icon: FileText,
            note: "Your CV completeness",
            tone: "cyan",
          },
          {
            label: "Interview Readiness",
            value: ready.interview,
            icon: MessagesSquare,
            note: "Practice coverage & feedback",
            tone: "violet",
          },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <StatCard {...s} />
          </Reveal>
        ))}
      </div>
      <div className="next-step-card">
        <span className="next-step-icon">
          <Sparkles size={25} />
        </span>
        <div className="next-step-copy">
          <div className="eyebrow">YOUR NEXT STEP</div>
          <h2>
            {nextTask ? nextTask.title : "Your learning plan is complete"}
          </h2>
          <p>
            {nextPhase
              ? `${nextPhase.title} · Pick up where you left off.`
              : "Review your CV and bring your projects into your interview answers."}
          </p>
        </div>
        <ButtonLink href={nextTask ? "/roadmap" : "/interview"}>
          {nextTask ? "Continue Roadmap" : "Practice Interview"}
        </ButtonLink>
      </div>
      <div className="dashboard-main-grid">
        <section className="panel">
          <div className="section-title">
            <div>
              <h2>Skill progress</h2>
              <p>Current levels for your target path</p>
            </div>
            <ButtonLink href="/skill-gap" variant="ghost">
              View all
            </ButtonLink>
          </div>
          <div className="skill-list">
            {career.skills.slice(0, 6).map((s) => (
              <SkillBar
                key={s.id}
                name={skillName(s.id)}
                value={skillLevel(state, s.id)}
                target={s.target}
              />
            ))}
          </div>
        </section>
        <section className="panel">
          <div className="section-title">
            <div>
              <h2>Career roadmap</h2>
              <p>A clear path, at your pace</p>
            </div>
            <Badge tone="violet">{roadmapProgress(state)}%</Badge>
          </div>
          <RoadmapTimeline
            phases={roadmap.phases.slice(0, 5)}
            completed={completed}
          />
          <ButtonLink href="/roadmap" variant="ghost" className="mt-5">
            See all 8 phases
          </ButtonLink>
        </section>
      </div>
      <div style={{ marginTop: 30 }}>
        <div className="section-title">
          <h2>Keep your momentum</h2>
          <span className="muted text-small">Quick actions</span>
        </div>
        <div className="quick-actions">
          {[
            {
              href: "/assessment",
              title: "Continue assessment",
              icon: ScanLine,
            },
            { href: "/cv-builder", title: "Improve my CV", icon: FileText },
            {
              href: "/interview",
              title: "Practice interview",
              icon: MessagesSquare,
            },
            { href: "/careers", title: "Explore careers", icon: Compass },
          ].map(({ href, title, icon: Icon }) => (
            <Link href={href} className="quick-action" key={href}>
              <Icon size={20} />
              {title}
            </Link>
          ))}
        </div>
      </div>
      <PrototypeNote>
        Readiness and match scores are prototype indicators from your profile
        and progress. They do not predict hiring outcomes.
      </PrototypeNote>
    </>
  );
}
