"use client";
import { careers } from "@/data/careers";
import { useCareerAI } from "@/hooks/useCareerAI";
export function TargetCareerSelect() {
  const { state, selectCareer } = useCareerAI();
  return (
    <div className="target-selector">
      <label htmlFor="target-career">Target career</label>
      <select
        id="target-career"
        value={state.selectedCareer}
        onChange={(e) => selectCareer(e.target.value)}
      >
        <option value="" disabled>
          Choose a career path
        </option>
        {careers.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
