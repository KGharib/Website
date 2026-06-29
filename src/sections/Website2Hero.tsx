import { ArrowDown, CheckCircle2 } from "lucide-react";
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

export function Website2Hero() {
  const healthCheckHref = siteConfig.contact.calendlyUrl || siteConfig.healthCheckHref;

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden py-16 text-[var(--color-ink)] sm:py-20 xl:py-12">
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/mockup_vid1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,250,252,0.96)_0%,rgba(246,250,252,0.86)_36%,rgba(246,250,252,0.42)_70%,rgba(246,250,252,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(32,105,164,0.18),transparent_34rem)]" />

      <Container className="relative">
        <div className="max-w-4xl rounded-2xl border border-[rgba(38,100,150,0.18)] bg-[rgba(255,255,255,0.62)] p-6 shadow-[0_24px_80px_rgba(22,44,68,0.16)] backdrop-blur-md sm:p-8 lg:p-10">
          <Badge className="px-4 py-2 text-sm sm:text-base">Data clarity for growing teams and businesses.</Badge>
          <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-wide text-[var(--color-accent)] sm:text-6xl lg:text-7xl">
            Gharib Analytics
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
            I help you{" "}
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
      </Container>
    </section>
  );
}
