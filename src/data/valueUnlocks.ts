import { Clock3, LineChart, Megaphone, Repeat2, WalletCards } from "lucide-react";

export const valueUnlocks = [
  {
    title: "Customer Retention",
    shortProblem: "No clear view of who is drifting away.",
    withoutData:
      "Customer loss is spotted late, usually after revenue has already moved.",
    withData:
      "Spot inactive customers, repeat patterns, and follow-up gaps before they become bigger losses.",
    easyWins: [
      "Create a list of customers who have not returned within their usual window.",
      "Segment customers by value, channel, or service used.",
      "Trigger simple win-back actions before the customer is fully lost."
    ],
    example:
      "Practical easy win: build a simple at-risk customer list so follow-up happens before customers fully disappear.",
    metric: "Keep more customers",
    metricLabel: "Spot risk early. Follow up sooner.",
    icon: Repeat2
  },
  {
    title: "Revenue Clarity",
    shortProblem: "Sales are happening, but the real drivers are unclear.",
    withoutData:
      "Revenue is seen as one total, hiding what is actually driving growth.",
    withData:
      "Split performance by service, customer type, channel, and time period.",
    easyWins: [
      "Identify the offers with the strongest repeat revenue.",
      "Spot underperforming services before they drain attention.",
      "Prioritise the customer groups that are already proving valuable."
    ],
    example:
      "Practical easy win: focus time on the segments already showing stronger value.",
    metric: "Focus on what sells",
    metricLabel: "See the services, channels, and customers driving revenue.",
    icon: WalletCards
  },
  {
    title: "Marketing Performance",
    shortProblem: "Campaigns are active, but ROI is hard to explain.",
    withoutData:
      "Spend, leads, traffic, and sales are reviewed in separate places.",
    withData:
      "Connect the journey from campaign activity to useful leads and sales.",
    easyWins: [
      "Pause spend on low-converting campaigns.",
      "Push budget toward channels with better customer quality.",
      "Compare cost per lead with actual conversion outcomes."
    ],
    example:
      "Practical easy win: move spend away from weak channels and into what is already converting.",
    metric: "Spend with confidence",
    metricLabel: "Back the channels that are actually converting.",
    icon: Megaphone
  },
  {
    title: "Time Saved",
    shortProblem: "Reporting takes hours before anyone can act.",
    withoutData:
      "Hours go into copying, cleaning, and formatting the same reports.",
    withData:
      "Automated reporting refreshes repeatable views with less manual effort.",
    easyWins: [
      "Automate recurring spreadsheet clean-up.",
      "Standardise weekly or monthly report outputs.",
      "Spend reporting time explaining the numbers, not assembling them."
    ],
    example:
      "Practical easy win: spend reporting time explaining the numbers, not assembling them.",
    metric: "Hours back",
    metricLabel: "Less manual reporting. More time to act.",
    icon: Clock3
  },
  {
    title: "Decision Confidence",
    shortProblem: "Everyone has numbers, but nobody fully trusts them.",
    withoutData:
      "Different spreadsheets create different answers to the same question.",
    withData:
      "Shared KPIs give teams one trusted way to read performance.",
    easyWins: [
      "Agree one definition for key business metrics.",
      "Reduce duplicate spreadsheet versions.",
      "Give leaders one trusted view of performance."
    ],
    example:
      "Practical easy win: fewer number debates, faster decisions, clearer ownership.",
    metric: "One trusted view",
    metricLabel: "Less number-chasing. Faster decisions.",
    icon: LineChart
  }
] as const;
