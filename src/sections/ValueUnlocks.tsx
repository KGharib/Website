"use client";

import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { services } from "@/data/services";
import { valueUnlocks } from "@/data/valueUnlocks";
import { cx } from "@/lib/utils";

export function ValueUnlocks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"why" | "how">("why");
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const active = valueUnlocks[activeIndex];
  const ActiveIcon = active.icon;
  const activeService = services[activeServiceIndex];
  const ActiveServiceIcon = activeService.icon;
  const nextService = services[(activeServiceIndex + 1) % services.length];
  const NextServiceIcon = nextService.icon;

  const showPreviousService = () => {
    setActiveServiceIndex((current) => (current === 0 ? services.length - 1 : current - 1));
  };

  const showNextService = () => {
    setActiveServiceIndex((current) => (current + 1) % services.length);
  };

  return (
    <Section
      id="value"
      tone="white"
      eyebrow="Why you need structured data support"
      title="Raw numbers tell you what happened. Structured data tells you what to do."
      intro="Use the tabs to explore the business value and the support that I can provide."
    >
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-4 shadow-[var(--shadow-panel)] sm:p-5">
        <div className="grid gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-deep)] p-1 sm:inline-grid sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setActiveTab("why")}
            className={cx(
              "rounded-full px-5 py-3 text-sm font-bold transition",
              activeTab === "why"
                ? "bg-[var(--color-accent)] text-[var(--color-contrast)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            )}
          >
            Why it matters
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("how")}
            className={cx(
              "rounded-full px-5 py-3 text-sm font-bold transition",
              activeTab === "how"
                ? "bg-[var(--color-accent)] text-[var(--color-contrast)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            )}
          >
            How I help
          </button>
        </div>

        <div className="mt-5 overflow-hidden">
          <div
            className={cx(
              "flex w-[200%] transition-transform duration-500 ease-out",
              activeTab === "why" ? "translate-x-0" : "-translate-x-1/2"
            )}
          >
            <div className="w-1/2 pr-3">
              <div className="grid gap-4">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {valueUnlocks.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={item.title}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveIndex(index)}
                        className={cx(
                          "flex min-h-28 flex-col justify-between rounded-lg border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
                          isActive
                            ? "border-[var(--color-accent)] bg-[rgba(80,120,152,0.18)] shadow-[0_0_24px_rgba(80,120,152,0.14)]"
                            : "border-[var(--color-border)] bg-[var(--color-deep)] hover:border-[rgba(143,181,209,0.48)]"
                        )}
                      >
                        <span
                          className={cx(
                            "flex h-9 w-9 items-center justify-center rounded-full",
                            isActive
                              ? "bg-[var(--color-accent)] text-[var(--color-contrast)]"
                              : "bg-[rgba(80,120,152,0.12)] text-[var(--color-accent)]"
                          )}
                        >
                          <Icon aria-hidden="true" className="h-4 w-4" />
                        </span>
                        <span className="mt-4 block">
                          <span className="block text-sm font-bold leading-tight text-[var(--color-ink)]">
                            {item.title}
                          </span>
                          <span className="mt-2 block text-xs leading-5 text-[var(--color-muted)]">
                            {item.shortProblem}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-deep)] p-5 sm:p-6">
                  <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
                    <div>
                      <Badge>Where data helps</Badge>
                      <div className="mt-4 flex items-start gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(80,120,152,0.14)] text-[var(--color-accent)]">
                          <ActiveIcon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-3xl font-bold leading-tight text-[var(--color-ink)]">
                            {active.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                            {active.example}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-lg border border-[rgba(143,181,209,0.22)] bg-[var(--color-panel)] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-coral)]">
                          Without support
                        </p>
                        <p className="mt-3 text-base font-semibold leading-7 text-[var(--color-ink)]">
                          {active.withoutData}
                        </p>
                      </div>
                      <div className="rounded-lg border border-[rgba(143,181,209,0.46)] bg-[rgba(96,136,176,0.14)] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                          With support
                        </p>
                        <p className="mt-3 text-base font-semibold leading-7 text-[var(--color-ink)]">
                          {active.withData}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 rounded-lg border border-[rgba(143,181,209,0.3)] bg-[rgba(5,16,27,0.52)] p-4 md:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] md:items-center">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                        Practical win
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-ink)]">
                        {active.metricLabel}
                      </p>
                    </div>
                    <p className="text-3xl font-extrabold leading-tight text-[var(--color-accent)] md:text-right lg:text-4xl">
                      {active.metric}
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="w-1/2 pl-3">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
                <article className="rounded-lg border border-[rgba(143,181,209,0.38)] bg-[var(--color-deep)] p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Badge>How I help</Badge>
                      <div className="mt-4 flex items-start gap-3">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(80,120,152,0.14)] text-[var(--color-accent)]">
                          <ActiveServiceIcon aria-hidden="true" className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="text-3xl font-bold leading-tight text-[var(--color-ink)]">
                            {activeService.title}
                          </h3>
                          <p className="mt-3 text-base font-semibold leading-7 text-[var(--color-ink)]">
                            {activeService.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        onClick={showPreviousService}
                        aria-label="Previous service"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-panel)] text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                      >
                        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextService}
                        aria-label="Next service"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-panel)] text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                      >
                        <ChevronRight aria-hidden="true" className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {activeService.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-lg border border-[rgba(143,181,209,0.22)] bg-[var(--color-panel)] p-4"
                      >
                        <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-[var(--color-accent)]" />
                        <p className="mt-3 text-sm font-bold leading-6 text-[var(--color-ink)]">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 border-t border-[var(--color-border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-6 text-[var(--color-muted)]">
                      {activeService.summary}
                    </p>
                    <div className="flex shrink-0 items-center gap-2">
                      {services.map((service, index) => (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() => setActiveServiceIndex(index)}
                          aria-label={`Show ${service.title}`}
                          className={cx(
                            "h-2.5 rounded-full transition",
                            index === activeServiceIndex
                              ? "w-8 bg-[var(--color-accent)]"
                              : "w-2.5 bg-[rgba(143,181,209,0.28)] hover:bg-[rgba(143,181,209,0.5)]"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </article>

                <aside className="rounded-lg border border-[var(--color-border)] bg-[rgba(5,16,27,0.52)] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    Up next
                  </p>
                  <div className="mt-4 flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(80,120,152,0.12)] text-[var(--color-accent)]">
                      <NextServiceIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-lg font-bold leading-tight text-[var(--color-ink)]">
                        {nextService.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {nextService.outcome}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={showNextService}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] transition hover:text-[var(--color-ink)]"
                  >
                    View next
                    <ChevronRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
