type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5 shadow-[var(--shadow-panel)]">
      <div className="text-3xl font-bold text-[var(--color-accent)]">{value}</div>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
    </div>
  );
}
