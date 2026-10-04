"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { careers } from "@/data/careers";
import { useCareerAI } from "@/hooks/useCareerAI";
import { recommendCareers, assessmentComplete } from "@/lib/careerEngine";
import {
  PageHeader,
  Button,
  ButtonLink,
  EmptyState,
  PrototypeNote,
} from "@/components/ui/primitives";
import { CareerCard } from "./CareerCards";
export function CareersPage() {
  const [query, setQuery] = useState("");
  const { state } = useCareerAI();
  const matches = assessmentComplete(state.assessment)
    ? recommendCareers(state.profile, state.assessment)
    : [];
  const filtered = careers.filter((c) =>
    `${c.name} ${c.description} ${c.category}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        eyebrow="EIGHT PATHS. YOUR OWN DIRECTION."
        title="Explore careers"
        description="Look past job titles. Discover the skills, projects, and everyday work behind each path."
      >
        <ButtonLink
          href={state.profile.onboarded ? "/results" : "/onboarding"}
          variant="secondary"
        >
          {state.profile.onboarded ? "My career profile" : "Find my matches"}
        </ButtonLink>
      </PageHeader>
      <div className="filter-bar">
        <label className="search-input">
          <span className="sr-only">Search career paths</span>
          <Search size={19} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a career or interest…"
          />
        </label>
        <span className="muted text-small">{filtered.length} career paths</span>
        {state.selectedCareer && (
          <ButtonLink href="/skill-gap" variant="ghost">
            Continue with selected path
          </ButtonLink>
        )}
      </div>
      {filtered.length ? (
        <div className="career-card-grid">
          {filtered.map((c) => (
            <CareerCard
              key={c.slug}
              career={c}
              match={matches.find((m) => m.career.slug === c.slug)?.match}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No paths found"
          description="Try a broader term such as data, design, or software."
        >
          <Button variant="secondary" onClick={() => setQuery("")}>
            Clear search
          </Button>
        </EmptyState>
      )}
      <PrototypeNote />
    </>
  );
}
