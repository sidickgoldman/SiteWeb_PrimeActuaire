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
    eyebrow: "Technical Governance · Group Health Insurance · CIMA Zone",
    titleStart: "Take back control of the ",
    titleHighlight: "profitability",
    titleEnd: " of your group health portfolios.",
    subtitle:
      "PrimeActuaire helps technical and general management see where margin erodes, quantify their trade-offs and defend pricing decisions that stand up to scrutiny in group health.",
    cta1: "Request a targeted demonstration",
    cta2: "Discover Our Approach",
    trustLine:
      "Defensible pricing · Portfolio monitoring · Quantified trade-offs · Framework",
    dashTitle: "Tarif Santé Pro",
    dashLabel1: "Loss Ratio",
    dashLabel2: "Members",
  },

  // StatBar
  statBar: {
    stats: [
      { value: "23%", label: "average pricing gap identified" },
      { value: "Unquantified discounts", label: "main portfolio margin leak" },
      { value: "Real data", label: "not market pressure" },
      { value: "−14 pts S/P", label: "after targeted diagnostic" },
    ],
  },

  // HowItWorks
  howItWorks: {
    eyebrow: "How It Works",
    title: "Three steps from raw data to defensible decisions.",
    steps: [
      {
        num: "01",
        title: "We structure your portfolio",
        desc: "From your actual claims data, even if incomplete. A usable base, calibrated on your portfolio.",
      },
      {
        num: "02",
        title: "We quantify the profitability leaks",
        desc: "Under-pricing, drift and unquantified discounts: profitability leaks become visible and measurable.",
      },
      {
        num: "03",
        title: "You decide on a defensible basis",
        desc: "In committee, at renewal or facing the broker, with figures grounded in your real data.",
      },
    ],
  },

  // Probleme
  probleme: {
    eyebrow: "The Challenge",
    titleLine1: "Pricing alone isn't enough.",
    titleLine2:
      "The real challenge is seeing where profitability erodes, why, and what that means for decisions.",
    tensions: [
      {
        icon: "⏱",
        title: "Renewals handled under pressure",
        desc: "The broker arrives with a competitor's quote. The technical director must respond fast, without an updated portfolio read.",
      },
      {
        icon: "📉",
        title: "Drift visible too late",
        desc: "The loss ratio deteriorates for months before clearly appearing in reports. By the time it's visible, part of the margin is already gone.",
      },
      {
        icon: "🔍",
        title: "Loss pockets poorly identified",
        desc: "The portfolio is losing money, with no clear read on which group, which cost category, or which cause is pulling results down.",
      },
      {
        icon: "🤷",
        title: "Decisions without defensible data",
        desc: "A discount is granted without a quantified impact. The technical director arrives at committee without data solid enough to hold a position.",
      },
    ],
  },

  // Piliers
  piliers: {
    eyebrow: "Our expertise",
    title: "Three pillars to restore portfolio performance.",
    eyebrowTeaser: "Our expertise",
    titleTeaser: "Three pillars to restore portfolio performance.",
    ctaTeaser: "See our expertise in detail",
    items: [
      {
        label: "Pricing",
        title: "Fix the premiums that are weakening your portfolio",
        desc: "Backtesting.\nUnder-priced groups.\nDiscount impact.",
      },
      {
        label: "Technical monitoring",
        title: "Detect earlier what is eroding results",
        desc: "Loss ratio and drift.\nFraud and abuse.\nLoss pockets.",
      },
      {
        label: "Decision technology",
        title: "Speed up trade-offs with Tarif Santé Pro",
        desc: "Quantified scenarios.\nStress tests.\nTraceable assumptions.",
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
    badge: "Your trade-offs, quantified on real data",
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
    eyebrowTeaser: "Use Cases",
    titleTeaser: "A few concrete situations.",
    subtitleTeaser: "An overview of real engagements in the CIMA zone. Data is anonymized.",
    ctaTeaser: "See all use cases",
    cta: "Let's discuss one of your portfolios",
    cases: [
      {
        tag: "Renewal",
        title: "High-pressure renewal",
        desc: "A 1,200-member group presents a 112% loss ratio.\nThe broker requests a 5% discount.\nWe immediately quantify the real impact before arbitration.\nManagement decides on an objective basis.",
      },
      {
        tag: "Segmentation",
        title: "Groups pulling results down",
        desc: "In a multi-group portfolio, a few accounts concentrate most of the deterioration.\nWe identify them in seconds.\nWe quantify their impact on the portfolio.\nWe guide the corrective decision to implement.",
      },
      {
        tag: "Simulation",
        title: "Commercial discount to objectify",
        desc: "An 8% discount is under consideration for a new group.\nThe simulation shows its expected impact on results.\nManagement arbitrates with a clear technical view.",
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
      mentionsLegales: "Legal Notice",
      confidentialite: "Privacy Policy",
    },
    copyright: "PrimeActuaire. All rights reserved.",
  },

  // ───── Page: Legal Notice ─────
  mentionsLegales: {
    title: "Legal Notice",
    sections: [
      {
        title: "Website Publisher",
        content: "PrimeActuaire\nActivity: Actuarial consulting and technology for group health insurance\nHeadquarters: Abidjan, C\u00f4te d'Ivoire\nEmail: contact@primeactuaire.com\nPhone: +225 01 70 90 33 54",
      },
      {
        title: "Hosting",
        content: "This website is hosted by Vercel Inc.\n440 N Baxter St, Los Angeles, CA 90012, United States\nhttps://vercel.com",
      },
      {
        title: "Intellectual Property",
        content: "All content on this website (text, images, graphics, logo, icons) is the exclusive property of PrimeActuaire unless otherwise stated. Any reproduction, distribution, modification, or use of this content without prior written authorization is prohibited.",
      },
      {
        title: "Liability",
        content: "PrimeActuaire strives to provide information as accurately as possible. However, it cannot be held liable for omissions, inaccuracies, or difficulties accessing the site. The data presented on the site is for informational purposes and does not constitute actuarial or commercial advice.",
      },
      {
        title: "External Links",
        content: "The site may contain links to third-party websites. PrimeActuaire disclaims any responsibility for the content of these external sites.",
      },
    ],
  },

  // ───── Page: Privacy Policy ─────
  confidentialite: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 2026",
    sections: [
      {
        title: "Data Collected",
        content: "When you use the contact form, we collect the following information:\n\u2022 Name\n\u2022 Email address\n\u2022 Company name (optional)\n\u2022 Message\n\nThis data is collected solely to respond to your inquiry.",
      },
      {
        title: "Use of Data",
        content: "Your personal data is used exclusively to:\n\u2022 Respond to your contact or demonstration request\n\u2022 Follow up within the business relationship\n\nIt is never sold, rented, or shared with third parties.",
      },
      {
        title: "Retention Period",
        content: "Your data is retained for a maximum of 24 months after the last exchange, unless otherwise required by law.",
      },
      {
        title: "Security",
        content: "We implement technical and organizational security measures to protect your personal data against unauthorized access, modification, disclosure, or destruction.",
      },
      {
        title: "Your Rights",
        content: "You have the right to access, rectify, delete, and object to the processing of your personal data. To exercise these rights, contact us at: contact@primeactuaire.com",
      },
      {
        title: "Cookies",
        content: "This site does not use tracking cookies or third-party analytics tools. No browsing data is collected for advertising purposes.",
      },
    ],
  },

  // ───── Dashboard mockup ─────
  dashboard: {
    title: "Tarif Santé Pro",
    navItems: ["Overview", "Pricing", "Provisions", "Loss ratio"],
    kpis: [
      { label: "Loss ratio", value: "68%" },
      { label: "Active members", value: "1,247" },
      { label: "IBNR provisions", value: "245M" },
    ],
    donutLabels: ["Hosp.", "Pharma.", "Optical", "Dental", "Other"],
  },

  // ───── Screenshots ─────
  screenshots: {
    dashboardKpis: {
      alt: "Tarif Santé Pro dashboard — KPIs and group monitoring",
      caption: "Tarif Santé Pro — Overview",
    },
    spEvolution: {
      alt: "Loss ratio evolution over 3 years with profitability thresholds",
      caption: "Loss Ratio — Multi-year tracking",
    },
    stressTest: {
      alt: "Monte Carlo stress tests — Premium coverage and loss risk",
      caption: "Stress Tests — Risk analysis",
    },
  },

  // ───── Page: Method ─────
  methodePage: {
    eyebrow: "Our method",
    title: "From raw data to defensible decisions.",
    desc: "A three-step actuarial method, calibrated on your real data. To defend your pricing decisions in committee, at renewal or facing the broker.",
  },

  // ───── Page: Expertise ─────
  expertisesPage: {
    eyebrow: "Our expertise",
    title: "Three focus areas to structure your technical decisions.",
    desc: "PrimeActuaire operates on three fronts where the profitability of a group health portfolio is decided: pricing, technical monitoring, and decision technology.",
    deepTitle: "What each expertise tackles concretely.",
    deepSubtitle: "Each pillar addresses specific situations faced by technical and general management.",
    details: [
      {
        label: "Pricing",
        title: "Build technically defensible premiums.",
        desc: "Pricing is more than a calculation. It must be defensible against brokers, justifiable in committee, and stand up at renewal.",
        bullets: [
          "Backtesting on real claims history",
          "Identification of loss-making groups",
          "Impact simulation of commercial discounts",
          "Renewal scenario construction",
          "Full pricing hypothesis traceability",
        ],
      },
      {
        label: "Technical monitoring",
        title: "Spot drift before it becomes visible.",
        desc: "A degraded loss ratio shows up at year-end. Drift shows up mid-year. We equip technical management to anticipate, not merely observe.",
        bullets: [
          "Loss ratio tracking by group and cost category",
          "Atypical provider detection",
          "Loss pocket analysis",
          "In-year technical indicators",
          "Significant drift alerts",
        ],
      },
      {
        label: "Decision technology",
        title: "Industrialize decision-making with Tarif Santé Pro.",
        desc: "A platform built by an actuary, for actuaries and decision-makers. Every view answers a concrete question that technical or general management faces before a committee or renewal.",
        bullets: [
          "Comparable renewal scenarios",
          "Monte Carlo stress tests",
          "IBNR estimates (technical provisions)",
          "Group and cost segmentation",
          "Committee-ready deliverable exports",
        ],
      },
    ],
  },

  // ───── Page: Use Cases ─────
  casUsagePage: {
    eyebrow: "Use cases",
    title: "Real engagements. Quantified trade-offs.",
    desc: "Each case comes from a real engagement in the CIMA zone. Data is anonymized, but the situations, trade-offs and decisions are authentic.",
    deepTitle: "What our engagements produce concretely.",
    deepSubtitle: "Measurable, quantified, committee-ready outcomes.",
    outcomes: [
      { value: "−14 pts", label: "loss ratio corrected after targeted diagnostic" },
      { value: "23%", label: "average pricing gap identified" },
      { value: "3 to 5", label: "loss-making groups isolated per portfolio" },
      { value: "100%", label: "of trade-offs based on real data" },
    ],
  },

  // ───── Page: Platform ─────
  plateformePage: {
    heroEyebrow: "Tarif Santé Pro",
    heroTitle: "The platform that structures your pricing decisions.",
    heroDesc: "Built by an actuary, for actuaries and decision-makers. Every view answers a question the technical or general director asks before a renewal, a board meeting, or a negotiation.",
    heroCta1: "Request a Demo",
    heroCta2: "View Features",
    orbitalEyebrow: "Overview",
    orbitalTitle: "One central hub. Eight interconnected modules.",
    orbitalSubtitle: "Tarif Santé Pro centralizes all the technical director's decision tools in a single, traceable, committee-ready framework.",
    orbitalCenter: "Tarif\nSanté Pro",
    orbitalModules: [
      "Renewal\nscenarios",
      "Premium\nbacktesting",
      "Monte Carlo\nstress tests",
      "Loss ratio\ntracking",
      "Group\nsegmentation",
      "IBNR estimates",
      "Anomaly\ndetection",
      "Traceability",
    ],
    keyNumbers: [
      { value: "15 min", label: "for a complete analysis" },
      { value: "3 days", label: "with traditional manual methods" },
      { value: "100%", label: "data under your control" },
      { value: "Article 334-8", label: "CIMA-compliant provisions" },
    ],
    featuresEyebrow: "Features",
    featuresTitle: "Everything a technical director needs. Nothing superfluous.",
    categories: [
      {
        label: "Pricing",
        items: [
          { title: "Renewal scenarios", desc: "Simulate the impact of an increase, a discount, or a scope change before committing." },
          { title: "Premium backtesting", desc: "Compare the technical premium to actual claims experience. Measure the gap. Adjust assumptions." },
          { title: "Group segmentation", desc: "Identify loss-making groups dragging down the portfolio." },
        ],
      },
      {
        label: "Monitoring",
        items: [
          { title: "In-year loss ratio tracking", desc: "No need to wait for year-end. Visualize drift as soon as it appears." },
          { title: "Cost category analysis", desc: "Pharmacy, hospitalization, optical, dental — isolate the cause of the drift." },
          { title: "Fraud & anomaly detection", desc: "Identify providers and policyholders with abnormal behavior." },
        ],
      },
      {
        label: "Provisions & compliance",
        items: [
          { title: "IBNR estimates (provisions)", desc: "Provisions compliant with CIMA Article 334-8. Traceable, auditable, justified." },
          { title: "Monte Carlo stress tests", desc: "Confidence interval on the premium. The rate is no longer an opinion — it's a quantified position." },
          { title: "Hypothesis traceability", desc: "Every parameter, every choice is documented. Ideal for audits and board meetings." },
        ],
      },
    ],
    workflowEyebrow: "User Journey",
    workflowTitle: "From claims data to report. In 5 steps.",
    workflowSteps: [
      { title: "Data import", desc: "CSV, Excel, or direct extraction. Even incomplete data." },
      { title: "Automatic cleaning", desc: "Duplicate detection, anomalies, missing fields." },
      { title: "Actuarial analysis", desc: "Models calibrated on your history. Automatic segmentation." },
      { title: "Interactive dashboards", desc: "Visualize results. Filter by group, cost category, period." },
      { title: "Export & presentation", desc: "PDF, PowerPoint, Excel reports. Ready for the board." },
    ],
    screenshotsEyebrow: "Preview",
    screenshotsTitle: "What the technical director sees in Tarif Santé Pro.",
    ctaTitle: "Ready to see Tarif Santé Pro in action?",
    ctaDesc: "20 minutes is enough for a portfolio diagnosis.",
    ctaButton: "Schedule a Demo",
  },

  // ───── Page: About ─────
  aProposPage: {
    heroEyebrow: "About",
    heroTitle: "An actuary building the tools he wished he had.",
    heroDesc: "PrimeActuaire was born from a field observation: technical directors in the CIMA zone lack the right tools to defend their pricing decisions.",
    quote: "A technical premium must be a defensible position — not an opinion adjusted at the margins.",
    quoteAuthor: "Zana",
    quoteRole: "Founder · Actuary",
    missionEyebrow: "Mission",
    missionTitle: "Give technical directors the means to decide with data.",
    missionDesc: "Not with intuition. Not under sales pressure. With traceable analyses, defensible figures, and tools built for the CIMA landscape.",
    valeurs: [
      { icon: "📐", title: "Actuarial rigor", desc: "Every figure we produce is traceable, testable, and defensible in committee. Assumptions are documented." },
      { icon: "🎯", title: "Exclusive focus", desc: "Group health in the CIMA zone. No auto insurance, no P&C, no diversification. One discipline, mastered in depth." },
      { icon: "⚡", title: "Decision speed", desc: "15 minutes for a complete diagnosis vs 3 days with manual methods. The technical director shouldn't have to wait to decide." },
      { icon: "🔒", title: "Data sovereignty", desc: "Your data stays under your control. Dedicated server, no shared cloud, full CIMA compliance." },
    ],
    parcoursEyebrow: "Journey",
    parcoursTitle: "Why PrimeActuaire exists.",
    parcours: [
      { periode: "Foundation", title: "From actuary to builder", desc: "After years of group health pricing engagements, a recurring observation: technical directors make major decisions with inadequate tools. Excel, intuition, sales pressure. PrimeActuaire was born from this observation." },
      { periode: "Conviction", title: "The CIMA market deserves its own tools", desc: "European solutions don't fit. Local medical inflation, group contract specifics, CIMA regulations — everything demands a tool calibrated to field realities." },
      { periode: "Today", title: "Tool + Expertise = Governance", desc: "PrimeActuaire combines a technology platform (Tarif Santé Pro) and expert advisory. The tool without advisory is a dashboard. Advisory without the tool is an opinion. Together, they form technical governance." },
    ],
    expertiseEyebrow: "Areas of Expertise",
    expertiseTags: [
      "Group health pricing", "IBNR provisions (Article 334-8)", "Monte Carlo stress tests",
      "Portfolio segmentation", "Technical governance", "CIMA regulatory compliance",
      "Loss ratio tracking & drift", "Fraud detection", "Cost category analysis", "TD / CEO advisory",
    ],
    ctaTitle: "Let's work on your portfolio together.",
    ctaDesc: "A 20-minute conversation is enough to identify the levers.",
    ctaButton: "Schedule a call",
  },

  // ───── Page: Insights listing ─────
  insightsPage: {
    heroEyebrow: "Insights",
    heroTitle: "Perspectives on group health insurance.",
    heroDesc: "Analyses, field insights, and reflections on pricing, technical governance, and portfolio management in the CIMA zone.",
    readMore: "Read →",
    ctaTitle: "Does a topic resonate?",
    ctaDesc: "Let's discuss your portfolio. 20 minutes is enough for an initial assessment.",
    ctaButton: "Schedule a call",
  },

  // ───── Page: Article detail ─────
  articlePage: {
    backLink: "← All articles",
    authorName: "Zana — Founder, PrimeActuaire",
    authorBio: "Actuary specialized in group health, CIMA zone. TD/CEO advisory and Tarif Santé Pro platform.",
    ctaLine: "Does this topic resonate with your challenges?",
    ctaButton: "Schedule a call",
  },
};
