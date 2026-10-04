"use client";
import { useCareerAI } from "@/hooks/useCareerAI";
import { recommendCareers, assessmentComplete } from "@/lib/careerEngine";
import {
  PageHeader,
  EmptyState,
  Button,
  ButtonLink,
  Badge,
  CareerIcon,
  CheckList,
  PrototypeNote,
  Reveal,
} from "@/components/ui/primitives";
import { CareerMatchCard, MatchRing } from "./CareerCards";
export function ResultsPage() {
  const { state, selectCareer, loadDemo } = useCareerAI();
  if (!assessmentComplete(state.assessment))
    return (
      <EmptyState
        title="Your career profile starts with you"
        description="Complete the short assessment to compare career paths and understand why they fit your interests."
        action={
          state.profile.onboarded
            ? "Continue assessment"
            : "Start career assessment"
        }
        href={state.profile.onboarded ? "/assessment" : "/onboarding"}
      >
        <Button variant="ghost" onClick={loadDemo}>
          Try a complete demo profile
        </Button>
      </EmptyState>
    );
  const matches = recommendCareers(state.profile, state.assessment),
    primary = matches[0],
    selected =
      matches.find((m) => m.career.slug === state.selectedCareer) ?? primary;
  return (
    <>
      <PageHeader
        eyebrow="A STARTING POINT, FULL OF POSSIBILITY"
        title="Your Career Profile"
        description={`Here is how your interests and responses connect, ${state.profile.name.split(" ")[0]}. Explore, compare, and choose your next chapter.`}
      >
        <ButtonLink href="/assessment" variant="secondary">
          Retake assessment
        </ButtonLink>
      </PageHeader>
      <div className="results-grid">
        <Reveal className="panel primary-career">
          <Badge tone="violet">Primary career path</Badge>
          <div className="primary-career-top">
            <div>
              <span className={`career-icon icon-${primary.career.color}`}>
                <CareerIcon name={primary.career.icon} />
              </span>
              <h2 style={{ marginTop: 15 }}>{primary.career.name}</h2>
            </div>
            <MatchRing value={primary.match} />
          </div>
          <p>{primary.career.description}</p>
          <h3>Why this path fits you</h3>
          <CheckList items={primary.reasons} />
          <div className="inline-actions" style={{ marginTop: 27 }}>
            <Button onClick={() => selectCareer(primary.career.slug)}>
              {state.selectedCareer === primary.career.slug
                ? "Keep this career path"
                : "Choose this career path"}
            </Button>
            <ButtonLink
              href={`/careers/${primary.career.slug}`}
              variant="secondary"
            >
              Explore the career
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="panel">
          <div className="section-title">
            <h2>Other paths to explore</h2>
            <Badge>{matches.length - 1} paths</Badge>
          </div>
          <p className="text-small muted">
            Your strengths can lead in more than one direction.
          </p>
          {matches.slice(1, 5).map((match) => (
            <CareerMatchCard key={match.career.slug} match={match} />
          ))}
          <ButtonLink href="/careers" variant="ghost">
            Compare all career paths
          </ButtonLink>
        </Reveal>
      </div>
      <PrototypeNote />
      <div className="grid-2">
        <div className="panel">
          <div className="section-title">
            <h2>Your strengths</h2>
            <Badge tone="mint">{selected.career.shortName}</Badge>
          </div>
          {selected.strengths.length ? (
            <CheckList items={selected.strengths} />
          ) : (
            <p>
              Your curiosity is a good foundation. Add practiced skills to your
              profile as you learn.
            </p>
          )}
          <ButtonLink href="/skill-gap" variant="ghost">
            Review your current levels
          </ButtonLink>
        </div>
        <div className="panel">
          <h2 style={{ marginBottom: 20 }}>Your development areas</h2>
          <CheckList
            items={
              selected.gaps.length
                ? selected.gaps
                : [
                    "Deepen your existing skills through projects, testing, and feedback.",
                  ]
            }
          />
        </div>
      </div>
      <div className="next-step-card" style={{ marginTop: 24 }}>
        <div>
          <div className="eyebrow">YOUR SELECTED DIRECTION</div>
          <h2>{selected.career.name}</h2>
          <p>
            Start with your skill gap, then turn it into a practical learning
            plan.
          </p>
        </div>
        <div className="inline-actions">
          <ButtonLink href="/skill-gap">View my skill gap</ButtonLink>
          <ButtonLink href="/roadmap" variant="secondary">
            Build my roadmap
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
