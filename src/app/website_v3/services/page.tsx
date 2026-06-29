import type { Metadata } from "next";
import {
  ButtonLink,
  PageHero,
  SectionBand,
  SectionIntro,
  ServiceCard,
  V3Container
} from "@/website_v3/components";
import { services, v3Site } from "@/website_v3/content";

export const metadata: Metadata = {
  title: "Services | Gharib Analytics",
  description:
    "Practical analytics services for small businesses, including reporting audits, dashboard builds, reporting automation and monthly insight support."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical analytics services built around your business questions."
        body="Choose the support that fits where your reporting is today. No fixed pricing yet - each project starts with the business question, current data and practical output needed."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`${v3Site.basePath}/contact`}>Book a free data/reporting audit</ButtonLink>
          <ButtonLink href={`${v3Site.basePath}/case-studies`} variant="secondary">
            View example dashboards
          </ButtonLink>
        </div>
      </PageHero>

      <SectionBand>
        <V3Container>
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-lg font-semibold text-white">Not sure what you need yet?</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Start with a data/reporting audit. It is designed to make the next step clearer before committing to a
              dashboard build, automation project or ongoing support.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} detailed />
            ))}
          </div>
        </V3Container>
      </SectionBand>

      <SectionBand className="bg-[#07111f]">
        <V3Container>
          <SectionIntro
            eyebrow="How services are scoped"
            title="The right solution depends on your data, decisions and reporting rhythm."
            body="Some businesses need a quick reporting roadmap. Others need one trusted dashboard or an automated monthly workflow. The first conversation is about understanding the current mess and choosing the smallest useful next step."
            align="center"
          />
          <div className="mt-8 text-center">
            <ButtonLink href={`${v3Site.basePath}/contact`}>{v3Site.primaryCta}</ButtonLink>
          </div>
        </V3Container>
      </SectionBand>
    </>
  );
}
