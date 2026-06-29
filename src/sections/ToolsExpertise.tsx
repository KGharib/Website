"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import {
  BarChart3,
  Brain,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Database,
  Gauge,
  LineChart,
  MessageSquareText,
  Network,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { toolGroups } from "@/data/tools";
import { cx } from "@/lib/utils";

type Skill = {
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  logoSrc?: string;
  accent: "blue" | "teal" | "violet" | "gold";
};

const skillMeta: Record<string, Omit<Skill, "name" | "category">> = {
  "Power BI": {
    description: "Dashboards, data models, DAX and reporting views.",
    icon: BarChart3,
    logoSrc: "/images/logos/powerbi.svg",
    accent: "gold"
  },
  Tableau: {
    description: "Dashboard design, reporting and visual analytics.",
    icon: PanelsTopLeft,
    logoSrc: "/images/logos/tableau.svg",
    accent: "blue"
  },
  "Executive KPI reporting": {
    description: "Leadership views focused on the numbers that matter.",
    icon: Gauge,
    accent: "blue"
  },
  "Dashboard catalogues": {
    description: "Organised reporting assets that teams can find and use.",
    icon: PanelsTopLeft,
    accent: "teal"
  },
  SQL: {
    description: "Queries, joins, transformations and reporting logic.",
    icon: Database,
    accent: "blue"
  },
  Python: {
    description: "Automation, data cleaning, analysis and repeatable workflows.",
    icon: Workflow,
    logoSrc: "/images/logos/python.svg",
    accent: "gold"
  },
  "AWS-hosted datasets": {
    description: "Cloud-hosted data foundations for reporting and analysis.",
    icon: Cloud,
    logoSrc: "/images/logos/aws.svg",
    accent: "gold"
  },
  BigQuery: {
    description: "Cloud data querying for larger reporting datasets.",
    icon: Database,
    logoSrc: "/images/logos/bigquery.svg",
    accent: "teal"
  },
  Redshift: {
    description: "Warehouse-backed reporting and data transformations.",
    icon: Database,
    logoSrc: "/images/logos/redshift.svg",
    accent: "violet"
  },
  "Data warehouses": {
    description: "Structured data layers that make reporting more reliable.",
    icon: Network,
    accent: "teal"
  },
  Forecasting: {
    description: "Trend views that help teams plan with more confidence.",
    icon: LineChart,
    accent: "blue"
  },
  "Customer segmentation": {
    description: "Grouping customers by value, behaviour and opportunity.",
    icon: Brain,
    accent: "violet"
  },
  "Hypothesis testing": {
    description: "Structured analysis to understand whether changes matter.",
    icon: Sparkles,
    accent: "violet"
  },
  NLP: {
    description: "Text analysis for reviews, feedback and customer signals.",
    icon: MessageSquareText,
    accent: "teal"
  },
  "Data quality checks": {
    description: "Validation, cleaning and checks that make numbers trustworthy.",
    icon: ShieldCheck,
    accent: "teal"
  },
  "Stakeholder discovery": {
    description: "Turning business questions into useful data requirements.",
    icon: MessageSquareText,
    accent: "blue"
  },
  "Insight storytelling": {
    description: "Explaining the meaning behind the numbers clearly.",
    icon: Sparkles,
    accent: "gold"
  },
  "Process automation": {
    description: "Reducing repeated manual reporting and spreadsheet work.",
    icon: Workflow,
    accent: "teal"
  },
  "Non-technical handover": {
    description: "Clear documentation and walkthroughs your team can use.",
    icon: Wrench,
    accent: "blue"
  }
};

const accentClasses = {
  blue: "text-[#77c6ff] bg-[rgba(76,157,220,0.14)] border-[rgba(119,198,255,0.28)]",
  teal: "text-[#7ce8d0] bg-[rgba(124,232,208,0.12)] border-[rgba(124,232,208,0.28)]",
  violet: "text-[#b8a5ff] bg-[rgba(184,165,255,0.12)] border-[rgba(184,165,255,0.3)]",
  gold: "text-[#ffd95a] bg-[rgba(255,217,90,0.12)] border-[rgba(255,217,90,0.28)]"
} satisfies Record<Skill["accent"], string>;

const skills = toolGroups.flatMap((group) =>
  group.tools.map((tool) => ({
    name: tool,
    category: group.title,
    ...(skillMeta[tool] ?? {
      description: "Practical analytics capability for clearer reporting.",
      icon: Wrench,
      accent: "blue" as const
    })
  }))
);

const categories = ["All Skills", ...toolGroups.map((group) => group.title)] as const;

const outcomes = [
  { label: "Turning complex data into clarity", icon: Gauge },
  { label: "Automation that saves time", icon: BarChart3 },
  { label: "Numbers you can trust", icon: ShieldCheck },
  { label: "Insights that drive action", icon: Sparkles }
] as const;

const toolStrip = [
  { label: "Power BI", logoSrc: "/images/logos/powerbi.svg" },
  { label: "Tableau", logoSrc: "/images/logos/tableau.svg" },
  { label: "SQL", logoSrc: null },
  { label: "Python", logoSrc: "/images/logos/python.svg" },
  { label: "AWS", logoSrc: "/images/logos/aws.svg" },
  { label: "BigQuery", logoSrc: "/images/logos/bigquery.svg" },
  { label: "Redshift", logoSrc: "/images/logos/redshift.svg" },
  { label: "Alteryx", logoSrc: "/images/logos/alteryx.svg" },
  { label: "Microsoft environment", logoSrc: "/images/logos/microsoft.svg" },
  { label: "Google Workspace", logoSrc: "/images/logos/google-workspace.svg" }
] as const;

