import { Wrench } from "lucide-react";
import { Section } from "@/components/Section";
import { toolGroups } from "@/data/tools";

export function ToolsExpertise() {
  return (
    <Section
      id="expertise"
      tone="dark"
      eyebrow="Expertise"
      title="Practical data skills that turn messy inputs into business decisions."
      intro="I combine BI dashboards, SQL, Python automation, KPI thinking, and stakeholder communication so the work is technical enough to be reliable and simple enough to be used."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {toolGroups.map((group) => (
          <article key={group.title} className="glass-panel rounded-lg border border-[var(--color-border)] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-contrast)]">
                <Wrench aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-[var(--color-ink)]">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-[var(--color-border)] bg-[rgba(237,248,245,0.04)] px-3 py-2 text-sm text-[var(--color-muted)]">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
