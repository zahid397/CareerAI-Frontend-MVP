"use client";
import type { LucideIcon } from "lucide-react";
import { ProgressBar } from "@/components/ui/primitives";
export function StatCard({
  label,
  value,
  icon: Icon,
  note,
  tone = "violet",
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  note: string;
  tone?: string;
}) {
  return (
    <div className="panel stat-card">
      <div className="stat-card-top">
        <span>{label}</span>
        <Icon size={18} />
      </div>
      <strong>{value}%</strong>
      <ProgressBar value={value} label={label} tone={tone} />
      <small>{note}</small>
    </div>
  );
}
