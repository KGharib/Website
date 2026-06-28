export const projects = [
  {
    title: "Customer Segmentation for Holiday Campaigns",
    category: "Customer analysis",
    clientType: "Personal project",
    image: "/images/projects/caribbean-holiday.webp",
    alt: "Caribbean holiday project thumbnail",
    summary:
      "Used customer and campaign-style data to identify target groups for a Caribbean holiday tour.",
    businessValue:
      "Shows how segmentation can help smaller teams focus marketing spend on higher-potential audiences.",
    proofPoints: [
      "Cleaned and prepared customer data",
      "Built predictive and clustering workflows",
      "Translated outputs into campaign recommendations"
    ],
    url: "https://github.com/KGharib/Finding-Potential-Customers-to-advertise-Carribean-Holiday-Tour"
  },
  {
    title: "Life Expectancy Drivers",
    category: "Predictive analysis",
    clientType: "Personal project",
    image: "/images/projects/life-expectancy.png",
    alt: "Life expectancy data visualisation",
    summary:
      "Explored how social and environmental factors relate to life expectancy outcomes.",
    businessValue:
      "Demonstrates the ability to combine multiple datasets, test relationships, and explain drivers clearly.",
    proofPoints: [
      "Merged public datasets",
      "Explored health and environment indicators",
      "Communicated findings through visual analysis"
    ],
    url: "https://github.com/KGharib/How-does-Social-Environmental-factors-affect-Life-Expectancy-in-Counties-in-the-USA"
  },
  {
    title: "Amazon Review Sentiment Model",
    category: "NLP and machine learning",
    clientType: "Personal project",
    image: "/images/projects/amazon-sentiment.jpg",
    alt: "Natural language processing concept image",
    summary:
      "Built a sentiment analysis workflow for product reviews using text preprocessing and modelling.",
    businessValue:
      "Useful proof for teams that need to turn qualitative customer feedback into measurable signals.",
    proofPoints: [
      "Prepared review text for modelling",
      "Compared NLP approaches",
      "Reached strong prediction accuracy"
    ],
    url: "https://github.com/KGharib/Predicting-Sentiment-on-Amazon-Reviews"
  },
  {
    title: "Football Team Performance Analysis",
    category: "Data cleaning and analysis",
    clientType: "Personal project",
    image: "/images/projects/football-analysis.jpg",
    alt: "Football analysis project thumbnail",
    summary:
      "Analysed and predicted win/loss patterns across Premier League and Bundesliga data.",
    businessValue:
      "Shows practical judgement when working with imperfect data, APIs, SQL, and Python workflows.",
    proofPoints: [
      "Built a data enrichment pipeline",
      "Combined SQL and Python analysis",
      "Adapted metrics around data quality constraints"
    ],
    url: "https://github.com/KGharib/Analysing-and-Predicting-Win-Loss-for-Premier-League-Bundesliga-Games"
  },
  {
    title: "NBA Hypothesis Testing",
    category: "Statistical analysis",
    clientType: "Personal project",
    image: "/images/projects/nba-hypothesis.png",
    alt: "NBA hypothesis testing project thumbnail",
    summary:
      "Tested questions around home advantage, conference competitiveness, and player impact.",
    businessValue:
      "Demonstrates clear statistical thinking and the ability to turn analysis into plain-English conclusions.",
    proofPoints: [
      "Cleaned multi-season NBA data",
      "Ran hypothesis tests",
      "Explained results in business-friendly language"
    ],
    url: "https://github.com/KGharib/Hypothesis-Testing-on-18-Seasons-of-NBA-Dataset"
  }
] as const;
