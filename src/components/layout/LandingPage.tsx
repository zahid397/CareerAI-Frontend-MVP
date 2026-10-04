"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Check,
  Fingerprint,
  ScanLine,
  Compass,
  Layers3,
  Route,
  Flag,
  FileText,
  MessagesSquare,
  GraduationCap,
  Globe2,
  MapPin,
  Gauge,
} from "lucide-react";
import { useCareerAI } from "@/hooks/useCareerAI";
import {
  Button,
  ButtonLink,
  CareerIcon,
  Badge,
} from "@/components/ui/primitives";
import { careers } from "@/data/careers";
const pathSteps = [
  {
    label: "Profile",
    icon: Fingerprint,
    desc: "Start with your interests, skills, and the way you like to work.",
  },
  {
    label: "Assessment",
    icon: ScanLine,
    desc: "Ten thoughtful questions to understand what motivates you.",
  },
  {
    label: "Career",
    icon: Compass,
    desc: "Explore paths that connect with your strengths and curiosity.",
  },
  {
    label: "Skill gap",
    icon: Layers3,
    desc: "See where you are now and which skills deserve your attention.",
  },
  {
    label: "Roadmap",
    icon: Route,
    desc: "Turn a career goal into small, achievable learning tasks.",
  },
  {
    label: "Job ready",
    icon: Flag,
    desc: "Build a portfolio, shape your CV, and practice your interview.",
  },
];
const features = [
  {
    icon: Compass,
    title: "AI Career Assessment",
    desc: "Explore where your interests and strengths connect. Transparent, response-based matches.",
    href: "/onboarding",
  },
  {
    icon: Layers3,
    title: "Skill Gap Analysis",
    desc: "Know what to focus on next, with a clear view of your current and target skills.",
    href: "/skill-gap",
  },
  {
    icon: Route,
    title: "Personalized Roadmap",
    desc: "A practical learning plan shaped around your target career and available time.",
    href: "/roadmap",
  },
  {
    icon: FileText,
    title: "CV Builder",
    desc: "Turn your projects and experience into a clear, confident CV with guided suggestions.",
    href: "/cv-builder",
  },
  {
    icon: MessagesSquare,
    title: "Interview Practice",
    desc: "Find your voice with role-specific questions and instant simulated feedback.",
    href: "/interview",
  },
  {
    icon: Gauge,
    title: "Job Readiness",
    desc: "Bring your skill, CV, portfolio, and practice progress into one useful view.",
    href: "/readiness",
  },
];
export function LandingPage() {
  const [active, setActive] = useState(2);
  const { loadDemo, state } = useCareerAI();
  const router = useRouter();
  const reduce = useReducedMotion();
  const demo = () => {
    loadDemo();
    router.push("/dashboard");
  };
  const StepIcon = pathSteps[active].icon;
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <Badge tone="violet">
            <Sparkles size={14} />A clearer path to your future
          </Badge>
          <h1>
            Your Career,
            <br />
            <span>Powered by AI.</span>
          </h1>
          <p>
            Discover the skills you have, identify the skills you need, and
            build a personalized path toward your future career.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/onboarding">Start Career Assessment</ButtonLink>
            <ButtonLink href="/careers" variant="secondary">
              Explore Careers
            </ButtonLink>
          </div>
          <div className="hero-assurance">
            <span>
              <Check size={15} />
              No sign-up needed
            </span>
            <span>
              <Check size={15} />
              Built for Bangladesh
            </span>
          </div>
          <button className="text-link hero-demo" onClick={demo}>
            Just exploring? Try Zahid’s demo profile
          </button>
        </div>
        <motion.div
          className="path-visual"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="path-topline">
            <span>
              <Sparkles size={17} /> YOUR CAREER COMPASS
            </span>
            <span className="tiny-badge">6 connected steps</span>
          </div>
          <div className="path-nodes">
            {pathSteps.map(({ label, icon: Icon }, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                className={`path-node ${i === active ? "selected" : ""} ${i < active ? "past" : ""}`}
                aria-pressed={active === i}
              >
                <span className="path-node-icon">
                  <Icon size={21} />
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div className="path-current">
            <span className="path-current-icon">
              <StepIcon size={26} />
            </span>
            <span>
              <small>YOUR NEXT CHAPTER</small>
              <h3>
                {active === 2
                  ? "Software Engineering"
                  : pathSteps[active].label}
              </h3>
              <p>{pathSteps[active].desc}</p>
            </span>
          </div>
          <div className="path-mini-grid">
            <div>
              <span className="mini-caption">START WITH WHAT YOU KNOW</span>
              <div className="skill-tags">
                <span>JavaScript</span>
                <span>Problem solving</span>
                <span>Curiosity</span>
              </div>
            </div>
            <div className="mini-roadmap">
              <span className="mini-caption">GROW ONE STEP AT A TIME</span>
              <span>
                <Check size={15} /> Discover your strengths
              </span>
              <span>
                <span className="step-ring" /> Build your first project
              </span>
              <span className="muted">
                <span className="step-ring" /> Share your portfolio
              </span>
            </div>
          </div>
          <div className="visual-footnote">
            <span className="sparkle-dot">
              <Sparkles size={14} />
            </span>
            A path built around you. A future built by you.
          </div>
        </motion.div>
      </section>
      <div className="audience-strip container">
        <span>BIG AMBITIONS. A PRACTICAL FIRST STEP.</span>
        <div>
          <GraduationCap size={20} />
          Students & graduates
        </div>
        <div>
          <MapPin size={20} />
          Local opportunities
        </div>
        <div>
          <Globe2 size={20} />
          Remote possibilities
        </div>
      </div>
      <section id="how-it-works" className="landing-section container">
        <div className="section-heading">
          <div className="eyebrow">FROM UNSURE TO A PLAN</div>
          <h2>Your next chapter, in five steps.</h2>
          <p>You do not need every answer today. Just a place to start.</p>
        </div>
        <div className="how-grid">
          {[
            {
              title: "Discover yourself",
              desc: "Reflect on your interests and the work you enjoy.",
              icon: Fingerprint,
            },
            {
              title: "Understand your skills",
              desc: "Recognize the strengths you already bring.",
              icon: ScanLine,
            },
            {
              title: "Find your career path",
              desc: "Compare careers and choose a direction to explore.",
              icon: Compass,
            },
            {
              title: "Build your roadmap",
              desc: "Break your goal into clear, achievable tasks.",
              icon: Route,
            },
            {
              title: "Get job ready",
              desc: "Prepare your CV, portfolio, and interview answers.",
              icon: Flag,
            },
          ].map(({ title, desc, icon: Icon }, i) => (
            <div key={title} className="how-step">
              <span className="how-number">0{i + 1}</span>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="landing-section feature-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">ONE CONNECTED WORKSPACE</div>
            <h2>Less guesswork. More forward.</h2>
            <p>
              Everything you need to move from a career question to a concrete
              next step.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, desc, href }) => (
              <Link className="feature-card" href={href} key={title}>
                <span className="feature-icon">
                  <Icon size={23} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="feature-link">
                  Explore {title.toLowerCase()}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="landing-section container">
        <div className="section-heading heading-row">
          <div>
            <div className="eyebrow">FOLLOW YOUR CURIOSITY</div>
            <h2>Different strengths. Different paths.</h2>
          </div>
          <ButtonLink variant="secondary" href="/careers">
            Explore all careers
          </ButtonLink>
        </div>
        <div className="category-grid">
          {careers.map((c) => (
            <Link
              href={`/careers/${c.slug}`}
              className="category-card"
              key={c.slug}
            >
              <span className={`career-icon icon-${c.color}`}>
                <CareerIcon name={c.icon} />
              </span>
              <h3>{c.name}</h3>
              <p>{c.category}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="bangladesh-section container">
        <div>
          <Badge tone="mint">
            <MapPin size={14} />A local perspective. A world of possibility.
          </Badge>
          <h2>
            Built for Bangladesh’s
            <br />
            next generation.
          </h2>
          <p>
            From your campus in Dhaka to your first remote project, your journey
            deserves a plan that fits your life.
          </p>
        </div>
        <div className="bangladesh-list">
          <div>
            <GraduationCap size={25} />
            <span>
              <h3>Start where you are</h3>
              <p>
                For students, fresh graduates, and early-career professionals.
                No experience required to explore.
              </p>
            </span>
          </div>
          <div>
            <Globe2 size={25} />
            <span>
              <h3>Think beyond one destination</h3>
              <p>
                Explore local teams and remote work styles, then build
                transferable skills at your own pace.
              </p>
            </span>
          </div>
          <div>
            <Route size={25} />
            <span>
              <h3>Make time work for you</h3>
              <p>
                Whether you have 30 minutes or two hours a day, your roadmap
                turns progress into manageable steps.
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="final-cta container">
        <span className="cta-symbol">
          <Sparkles size={31} />
        </span>
        <div className="eyebrow">YOUR FUTURE IS STILL UNWRITTEN</div>
        <h2>Let’s give it a direction.</h2>
        <p>Discover your skills. Find your path. Build your future.</p>
        <ButtonLink href={state.profile.onboarded ? "/results" : "/onboarding"}>
          Build Your Career Roadmap
        </ButtonLink>
        <small>Frontend prototype · transparent matching · no sign-up</small>
      </section>
    </>
  );
}
