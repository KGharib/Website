export const siteConfig = {
  brandName: "Gharib Analytics",
  founderName: "Khalid Gharib",
  tagline: "Data, BI & Reporting Consultant",
  typedPhrases: [
    "unlock your data potential"
  ],
  title: "Gharib Analytics | Data, BI & Reporting Consultant",
  // TODO: Replace with your final production domain before launch.
  siteUrl: "https://gharibanalytics.com",
  description:
    "Helping small businesses and startups turn messy data into trusted dashboards, automated reports, and insights that drive real decisions.",
  primaryCtaLabel: "Request a Free Data Health Check",
  secondaryCtaLabel: "See How Data Helps",
  healthCheckHref: "#health-check",
  navLinks: [
    { label: "Data Support", href: "#value" },
    { label: "Expertise", href: "#expertise" },
    { label: "About", href: "#about" },
    { label: "Health Check", href: "#health-check" }
  ],
  contact: {
    // TODO: Replace this with your preferred public inbox before launch if needed.
    email: "Khalid.mgharib@gmail.com",
    // TODO: Add a public phone number only if you want it visible on the site.
    phone: "",
    location: "London, UK",
    // TODO: Add your Calendly or booking URL. CTAs fall back to #contact until this is set.
    calendlyUrl: "",
    // TODO: Add Formspree, Basin, Netlify Forms, or another contact endpoint before launch.
    contactFormEndpoint: ""
  },
  socials: {
    // TODO: Replace or remove these links if you want different public profiles.
    linkedin: "https://www.linkedin.com/in/khalid-gharib/",
    github: "https://github.com/KGharib"
  },
  assets: {
    profileImage: "/images/profile/khalid-gharib-profile.jpeg",
    aboutImage: "/images/profile/khalid-gharib-about.jpeg",
    resumeUrl: "/files/khalid-gharib-cv.pdf"
  },
  freeHealthCheck: {
    eyebrow: "Free data health check",
    title: "Get a clear view of what your data can improve, with no obligation.",
    description:
      "A focused review of your current spreadsheets, dashboards, data sources, and KPI definitions. If it is helpful, we can discuss what support could look like afterwards. If not, the recommendations are yours to keep.",
    includes: [
      "A quick review of your reporting process and data pain points",
      "Clear notes on where better visibility could save time or improve decisions",
      "A short, practical action list you can keep whether or not we work together"
    ]
  }
} as const;

export type NavLink = (typeof siteConfig.navLinks)[number];
