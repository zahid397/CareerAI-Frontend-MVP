"use client";
import {
  Bookmark,
  MapPin,
  Clock3,
  Check,
  AlertTriangle,
  BriefcaseBusiness,
} from "lucide-react";
import type { Job } from "@/types/job";
import { skillName } from "@/data/skills";
import { useCareerAI } from "@/hooks/useCareerAI";
import { skillLevel } from "@/lib/progress";
import { Button, Badge } from "@/components/ui/primitives";
export function JobCard({
  job,
  onDetails,
}: {
  job: Job;
  onDetails: (job: Job, apply: boolean) => void;
}) {
  const { state, toggleSavedJob } = useCareerAI();
  const matches = job.skills.filter((s) => skillLevel(state, s) >= 40),
    saved = state.savedJobs.includes(job.id);
  return (
    <article className="panel job-card">
      <div className="job-heading">
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
        <button
          className={`icon-btn ${saved ? "saved" : ""}`}
          aria-label={saved ? `Unsave ${job.title}` : `Save ${job.title}`}
          aria-pressed={saved}
          onClick={() => toggleSavedJob(job.id)}
        >
          <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="job-meta">
        <span>
          <MapPin size={14} />
          {job.location}
        </span>
        <span>
          <BriefcaseBusiness size={14} />
          {job.workType}
        </span>
        <span>
          <Clock3 size={14} />
          {job.experience}
        </span>
      </div>
      <div className="job-salary">
        {job.salary} <small className="muted">· illustrative range</small>
      </div>
      <div className="job-match-title">
        <span>Why this matches you</span>
        <Badge tone="violet">
          {matches.length}/{job.skills.length} skills at 40%+
        </Badge>
      </div>
      <div className="job-skills">
        {job.skills.map((id) => (
          <span
            className={matches.includes(id) ? "matched" : "missing"}
            key={id}
          >
            {matches.includes(id) ? (
              <Check size={13} />
            ) : (
              <AlertTriangle size={13} />
            )}{" "}
            {skillName(id)}
          </span>
        ))}
      </div>
      <div className="inline-actions">
        <Button variant="secondary" onClick={() => onDetails(job, false)}>
          View details
        </Button>
        <Button onClick={() => onDetails(job, true)}>Demo application</Button>
      </div>
    </article>
  );
}
