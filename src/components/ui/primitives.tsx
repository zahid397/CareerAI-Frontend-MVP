"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Sparkles,
  Code2,
  ChartNoAxesCombined,
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Palette,
  Megaphone,
  BriefcaseBusiness,
  Compass,
} from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes } from "react";
export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      type="button"
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </Link>
  );
}
export function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: string;
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
export function ProgressBar({
  value,
  label,
  tone = "violet",
}: {
  value: number;
  label: string;
  tone?: string;
}) {
  const reduce = useReducedMotion();
  const v = Math.max(0, Math.min(100, value));
  return (
    <div
      className={`progress-track progress-${tone}`}
      role="progressbar"
      aria-label={label}
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${v}%` }}
        transition={{ duration: reduce ? 0 : 0.65, ease: "easeOut" }}
      />
    </div>
  );
}
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-header">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {children && <div className="header-actions">{children}</div>}
    </div>
  );
}
export function EmptyState({
  title,
  description,
  action,
  href,
  children,
}: {
  title: string;
  description: string;
  action?: string;
  href?: string;
  children?: ReactNode;
}) {
  return (
    <div className="empty-state panel">
      <div className="empty-icon">
        <Compass size={32} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      {action && href && <ButtonLink href={href}>{action}</ButtonLink>}
      {children}
    </div>
  );
}
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
export function CareerIcon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}) {
  const icons: Record<string, typeof Code2> = {
    code: Code2,
    chart: ChartNoAxesCombined,
    brain: BrainCircuit,
    shield: ShieldCheck,
    cloud: Cloud,
    palette: Palette,
    megaphone: Megaphone,
    briefcase: BriefcaseBusiness,
  };
  const Icon = icons[name] ?? Compass;
  return <Icon size={size} aria-hidden="true" />;
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
export function PrototypeNote({ children }: { children?: ReactNode }) {
  return (
    <p className="prototype-note">
      <Sparkles size={15} />
      <span>
        {children ??
          "Profile Match is a rule-based guide based on your responses, not a scientifically validated prediction."}
      </span>
    </p>
  );
}
