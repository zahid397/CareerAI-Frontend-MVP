"use client";
import type { Career } from "@/types/career";
import { getRoadmap } from "@/data/roadmaps";
import { skillName } from "@/data/skills";
import { useCareerAI } from "@/hooks/useCareerAI";
import {
  Button,
  ButtonLink,
  CareerIcon,
  CheckList,
  Badge,
} from "@/components/ui/primitives";
export function CareerDetails({ career }: { career: Career }) {
  const { state, selectCareer } = useCareerAI();
  const roadmap = getRoadmap(career.slug);
  return (
    <>
      <ButtonLink href="/careers" variant="ghost" className="mb-5">
        All career paths
      </ButtonLink>
      <div className="detail-hero">
        <span className={`career-icon icon-${career.color}`}>
          <CareerIcon name={career.icon} size={30} />
        </span>
        <div>
          <div className="eyebrow">{career.category}</div>
          <h1>{career.name}</h1>
          <p>{career.description}</p>
        </div>
      </div>
      <div className="inline-actions" style={{ marginBottom: 30 }}>
        <Button onClick={() => selectCareer(career.slug)}>
          {state.selectedCareer === career.slug
            ? "Selected as my path"
            : "Choose this career path"}
        </Button>
        {state.selectedCareer === career.slug && (
          <>
            <ButtonLink href="/skill-gap" variant="secondary">
              View my skill gap
            </ButtonLink>
            <ButtonLink href="/roadmap" variant="secondary">
              Open my roadmap
            </ButtonLink>
          </>
        )}
      </div>
      <div className="detail-top">
        <section className="panel content-panel">
          <h2>Career overview</h2>
          <p>{career.overview}</p>
          <h2 style={{ marginTop: 27 }}>Typical responsibilities</h2>
          <CheckList items={career.responsibilities} />
        </section>
        <section className="panel content-panel">
          <h2>Core skills</h2>
          <div className="skill-tags">
            {career.skills.map((s) => (
              <span key={s.id}>{skillName(s.id)}</span>
            ))}
          </div>
          <h2 style={{ marginTop: 27 }}>Tools you may use</h2>
          <div className="skill-tags">
            {career.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>
      </div>
      <div className="detail-levels">
        {(["beginner", "intermediate", "advanced"] as const).map((level, i) => (
          <section key={level} className="panel level-card">
            <div className="eyebrow">
              0{i + 1} · {level}
            </div>
            <CheckList items={career.levels[level]} />
          </section>
        ))}
      </div>
      <div className="detail-bottom">
        <section className="panel content-panel">
          <h2>Projects worth building</h2>
          <CheckList items={career.projects} />
        </section>
        <section className="panel content-panel">
          <h2>Interview topics</h2>
          <CheckList items={career.interviewTopics} />
          <ButtonLink
            variant="ghost"
            href="/interview"
            onClick={() => selectCareer(career.slug)}
          >
            Practice these skills
          </ButtonLink>
        </section>
      </div>
      <section className="panel content-panel" style={{ marginTop: 22 }}>
        <div className="section-title">
          <h2>Learning roadmap</h2>
          <Badge>{roadmap?.phases.length ?? 0} phases</Badge>
        </div>
        <div className="skill-tags">
          {roadmap?.phases.map((p, i) => (
            <span key={p.id}>
              0{i + 1} · {p.title}
            </span>
          ))}
        </div>
        <p className="text-small" style={{ marginTop: 22 }}>
          Choose this path to unlock tasks, progress tracking, and learning-time
          estimates.
        </p>
        <div className="inline-actions" style={{ marginTop: 20 }}>
          <Button onClick={() => selectCareer(career.slug)}>
            Use this roadmap
          </Button>
          <ButtonLink href="/roadmap" variant="secondary">
            View selected roadmap
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
