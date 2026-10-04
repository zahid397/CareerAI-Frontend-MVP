"use client";
import { ProgressBar } from "@/components/ui/primitives";
export function SkillBar({
  name,
  value,
  target,
}: {
  name: string;
  value: number;
  target?: number;
}) {
  return (
    <div>
      <div className="skill-row-head">
        <span>{name}</span>
        <span>
          {value}%{target !== undefined ? ` / ${target}% target` : ""}
        </span>
      </div>
      <ProgressBar
        value={value}
        label={`${name} skill level`}
        tone={target !== undefined && value >= target ? "mint" : "violet"}
      />
    </div>
  );
}
