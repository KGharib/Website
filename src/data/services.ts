import {
  BarChart3,
  Bot,
  Database,
  LineChart,
  Megaphone,
  UsersRound
} from "lucide-react";

export const services = [
  {
    title: "Dashboards That Leaders Trust",
    summary:
      "Power BI and Tableau dashboards that make performance, trends, and risks easy to understand.",
    outcome: "Clear KPIs, cleaner decision meetings, and fewer spreadsheet debates.",
    icon: BarChart3,
    points: ["Power BI and Tableau", "KPI design", "Executive reporting"]
  },
  {
    title: "Automated Reporting",
    summary:
      "Replace repeated manual reporting with repeatable SQL, Python, and workflow automation.",
    outcome: "Faster reporting cycles and more time spent acting on insights.",
    icon: Bot,
    points: ["Python automation", "Scheduled outputs", "Month-end reporting"]
  },
  {
    title: "Data Clean-Up and Trust Layer",
    summary:
      "Turn messy, duplicated, or inconsistent datasets into usable foundations for reporting.",
    outcome: "More confidence in the numbers and fewer manual fixes downstream.",
    icon: Database,
    points: ["SQL transformation", "Data quality checks", "Warehouse support"]
  },
  {
    title: "Marketing and Ads Analytics",
    summary:
      "Analyse campaign, channel, and customer data to reveal what is working and where spend is leaking.",
    outcome: "Better ROI decisions, clearer attribution, and more useful customer insight.",
    icon: Megaphone,
    points: ["Campaign reporting", "Customer segmentation", "Ads performance"]
  },
  {
    title: "Forecasting and KPI Tracking",
    summary:
      "Forecast performance and track the leading indicators that help teams plan with more confidence.",
    outcome: "Better planning conversations and earlier visibility of risk.",
    icon: LineChart,
    points: ["Forecast models", "Trend analysis", "Performance monitoring"]
  },
  {
    title: "Analytics Support for Non-Technical Teams",
    summary:
      "Translate business questions into practical data solutions that teams can actually use.",
    outcome: "Stakeholders understand the story behind the numbers and know what to do next.",
    icon: UsersRound,
    points: ["Stakeholder discovery", "Insight storytelling", "Handover sessions"]
  }
] as const;
