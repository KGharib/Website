import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Mail,
  ShieldCheck
} from "lucide-react";
import { cx } from "@/lib/utils";
import { caseStudies, services, v3Site } from "./content";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function V3Container({ children, className }: ContainerProps) {
  return (
    <div className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const variants = {
    primary:
      "border-cyan-300 bg-cyan-300 text-slate-950 shadow-[0_14px_36px_rgba(103,232,249,0.2)] hover:bg-cyan-200",
    secondary:
      "border-slate-600 bg-slate-950/30 text-slate-100 hover:border-cyan-300 hover:text-cyan-100",
    quiet:
      "border-transparent bg-transparent text-cyan-200 hover:text-cyan-100"
  };

  return (
    <Link
      href={href}
      className={cx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/90 backdrop-blur-xl">
      <V3Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href={v3Site.basePath} className="flex items-center gap-3" aria-label="Gharib Analytics v3 home">
          <BrandMark />
          <span className="leading-tight">
            <span className="block text-base font-bold text-white sm:text-lg">{v3Site.brandName}</span>
            <span className="block text-xs font-medium text-slate-400">Data dashboards & reporting</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {v3Site.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href={`${v3Site.basePath}/contact`} className="hidden sm:inline-flex">
          Book Audit
        </ButtonLink>
      </V3Container>

      <div className="border-t border-white/10 lg:hidden">
        <V3Container className="flex gap-2 overflow-x-auto py-2">
          {v3Site.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`${v3Site.basePath}/contact`}
            className="shrink-0 rounded-full bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950"
          >
            Book Audit
          </Link>
        </V3Container>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#03060d] py-10 text-slate-300">
      <V3Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="font-bold text-white">{v3Site.brandName}</p>
                <p className="text-sm text-slate-400">Independent data, BI and reporting consultancy.</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              Helping clinics, education providers and local service businesses turn scattered data into clear dashboards,
              automated reports and practical decisions.
            </p>
            <a href={`mailto:${v3Site.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
              <Mail aria-hidden="true" className="h-4 w-4" />
              {v3Site.email}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn title="Navigation" links={v3Site.footerLinks} />
            <FooterColumn
              title="Services"
              links={services.map((service) => ({
                label: service.title,
                href: `${v3Site.basePath}/services#${slugify(service.title)}`
              }))}
            />
            <FooterColumn
              title="Demo projects"
              links={caseStudies.map((study) => ({
                label: study.title,
                href: study.href
              }))}
              extra={<p className="mt-4 text-xs text-slate-500">Privacy policy placeholder</p>}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {v3Site.brandName}. All rights reserved.</p>
          <p>Demo dashboards use synthetic data only.</p>
        </div>
      </V3Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  extra
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
  extra?: ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={`${title}-${link.href}-${link.label}`}>
            <Link href={link.href} className="text-slate-400 transition hover:text-cyan-200">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {extra}
    </div>
  );
}

export function BrandMark() {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 text-cyan-200">
      <BarChart3 aria-hidden="true" className="h-5 w-5" />
    </span>
  );
}

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({ eyebrow, title, body, align = "left", className }: SectionIntroProps) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{body}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  children
}: {
  eyebrow?: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050914]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(148,163,184,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:40px_40px]"
      />
      <V3Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>
          ) : null}
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{body}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </V3Container>
    </section>
  );
}

export function SectionBand({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cx("py-16 sm:py-20", className)}>{children}</section>;
}

