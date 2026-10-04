"use client";
import { Check } from "lucide-react";
import type { RoadmapPhase } from "@/types/roadmap";
export function RoadmapTimeline({
  phases,
  completed,
}: {
  phases: RoadmapPhase[];
  completed: string[];
}) {
  const firstIncomplete = phases.findIndex(
    (p) => !p.tasks.every((t) => completed.includes(t.id)),
  );
  return (
    <div className="mini-timeline">
      {phases.map((p, i) => {
        const count = p.tasks.filter((t) => completed.includes(t.id)).length;
        return (
          <div className="mini-timeline-item" key={p.id}>
            <span
              className={`timeline-marker ${count === p.tasks.length ? "done" : i === firstIncomplete ? "current" : ""}`}
            >
              {count === p.tasks.length ? <Check size={13} /> : i + 1}
            </span>
            <div>
              <strong>{p.title}</strong>
              <small>
                {count === p.tasks.length
                  ? "Completed"
                  : `${count}/${p.tasks.length} tasks · ${p.hours} hours`}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
}
