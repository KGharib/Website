import { Section } from "@/components/Section";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <Section
      id="process"
      tone="white"
      eyebrow="Process"
      title="A practical engagement path from health check to launch."
      intro="The process is designed for busy teams: discover the reporting problem, fix the data foundations, launch the useful thing, and document it clearly."
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article key={step.title} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5 shadow-[var(--shadow-panel)]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-[var(--color-coral)]">0{index + 1}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(80,120,152,0.12)] text-[var(--color-accent)]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-tight text-[var(--color-ink)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{step.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
