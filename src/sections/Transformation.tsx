"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { transformations } from "@/data/process";
import { cx } from "@/lib/utils";

export function Transformation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = transformations[activeIndex];
  const ActiveIcon = active.icon;

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? transformations.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % transformations.length);
  };

  return (
    <Section
      tone="mint"
      eyebrow="Transformation"
      title="From manual reporting to decision-ready visibility."
      intro="A simple example: instead of spending 3-4 hours a week populating Excel, reporting can become a trusted dashboard that gives you up-to-date numbers when decisions need to be made."
    >
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5 shadow-[var(--shadow-panel)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-contrast)]">
              <ActiveIcon aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase text-[var(--color-coral)]">Carousel {activeIndex + 1} of {transformations.length}</p>
              <h3 className="mt-1 text-2xl font-bold text-[var(--color-ink)]">{active.title}</h3>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-deep)] text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="Previous transformation"
            >
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-deep)] text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="Next transformation"
            >
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-deep)] p-5">
            <p className="text-sm font-bold uppercase text-[var(--color-muted)]">Before</p>
            <h4 className="mt-3 text-2xl font-bold leading-tight text-[var(--color-ink)]">{active.from}</h4>
            <div className="mt-6 rounded-lg bg-[var(--color-panel-strong)] p-4">
              <p className="text-4xl font-bold text-[var(--color-coral)]">{active.beforeMetric}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{active.beforeLabel}</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(80,120,152,0.12)] text-[var(--color-accent)]">
              <ArrowRight aria-hidden="true" className="h-6 w-6" />
            </span>
          </div>

          <div className="rounded-lg border border-[var(--color-border)] bg-[rgba(80,120,152,0.1)] p-5">
            <p className="text-sm font-bold uppercase text-[var(--color-accent)]">After</p>
            <h4 className="mt-3 text-2xl font-bold leading-tight text-[var(--color-ink)]">{active.to}</h4>
            <div className="mt-6 rounded-lg bg-[var(--color-panel-strong)] p-4">
              <p className="text-4xl font-bold text-[var(--color-accent)]">{active.afterMetric}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{active.afterLabel}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-deep)] p-5">
          <Clock3 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
          <p className="text-base font-semibold leading-7 text-[var(--color-ink)]">{active.outcome}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {transformations.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cx(
                  "h-2.5 rounded-full transition",
                  index === activeIndex ? "w-8 bg-[var(--color-accent)]" : "w-2.5 bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
                )}
                aria-label={`Show ${item.title}`}
              />
            ))}
          </div>

          <Button href="#contact" variant="ghost" size="sm" showArrow>
            Find my reporting wins
          </Button>
        </div>
      </div>
    </Section>
  );
}
