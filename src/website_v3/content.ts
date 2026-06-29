import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRightLeft,
  BarChart3,
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Database,
  GraduationCap,
  HeartPulse,
  LineChart,
  Mail,
  MapPinned,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Table2,
  UsersRound
} from "lucide-react";

export const v3Site = {
  basePath: "/website_v3",
  brandName: "Gharib Analytics",
  founderName: "Khalid Gharib",
  email: "hello@gharibanalytics.com",
  currentEmail: "Khalid.mgharib@gmail.com",
  location: "London, UK",
  primaryCta: "Book a free data/reporting audit",
  secondaryCta: "View example dashboards",
  description:
    "Gharib Analytics helps clinics, education providers and local service businesses turn scattered data into clear dashboards, automated reports and practical business insights.",
  navLinks: [
    { label: "Home", href: "/website_v3" },
    { label: "Services", href: "/website_v3/services" },
    { label: "Case Studies", href: "/website_v3/case-studies" },
    { label: "Industries", href: "/website_v3/industries" },
    { label: "About", href: "/website_v3/about" }
  ],
  footerLinks: [
    { label: "Home", href: "/website_v3" },
    { label: "Services", href: "/website_v3/services" },
    { label: "Case Studies", href: "/website_v3/case-studies" },
    { label: "Industries", href: "/website_v3/industries" },
    { label: "About", href: "/website_v3/about" },
    { label: "Book Audit", href: "/website_v3/contact" }
  ]
} as const;

export type IconContent = {
  icon: LucideIcon;
};

export const painPoints = [
  {
    title: "Reports take too long",
    body: "Manual spreadsheets, copy/paste work and disconnected systems slow down decision-making.",
    icon: CalendarClock
  },
  {
    title: "You cannot see what is working",
    body: "Bookings, enquiries, sales, attendance and revenue are spread across too many places.",
    icon: LineChart
  },
  {
    title: "Decisions rely on gut feeling",
    body: "Without trusted KPIs, it is hard to know where to focus, what to fix and what to grow.",
    icon: Sparkles
  },
  {
    title: "Your tools do not speak to each other",
    body: "Data may exist in booking systems, spreadsheets, finance tools, CRMs and marketing platforms.",
    icon: ArrowRightLeft
  }
] as const;

export const audiences = [
  {
    title: "Clinics & healthcare businesses",
    body: "Track bookings, no-shows, service demand, revenue trends and staff utilisation.",
    icon: HeartPulse
  },
  {
    title: "Education & training providers",
    body: "Monitor enquiries, enrolments, attendance, student progress, course performance and retention.",
    icon: GraduationCap
  },
  {
    title: "Local service businesses",
    body: "Understand leads, bookings, repeat customers, marketing performance and revenue patterns.",
    icon: MapPinned
  }
] as const;

export const services = [
  {
    title: "Data & Reporting Audit",
    bestFor: "Best for businesses unsure where to start.",
    description:
      "A practical review of your current reports, spreadsheets, systems and KPIs to identify quick wins and create a clear reporting roadmap.",
    includes: [
      "Review current reports and spreadsheets",
      "Identify missing KPIs",
      "Find manual reporting pain points",
      "Recommend quick wins",
      "Create a reporting roadmap"
    ],
    problemsSolved: [
      "Unclear reporting priorities",
      "Manual spreadsheet processes",
      "Too many versions of the truth"
    ],
    output: "A plain-English audit summary, quick wins list and reporting roadmap.",
    cta: "Start with an audit",
    icon: ClipboardList
  },
  {
    title: "Dashboard Build",
    bestFor: "Best for businesses that need one trusted view of performance.",
    description:
      "A tailored dashboard designed around the numbers that matter most to your business.",
    includes: [
      "KPI design",
      "Data cleaning and modelling",
      "Power BI, Looker Studio or Tableau dashboard",
      "Dashboard walkthrough",
      "Handover guidance"
    ],
    problemsSolved: [
      "Scattered performance data",
      "Hard-to-read reports",
      "Slow decision meetings"
    ],
    output: "A clear dashboard with core KPIs, charts, filters and action-focused views.",
    cta: "Build a dashboard",
    icon: BarChart3
  },
  {
    title: "Reporting Automation",
    bestFor: "Best for businesses spending too much time on manual reporting.",
    description:
      "Reduce repetitive reporting work by connecting, cleaning and refreshing data automatically.",
    includes: [
      "Connect data sources",
      "Clean recurring files",
      "Automate refreshes",
      "Reduce copy/paste reporting",
      "Improve reporting consistency"
    ],
    problemsSolved: [
      "Repeated copy/paste work",
      "Late reports",
      "Inconsistent recurring outputs"
    ],
    output: "A repeatable reporting workflow that refreshes cleaner data with less manual effort.",
    cta: "Automate reports",
    icon: RefreshCcw
  },
  {
    title: "Monthly Insight Partner",
    bestFor: "Best for businesses that want ongoing support.",
    description:
      "Ongoing reporting support, dashboard improvements and practical recommendations based on your business data.",
    includes: [
      "Monthly dashboard review",
      "KPI commentary",
      "Action recommendations",
      "Small improvements",
      "Ad-hoc analysis"
    ],
    problemsSolved: [
      "No regular data support",
      "Dashboards that need refining",
      "Questions that change month to month"
    ],
    output: "Monthly insight notes, dashboard refinements and practical recommendations.",
    cta: "Get ongoing support",
    icon: UsersRound
  }
] as const;

