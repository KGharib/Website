import { BarChart3, Bot, Database } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/siteConfig";

const supportAreas = [
  {
    title: "See what's happening",
    body: "Turn scattered data into clear dashboards that show performance, trends and where attention is needed.",
    tags: ["Bookings", "Sales", "Enquiries", "Revenue", "Attendance"],
    service: "Dashboard Design",
    icon: BarChart3
  },
  {
    title: "Stop chasing reports",
    body: "Automate recurring reports and spreadsheet updates so your numbers are easier to refresh, share and act on.",
    tags: ["Weekly reports", "Monthly reporting", "Dashboard refreshes", "Spreadsheet updates"],
    service: "Reporting Automation",
    icon: Bot
  },
  {
    title: "Trust your numbers",
    body: "Clean up messy data, unclear KPIs and inconsistent definitions so your reporting is more reliable.",
    tags: ["Data quality", "KPI clarity", "Duplicates", "Reporting confusion"],
    service: "Data Clean-Up & KPI Clarity",
    icon: Database
  }
] as const;

export function ValueUnlocks() {
  const healthCheckHref = siteConfig.contact.calendlyUrl || siteConfig.healthCheckHref;

  return (
    <Section
      id="value"
      tone="white"
      eyebrow="Data Support"
      title="Clear data. Better decisions. Less guesswork."
      intro="I help you see what's working, fix what's unclear, and make better decisions with your data."
      containerClassName="[&>div:first-child]:max-w-none [&_h2]:xl:whitespace-nowrap"
    >
      <div className="grid items-stretch gap-4 lg:grid-cols-3">
        {supportAreas.map((area) => {
          const Icon = area.icon;

          return (
            <article
              key={area.title}
              className="glass-panel flex min-h-[19rem] flex-col rounded-lg border border-[var(--color-border)] p-5 transition hover:-translate-y-1 hover:border-[rgba(140,199,241,0.48)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.34)]"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(80,120,152,0.14)] text-[var(--color-accent)]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold leading-tight text-[var(--color-ink)]">
                  {area.title}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
                {area.body}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(143,181,209,0.24)] bg-[rgba(80,120,152,0.11)] px-3 py-1 text-xs font-semibold leading-5 text-[var(--color-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <span className="inline-flex rounded-full border border-[rgba(140,199,241,0.3)] bg-[rgba(5,16,27,0.46)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  {area.service}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href={healthCheckHref} variant="secondary" size="lg" showArrow>
          Book a free data review
        </Button>
      </div>
    </Section>
  );
}
