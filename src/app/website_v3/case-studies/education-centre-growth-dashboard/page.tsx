import type { Metadata } from "next";
import { CaseStudyDetail } from "@/website_v3/case-study-detail";
import { caseStudies } from "@/website_v3/content";

const study = caseStudies[0];

export const metadata: Metadata = {
  title: "Education Centre Growth Dashboard | Gharib Analytics",
  description:
    "A synthetic demo dashboard project for tutoring and training providers tracking enquiries, enrolments, attendance, revenue and retention."
};

export default function EducationCaseStudyPage() {
  return <CaseStudyDetail study={study} />;
}
