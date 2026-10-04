"use client";
import type { CVData, CVItem } from "@/types/user";
function Entries({ title, items }: { title: string; items: CVItem[] }) {
  const visible = items.filter(
    (item) =>
      item.title.trim() || item.organization.trim() || item.description.trim(),
  );
  if (!visible.length) return null;
  return (
    <section>
      <h3>{title}</h3>
      {visible.map((item) => (
        <div className="cv-entry" key={item.id}>
          <div className="cv-entry-head">
            <strong>{item.title}</strong>
            <small>{item.period}</small>
          </div>
          {item.organization && <span>{item.organization}</span>}
          {item.description && <p>{item.description}</p>}
        </div>
      ))}
    </section>
  );
}
export function CVPreview({ cv }: { cv: CVData }) {
  return (
    <article
      className={`cv-paper cv-${cv.template}`}
      aria-label="Live CV preview"
    >
      <div className="cv-paper-heading">
        <h2>{cv.name || "Your name"}</h2>
        <p className="cv-contact">
          {[cv.email, cv.phone, cv.location, cv.website]
            .filter(Boolean)
            .join(" · ") || "Your contact details will appear here"}
        </p>
      </div>
      {cv.summary && (
        <section>
          <h3>Professional Summary</h3>
          <p>{cv.summary}</p>
        </section>
      )}
      <Entries title="Education" items={cv.education} />
      <Entries title="Experience" items={cv.experience} />
      <Entries title="Projects" items={cv.projects} />
      {cv.skills && (
        <section>
          <h3>Skills</h3>
          <p>{cv.skills}</p>
        </section>
      )}
      {cv.achievements && (
        <section>
          <h3>Achievements</h3>
          <p>{cv.achievements}</p>
        </section>
      )}
      {!cv.summary &&
        !cv.education.length &&
        !cv.projects.length &&
        !cv.skills && (
          <p className="cv-empty-note">
            Add your education, skills, and first project to see your CV take
            shape.
          </p>
        )}
    </article>
  );
}
