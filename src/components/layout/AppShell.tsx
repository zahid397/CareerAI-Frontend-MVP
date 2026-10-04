"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  LayoutDashboard,
  Compass,
  Layers3,
  Route,
  FileText,
  MessagesSquare,
  BriefcaseBusiness,
  Gauge,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  RotateCcw,
  ChevronDown,
} from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import { getCareer } from "@/data/careers";
import { Modal } from "@/components/ui/Modal";
import {
  Button,
  ButtonLink,
  ProgressBar,
  Reveal,
} from "@/components/ui/primitives";
import { roadmapProgress } from "@/lib/progress";
const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/results", label: "Career profile", icon: Compass },
  { href: "/skill-gap", label: "Skill gap", icon: Layers3 },
  { href: "/roadmap", label: "My roadmap", icon: Route },
  { href: "/cv-builder", label: "CV builder", icon: FileText },
  { href: "/interview", label: "Interview practice", icon: MessagesSquare },
  { href: "/jobs", label: "Demo opportunities", icon: BriefcaseBusiness },
  { href: "/readiness", label: "Job readiness", icon: Gauge },
];
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="CareerAI home">
      <span className="logo-mark">
        <Sparkles size={22} />
      </span>
      <span>
        Career<span className="logo-ai">AI</span>
      </span>
    </Link>
  );
}
export function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname().replace(/\/$/, "") || "/",
    router = useRouter();
  const {
    state,
    hydrated,
    toggleTheme,
    loadDemo,
    reset,
    toast,
    warning,
    dismissWarning,
  } = useCareerAI();
  const [menu, setMenu] = useState(false),
    [resetDialog, setResetDialog] = useState(false);
  const publicRoute = ["/", "/onboarding", "/assessment"].includes(path);
  useEffect(() => {
    if (!menu) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = document.querySelector<HTMLElement>(".sidebar .side-link");
    first?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", escape);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", escape);
      previous?.focus();
    };
  }, [menu]);
  const career = getCareer(state.selectedCareer);
  const demo = () => {
    loadDemo();
    router.push("/dashboard");
    setMenu(false);
  };
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {publicRoute ? (
        <header className="public-nav">
          <div className="container nav-inner">
            <Logo />
            <nav className="landing-links" aria-label="Main navigation">
              <Link href="/careers">Explore careers</Link>
              <Link href="/#how-it-works">How it works</Link>
              {state.profile.onboarded && (
                <Link href="/dashboard">My dashboard</Link>
              )}
            </nav>
            <div className="nav-actions">
              <button
                className="icon-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${state.theme === "dark" ? "light" : "dark"} mode`}
              >
                {state.theme === "dark" ? (
                  <Sun size={19} />
                ) : (
                  <Moon size={19} />
                )}
              </button>
              <Button variant="secondary" onClick={demo}>
                Try Demo
              </Button>
            </div>
          </div>
        </header>
      ) : (
        <>
          <aside
            className={`sidebar ${menu ? "sidebar-open" : ""}`}
            aria-label="Product navigation"
          >
            <div className="sidebar-top">
              <Logo />
              <button
                className="icon-btn mobile-only"
                onClick={() => setMenu(false)}
                aria-label="Close navigation"
              >
                <X size={20} />
              </button>
            </div>
            <p className="sidebar-caption">YOUR WORKSPACE</p>
            <nav>
              {nav.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenu(false)}
                  className={`side-link ${path === href ? "active" : ""}`}
                  aria-current={path === href ? "page" : undefined}
                >
                  <Icon size={19} />
                  {label}
                </Link>
              ))}
            </nav>
            <div className="sidebar-bottom">
              {career ? (
                <div className="sidebar-progress">
                  <span>Your next chapter</span>
                  <strong>{career.shortName}</strong>
                  <ProgressBar
                    value={roadmapProgress(state)}
                    label="Roadmap completion"
                  />
                  <small>{roadmapProgress(state)}% of roadmap complete</small>
                  <Link href="/roadmap">Keep learning</Link>
                </div>
              ) : (
                <div className="sidebar-progress">
                  <Sparkles size={22} />
                  <strong>Your future starts here.</strong>
                  <Link href="/onboarding">Build your profile</Link>
                </div>
              )}
              <button
                className="profile-chip"
                onClick={() => setResetDialog(true)}
                aria-label="Manage your local profile"
              >
                <span className="avatar">
                  {state.profile.name?.slice(0, 1) || "Y"}
                </span>
                <span>
                  <strong>{state.profile.name || "Your profile"}</strong>
                  <small>
                    {state.demo ? "Demo workspace" : "Local workspace"}
                  </small>
                </span>
                <ChevronDown size={16} />
              </button>
            </div>
          </aside>
          {menu && (
            <button
              className="drawer-backdrop"
              aria-label="Close navigation"
              onClick={() => setMenu(false)}
            />
          )}
          <header className="workspace-header">
            <div className="breadcrumb">
              <button
                className="icon-btn mobile-only"
                onClick={() => setMenu(true)}
                aria-label="Open navigation"
                aria-expanded={menu}
              >
                <Menu size={22} />
              </button>
              <Link href="/dashboard">Workspace</Link>
              <span>/</span>
              <span>
                {nav.find((n) => n.href === path)?.label ??
                  (path.startsWith("/careers/")
                    ? "Career details"
                    : "Explore careers")}
              </span>
            </div>
            <div className="nav-actions">
              <span className="local-pill">
                {state.demo ? "Demo profile" : "Saved on this device"}
              </span>
              <button
                className="icon-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${state.theme === "dark" ? "light" : "dark"} mode`}
              >
                {state.theme === "dark" ? (
                  <Sun size={19} />
                ) : (
                  <Moon size={19} />
                )}
              </button>
              <Link
                className="icon-btn"
                href="/readiness"
                aria-label="View job readiness"
              >
                <Gauge size={20} />
              </Link>
            </div>
          </header>
          <nav className="mobile-bottom-nav" aria-label="Quick navigation">
            {[nav[0], nav[3], nav[4], nav[5]].map(
              ({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={path === href ? "page" : undefined}
                  className={path === href ? "active" : ""}
                >
                  <Icon size={21} />
                  <span>
                    {label === "Interview practice"
                      ? "Interview"
                      : label === "My roadmap"
                        ? "Roadmap"
                        : label}
                  </span>
                </Link>
              ),
            )}
            <button onClick={() => setMenu(true)}>
              <Menu size={21} />
              <span>More</span>
            </button>
          </nav>
        </>
      )}
      <main
        id="main-content"
        className={publicRoute ? "public-main" : "workspace-main"}
      >
        {warning && (
          <div className="storage-warning" role="alert">
            {warning}
            <button
              className="icon-btn"
              onClick={dismissWarning}
              aria-label="Dismiss storage warning"
            >
              <X size={17} />
            </button>
          </div>
        )}
        {!hydrated && path !== "/" ? (
          <div className="loading-state" aria-live="polite">
            <span className="spinner" />
            Restoring your workspace…
          </div>
        ) : publicRoute ? (
          children
        ) : (
          <Reveal key={path}>{children}</Reveal>
        )}
      </main>
      {publicRoute && (
        <footer className="public-footer container">
          <Logo />
          <p>Discover your skills. Find your path. Build your future.</p>
          <span>Made for the next generation in Bangladesh.</span>
        </footer>
      )}
      <div
        className={`toast ${toast ? "toast-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
      {resetDialog && (
        <Modal title="Your local profile" onClose={() => setResetDialog(false)}>
          <p className="muted">
            Your profile and progress are saved in this browser. Loading the
            demo or starting fresh replaces the current profile, CV, and
            practice session.
          </p>
          <div className="modal-actions">
            <Button
              variant="secondary"
              onClick={() => {
                demo();
                setResetDialog(false);
              }}
            >
              Load Zahid’s demo
            </Button>
            <Button
              onClick={() => {
                reset();
                setResetDialog(false);
                router.push("/onboarding");
              }}
            >
              <RotateCcw size={16} />
              Start fresh
            </Button>
          </div>
          <ButtonLink href="/onboarding" variant="ghost">
            Edit my profile
          </ButtonLink>
        </Modal>
      )}
    </>
  );
}
