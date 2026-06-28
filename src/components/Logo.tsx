import { cx } from "@/lib/utils";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <div className={cx("flex items-center gap-3", className)}>
      <svg
        aria-hidden="true"
        className="h-12 w-12 shrink-0"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="6" width="52" height="52" rx="18" fill="var(--color-panel-strong)" />
        <rect x="6" y="6" width="52" height="52" rx="18" stroke="var(--color-accent)" strokeWidth="2" />
        <path
          d="M19 40C24 29 29 24 36 24C42 24 45 28 45 34C45 41 40 45 33 45C27 45 22 42 19 40Z"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 36H34C39 36 43 32 45 27"
          stroke="var(--color-coral)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="36" r="3" fill="var(--color-accent)" />
        <circle cx="34" cy="36" r="3" fill="var(--color-coral)" />
        <circle cx="45" cy="27" r="3" fill="var(--color-accent)" />
      </svg>

      {!compact ? (
        <span className="leading-tight">
          <span className="block text-xl font-bold text-[var(--color-ink)]">Gharib Analytics</span>
          <span className="mt-1 block text-sm text-[var(--color-muted)]">Data, BI & Reporting</span>
        </span>
      ) : null}
    </div>
  );
}

export function LogoShowcase() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(145deg,var(--color-panel),var(--color-deep))] p-8 shadow-[var(--shadow-panel)]">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[rgba(80,120,152,0.16)] blur-2xl" />
      <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-[rgba(166,231,255,0.12)] blur-2xl" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <svg
            aria-hidden="true"
            className="h-28 w-28 shrink-0"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="8" width="80" height="80" rx="26" fill="var(--color-panel-strong)" />
            <rect x="8" y="8" width="80" height="80" rx="26" stroke="var(--color-accent)" strokeWidth="3" />
            <path
              d="M26 60C33 43 43 35 54 35C64 35 70 42 70 51C70 62 62 69 50 69C40 69 31 64 26 60Z"
              stroke="var(--color-accent)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31 54H50C59 54 66 47 70 38"
              stroke="var(--color-coral)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="31" cy="54" r="5" fill="var(--color-accent)" />
            <circle cx="50" cy="54" r="5" fill="var(--color-coral)" />
            <circle cx="70" cy="38" r="5" fill="var(--color-accent)" />
          </svg>

          <div className="rounded-full border border-[var(--color-border)] bg-[rgba(80,120,152,0.1)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
            Independent analytics studio
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-[var(--color-coral)]">Gharib Analytics</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-[var(--color-ink)]">
            Clear data systems for small teams.
          </h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-[var(--color-muted)]">
            Dashboards, reporting automation, and KPI clarity without the enterprise overhead.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold text-[var(--color-muted)]">
          <span className="rounded-full border border-[var(--color-border)] bg-[rgba(80,120,152,0.08)] px-3 py-2">
            BI
          </span>
          <span className="rounded-full border border-[var(--color-border)] bg-[rgba(80,120,152,0.08)] px-3 py-2">
            SQL
          </span>
          <span className="rounded-full border border-[var(--color-border)] bg-[rgba(80,120,152,0.08)] px-3 py-2">
            KPIs
          </span>
        </div>
      </div>
    </div>
  );
}
