import type { Metadata } from "next";
import {
  ButtonLink,
  InfoCard,
  PageHero,
  SectionBand,
  SectionIntro,
  V3Container
} from "@/website_v3/components";
import { auditOutcomes, v3Site } from "@/website_v3/content";

export const metadata: Metadata = {
  title: "Book a Data Audit | Gharib Analytics",
  description:
    "Book a free data/reporting audit with Gharib Analytics to review your current reports, data sources, pain points and opportunities."
};

const inputClass =
  "mt-2 min-h-11 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book audit"
        title="Book a free data/reporting audit"
        body="Tell me about your business, your current reports, and where your data feels messy or unclear. I will review your situation and suggest the best next step."
      >
        <ButtonLink href={`mailto:${v3Site.email}`} variant="secondary">
          Email {v3Site.email}
        </ButtonLink>
      </PageHero>

      <SectionBand>
        <V3Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="What the audit covers"
              title="A practical first step with no pressure to overbuild."
              body="The aim is to understand what reports and systems you already have, where the friction is, and what would make the biggest difference first."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {auditOutcomes.map((item) => (
                <InfoCard key={item.title} title={item.title} body={item.body} icon={item.icon} />
              ))}
            </div>
          </div>

          <form
            action={`mailto:${v3Site.email}`}
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-white">
                Name
                <input className={inputClass} name="name" type="text" autoComplete="name" required />
              </label>
              <label className="text-sm font-semibold text-white">
                Business name
                <input className={inputClass} name="business_name" type="text" autoComplete="organization" required />
              </label>
              <label className="text-sm font-semibold text-white">
                Email
                <input className={inputClass} name="email" type="email" autoComplete="email" required />
              </label>
              <label className="text-sm font-semibold text-white">
                Industry
                <select className={inputClass} name="industry" defaultValue="">
                  <option value="" disabled>
                    Select an industry
                  </option>
                  <option>Clinic / healthcare</option>
                  <option>Education / training</option>
                  <option>Local service business</option>
                  <option>Fitness / wellness</option>
                  <option>Restaurant / hospitality</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold text-white">
              What are you currently struggling with?
              <textarea
                className={inputClass}
                name="current_struggle"
                rows={5}
                placeholder="For example: monthly reporting takes too long, bookings data is hard to trust, or KPIs are unclear."
                required
              />
            </label>

            <label className="mt-5 block text-sm font-semibold text-white">
              What tools or systems do you currently use?
              <textarea
                className={inputClass}
                name="current_tools"
                rows={4}
                placeholder="For example: Excel, Google Sheets, Cliniko, HubSpot, Xero, booking exports, CRM, Power BI."
              />
            </label>

            <label className="mt-5 block text-sm font-semibold text-white">
              Preferred contact method
              <select className={inputClass} name="preferred_contact" defaultValue="">
                <option value="" disabled>
                  Select a contact method
                </option>
                <option>Email</option>
                <option>Phone</option>
                <option>Video call</option>
              </select>
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cyan-300 bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_36px_rgba(103,232,249,0.2)] transition hover:bg-cyan-200"
            >
              Send audit request
            </button>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              Placeholder form action: this currently opens an email draft to {v3Site.email}. Replace it with a form
              endpoint before launch if preferred.
            </p>
          </form>
        </V3Container>
      </SectionBand>
    </>
  );
}
