"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Sparkles } from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { interestOptions, locations, skills } from "@/data/skills";
import { Button, ProgressBar, Reveal } from "@/components/ui/primitives";
const steps = [
  "Your name",
  "Education",
  "Current status",
  "Location",
  "Interests",
  "Existing skills",
  "Work style",
  "Learning time",
];
const titles = [
  "First, what should we call you?",
  "Tell us about your education.",
  "Where are you in your journey?",
  "Where are you based?",
  "What sparks your curiosity?",
  "What skills do you already have?",
  "How would you like to work?",
  "Make room for your next chapter.",
];
const hints = [
  "Your first name or the name you prefer is enough.",
  "Every starting point has possibilities. Choose your current or most recent level.",
  "This helps us make your next steps more relevant.",
  "Choose your city or division in Bangladesh.",
  "Pick a few interests. You can always explore something new later.",
  "Select the skills you have practiced. Starting from scratch is completely fine.",
  "Choose what suits your life right now.",
  "How much time can you realistically spend learning each day?",
];
export function OnboardingFlow() {
  const { state, updateProfile, updateCV } = useCareerAI();
  const p = state.profile;
  const router = useRouter();
  const [step, setStep] = useState(0),
    [error, setError] = useState("");
  const valid = [
    p.name.trim().length >= 2,
    !!p.education,
    !!p.status,
    !!p.location,
    p.interests.length > 0,
    true,
    !!p.workStyle,
    !!p.learningTime,
  ];
  const next = () => {
    if (!valid[step]) {
      setError(
        step === 0
          ? "Please enter a name with at least two characters."
          : "Choose an option to continue.",
      );
      return;
    }
    setError("");
    if (step === 7) {
      updateProfile({ onboarded: true, name: p.name.trim() });
      updateCV({
        name: state.cv.name || p.name.trim(),
        location: state.cv.location || `${p.location}, Bangladesh`,
        skills:
          state.cv.skills ||
          p.skills
            .map((id) => skills.find((s) => s.id === id)?.name ?? id)
            .join(", "),
      });
      router.push("/assessment");
    } else setStep((s) => s + 1);
  };
  const choices = (
    items: string[],
    value: string,
    onChange: (v: string) => void,
    multiple = false,
    selected: string[] = [],
  ) => (
    <div className="choice-grid" role="group" aria-label={steps[step]}>
      {items.map((item) => (
        <button
          key={item}
          className={`choice-button ${(multiple ? selected.includes(item) : value === item) ? "selected" : ""}`}
          onClick={() => {
            onChange(item);
            setError("");
          }}
          aria-pressed={multiple ? selected.includes(item) : value === item}
        >
          <span className="choice-check">
            {(multiple ? selected.includes(item) : value === item) && (
              <Check size={13} />
            )}
          </span>
          {item}
        </button>
      ))}
    </div>
  );
  return (
    <div className="flow-page">
      <aside className="flow-sidebar">
        <div className="eyebrow">LET’S GET TO KNOW YOU</div>
        <h2>
          A little about you.
          <br />A better path ahead.
        </h2>
        {steps.map((s, i) => (
          <div
            key={s}
            className={`flow-step ${i === step ? "active" : i < step ? "complete" : ""}`}
          >
            <span>{i < step ? <Check size={13} /> : i + 1}</span>
            {s}
          </div>
        ))}
      </aside>
      <div className="panel flow-card">
        <div className="flow-step-count">
          <span>
            Step {step + 1} of {steps.length}
          </span>
          <span>About 2 minutes</span>
        </div>
        <ProgressBar
          value={((step + 1) / steps.length) * 100}
          label="Onboarding progress"
        />
        <Reveal key={step}>
          <div className="eyebrow">{steps[step]}</div>
          <h1>{titles[step]}</h1>
          <p className="muted" style={{ margin: "12px 0 25px" }}>
            {hints[step]}
          </p>
          {step === 0 && (
            <label htmlFor="profile-name">
              Your name
              <input
                id="profile-name"
                autoComplete="name"
                maxLength={80}
                autoFocus
                placeholder="e.g. Zahid Hasan"
                value={p.name}
                onChange={(e) => {
                  updateProfile({ name: e.target.value });
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") next();
                }}
                aria-invalid={!!error}
                aria-describedby={error ? "onboarding-error" : undefined}
              />
            </label>
          )}
          {step === 1 &&
            choices(
              ["HSC", "Diploma", "Bachelor's", "Master's", "Other"],
              p.education,
              (v) => updateProfile({ education: v }),
            )}
          {step === 2 &&
            choices(
              [
                "Student",
                "Fresh Graduate",
                "Job Seeker",
                "Working Professional",
              ],
              p.status,
              (v) => updateProfile({ status: v }),
            )}
          {step === 3 && (
            <label htmlFor="profile-location">
              City or division
              <select
                id="profile-location"
                aria-label="City or division"
                value={p.location}
                onChange={(e) => {
                  updateProfile({ location: e.target.value });
                  setError("");
                }}
              >
                <option value="">Choose your location</option>
                {locations.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </label>
          )}
          {step === 4 &&
            choices(
              interestOptions,
              "",
              (v) =>
                updateProfile({
                  interests: p.interests.includes(v)
                    ? p.interests.filter((i) => i !== v)
                    : [...p.interests, v],
                }),
              true,
              p.interests,
            )}
          {step === 5 && (
            <>
              <div
                className="choice-grid"
                role="group"
                aria-label="Existing skills"
              >
                {skills.map((s) => (
                  <button
                    key={s.id}
                    className={`choice-button ${p.skills.includes(s.id) ? "selected" : ""}`}
                    aria-pressed={p.skills.includes(s.id)}
                    onClick={() =>
                      updateProfile({
                        skills: p.skills.includes(s.id)
                          ? p.skills.filter((id) => id !== s.id)
                          : [...p.skills, s.id],
                        skillLevels: {
                          ...p.skillLevels,
                          [s.id]: p.skills.includes(s.id)
                            ? 0
                            : p.skillLevels[s.id] || 40,
                        },
                      })
                    }
                  >
                    <span className="choice-check">
                      {p.skills.includes(s.id) && <Check size={13} />}
                    </span>
                    {s.name}
                  </button>
                ))}
              </div>
              <p className="flow-hint">
                Selected skills start at a self-assessed level of 40%. You can
                adjust each level in Skill Gap.
              </p>
            </>
          )}
          {step === 6 &&
            choices(
              ["Remote", "On-site", "Hybrid", "Flexible"],
              p.workStyle,
              (v) => updateProfile({ workStyle: v }),
            )}
          {step === 7 &&
            choices(
              ["30 min/day", "1 hour/day", "2 hours/day", "3+ hours/day"],
              p.learningTime,
              (v) => updateProfile({ learningTime: v }),
            )}
          {error && (
            <p id="onboarding-error" className="field-error" role="alert">
              {error}
            </p>
          )}
        </Reveal>
        <div className="flow-controls">
          <Button
            variant="ghost"
            onClick={() => {
              setStep((s) => Math.max(0, s - 1));
              setError("");
            }}
            disabled={step === 0}
          >
            Back
          </Button>
          <Button onClick={next}>
            {step === 7 ? "Start my assessment" : "Continue"}
            {step === 7 && <Sparkles size={16} />}
          </Button>
        </div>
      </div>
    </div>
  );
}
