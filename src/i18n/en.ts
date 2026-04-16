import type { Dictionary } from "./fr";

export const en: Dictionary = {
  // Header
  nav: {
    plateforme: "Platform",
    expertises: "Expertise",
    casUsage: "Use Cases",
    methode: "Method",
    insights: "Insights",
    aPropos: "About",
    cta: "Request a Demo",
  },

  // Hero
  hero: {
    eyebrow: "Group Health Insurance · CIMA Zone",
    titleStart: "Make smarter decisions on your ",
    titleHighlight: "group health premiums.",
    subtitle:
      "PrimeActuaire helps insurers strengthen their technical performance through pricing, portfolio monitoring and technology.",
    cta1: "Request a Demo",
    cta2: "Discover Our Approach",
    trustLine:
      "Pricing · Portfolio Monitoring · Technical Governance · Tools + Expertise",
    dashTitle: "Tarif Santé Pro",
    dashLabel1: "Loss Ratio",
    dashLabel2: "Members",
  },

  // StatBar
  statBar: {
    stats: [
      { value: "23%", label: "Average pricing gap identified" },
      { value: "15 min", label: "vs 3 days with manual methods" },
      { value: "+8%/yr", label: "Medical inflation in CIMA zone" },
      { value: "−14 pts", label: "Loss ratio corrected after diagnosis" },
    ],
  },

  // HowItWorks
  howItWorks: {
    eyebrow: "How It Works",
    title: "Three steps. Zero complexity.",
    steps: [
      {
        num: "01",
        title: "Upload your claims data",
        desc: "Even incomplete. We work from your actual claims records.",
      },
      {
        num: "02",
        title: "The platform analyzes",
        desc: "Pricing, segmentation, drift detection, IBNR provisions — calibrated on your portfolio.",
      },
      {
        num: "03",
        title: "You decide",
        desc: "With a quantified, defensible, auditable premium. In committee, with brokers, at renewal.",
      },
    ],
  },

  // Probleme
  probleme: {
    eyebrow: "The Challenge",
    titleLine1: "The issue isn't just pricing.",
    titleLine2:
      "It's making decisions with actionable technical insight.",
    tensions: [
      {
        icon: "⏱",
        title: "Renewals under pressure",
        desc: "The broker arrives with a competitor's quote. The technical director has 48 hours to respond — without updated analysis.",
      },
      {
        icon: "📉",
        title: "Drift detected too late",
        desc: "The loss ratio deteriorates for months before reports show it. By the time it's visible, it's too late.",
      },
      {
        icon: "🔍",
        title: "Loss pockets poorly isolated",
        desc: "The portfolio is losing money, but nobody knows which group, which cost category, which cause.",
      },
      {
        icon: "🤷",
        title: "Decisions without technical backing",
        desc: "Sales gives an 8% discount without impact assessment. The technical director arrives at the board meeting with no defensible data.",
      },
    ],
  },

  // Piliers
  piliers: {
    eyebrow: "What PrimeActuaire Does",
    title: "Three pillars. Complete technical governance.",
    items: [
      {
        label: "Pricing",
        title: "Build technically justified premiums",
        desc: "Backtest a premium against actual history. Identify loss-making groups. Simulate the impact of a discount before granting it.",
      },
      {
        label: "Technical Monitoring",
        title: "Spot portfolio deterioration faster",
        desc: "Loss ratio tracking by group and cost category. Fraud and atypical provider detection. In-year drift analysis, not at year-end.",
      },
      {
        label: "Decision Technology",
        title: "Industrialize analysis with Tarif Santé Pro",
        desc: "A platform that structures pricing decisions. Renewal scenarios, stress tests, IBNR estimates, hypothesis traceability.",
      },
    ],
  },

  // Solution
  solution: {
    eyebrow: "Tarif Santé Pro",
    title: "A solution designed to structure pricing decisions.",
    desc: "Not just another tool. Built by an actuary, for actuaries and decision-makers. Every view answers a question the technical or general director asks before a renewal, a board meeting, or a negotiation.",
    cta1: "See a 20-min demo",
    cta2: "View use cases",
    badge: "Calibrated on your portfolio",
    features: [
      "Renewal scenarios",
      "Group & cost segmentation",
      "In-year loss ratio tracking",
      "Loss pocket analysis",
      "Monte Carlo stress tests",
      "IBNR estimates (provisions)",
      "Fraud & anomaly detection",
      "Hypothesis traceability",
    ],
  },

  // CasUsage
  casUsage: {
    eyebrow: "Use Cases",
    title: "Situations you'll recognize.",
    subtitle:
      "Each case comes from real engagements in the CIMA zone. Data is anonymized.",
    cta: "Let's discuss one of your portfolios",
    cases: [
      {
        tag: "Renewal",
        title: "High-pressure renewal",
        desc: "A 1,200-member portfolio with a 112% loss ratio. The broker demands a 5% discount. The platform simulates the impact: guaranteed deficit within 18 months. The technical director shows up with the numbers. The discount doesn't pass.",
      },
      {
        tag: "Segmentation",
        title: "Groups destroying the margin",
        desc: "Out of 15 groups in the portfolio, 3 account for 70% of losses. Without segmentation, the increase applies to all. With the diagnosis: targeted increase on the 3 groups, hold elsewhere. The broker keeps the contract.",
      },
      {
        tag: "Simulation",
        title: "Commercial discount without impact assessment",
        desc: "Sales concedes 8% on a new group. The platform shows immediately: this discount turns a profitable group into a loss-maker by year 2. The CEO has the data to arbitrate.",
      },
      {
        tag: "Diagnosis",
        title: "Cost category analysis",
        desc: "Pharmacy costs are exploding on one group. Over-prescription? Over-billing? Provider abuse? The cost-by-cost analysis isolates the cause — enabling targeted action instead of a blanket increase.",
      },
      {
        tag: "Stress Test",
        title: "Risk assessment before decisions",
        desc: "Before a tender, the technical director must defend a technical premium. Monte Carlo stress tests provide a confidence interval. The premium is no longer an opinion — it's a quantified position.",
      },
    ],
  },

  // Methode
  methode: {
    eyebrow: "Our Method",
    titleLine1: "A structured process.",
    titleLine2:
      "Designed to reassure technical and general management.",
    desc: "Each engagement follows a clear progression. From initial analysis to final presentation, every step produces an actionable deliverable — not just another document.",
    steps: [
      {
        title: "Technical diagnosis",
        desc: "Analysis of portfolio structure, claims experience, and current pricing assumptions.",
      },
      {
        title: "Portfolio analysis",
        desc: "Segmentation by group, cost category, and risk profile. Identification of loss pockets.",
      },
      {
        title: "Modeling & scenarios",
        desc: "Stress tests, projections, IBNR provision calibration. Every assumption is traceable and testable.",
      },
      {
        title: "Decision recommendations",
        desc: "Quantified recommendations, not opinions. Tailored to the board, renewal, or tender context.",
      },
      {
        title: "Clear presentation",
        desc: "Auditable report, interactive dashboards, support for board-level decision-making.",
      },
    ],
    compliance: {
      label: "CIMA Compliance",
      text: "Provisions compliant with CIMA Article 334-8. Traceable IBNR estimates. Data under your control, dedicated server.",
    },
  },

  // Insights
  insights: {
    eyebrow: "Insights",
    title: "Perspectives on group health insurance.",
    allArticles: "All articles →",
    readMore: "Read →",
  },

  // APropos
  aPropos: {
    eyebrow: "About",
    titleLine1: "One actuary.",
    titleLine2: "One tool. One clear mission.",
    p1: "PrimeActuaire was born from a simple observation: technical directors in the CIMA zone make major pricing decisions — often without the right tools to defend them.",
    p2: "I built this platform after years of modeling group health portfolios, seeing the same drifts, the same blind spots. The goal: give technical and general directors the means to decide with data, not intuition.",
    facts: [
      { title: "CIMA Zone", subtitle: "Market of specialization" },
      { title: "Group Health", subtitle: "Exclusive focus" },
      { title: "Actuary", subtitle: "Founder & practitioner" },
      { title: "Tool + Advisory", subtitle: "Integrated approach" },
    ],
    philosophyLabel: "Philosophy",
    quote:
      "A technical premium must be a defensible position — not an opinion adjusted at the margins.",
    philosophyText:
      "Every feature in the platform, every advisory engagement, serves this standard: produce analyses the technical director can put on the table and defend in front of the broker.",
    expertiseLabel: "Areas of Expertise",
    expertiseTags: [
      "Health pricing",
      "IBNR provisions",
      "Stress tests",
      "Segmentation",
      "Technical governance",
      "CIMA compliance",
    ],
  },

  // CTAFinal
  ctaFinal: {
    title: "Let's discuss your portfolio.",
    subtitle:
      "20 minutes is enough to identify the levers. Fill out the form or contact us directly.",
    form: {
      nom: "Name",
      nomPlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      societe: "Company",
      societePlaceholder: "Insurance company name",
      message: "Message",
      messagePlaceholder:
        "Briefly describe your needs or the portfolio in question...",
      sending: "Sending...",
      send: "Send Message",
    },
    success: {
      title: "Message sent",
      text: "We'll get back to you within 24 hours.",
    },
    directContact: "Or directly:",
  },

  // Footer
  footer: {
    stats: [
      { value: "23%", label: "Average pricing gap identified" },
      { value: "15 min", label: "vs 3 days with manual methods" },
      { value: "+8%/yr", label: "Medical inflation CIMA" },
      { value: "100%", label: "Data under your control" },
    ],
    tagline:
      "Technical governance for group health insurance in the CIMA zone.",
    pagesTitle: "Pages",
    entrepriseTitle: "Company",
    contactTitle: "Contact",
    links: {
      accueil: "Home",
      plateforme: "Platform",
      insights: "Insights",
      aPropos: "About",
      methode: "Method",
      casUsage: "Use Cases",
    },
    copyright: "PrimeActuaire. All rights reserved.",
  },
};
