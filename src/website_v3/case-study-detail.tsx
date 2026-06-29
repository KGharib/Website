import {
  ButtonLink,
  Checklist,
  DashboardMockup,
  PageHero,
  SectionBand,
  SectionIntro,
  SyntheticDataNote,
  V3Container
} from "./components";
import type { caseStudies } from "./content";
import { v3Site } from "./content";

type CaseStudy = (typeof caseStudies)[number];

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <>
      <PageHero eyebrow="Synthetic demo project" title={study.title} body={study.scenario}>
        <div className="flex flex-col gap-4">
          <SyntheticDataNote className="max-w-xl" />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`${v3Site.basePath}/contact`}>{v3Site.primaryCta}</ButtonLink>
            <ButtonLink href={`${v3Site.basePath}/case-studies`} variant="secondary">
              Back to case studies
            </ButtonLink>
          </div>
        </div>
      </PageHero>

      <SectionBand>
        <V3Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Problem"
              title="Useful data exists, but simple questions are hard to answer quickly."
              body="The dashboard concept is designed to turn scattered operational data into practical views that support weekly and monthly decisions."
            />
            <Checklist title="Questions this dashboard should answer" items={study.problemQuestions} className="mt-8" />
          </div>
          <DashboardMockup />
        </V3Container>
      </SectionBand>

      <SectionBand className="bg-[#07111f]">
        <V3Container>
          <SectionIntro
            eyebrow="Dashboard sections"
            title="A clear structure from executive summary to recommended actions."
            body="The goal is not to create a busy reporting pack. The dashboard should focus on the decisions the owner or manager needs to make."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.dashboardSections.map((section) => (
              <article key={section} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <h3 className="text-base font-semibold text-white">{section}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  A practical view designed to make the underlying performance pattern easier to understand.
                </p>
              </article>
            ))}
          </div>
        </V3Container>
      </SectionBand>

      <SectionBand>
        <V3Container className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Tools section</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Tools are selected around the reporting need.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">{study.tools}</p>
          </div>
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6">
            <h2 className="text-2xl font-bold text-white">Ready to map your version?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              The first step is a free audit of your current data sources, reports and pain points.
            </p>
            <ButtonLink href={`${v3Site.basePath}/contact`} className="mt-6">
              {v3Site.primaryCta}
            </ButtonLink>
          </div>
        </V3Container>
      </SectionBand>
    </>
  );
}
