"use client";
import Link from "next/link";
import type { Career, CareerMatch } from "@/types/career";
import { useCareerAI } from "@/hooks/useCareerAI";
import {
  Button,
  ButtonLink,
  CareerIcon,
  Badge,
} from "@/components/ui/primitives";
import { skillName } from "@/data/skills";
export function MatchRing({
  value,
  label = "Profile Match",
  large = false,
}: {
  value: number;
  label?: string;
  large?: boolean;
}) {
  const size = large ? 164 : 104;
  return (
    <div className="match-ring" aria-label={`${label}: ${value}%`}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 5}
          fill="none"
          stroke="var(--border)"
          strokeWidth="5"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 5}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray={`${value} ${100 - value}`}
        />
      </svg>
      <span>
        <strong>{value}%</strong>
        <small>{label}</small>
      </span>
    </div>
  );
}
export function CareerCard({
  career,
  match,
}: {
  career: Career;
  match?: number;
}) {
  const { state, selectCareer } = useCareerAI();
  return (
    <article className="panel career-card">
      <div className="section-title" style={{ margin: 0 }}>
        <span className={`career-icon icon-${career.color}`}>
          <CareerIcon name={career.icon} />
        </span>
        {match !== undefined && (
          <Badge tone="violet">{match}% Profile Match</Badge>
        )}
      </div>
      <h2>{career.name}</h2>
      <p>{career.description}</p>
      <div className="skill-tags">
        {career.skills.slice(0, 3).map((s) => (
          <span key={s.id}>{skillName(s.id)}</span>
        ))}
      </div>
      <div className="inline-actions">
        <ButtonLink href={`/careers/${career.slug}`} variant="secondary">
          Explore path
        </ButtonLink>
        <Button
          variant={
            state.selectedCareer === career.slug ? "secondary" : "primary"
          }
          onClick={() => selectCareer(career.slug)}
          aria-pressed={state.selectedCareer === career.slug}
        >
          {state.selectedCareer === career.slug ? "Selected" : "Choose path"}
        </Button>
      </div>
    </article>
  );
}
export function CareerMatchCard({ match }: { match: CareerMatch }) {
  return (
    <Link href={`/careers/${match.career.slug}`} className="career-mini-card">
      <span className={`career-icon icon-${match.career.color}`}>
        <CareerIcon name={match.career.icon} />
      </span>
      <div>
        <h3>{match.career.name}</h3>
        <small>{match.career.category}</small>
      </div>
      <span className="match-num">{match.match}%</span>
    </Link>
  );
}
