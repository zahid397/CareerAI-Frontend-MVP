"use client";
import { useState } from "react";
import { Search, Info, CheckCircle2 } from "lucide-react";
import type { Job } from "@/types/job";
import { jobs } from "@/data/jobs";
import { careers } from "@/data/careers";
import { useCareerAI } from "@/hooks/useCareerAI";
import {
  PageHeader,
  Button,
  ButtonLink,
  EmptyState,
  Badge,
  CheckList,
} from "@/components/ui/primitives";
import { Modal } from "@/components/ui/Modal";
import { JobCard } from "./JobCard";
export function JobsPage() {
  const { state, toggleSavedJob } = useCareerAI();
  const [query, setQuery] = useState(""),
    [work, setWork] = useState("All work styles"),
    [career, setCareer] = useState("All careers"),
    [savedOnly, setSavedOnly] = useState(false),
    [selected, setSelected] = useState<Job | null>(null),
    [applying, setApplying] = useState(false),
    [submitted, setSubmitted] = useState(false);
  const filtered = jobs.filter(
    (j) =>
      `${j.title} ${j.company} ${j.location}`
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      (work === "All work styles" || work === j.workType) &&
      (career === "All careers" || career === j.careerSlug) &&
      (!savedOnly || state.savedJobs.includes(j.id)),
  );
  const show = (job: Job, apply: boolean) => {
    setSelected(job);
    setApplying(apply);
    setSubmitted(false);
  };
  return (
    <>
      <PageHeader
        eyebrow="CONNECT SKILLS WITH POSSIBILITIES"
        title="Explore opportunities"
        description="Practice comparing role requirements with the skills you are building."
      >
        <ButtonLink href="/readiness" variant="secondary">
          Check my readiness
        </ButtonLink>
      </PageHeader>
      <div className="jobs-notice">
        <Info size={21} />
        <span>
          <strong>Demo jobs only.</strong> Companies, openings, and salary
          ranges below are fictional examples. Applications stay in this
          prototype and are never sent to an employer.
        </span>
      </div>
      <div className="filter-bar">
        <label className="search-input">
          <span className="sr-only">Search demo jobs</span>
          <Search size={19} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search role or location…"
          />
        </label>
        <label className="filter-select">
          <span className="sr-only">Filter by career</span>
          <select
            aria-label="Filter by career"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          >
            <option>All careers</option>
            {careers.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="filter-select">
          <span className="sr-only">Filter by work style</span>
          <select
            aria-label="Filter by work style"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          >
            {["All work styles", "Remote", "Hybrid", "On-site"].map((w) => (
              <option key={w}>{w}</option>
            ))}
          </select>
        </label>
        <button
          className={`filter-chip ${savedOnly ? "active" : ""}`}
          aria-pressed={savedOnly}
          onClick={() => setSavedOnly((s) => !s)}
        >
          Saved ({state.savedJobs.length})
        </button>
      </div>
      <p className="text-small muted" style={{ marginBottom: 18 }}>
        {filtered.length} demo opportunities
      </p>
      {filtered.length ? (
        <div className="jobs-grid">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} onDetails={show} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No opportunities in this view"
          description="Try another career or work style, or save a demo job to find it here."
        >
          <Button
            variant="secondary"
            onClick={() => {
              setQuery("");
              setWork("All work styles");
              setCareer("All careers");
              setSavedOnly(false);
            }}
          >
            Reset filters
          </Button>
        </EmptyState>
      )}
      {selected && (
        <Modal
          title={applying ? "Practice an application" : selected.title}
          onClose={() => setSelected(null)}
        >
          <div className="job-modal-details">
            <Badge tone="violet">Fictional demo listing</Badge>
            <h3>{selected.title}</h3>
            <p>
              {selected.company}
              <br />
              {selected.location} · {selected.workType} · {selected.experience}
              <br />
              {selected.salary} (illustrative)
            </p>
            <p style={{ marginTop: 15 }}>{selected.description}</p>
            <h3>Typical responsibilities</h3>
            <CheckList items={selected.responsibilities} />
            {applying ? (
              <>
                {submitted ? (
                  <div className="job-demo-success" role="status">
                    <CheckCircle2 size={30} />
                    <h3>Demo application completed</h3>
                    <p>
                      This was a practice step. Nothing was sent to a company.
                    </p>
                    <ButtonLink href="/interview" variant="ghost">
                      Prepare for an interview
                    </ButtonLink>
                  </div>
                ) : (
                  <>
                    <h3>Application preview</h3>
                    <p>
                      {state.cv.name || state.profile.name || "Your name"} ·{" "}
                      {state.cv.email || "Add an email in your CV"}
                    </p>
                    <p style={{ marginTop: 12 }}>
                      Your CV is saved on this device. Review it before
                      practicing the final step.
                    </p>
                    <div className="modal-actions">
                      <ButtonLink href="/cv-builder" variant="secondary">
                        Review my CV
                      </ButtonLink>
                      <Button onClick={() => setSubmitted(true)}>
                        Complete demo application
                      </Button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="modal-actions">
                <Button
                  variant="secondary"
                  onClick={() => toggleSavedJob(selected.id)}
                >
                  {state.savedJobs.includes(selected.id)
                    ? "Unsave opportunity"
                    : "Save opportunity"}
                </Button>
                <Button onClick={() => setApplying(true)}>
                  Practice application
                </Button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
