import { BarChart3, Bot, CheckCircle2, Database } from "lucide-react";
import { Section } from "@/components/Section";

const supportAreas = [
  {
    title: "Visuals of what is happening in your business",
    description:
      "Your business already has the Data, you just need it to be presented in a way that is easy to understand and act on.",
    support:
      "Auditing and identifying your data needs, I design clear dashboards that bring your key numbers into one place, so you can quickly understand performance, spot trends and make better decisions.",
    service: "Audit & Dashboard Design",
    serviceDetail:
      "Built from the same thinking behind trusted BI dashboards: KPI design, clear reporting views and performance tracking that leaders can actually use.",
    helpsWith:
      "Bookings, sales, enquiries, attendance, revenue, customer activity, service performance and operational trends.",
    icon: BarChart3
  },
  {
    title: "Less time chasing numbers. More time making decisions.",
    description:
      "Many businesses lose hours every week updating spreadsheets, copying data between systems, or recreating the same reports again and again.",
    support:
      "Automate recurring report,   connect your data where possible, so your numbers are easier to update, more consistent and less dependent on manual work.",
    service: "Reporting Automation",
    serviceDetail:
      "Using repeatable workflows, cleaner refresh processes and practical automation to reduce manual reporting cycles.",
    helpsWith:
      "Automated Weekly reports, monthly reporting, spreadsheet refreshes, recurring exports, dashboard updates and replacing of manual processes.",
    icon: Bot
  },
  {
    title: "Confidence in the numbers you are using",
    description:
      "Bad decisions often come from not seing the full picture - this can be a combination of unclear definitions, messy spreadsheets, duplicated records or KPIs that nobody fully trusts.",
    support:
      "I peform the full ETA process (Extract, Transform, Load) to clean, organise and structure your data so your reports are easier to understand and your KPIs actually reflect a true picture of how your business is peforming.",
    service: "Data Clean-Up, preparation & KPI Clarity",
    serviceDetail:
      "A trust layer for your reporting: data quality checks, clearer KPI definitions and cleaner foundations behind every dashboard.",
    helpsWith:
      "Lack of confidence in data outputs, Messy spreadsheets, unclear metrics, inconsistent figures, duplicated data, missing KPIs and reporting confusion.",
    icon: Database
  }
] as const;

export function ValueUnlocks() {
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
              className="glass-panel grid h-full grid-rows-[auto_1fr_auto_auto] rounded-lg border border-[var(--color-border)] p-4"
            >
              <div className="flex min-h-[5.75rem] items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(80,120,152,0.14)] text-[var(--color-accent)]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-[var(--color-ink)]">
                    {area.title}
                  </h3>
                </div>
              </div>

              <div className="mt-3 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                <p>{area.description}</p>
                <p className="font-semibold text-[var(--color-ink)]">{area.support}</p>
              </div>

              <div className="mt-4 min-h-[10.75rem] rounded-lg border border-[rgba(143,181,209,0.26)] bg-[rgba(5,16,27,0.46)] p-3.5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Service behind this
                </p>
                <p className="mt-2 text-base font-bold leading-tight text-[var(--color-ink)]">
                  {area.service}
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  {area.serviceDetail}
                </p>
              </div>

              <div className="mt-3 flex min-h-[8.75rem] gap-2 rounded-lg border border-[rgba(143,181,209,0.22)] bg-[var(--color-panel)] p-3.5">
                <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-bold text-[var(--color-ink)]">Helps with</p>
                  <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                    {area.helpsWith}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