export const caseStudies = [
  {
    slug: "education-centre-growth-dashboard",
    title: "Education Centre Growth Dashboard",
    href: "/website_v3/case-studies/education-centre-growth-dashboard",
    description:
      "A demo project showing how a tutoring or training centre can track enquiries, enrolments, attendance, course revenue, tutor utilisation and student retention.",
    areas: [
      "Enquiries and conversion",
      "Student attendance",
      "Course performance",
      "Revenue trends",
      "Tutor utilisation",
      "Retention risks",
      "Action list"
    ],
    cta: "View education dashboard",
    icon: BookOpenCheck,
    scenario:
      "A growing tutoring or training centre is managing enquiries, attendance, revenue and tutor schedules across multiple spreadsheets and systems.",
    problemQuestions: [
      "Which enquiry sources convert best?",
      "Which courses generate the most revenue?",
      "Which students are at risk of dropping off?",
      "Which tutors or classes are most utilised?",
      "What is attendance like over time?"
    ],
    dashboardSections: [
      "Executive summary",
      "Enquiries and conversion",
      "Student attendance",
      "Course revenue",
      "Tutor utilisation",
      "Student retention",
      "Recommended actions"
    ],
    tools:
      "Power BI or Looker Studio, Excel/CSV data, SQL or Python for cleaning depending on implementation."
  },
  {
    slug: "clinic-performance-dashboard",
    title: "Clinic Performance Dashboard",
    href: "/website_v3/case-studies/clinic-performance-dashboard",
    description:
      "A demo project showing how a clinic can monitor bookings, no-shows, service revenue, patient demand, staff utilisation and customer sources.",
    areas: [
      "Bookings",
      "No-shows",
      "Service revenue",
      "Demand by day and time",
      "Staff or room utilisation",
      "Customer source analysis",
      "Action list"
    ],
    cta: "View clinic dashboard",
    icon: Activity,
    scenario:
      "A clinic is managing bookings, no-shows, service revenue, patient/customer sources and staff utilisation across different systems and reports.",
    problemQuestions: [
      "Weekly bookings",
      "Missed appointments",
      "Service revenue",
      "Demand by day and time",
      "Staff or room utilisation",
      "Patient/customer source",
      "Repeat visit patterns"
    ],
    dashboardSections: [
      "Executive summary",
      "Bookings and no-shows",
      "Service revenue",
      "Demand patterns",
      "Staff/room utilisation",
      "Customer source analysis",
      "Recommended actions"
    ],
    tools:
      "Power BI or Looker Studio, booking exports, spreadsheet data, SQL or Python for cleaning depending on implementation."
  }
] as const;

export const processSteps = [
  {
    title: "Discover",
    body: "Understand your business, current reports, tools, data sources and pain points."
  },
  {
    title: "Define",
    body: "Agree the key questions, KPIs and decisions the dashboard needs to support."
  },
  {
    title: "Build",
    body: "Clean, connect and structure the data, then design a clear dashboard or automated report."
  },
  {
    title: "Handover",
    body: "Walk you through the solution, explain how to use it and provide simple documentation."
  },
  {
    title: "Improve",
    body: "Refine the dashboard as your business changes and new questions appear."
  }
] as const;

export const trustPoints = [
  "Senior BI/Data Analyst experience",
  "Healthcare, public sector and business reporting background",
  "Power BI, Looker, Tableau, SQL and Python",
  "Dashboard design and KPI development",
  "Reporting automation",
  "Practical, plain-English communication"
] as const;

