import type { Metadata } from "next";
import { CaseStudyDetail } from "@/website_v3/case-study-detail";
import { caseStudies } from "@/website_v3/content";

const study = caseStudies[1];

export const metadata: Metadata = {
  title: "Clinic Performance Dashboard | Gharib Analytics",
  description:
    "A synthetic demo dashboard project for clinics tracking bookings, no-shows, service revenue, demand patterns and utilisation."
};

export default function ClinicCaseStudyPage() {
  return <CaseStudyDetail study={study} />;
}
