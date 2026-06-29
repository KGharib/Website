import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { MetricCard } from "@/components/MetricCard";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/siteConfig";
import { metrics } from "@/data/tools";

export function About() {
  return (
    <Section
      id="about"
      tone="white"
      eyebrow="About"
      title="Senior data analyst helping you use data with confidence."
      intro="Experienced in delivering data-driven insights and solutions across various industries."
      containerClassName="[&>div:first-child]:max-w-none [&_h2]:xl:whitespace-nowrap"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-lg border border-[var(--color-border)]">
          <Image
            src={siteConfig.assets.aboutImage}
            alt={`${siteConfig.founderName} profile image`}
            fill
            sizes="(min-width: 1024px) 34vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)]">
            <MapPin aria-hidden="true" className="h-4 w-4 text-[var(--color-coral)]" />
            <span>{siteConfig.contact.location}</span>
          </div>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            With 6+ years of analytics and BI experience across healthcare, public sector, media,
            marketing, and commercial reporting, I help businesses make better use of their data.
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
            My work goes beyond building reports. I help identify the problems behind unclear
            performance, scattered data, manual reporting, and inconsistent KPIs, then build a
            structured approach to solve them through clear analysis, practical dashboards, automated
            reporting, and actionable insights.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="secondary" showArrow>
              {siteConfig.primaryCtaLabel}
            </Button>
            <Button
              href={siteConfig.assets.resumeUrl}
              variant="ghost"
              icon={<Download aria-hidden="true" className="h-4 w-4" />}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