export function ToolsExpertise() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All Skills");
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const visibleSkills = useMemo(
    () =>
      activeCategory === "All Skills"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  const updateScrollProgress = () => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const maxScroll = element.scrollWidth - element.clientWidth;
    setScrollProgress(maxScroll > 0 ? element.scrollLeft / maxScroll : 0);
  };

  const scrollByCards = (direction: "previous" | "next") => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    element.scrollBy({
      left: direction === "next" ? 340 : -340,
      behavior: "smooth"
    });
  };

  const handleCategoryChange = (category: (typeof categories)[number]) => {
    setActiveCategory(category);
    setScrollProgress(0);
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <Section
      id="expertise"
      tone="dark"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(25rem,1.1fr)] lg:items-center">
        <div>
          <Badge className="px-4 py-2 text-sm sm:text-base">Expertise</Badge>
          <h2 className="mockup-title mt-4 text-balance text-3xl font-black uppercase leading-tight tracking-wide text-inherit sm:text-4xl lg:text-5xl">
            What I use to support your data needs
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            I use my experience across multiple industries to help businesses understand the problems behind their data, structure a clear approach to solving them, and turn complex information into dashboards, reporting, and insights that support better decisions.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;

              return (
                <div
                  key={outcome.label}
                  className="flex items-center gap-3 border-l border-[var(--color-border)] px-4 py-2"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(140,199,241,0.28)] bg-[rgba(80,120,152,0.12)] text-[var(--color-accent)]">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold leading-5 text-[var(--color-muted)]">
                    {outcome.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[20rem] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,199,241,0.08),transparent_68%)]" />
          <Image
            src="/images/expertise/image2.png"
            alt="Data expertise visual"
            width={1536}
            height={1024}
            unoptimized
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="relative h-full min-h-[20rem] w-full object-contain [mask-image:radial-gradient(circle_at_center,black_58%,transparent_86%)]"
            priority={false}
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={cx(
                "flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition",
                activeCategory === category
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-contrast)] shadow-[0_8px_25px_var(--color-glow)]"
                  : "border-[var(--color-border)] bg-[rgba(5,16,27,0.34)] text-[var(--color-muted)] hover:border-[rgba(140,199,241,0.45)] hover:text-[var(--color-ink)]"
              )}
            >
              {category === "All Skills" ? <PanelsTopLeft aria-hidden="true" className="h-4 w-4" /> : <Wrench aria-hidden="true" className="h-4 w-4" />}
              {category}
            </button>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByCards("previous")}
            aria-label="Scroll skills left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(5,16,27,0.34)] text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards("next")}
            aria-label="Scroll skills right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(5,16,27,0.34)] text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScrollProgress}
        className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {visibleSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <article
              key={`${skill.category}-${skill.name}`}
              className="glass-panel min-h-[17rem] w-[16rem] shrink-0 snap-start rounded-lg border border-[var(--color-border)] p-6"
            >
              <span
                className={cx(
                  "flex h-14 w-14 items-center justify-center rounded-lg border",
                  skill.logoSrc
                    ? "border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.9)] shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
                    : accentClasses[skill.accent]
                )}
              >
                {skill.logoSrc ? (
                  <Image
                    src={skill.logoSrc}
                    alt={`${skill.name} logo`}
                    width={40}
                    height={40}
                    unoptimized
                    className="h-9 w-9 object-contain"
                  />
                ) : (
                  <Icon aria-hidden="true" className="h-7 w-7" />
                )}
              </span>
              <h3 className="mt-6 text-xl font-bold text-[var(--color-ink)]">{skill.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{skill.description}</p>
              <span className={cx("mt-6 inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold", accentClasses[skill.accent])}>
                {skill.category}
              </span>
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-3 h-1.5 max-w-md overflow-hidden rounded-full bg-[rgba(143,181,209,0.16)]">
        <div
          className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-200"
          style={{ width: `${Math.max(18, scrollProgress * 100)}%` }}
        />
      </div>

      <div className="glass-panel mt-8 flex flex-col gap-4 rounded-lg border border-[var(--color-border)] p-5 lg:flex-row lg:items-center">
        <p className="shrink-0 text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          Tools I work with
        </p>
        <div className="hidden h-10 w-px bg-[var(--color-border)] lg:block" />
        <div className="flex flex-wrap gap-3">
          {toolStrip.map((tool) => (
            <span
              key={tool.label}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(143,181,209,0.16)] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-sm font-semibold text-[var(--color-muted)]"
            >
              {tool.logoSrc ? (
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.9)] p-1">
                  <Image
                    src={tool.logoSrc}
                    alt={`${tool.label} logo`}
                    width={24}
                    height={24}
                    unoptimized
                    className="h-full w-full object-contain"
                  />
                </span>
              ) : (
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(140,199,241,0.28)] bg-[rgba(80,120,152,0.12)] text-[10px] font-black text-[var(--color-accent)]">
                  SQL
                </span>
              )}
              {tool.label}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
