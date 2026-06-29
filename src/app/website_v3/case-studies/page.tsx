import type { Metadata } from "next";
import {
  ButtonLink,
  CaseStudyCard,
  PageHero,
  SectionBand,
  SyntheticDataNote,
  V3Container
} from "@/website_v3/components";
import { caseStudies, v3Site } from "@/website_v3/content";

export const metadata: Metadata = {
  title: "Case Studies | Gharib Analytics",
  description:
    "Synthetic demo dashboard projects showing how clinics and education businesses can turn scattered data into clear reporting and action points."
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Example dashboard projects showing how data becomes action."
        body="These demo projects show how scattered operational data can be turned into practical KPI views, reporting automation and recommended actions."
      >
        <SyntheticDataNote className="max-w-xl" />
      </PageHero>

      <SectionBand>
        <V3Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-center">
            <p className="text-lg font-semibold text-white">Want to see what this could look like for your business?</p>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              A free data/reporting audit is the safest first step. We can review your current data sources and identify
              what kind of dashboard would be useful.
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
