"use client";
import { useState } from "react";
import { getCareer } from "@/data/careers";
import { skillName } from "@/data/skills";
import { useCareerAI } from "@/hooks/useCareerAI";
import { skillLevel } from "@/lib/progress";
import {
  PageHeader,
  EmptyState,
  ButtonLink,
  Badge,
  ProgressBar,
} from "@/components/ui/primitives";
import { TargetCareerSelect } from "@/components/career/TargetCareerSelect";
export function SkillGapPage() {
  const { state, updateProfile } = useCareerAI();
  const career = getCareer(state.selectedCareer);
  const [filter, setFilter] = useState("All");
  if (!career)
    return (
      <EmptyState
        title="Choose a direction to see your skill gap"
        description="A target career gives your skills a useful context. Compare paths and choose one to get started."
        action="Explore career paths"
        href="/careers"
      />
    );
  const rows = career.skills.map((s) => {
    const current = skillLevel(state, s.id),
      gap = Math.max(0, s.target - current),
      priority =
        gap === 0
          ? "Low"
          : s.priority === "High" && gap > 15
            ? "High"
            : gap > 15
              ? "Medium"
              : "Low";
    return { ...s, current, gap, priority };
  });
  const high = rows.filter((s) => s.priority === "High").length,
    ready = rows.filter((s) => s.gap === 0).length,
    filtered = rows.filter((s) => filter === "All" || s.priority === filter);
  const rate = (id: string, value: number) =>
    updateProfile({
      skills:
        value > 0
          ? [...new Set([...state.profile.skills, id])]
          : state.profile.skills.filter((s) => s !== id),
      skillLevels: { ...state.profile.skillLevels, [id]: value },
    });
  return (
    <>
      <PageHeader
        eyebrow="MAKE THE NEXT STEP CLEAR"
        title="Your skill gap"
        description="A focused look at where you are and what your target career asks of you."
      >
        <ButtonLink href="/roadmap">Continue to roadmap</ButtonLink>
      </PageHeader>
      <TargetCareerSelect />
      <div className="panel skill-gap-intro">
        <div>
          <h2>Current skills meet future goals.</h2>
          <p>
            Levels are self-assessed, with a small practice credit for completed
            roadmap tasks. Adjust your ratings honestly; they are a guide for
            learning.
          </p>
        </div>
        <div className="skill-gap-summary">
          <div>
            <strong className="accent">{rows.length}</strong>
            <span>Target skills</span>
          </div>
          <div>
            <strong style={{ color: "var(--orange)" }}>{high}</strong>
            <span>High priority</span>
          </div>
          <div>
            <strong className="mint">{ready}</strong>
            <span>At target</span>
          </div>
        </div>
      </div>
      <div
        className="filter-bar"
        role="group"
        aria-label="Filter skills by priority"
      >
        {["All", "High", "Medium", "Low"].map((f) => (
          <button
            key={f}
            className={`filter-chip ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
          >
            {f === "All" ? "All skills" : `${f} priority`}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="skill-gap-grid">
          {filtered.map((s) => (
            <article className="panel skill-gap-card" key={s.id}>
              <div className="skill-gap-card-header">
                <h2>{skillName(s.id)}</h2>
                <Badge tone={s.priority}>
                  {s.gap === 0 ? "At target" : `${s.priority} priority`}
                </Badge>
              </div>
              <div className="skill-comparison">
                <div>
                  <div className="skill-current-label">
                    <span>Current level</span>
                    <strong>{s.current}%</strong>
                  </div>
                  <ProgressBar
                    value={s.current}
                    label={`${skillName(s.id)} current level`}
                    tone="violet"
                  />
                </div>
                <div>
                  <div className="skill-current-label">
                    <span>Target level</span>
                    <strong>{s.target}%</strong>
                  </div>
                  <ProgressBar
                    value={s.target}
                    label={`${skillName(s.id)} target level`}
                    tone="cyan"
                  />
                </div>
              </div>
              <label className="rating-label" htmlFor={`rating-${s.id}`}>
                <span>Self rating before practice credit</span>
                <span>
                  {state.profile.skillLevels[s.id] ??
                    (state.profile.skills.includes(s.id) ? 40 : 0)}
                  %
                </span>
              </label>
              <input
                id={`rating-${s.id}`}
                type="range"
                min="0"
                max="100"
                step="5"
                value={
                  state.profile.skillLevels[s.id] ??
                  (state.profile.skills.includes(s.id) ? 40 : 0)
                }
                onChange={(e) => rate(s.id, Number(e.target.value))}
              />
              <div className="gap-bottom">
                <span>
                  Gap to target <strong>{s.gap} percentage points</strong>
                </span>
                <ButtonLink href="/roadmap" variant="ghost">
                  Practice skill
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No skills at this priority"
          description="Your current ratings put these skills in a different priority group."
        >
          <button
            className="btn btn-secondary"
            onClick={() => setFilter("All")}
          >
            Show all skills
          </button>
        </EmptyState>
      )}
    </>
  );
}
