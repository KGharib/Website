import { ArrowDown, BarChart3, CheckCircle2, Database, LineChart, Sparkles } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Typewriter } from "@/components/Typewriter";
import { siteConfig } from "@/data/siteConfig";

const quickWins = [
  "Automated reports",
  "Trusted dashboards",
  "Clear KPI definitions",
  "Actionable insights"
] as const;

export function Hero() {
  const healthCheckHref = siteConfig.contact.calendlyUrl || siteConfig.healthCheckHref;

  return (
    <section id="top" className="section-surface flex min-h-screen items-center bg-[var(--color-page)] py-16 text-[var(--color-ink)] sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge className="px-4 py-2 text-sm sm:text-base">Data clarity for growing teams and businesses.</Badge>
            <h1 className="mockup-title mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-wide text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              <span className="block">Unleash the power of</span>
              <span className="block text-[var(--color-accent)]">
                Gharib Analytics
              </span>
            </h1>
            <p className="mt-4 text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
              I help teams with{" "}
              <Typewriter
                phrases={siteConfig.typedPhrases}
                className="inline-block border-b-2 border-[var(--color-accent)] pb-1 text-[var(--color-accent)]"
              />
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={healthCheckHref} size="lg" variant="secondary" showArrow>
                {siteConfig.primaryCtaLabel}
              </Button>
              <Button href="#value" size="lg" variant="ghost" icon={<ArrowDown aria-hidden="true" className="h-4 w-4" />}>
                {siteConfig.secondaryCtaLabel}
              </Button>
            </div>
            <ul className="mt-8 grid gap-3 text-sm font-semibold text-[var(--color-ink)] sm:grid-cols-2">
              {quickWins.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="hero-dashboard w-full max-w-[620px] p-4 sm:p-5">
              <div className="relative">
                <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Data dashboard
                    </p>
                    <p className="mt-1 text-lg font-bold text-[var(--color-ink)]">Business clarity view</p>
                  </div>
                  <span className="rounded-full border border-[rgba(140,199,241,0.32)] bg-[rgba(140,199,241,0.12)] px-3 py-1 text-xs font-bold text-[var(--color-accent)]">
                    Live
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Reports", value: "Auto", icon: Database },
                    { label: "KPIs", value: "Clear", icon: BarChart3 },
                    { label: "Insights", value: "Action", icon: Sparkles }
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="rounded-lg border border-[var(--color-border)] bg-[rgba(5,12,20,0.58)] p-3">
                        <Icon aria-hidden="true" className="h-5 w-5 text-[var(--color-accent)]" />
                        <p className="mt-3 text-2xl font-black text-[var(--color-ink)]">{item.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-lg border border-[var(--color-border)] bg-[rgba(5,12,20,0.62)] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-[var(--color-ink)]">Performance trend</p>
                    <LineChart aria-hidden="true" className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>
                  <svg className="mt-4 h-36 w-full" viewBox="0 0 420 150" role="img" aria-label="Dashboard trend line">
                    <defs>
                      <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgba(140,199,241,0.32)" />
                        <stop offset="100%" stopColor="rgba(140,199,241,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M8 126 L70 98 L130 112 L190 64 L252 78 L315 38 L412 58 L412 142 L8 142 Z" fill="url(#heroArea)" />
                    <path className="data-line" d="M8 126 L70 98 L130 112 L190 64 L252 78 L315 38 L412 58" strokeWidth="4" />
                    {[70, 190, 315, 412].map((x, index) => (
                      <circle key={x} cx={x} cy={[98, 64, 38, 58][index]} r="5" fill="var(--color-accent)" />
                    ))}
                  </svg>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-[var(--color-border)] bg-[rgba(5,12,20,0.58)] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Manual work</p>
                    <div className="mt-3 h-3 rounded-full bg-[rgba(255,255,255,0.08)]">
                      <div className="h-3 w-3/4 rounded-full bg-[var(--color-coral)]" />
                    </div>
                  </div>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[rgba(5,12,20,0.58)] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">Decision clarity</p>
                    <div className="mt-3 h-3 rounded-full bg-[rgba(255,255,255,0.08)]">
                      <div className="h-3 w-[88%] rounded-full bg-[var(--color-accent)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
