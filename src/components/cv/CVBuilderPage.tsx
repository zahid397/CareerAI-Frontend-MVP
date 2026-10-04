"use client";
import { useState } from "react";
import { Sparkles, Plus, Trash2, Printer, Download, Check } from "lucide-react";
import type { CVData, CVItem } from "@/types/user";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { cvTemplates } from "@/data/cvTemplates";
import { cvReadiness } from "@/lib/progress";
import { suggestSummary, cvAsText } from "@/lib/cvEngine";
import { createId } from "@/lib/id";
import {
  PageHeader,
  Button,
  ButtonLink,
  Badge,
  PrototypeNote,
  ProgressBar,
} from "@/components/ui/primitives";
import { CVPreview } from "./CVPreview";
type Section = "education" | "experience" | "projects";
function EntryEditor({
  section,
  items,
  onChange,
}: {
  section: Section;
  items: CVItem[];
  onChange: (items: CVItem[]) => void;
}) {
  const title =
    section === "education"
      ? "Degree / qualification"
      : section === "experience"
        ? "Role / position"
        : "Project name";
  const org =
    section === "education"
      ? "Institution"
      : section === "experience"
        ? "Organization"
        : "Project context / link";
  const edit = (id: string, patch: Partial<CVItem>) =>
    onChange(
      items.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  return (
    <>
      {items.map((item, i) => (
        <div className="form-item" key={item.id}>
          <div className="item-heading">
            <h3>
              {section.slice(0, 1).toUpperCase() + section.slice(1)} {i + 1}
            </h3>
            <button
              className="icon-btn"
              aria-label={`Remove ${section} entry ${i + 1}`}
              onClick={() => onChange(items.filter((x) => x.id !== item.id))}
            >
              <Trash2 size={17} />
            </button>
          </div>
          <div className="form-grid">
            <label>
              {title}
              <input
                aria-label={`${title} ${i + 1}`}
                value={item.title}
                onChange={(e) => edit(item.id, { title: e.target.value })}
                placeholder={
                  section === "education"
                    ? "BSc in Computer Science"
                    : section === "experience"
                      ? "Web Development Intern"
                      : "Campus Event Planner"
                }
              />
            </label>
            <label>
              {org}
              <input
                aria-label={`${org} ${i + 1}`}
                value={item.organization}
                onChange={(e) =>
                  edit(item.id, { organization: e.target.value })
                }
                placeholder={
                  section === "projects"
                    ? "Personal project · github.com/…"
                    : "Organization name"
                }
              />
            </label>
            <label className="full-span">
              Dates
              <input
                aria-label={`${section} dates ${i + 1}`}
                value={item.period}
                onChange={(e) => edit(item.id, { period: e.target.value })}
                placeholder="2024–present"
              />
            </label>
            <label className="full-span">
              Description
              <textarea
                aria-label={`${section} description ${i + 1}`}
                value={item.description}
                onChange={(e) => edit(item.id, { description: e.target.value })}
                placeholder="Describe your contribution, the tools you used, and what you learned. Only include results you can support."
              />
            </label>
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <p className="text-small">
          {section === "experience"
            ? "No work experience yet? Your projects can show what you can do."
            : section === "projects"
              ? "A small, clearly explained project is a strong place to start."
              : "Add your current or most recent qualification."}
        </p>
      )}
      <Button
        variant="secondary"
        className="add-entry"
        onClick={() =>
          onChange([
            ...items,
            {
              id: createId(),
              title: "",
              organization: "",
              period: "",
              description: "",
            },
          ])
        }
        disabled={items.length >= 20}
      >
        <Plus size={16} />
        Add{" "}
        {section === "education"
          ? "education"
          : section === "experience"
            ? "experience"
            : "project"}
      </Button>
    </>
  );
}
export function CVBuilderPage() {
  const { state, updateCV, notify } = useCareerAI();
  const cv = state.cv;
  const [tab, setTab] = useState("edit"),
    [suggestion, setSuggestion] = useState("");
  const update = (key: keyof CVData, value: string) =>
    updateCV({ [key]: value });
  const download = () => {
    const blob = new Blob([cvAsText(cv)], { type: "text/plain;charset=utf-8" }),
      url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = `${cv.name.trim().replace(/[^a-z0-9\u0980-\u09ff]+/gi, "-") || "CareerAI"}-CV.txt`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify("Your CV text has been downloaded.");
  };
  return (
    <>
      <PageHeader
        eyebrow="MAKE YOUR EXPERIENCE COUNT"
        title="Build your CV"
        description="A clear story of your skills, projects, and potential. Every edit updates your preview."
      >
        <div className="cv-score">
          <span>{cvReadiness(state)}% ready</span>
          <ProgressBar value={cvReadiness(state)} label="CV completeness" />
        </div>
      </PageHeader>
      <div
        className="cv-tabs"
        role="tablist"
        aria-label="CV builder view"
        onKeyDown={(event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
            return;
          event.preventDefault();
          const next =
            event.key === "Home"
              ? "edit"
              : event.key === "End"
                ? "preview"
                : tab === "edit"
                  ? "preview"
                  : "edit";
          setTab(next);
          document.getElementById(`${next}-tab`)?.focus();
        }}
      >
        <Button
          id="edit-tab"
          role="tab"
          tabIndex={tab === "edit" ? 0 : -1}
          aria-selected={tab === "edit"}
          aria-controls="cv-edit-panel"
          variant={tab === "edit" ? "primary" : "secondary"}
          onClick={() => setTab("edit")}
        >
          Edit
        </Button>
        <Button
          id="preview-tab"
          role="tab"
          tabIndex={tab === "preview" ? 0 : -1}
          aria-selected={tab === "preview"}
          aria-controls="cv-preview-panel"
          variant={tab === "preview" ? "primary" : "secondary"}
          onClick={() => setTab("preview")}
        >
          Preview
        </Button>
      </div>
      <div className={`cv-layout ${tab === "preview" ? "show-preview" : ""}`}>
        <div className="cv-editor" id="cv-edit-panel">
          <section className="panel cv-section">
            <h2>Personal information</h2>
            <div className="form-grid">
              {[
                {
                  key: "name",
                  label: "Full name",
                  type: "text",
                  placeholder: "Your full name",
                },
                {
                  key: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  key: "phone",
                  label: "Phone",
                  type: "tel",
                  placeholder: "+880…",
                },
                {
                  key: "location",
                  label: "Location",
                  type: "text",
                  placeholder: "Dhaka, Bangladesh",
                },
                {
                  key: "website",
                  label: "Portfolio / website (optional)",
                  type: "text",
                  placeholder: "yourname.dev",
                },
              ].map((f) => (
                <label
                  key={f.key}
                  className={f.key === "website" ? "full-span" : ""}
                >
                  {f.label}
                  <input
                    type={f.type}
                    value={
                      cv[
                        f.key as
                          | "name"
                          | "email"
                          | "phone"
                          | "location"
                          | "website"
                      ]
                    }
                    onChange={(e) =>
                      update(f.key as keyof CVData, e.target.value)
                    }
                    placeholder={f.placeholder}
                    autoComplete={
                      f.key === "name"
                        ? "name"
                        : f.key === "email"
                          ? "email"
                          : f.key === "phone"
                            ? "tel"
                            : "off"
                    }
                  />
                </label>
              ))}
            </div>
          </section>
          <section className="panel cv-section">
            <div className="section-title">
              <h2 style={{ margin: 0 }}>Professional summary</h2>
              <Button
                variant="secondary"
                onClick={() =>
                  setSuggestion(
                    suggestSummary(cv, getCareer(state.selectedCareer)),
                  )
                }
              >
                <Sparkles size={15} />
                Improve with AI
              </Button>
            </div>
            <label className="sr-only" htmlFor="cv-summary">
              Professional summary
            </label>
            <textarea
              id="cv-summary"
              value={cv.summary}
              onChange={(e) => updateCV({ summary: e.target.value })}
              placeholder="What are you learning, what have you built, and where would you like to contribute?"
            />
            {suggestion && (
              <div className="suggestion-box">
                <Badge tone="violet">Simulated AI suggestion</Badge>
                <label className="block mt-3">
                  Review and edit the suggestion
                  <textarea
                    aria-label="Review and edit the suggestion"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                  />
                </label>
                <div className="inline-actions mt-3">
                  <Button
                    onClick={() => {
                      updateCV({ summary: suggestion });
                      setSuggestion("");
                      notify(
                        "Summary updated. Review it to make sure every detail is accurate.",
                      );
                    }}
                  >
                    <Check size={15} />
                    Use this summary
                  </Button>
                  <Button variant="ghost" onClick={() => setSuggestion("")}>
                    Dismiss
                  </Button>
                </div>
                <small>
                  Uses your entered details. No AI service is connected.
                </small>
              </div>
            )}
          </section>
          {(["education", "experience", "projects"] as const).map((section) => (
            <section className="panel cv-section" key={section}>
              <h2>{section.slice(0, 1).toUpperCase() + section.slice(1)}</h2>
              <EntryEditor
                section={section}
                items={cv[section]}
                onChange={(items) => updateCV({ [section]: items })}
              />
            </section>
          ))}
          <section className="panel cv-section">
            <h2>Skills</h2>
            <label>
              Separate skills with commas
              <textarea
                aria-label="Separate skills with commas"
                value={cv.skills}
                onChange={(e) => updateCV({ skills: e.target.value })}
                placeholder="JavaScript, React, SQL, Communication"
              />
            </label>
          </section>
          <section className="panel cv-section">
            <h2>Achievements</h2>
            <label>
              Awards, activities, or milestones
              <textarea
                aria-label="Awards, activities, or milestones"
                value={cv.achievements}
                onChange={(e) => updateCV({ achievements: e.target.value })}
                placeholder="Describe a real achievement, activity, or contribution. This section is optional."
              />
            </label>
          </section>
          <PrototypeNote>
            Writing assistance uses predefined suggestions from your inputs.
            Review every claim; no external AI API is used.
          </PrototypeNote>
        </div>
        <div className="cv-preview-panel cv-sticky" id="cv-preview-panel">
          <div className="cv-preview-toolbar">
            <label>
              <span className="sr-only">CV template</span>
              <select
                aria-label="CV template"
                value={cv.template}
                onChange={(e) =>
                  updateCV({ template: e.target.value as CVData["template"] })
                }
                style={{ minHeight: 40, fontSize: 14, maxWidth: 135 }}
              >
                {cvTemplates.map((t) => (
                  <option value={t.id} key={t.id}>
                    {t.name} template
                  </option>
                ))}
              </select>
            </label>
            <div className="cv-actions">
              <Button
                variant="secondary"
                onClick={download}
                disabled={!cv.name.trim()}
              >
                <Download size={15} />
                Text
              </Button>
              <Button onClick={() => window.print()} disabled={!cv.name.trim()}>
                <Printer size={15} />
                Print / PDF
              </Button>
            </div>
          </div>
          <CVPreview cv={cv} />
          <p className="text-small muted" style={{ marginTop: 15 }}>
            Print / PDF opens your browser’s print dialog. Choose “Save as PDF”
            to export.
          </p>
          <ButtonLink href="/interview" variant="ghost" className="mt-4">
            Practice explaining your projects
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