export const faqs = [
  {
    question: "Do I need clean data already?",
    answer:
      "No. Many projects start with messy spreadsheets, exports and disconnected reports. Part of the work is understanding, cleaning and structuring the data."
  },
  {
    question: "What tools do you use?",
    answer:
      "I can work with Power BI, Looker Studio, Tableau, Excel, Google Sheets, SQL, Python and other tools depending on your business needs."
  },
  {
    question: "Is this only for large businesses?",
    answer:
      "No. Gharib Analytics is designed for small and growing businesses that need better reporting without hiring a full-time analyst."
  },
  {
    question: "Can you work with sensitive data?",
    answer:
      "Yes, but sensitive data needs to be handled carefully. Demo projects use synthetic data only, and real client projects should follow clear privacy and access rules."
  },
  {
    question: "What is the first step?",
    answer:
      "The best first step is a data/reporting audit to understand your current reports, data sources, pain points and opportunities."
  }
] as const;

export const industries = [
  {
    title: "Clinics and healthcare businesses",
    commonSources: ["Booking exports", "Treatment/service records", "Finance reports", "Staff schedules", "Marketing enquiries"],
    commonProblems: ["No-show visibility", "Demand planning", "Service profitability", "Staff or room utilisation"],
    usefulKpis: ["Bookings", "No-show rate", "Revenue by service", "Utilisation", "Customer source"],
    questions: ["Which services are growing?", "When are appointments being missed?", "Where is demand strongest?"],
    icon: HeartPulse
  },
  {
    title: "Education and training providers",
    commonSources: ["Enquiry spreadsheets", "Student records", "Attendance logs", "Course registers", "Tutor schedules"],
    commonProblems: ["Enquiry follow-up", "Attendance tracking", "Retention risk", "Course performance"],
    usefulKpis: ["Enquiry conversion", "Attendance rate", "Revenue by course", "Tutor utilisation", "Retention risk"],
    questions: ["Which courses convert best?", "Which students need follow-up?", "Which tutors are fully utilised?"],
    icon: GraduationCap
  },
  {
    title: "Local service and appointment-based businesses",
    commonSources: ["Bookings", "CRM exports", "Payment tools", "Email marketing", "Customer lists"],
    commonProblems: ["Lead tracking", "Repeat customer visibility", "Manual reporting", "Channel performance"],
    usefulKpis: ["Leads", "Bookings", "Repeat rate", "Average revenue", "Channel conversion"],
    questions: ["Which channels produce useful leads?", "Which customers are drifting?", "What drives repeat bookings?"],
    icon: MapPinned
  },
  {
    title: "Fitness and wellness businesses",
    commonSources: ["Membership systems", "Class bookings", "Attendance logs", "Payments", "Campaign reports"],
    commonProblems: ["Retention risk", "Class demand", "Membership trends", "Marketing ROI"],
    usefulKpis: ["Member retention", "Class utilisation", "Revenue by product", "Lead conversion"],
    questions: ["Which classes are underused?", "Who is at risk of leaving?", "Which campaigns bring valuable members?"],
    icon: Activity
  },
  {
    title: "Restaurants and hospitality",
    commonSources: ["POS exports", "Bookings", "Delivery platforms", "Stock reports", "Customer feedback"],
    commonProblems: ["Menu performance", "Peak demand", "Labour planning", "Repeat visits"],
    usefulKpis: ["Sales mix", "Average order value", "Repeat rate", "Table utilisation"],
    questions: ["Which items drive margin?", "When is demand strongest?", "Which customers come back?"],
    icon: Table2,
    secondary: true
  }
] as const;

export const toolStack = [
  "Power BI",
  "Looker Studio",
  "Tableau",
  "SQL",
  "Python",
  "Excel",
  "Google Sheets",
  "APIs and data exports"
] as const;

export const contactFields = [
  "Name",
  "Business name",
  "Email",
  "Industry",
  "What are you currently struggling with?",
  "What tools or systems do you currently use?",
  "Preferred contact method"
] as const;

export const auditOutcomes = [
  {
    title: "Map your current reporting",
    body: "Review the spreadsheets, exports, dashboards and systems you already use.",
    icon: Database
  },
  {
    title: "Find the quick wins",
    body: "Identify where clearer KPIs, cleaner data or automation could save time.",
    icon: CheckCircle2
  },
  {
    title: "Recommend the next step",
    body: "Leave with practical options, whether that is an audit roadmap, a dashboard or automation.",
    icon: ShieldCheck
  },
  {
    title: "Follow up clearly",
    body: "Get plain-English guidance on what would make your reporting more useful.",
    icon: Mail
  }
] as const;
