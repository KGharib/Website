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
      title="A senior data analyst helping smaller teams use data with confidence."
      intro="A short version of the credibility behind the offer."
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
            {siteConfig.founderName} has 5+ years of analytics and BI experience across healthcare, public
            sector, media, marketing, and commercial reporting. The work spans SQL, Python, Power BI,
            Tableau, KPI development, automation, and stakeholder-ready insight.
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
            The aim is simple: help teams move from scattered reports to clear, trusted information they can
            actually act on.
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
