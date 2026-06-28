import Image from "next/image";
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

export function Hero() {
  const healthCheckHref = siteConfig.contact.calendlyUrl || siteConfig.healthCheckHref;

  return (
    <section id="top" className="flex min-h-screen items-center overflow-hidden bg-[var(--color-page)] py-16 text-[var(--color-ink)] sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge className="px-4 py-2 text-sm sm:text-base">Data clarity for growing teams and businesses.</Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              <span className="relative inline-block text-[var(--color-accent)] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:bg-[var(--color-accent)]">
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
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
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
            <div className="relative h-[330px] w-[330px] sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px] xl:h-[540px] xl:w-[540px]">
              <div className="absolute left-[16px] top-[16px] h-full w-full rounded-[42px] bg-[rgba(80,120,152,0.16)]" />
              <div className="relative h-full w-full overflow-hidden rounded-[42px] border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[var(--shadow-panel)]">
                <Image
                  src="/images/brand/GA.png"
                  alt="Gharib Analytics logo"
                  fill
                  priority
                  quality={100}
                  sizes="(min-width: 1280px) 540px, (min-width: 1024px) 500px, (min-width: 640px) 420px, 330px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
