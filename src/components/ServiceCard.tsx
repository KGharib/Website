import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

type ServiceCardProps = {
  title: string;
  summary: string;
  outcome: string;
  points: readonly string[];
  icon: LucideIcon;
};

export function ServiceCard({ title, summary, outcome, points, icon: Icon }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-6 shadow-[var(--shadow-panel)] transition hover:-translate-y-1 hover:border-[rgba(80,120,152,0.48)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(80,120,152,0.12)] text-[var(--color-accent)]">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-bold leading-tight text-[var(--color-ink)]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{summary}</p>
      <p className="mt-4 rounded-md border border-[var(--color-border)] bg-[var(--color-panel-strong)] p-3 text-sm font-semibold leading-6 text-[var(--color-ink)]">
        {outcome}
      </p>
      <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
