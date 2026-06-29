import type { Metadata } from "next";
import Image from "next/image";
import {
  ButtonLink,
  Checklist,
  PageHero,
  SectionBand,
  SectionIntro,
  V3Container
} from "@/website_v3/components";
import { toolStack, trustPoints, v3Site } from "@/website_v3/content";

export const metadata: Metadata = {
  title: "About | Gharib Analytics",
  description:
    "Learn about Khalid Gharib, the senior data and BI analyst behind Gharib Analytics."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Senior data experience, made practical for small businesses."
        body="Gharib Analytics is led by Khalid Gharib, a senior data and BI analyst with experience across healthcare, public sector, media and business reporting."
      >
        <ButtonLink href={`${v3Site.basePath}/contact`}>{v3Site.primaryCta}</ButtonLink>
      </PageHero>

      <SectionBand>
        <V3Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/profile/khalid-gharib-profile.jpeg"
                alt="Khalid Gharib"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Founder / consultant"
              title="Helping smaller businesses access the reporting clarity larger organisations rely on."
              body="The goal is simple: help small and growing businesses access the kind of reporting clarity usually available to larger organisations, without needing to hire a full-time analyst."
            />
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-300">
              <p>
                I combine business understanding, dashboard design, data modelling and practical communication to help
                clients move from scattered reports to clearer decisions.
              </p>
              <p>
                Tools matter, but they are not the starting point. The starting point is understanding the decisions the
                business needs to make, then shaping the data and reporting around those questions.
              </p>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                <Checklist title="Experience and delivery" items={trustPoints} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                <Checklist title="Tools I can work with" items={toolStack} />
              </div>
            </div>
          </div>
        </V3Container>
      </SectionBand>
    </>
  );
}
