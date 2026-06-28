type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="glass-panel rounded-lg border border-[var(--color-border)] p-5">
      <div className="text-3xl font-bold text-[var(--color-accent)]">{value}</div>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
    </div>
  );
}
