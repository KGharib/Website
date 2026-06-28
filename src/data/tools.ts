export const toolGroups = [
  {
    title: "BI and Dashboards",
    tools: ["Power BI", "Tableau", "Executive KPI reporting", "Dashboard catalogues"]
  },
  {
    title: "Data and Engineering",
    tools: ["SQL", "Python", "AWS-hosted datasets", "BigQuery", "Redshift", "Data warehouses"]
  },
  {
    title: "Analytics Methods",
    tools: ["Forecasting", "Customer segmentation", "Hypothesis testing", "NLP", "Data quality checks"]
  },
  {
    title: "Business Delivery",
    tools: ["Stakeholder discovery", "Insight storytelling", "Process automation", "Non-technical handover"]
  }
] as const;

export const metrics = [
  { value: "5+", label: "Years across data, BI, and analytics delivery" },
  { value: "4", label: "Industries supported, including healthcare and public sector" },
  { value: "7+", label: "End-to-end analytics and machine learning projects" }
] as const;
