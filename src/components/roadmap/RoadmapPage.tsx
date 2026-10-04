"use client";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Clock3 } from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { getRoadmap } from "@/data/roadmaps";
import { skillName } from "@/data/skills";
import { roadmapProgress, learningMinutes } from "@/lib/progress";
import {
  PageHeader,
  Button,
  ButtonLink,
  EmptyState,
  ProgressBar,
  Badge,
} from "@/components/ui/primitives";
import { TargetCareerSelect } from "@/components/career/TargetCareerSelect";
export function RoadmapPage() {
  const { state } = useCareerAI();
  const career = getCareer(state.selectedCareer);
  if (!career)
    return (
      <EmptyState
        title="Give your roadmap a destination"
        description="Choose a career path to get a practical plan with learning goals, projects, and tasks you can check off."
        action="Choose my career"
        href="/careers"
      />
    );
  return <RoadmapContent key={career.slug} />;
}
function RoadmapContent() {
  const { state, toggleTask, updateProfile } = useCareerAI(),
    career = getCareer(state.selectedCareer)!,
    roadmap = getRoadmap(career.slug)!,
    completed = state.completedTasks[career.slug] ?? [];
  const [expanded, setExpanded] = useState<string[]>(() => [
    roadmap.phases.find((p) => !p.tasks.every((t) => completed.includes(t.id)))
      ?.id ?? roadmap.phases[0].id,
  ]);
  const total = roadmap.phases.reduce((n, p) => n + p.tasks.length, 0),
    remainingHours = roadmap.phases.reduce(
      (n, p) =>
        n +
        p.hours *
          (1 -
            p.tasks.filter((t) => completed.includes(t.id)).length /
              p.tasks.length),
      0,
    ),
    days = Math.ceil(
      (remainingHours * 60) / learningMinutes(state.profile.learningTime),
    );
  return (
    <>
      <PageHeader
        eyebrow="SMALL STEPS. REAL MOMENTUM."
        title="Your personalized roadmap"
        description={`${career.name} · A practical path you can work through at your own pace.`}
      >
        <ButtonLink href="/dashboard" variant="secondary">
          Back to dashboard
        </ButtonLink>
      </PageHeader>
      <TargetCareerSelect />
      <div className="panel roadmap-summary">
        <div>
          <h2>Your future, one task at a time.</h2>
          <p>
            {days
              ? `About ${days} learning days remaining at ${state.profile.learningTime.toLowerCase()}. These are flexible estimates.`
              : "You completed every task. Review your portfolio and practice your interview."}
          </p>
          <label
            className="inline-actions text-small"
            style={{ marginTop: 15 }}
          >
            Learning time
            <select
              aria-label="Learning time"
              style={{
                width: 155,
                minHeight: 38,
                padding: "6px 10px",
                fontSize: 14,
              }}
              value={state.profile.learningTime}
              onChange={(e) => updateProfile({ learningTime: e.target.value })}
            >
              {["30 min/day", "1 hour/day", "2 hours/day", "3+ hours/day"].map(
                (t) => (
                  <option key={t}>{t}</option>
                ),
              )}
            </select>
          </label>
        </div>
        <div className="roadmap-summary-progress">
          <div>
            <span>
              {completed.length} of {total} tasks complete
            </span>
            <strong className="accent">{roadmapProgress(state)}%</strong>
          </div>
          <ProgressBar
            value={roadmapProgress(state)}
            label="Roadmap progress"
          />
        </div>
      </div>
      <div className="section-title">
        <h2>Your learning phases</h2>
        <Button
          variant="ghost"
          onClick={() =>
            setExpanded(
              expanded.length === roadmap.phases.length
                ? []
                : roadmap.phases.map((p) => p.id),
            )
          }
        >
          {expanded.length === roadmap.phases.length
            ? "Collapse all"
            : "Expand all"}
        </Button>
      </div>
      <div className="roadmap-list">
        {roadmap.phases.map((phase, i) => {
          const count = phase.tasks.filter((t) =>
              completed.includes(t.id),
            ).length,
            open = expanded.includes(phase.id),
            done = count === phase.tasks.length;
          return (
            <article className="panel roadmap-phase" key={phase.id}>
              <button
                className="phase-heading"
                aria-expanded={open}
                aria-controls={`body-${phase.id}`}
                onClick={() =>
                  setExpanded((ids) =>
                    ids.includes(phase.id)
                      ? ids.filter((id) => id !== phase.id)
                      : [...ids, phase.id],
                  )
                }
              >
                <span className={`phase-number ${done ? "complete" : ""}`}>
                  {done ? <Check size={21} /> : String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{phase.title}</h2>
                  <p>
                    {done
                      ? "Phase complete. Keep going."
                      : `Phase ${i + 1} of ${roadmap.phases.length}`}
                  </p>
                </div>
                <div className="phase-meta">
                  <span className="phase-time inline-actions">
                    <Clock3 size={14} />
                    {phase.hours}h
                  </span>
                  <span>
                    {count}/{phase.tasks.length}
                  </span>
                  {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              {open && (
                <div className="phase-body" id={`body-${phase.id}`}>
                  <p>
                    <strong>Learning objective:</strong> {phase.description}
                  </p>
                  <div className="task-list">
                    {phase.tasks.map((task) => (
                      <label
                        className={`task-row ${completed.includes(task.id) ? "is-done" : ""}`}
                        key={task.id}
                      >
                        <input
                          type="checkbox"
                          checked={completed.includes(task.id)}
                          onChange={() => toggleTask(career.slug, task.id)}
                        />
                        <span>
                          <strong>{task.title}</strong>
                          <p>{task.detail}</p>
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="phase-resource">
                    <a
                      href={phase.resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {phase.resource.label} (opens new tab)
                    </a>
                    <div className="skill-tags">
                      {phase.skills.map((s) => (
                        <span key={s}>{skillName(s)}</span>
                      ))}
                    </div>
                    {done && (
                      <Badge tone="mint">
                        <Check size={12} />
                        Complete
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <div className="next-step-card" style={{ marginTop: 25 }}>
        <div>
          <h2>Give your learning somewhere to live.</h2>
          <p>Add your latest project to your CV and practice explaining it.</p>
        </div>
        <div className="inline-actions">
          <ButtonLink href="/cv-builder">Build my CV</ButtonLink>
          <ButtonLink variant="secondary" href="/interview">
            Practice an interview
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
