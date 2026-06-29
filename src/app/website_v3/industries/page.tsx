import type { Metadata } from "next";
import {
  ButtonLink,
  Checklist,
  PageHero,
  SectionBand,
  SectionIntro,
  V3Container
} from "@/website_v3/components";
import { industries, v3Site } from "@/website_v3/content";

export const metadata: Metadata = {
  title: "Industries | Gharib Analytics",
  description:
    "Analytics and reporting support for clinics, education providers, local service businesses, fitness and wellness businesses, and later hospitality use cases."
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Analytics support for businesses where bookings, enquiries and service performance matter."
        body="Gharib Analytics is focused on small and growing businesses that already have useful data, but need clearer reporting and practical decision support."
      >
        <ButtonLink href={`${v3Site.basePath}/contact`}>{v3Site.primaryCta}</ButtonLink>
      </PageHero>

      <SectionBand>
        <V3Container>
          <SectionIntro
            eyebrow="Where reporting clarity helps"
            title="Each industry has different systems, but the core challenge is often the same."
            body="Data sits in bookings, spreadsheets, payments, enquiry forms and operational tools. The job is to bring the important pieces together around useful questions."
          />
          <div className="mt-10 grid gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article key={industry.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <div>
                          <h2 className="text-xl font-semibold text-white">{industry.title}</h2>
                          {"secondary" in industry && industry.secondary ? (
                            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                              Later / secondary use case
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-6 text-slate-300">
                        Useful dashboards should connect the data sources your team already uses with the questions that
                        guide weekly and monthly decisions.
                      </p>
                      <ButtonLink href={`${v3Site.basePath}/contact`} variant="secondary" className="mt-5">
                        Discuss this industry
                      </ButtonLink>
                    </div>

                    <div className="grid flex-1 gap-5 md:grid-cols-2">
                      <Checklist title="Common data sources" items={industry.commonSources} />
                      <Checklist title="Common problems" items={industry.commonProblems} />
                      <Checklist title="Useful KPIs" items={industry.usefulKpis} />
                      <Checklist title="Example dashboard questions" items={industry.questions} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </V3Container>
      </SectionBand>
    </>
  );
}
