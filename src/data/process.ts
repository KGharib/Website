import { Bot, ClipboardCheck, DatabaseZap, Gauge, Hammer, LineChart, Presentation, Rocket } from "lucide-react";

export const processSteps = [
  {
    title: "Check the Current State",
    description:
      "Review your data sources, reports, spreadsheet workflows, and decision points to find the highest-value fixes.",
    icon: ClipboardCheck
  },
  {
    title: "Define the Right KPIs",
    description:
      "Translate business goals into clear measures, definitions, ownership, and reporting priorities.",
    icon: Gauge
  },
  {
    title: "Clean and Connect the Data",
    description:
      "Build the SQL, Python, warehouse, or workflow layer needed to make reporting repeatable.",
    icon: Hammer
  },
  {
    title: "Build the Reporting Experience",
    description:
      "Create dashboards and reporting views that are easy to scan, explain, and trust.",
    icon: Presentation
  },
  {
    title: "Launch and Handover",
    description:
      "Document the solution, train users, and leave you with practical next steps for ongoing improvement.",
    icon: Rocket
  }
] as const;

export const transformations = [
  {
    title: "Automation",
    from: "Excel reports updated by hand",
    to: "Dashboards that refresh from trusted data",
    beforeMetric: "3-4 hrs",
    beforeLabel: "spent each week populating spreadsheets",
    afterMetric: "0 hrs",
    afterLabel: "spent manually rebuilding the same report",
    outcome:
      "Your team gets current numbers sooner, so decisions are made at the right time instead of after the opportunity has passed.",
    icon: Bot
  },
  {
    title: "Data Trust",
    from: "Multiple versions of the same number",
    to: "One agreed view of performance",
    beforeMetric: "Too many",
    beforeLabel: "spreadsheet versions and KPI definitions",
    afterMetric: "1 view",
    afterLabel: "of the truth for weekly decisions",
    outcome:
      "Meetings move away from debating the numbers and toward deciding what action to take next.",
    icon: DatabaseZap
  },
  {
    title: "Performance Visibility",
    from: "Static monthly reports",
    to: "Live KPI tracking and trend visibility",
    beforeMetric: "Late",
    beforeLabel: "signals when performance changes",
    afterMetric: "Early",
    afterLabel: "warning signs and clearer priorities",
    outcome:
      "You can spot customer, revenue, or operational changes while there is still time to respond.",
    icon: LineChart
  },
  {
    title: "Decision Rhythm",
    from: "Ad hoc questions and one-off requests",
    to: "A repeatable reporting rhythm",
    beforeMetric: "Reactive",
    beforeLabel: "answers built only when someone asks",
    afterMetric: "Proactive",
    afterLabel: "insights delivered before the next decision",
    outcome:
      "Teams get used to seeing the right information regularly, which makes action faster and more confident.",
    icon: Gauge
  }
] as const;
