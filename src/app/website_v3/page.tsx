import type { Metadata } from "next";
import {
  ButtonLink,
  CaseStudyCard,
  Checklist,
  DashboardMockup,
  FAQList,
  FinalCTA,
  InfoCard,
  SectionBand,
  SectionIntro,
  ServiceCard,
  SyntheticDataNote,
  V3Container
} from "@/website_v3/components";
import {
  audiences,
  caseStudies,
  faqs,
  painPoints,
  processSteps,
  services,
  trustPoints,
  v3Site
} from "@/website_v3/content";

export const metadata: Metadata = {
  title: "Gharib Analytics | Data Dashboards & Reporting Automation for Small Businesses",
  description:
    "Gharib Analytics helps clinics, education providers and local service businesses turn scattered data into clear dashboards, automated reports and practical business insights."
};

export default function WebsiteV3HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#050914]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(148,163,184,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:40px_40px]"
        />
        <V3Container className="relative grid min-h-[calc(100vh-65px)] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Data clarity for clinics, education providers and local service businesses
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn scattered business data into clear dashboards, automated reports and better decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Gharib Analytics helps clinics, education providers and local service businesses understand their
              performance, reduce manual reporting and uncover practical opportunities for growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`${v3Site.basePath}/contact`}>{v3Site.primaryCta}</ButtonLink>
              <ButtonLink href={`${v3Site.basePath}/case-studies`} variant="secondary">
                {v3Site.secondaryCta}
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {["No full-time analyst needed", "Low-risk first audit", "Synthetic demo data only"].map((item) => (
                <div key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <DashboardMockup />
        </V3Container>
      </section>

      <SectionBand className="bg-[#07111f]">
        <V3Container>
          <SectionIntro
            eyebrow="The reporting problem"
            title="Most small businesses already have useful data - it is just scattered."
            body="Your bookings, enquiries, sales, attendance, customer records, spreadsheets and reports may already hold answers to important questions. The problem is that the information is often spread across too many tools, updated manually, or difficult to trust."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point) => (
              <InfoCard key={point.title} title={point.title} body={point.body} icon={point.icon} />
            ))}
          </div>
        </V3Container>
      </SectionBand>

      <SectionBand>
        <V3Container>
          <SectionIntro
            eyebrow="Who I help"
            title="Analytics support for businesses that need clarity, not complexity."
            body="The work is built for teams that already have systems and reports, but need a clearer way to understand performance and act on the numbers."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {audiences.map((audience) => (
              <InfoCard key={audience.title} title={audience.title} body={audience.body} icon={audience.icon} />
            ))}
          </div>
        </V3Container>
      </SectionBand>

      <SectionBand className="bg-[#07111f]">
        <V3Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Services"
              title="Practical analytics services built around your business questions."
              body="Start with the reporting problem, then choose the right mix of audit, dashboard build, automation or ongoing insight support."
            />
            <ButtonLink href={`${v3Site.basePath}/services`} variant="secondary" className="w-fit">
              Explore services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </V3Container>
      </SectionBand>

      <SectionBand>
        <V3Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Example dashboard projects"
              title="Example projects showing how data becomes action."
              body="These demo projects show the type of practical reporting clarity a small business can build from booking, enquiry, attendance and revenue data."
            />
            <SyntheticDataNote className="lg:max-w-sm" />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </V3Container>
      </SectionBand>

      <SectionBand className="bg-[#07111f]">
        <V3Container>
          <SectionIntro
            eyebrow="Process"
            title="A simple process from messy data to clear decisions."
            body="The work stays practical at every step, with clear definitions, handover and room to improve as the business changes."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.body}</p>
              </article>
            ))}
          </div>
        </V3Container>
      </SectionBand>

      <SectionBand>
        <V3Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            eyebrow="Why work with me"
            title="Senior data experience, made practical for small businesses."
            body="Gharib Analytics is led by Khalid Gharib, a senior data and BI analyst with experience across healthcare, public sector, media and business reporting. I work across Power BI, Looker, Tableau, SQL, Python and modern reporting tools, but my focus is simple: helping businesses turn messy data into clear decisions."
          />
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
            <Checklist title="Trust points" items={trustPoints} />
          </div>
        </V3Container>
      </SectionBand>

      <SectionBand className="bg-[#07111f]">
        <V3Container>
          <SectionIntro eyebrow="FAQ" title="Questions small businesses usually ask first." align="center" />
          <FAQList faqs={faqs} />
        </V3Container>
      </SectionBand>

      <FinalCTA />
    </>
  );
}