export function InfoCard({
  title,
  body,
  icon: Icon,
  className
}: {
  title: string;
  body: string;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <article className={cx("rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]", className)}>
      {Icon ? (
        <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
    </article>
  );
}

export function ServiceCard({ service, detailed = false }: { service: (typeof services)[number]; detailed?: boolean }) {
  const Icon = service.icon;

  return (
    <article id={slugify(service.title)} className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
          Enquiry based
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm font-semibold text-cyan-200">{service.bestFor}</p>
      <p className="mt-4 text-sm leading-6 text-slate-300">{service.description}</p>

      <div className={cx("mt-6 grid gap-5", detailed && "lg:grid-cols-3")}>
        <Checklist title="Includes" items={service.includes} />
        {detailed ? <Checklist title="Problems it solves" items={service.problemsSolved} /> : null}
        {detailed ? (
          <div>
            <p className="text-sm font-semibold text-white">Typical output</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{service.output}</p>
          </div>
        ) : null}
      </div>

      <ButtonLink href={`${v3Site.basePath}/contact`} variant="secondary" className="mt-6">
        {service.cta}
      </ButtonLink>
    </article>
  );
}

export function CaseStudyCard({ study }: { study: (typeof caseStudies)[number] }) {
  const Icon = study.icon;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <SyntheticBadge />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{study.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{study.description}</p>
      <Checklist title="Key dashboard areas" items={study.areas} className="mt-6" />
      <ButtonLink href={study.href} variant="secondary" className="mt-6">
        {study.cta}
      </ButtonLink>
    </article>
  );
}

export function Checklist({
  title,
  items,
  className
}: {
  title?: string;
  items: readonly string[];
  className?: string;
}) {
  return (
    <div className={className}>
      {title ? <p className="text-sm font-semibold text-white">{title}</p> : null}
      <ul className={cx("space-y-2", title && "mt-3")}>
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
            <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SyntheticBadge() {
  return (
    <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
      Synthetic data
    </span>
  );
}

export function SyntheticDataNote({ className }: { className?: string }) {
  return (
    <div className={cx("rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-50", className)}>
      <p className="font-semibold">Demo projects use synthetic data only.</p>
      <p className="mt-1 text-emerald-100/90">No real student, patient or business data is used.</p>
    </div>
  );
}

export function DashboardMockup({ className }: { className?: string }) {
  const kpis = [
    { label: "Bookings", value: "428", note: "+12%" },
    { label: "No-show risk", value: "7.8%", note: "Watch" },
    { label: "Report time", value: "2h", note: "Down" }
  ];
  const bars = [
    { label: "Enquiries", width: "78%" },
    { label: "Attendance", width: "64%" },
    { label: "Revenue", width: "86%" },
    { label: "Retention", width: "58%" }
  ];

  return (
    <div className={cx("rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)]", className)}>
      <div className="rounded-2xl border border-white/10 bg-[#07111f] p-4">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Reporting view</p>
            <p className="mt-1 text-lg font-semibold text-white">From messy reports to clear decisions</p>
          </div>
          <div className="hidden rounded-full border border-cyan-300/30 px-3 py-1 text-xs font-semibold text-cyan-100 sm:block">
            Weekly refresh
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-xs font-medium text-slate-400">{kpi.label}</p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="text-2xl font-bold text-white">{kpi.value}</p>
                <span className="rounded-full bg-cyan-300/10 px-2 py-1 text-xs font-semibold text-cyan-100">{kpi.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.78fr]">
          <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Performance trend</p>
              <LineIcon />
            </div>
            <div className="mt-5 flex h-36 items-end gap-2">
              {[40, 54, 48, 66, 73, 58, 82, 76].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-md bg-cyan-300/70"
                  style={{ height: `${height}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Action points</p>
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-cyan-200" />
            </div>
            <ul className="mt-4 space-y-3">
              {[
                "Follow up high-value enquiries within 24 hours",
                "Review services with rising no-shows",
                "Move weekly report into automated refresh"
              ].map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-slate-950/50 p-3 text-xs leading-5 text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.045] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Database aria-hidden="true" className="h-4 w-4 text-cyan-200" />
            Messy sources brought together
          </div>
          <div className="mt-4 space-y-3">
            {bars.map((bar) => (
              <div key={bar.label} className="grid grid-cols-[7rem_1fr] items-center gap-3 text-xs text-slate-300">
                <span>{bar.label}</span>
                <span className="h-2 overflow-hidden rounded-full bg-white/10">
                  <span className="block h-full rounded-full bg-cyan-300" style={{ width: bar.width }} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LineIcon() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-cyan-200" fill="none">
        <path d="M4 16L9 11L13 14L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function FAQList({ faqs }: { faqs: readonly { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.045]">
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-5 open:bg-white/[0.03]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
            {faq.question}
            <span className="text-cyan-200 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-slate-300">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <V3Container>
        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8 text-center shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Free audit</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to understand what your business data is really telling you?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
            Book a free data/reporting audit and get a clearer view of your current reports, data sources, pain points
            and opportunities.
          </p>
          <ButtonLink href={`${v3Site.basePath}/contact`} className="mt-7">
            {v3Site.primaryCta}
          </ButtonLink>
        </div>
      </V3Container>
    </section>
  );
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
