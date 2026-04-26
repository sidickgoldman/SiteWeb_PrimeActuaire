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
    title: "What concretely changes in the way you decide.",
    steps: [
      {
        num: "01",
        title: "You finally see your portfolio clearly",
        desc: "Scattered data, partial reads, blind spots.\nWe structure a reliable base to truly understand what is happening.",
      },
      {
        num: "02",
        title: "You identify what is destroying profitability",
        desc: "Under-pricing, drifts, unquantified discounts, fraud or abuse.\nYou know where to act, and on what.",
      },
      {
        num: "03",
        title: "You decide with defensible figures",
        desc: "Floor price, decision impact, risk level.\nYou defend your positions in committee, at renewal or facing the broker.",
      },
    ],
  },

  // Probleme
  probleme: {
    eyebrow: "The Challenge",
    titleLine1: "Pricing alone isn't enough.",
    titleLine2:
      "The real challenge is seeing where profitability erodes, why, and what that means for decisions.",
    moments: [
      { label: "January", sub: "Renewal" },
      { label: "April", sub: "Drift begins" },
      { label: "July", sub: "The gap grows" },
      { label: "October", sub: "Board review" },
    ],
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
        title: "Stop letting the market dictate your rates.",
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
    eyebrow: "What these situations reveal",
    title: "",
    subtitle:
      "Pricing pressure, unread drifts, margins to justify, loss-making pockets: these cases show where profitability is really at stake.",
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
      {
        tag: "Strategy",
        title: "Health coverage used to win — but costly afterwards",
        desc: "A contract is won with an aggressive rate.\nProfitability is expected to come from elsewhere.\nWe measure the real impact on the portfolio.\nManagement adjusts strategy before drift sets in.",
      },
    ],
  },

  // Methode
  methode: {
    eyebrow: "Our Method",
    titleLine1: "A structured process",
    titleLine2: "to turn a portfolio under pressure into defensible decisions.",
    desc: [
      "We don't just deliver an analysis.",
      "We help management understand where profitability is eroding, measure the risk, and decide on a quantified basis.",
      "The platform produces the analysis. PrimeActuaire helps make the decision.",
    ],
    valueLabel: "Value delivered",
    steps: [
      {
        title: "Understand the portfolio",
        desc: "Identify the portfolio structure, benefits, groups, claims history and first areas of tension.",
        value: "A clear picture of the starting position.",
      },
      {
        title: "Identify real losses",
        desc: "Isolate groups, cost categories, drifts, fraud, abuse or atypical signals that genuinely weigh on results.",
        value: "You know where profitability is eroding, and why.",
      },
      {
        title: "Measure risk and set thresholds",
        desc: "Assess the impact of discounts, stress-test assumptions, define the floor price and acceptable margin of maneuver.",
        value: "You know how far you can go without selling at a loss.",
      },
      {
        title: "Frame the decision",
        desc: "Turn analyses into clear positions for the CEO, CTO, board, renewal or negotiation context.",
        value: "A defensible decision, not just a technical opinion.",
      },
      {
        title: "Present and support",
        desc: "Produce a usable, documented synthesis for the board, with implementation support.",
        value: "Management leaves with a clear, actionable position.",
      },
    ],
    compliance: {
      label: "Integrated approach",
      text: "A combination of actuarial modeling and decision-making support.\nAnalyses are produced, interpreted and translated into concrete decisions.",
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
    explorerTitle: "Explore",
    contactTagline: "Let’s talk about your portfolio.",
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
      expertises: "Expertise",
      contact: "Contact",
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
    eyebrow: "Advisory expertise",
    title: "Where decisions make or break profitability.",
    desc: [
      "In a market that pushes prices down, every poorly framed decision costs several points of loss ratio.",
      "We support technical and general management in structuring pricing decisions, reading actual portfolio drift and defending their positions against market pressure.",
    ],
    pillarsTitle: "Three fronts. One promise: decide with control.",
    pillarsSubtitle: "We don’t sell an actuarial method. We structure the decisions that drive profitability.",
    pillars: [
      {
        label: "Pricing",
        title: "Set a price that holds up against the market.",
        intro: [
          "Pricing exists. Technical mastery is missing.",
          "The data is there. The calculations too. But decisions remain fragile, lacking a clear framework.",
          "We structure the read and the decision.",
        ],
        helpLabel: "We help you",
        bullets: [
          "set a realistic floor price",
          "frame discount policy",
          "balance competitiveness and profitability",
        ],
        outcomeLabel: "Outcome",
        outcome: "Pricing decisions you own, not pricing decisions you endure.",
        toolNote: "These analyses rely on our platform Tarif Santé Pro.",
      },
      {
        label: "Technical monitoring",
        title: "Understand what really degrades the portfolio.",
        intro: [
          "The portfolio lives. But it is poorly understood.",
          "Drift, fraud, abuse and market pressure all blend together. The real causes remain hard to isolate.",
          "We bring a clear, actionable read.",
        ],
        helpLabel: "We help you",
        bullets: [
          "isolate the real causes",
          "separate technical drift from operational issues",
          "guide corrective actions",
        ],
        outcomeLabel: "Outcome",
        outcome: "Targeted actions, not blanket corrections.",
        toolNote: "These analyses rely on our platform Tarif Santé Pro.",
      },
      {
        label: "Technical governance",
        title: "Hold a defensible position against the market, the broker, the board.",
        intro: [
          "Decisions are made. But they are rarely defensible.",
          "Discounts granted, increases refused, blurred trade-offs. In committee, the position often lacks substance.",
          "We help formulate and defend clear decisions.",
        ],
        helpLabel: "We help you",
        bullets: [
          "frame the scenarios",
          "formulate a clear position",
          "defend decisions in committee",
        ],
        outcomeLabel: "Outcome",
        outcome: "Solid decisions, even under pressure.",
        toolNote: "These analyses rely on our platform Tarif Santé Pro.",
      },
    ],
    whyTitle: "Why us, rather than an in-house actuary and Excel.",
    whySubtitle: "The real question, asked plainly. Here is our answer.",
    whyItems: [
      {
        title: "An in-house actuary computes. We structure the decision.",
        desc: "Technical calculation is one step. We take ownership of the move from numbers to a defensible position, all the way to the committee.",
      },
      {
        title: "Excel delivers a number. We deliver a position.",
        desc: "Our analyses are quantified, traceable, defensible. They hold up against brokers, the board and audits.",
      },
      {
        title: "A one-shot analysis observes. We accompany the decision.",
        desc: "We don’t stop at delivery. We stay until implementation and market response.",
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
    scrollLabel: "Scroll",
    heroTitle: "The platform that structures your pricing decisions.",
    heroDesc: "When pricing is under pressure and the portfolio picture blurs, Tarif Santé Pro gives decision-makers a clear, defensible base to decide with greater control.",
    heroCta1: "Request a targeted demo",
    heroCta2: "See what the platform enables you to decide",
    heroBadge: "Your decisions, quantified on real data",
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
      { value: "15 min", label: "to back a decision with data" },
      { value: "Several days", label: "of manual analysis" },
      { value: "70% of losses", label: "concentrated in a few groups" },
      { value: "−14 pts S/P", label: "after targeted correction" },
    ],
    featuresEyebrow: "Capabilities",
    featuresTitle: "Three pillars to restore portfolio performance.",
    categories: [
      {
        label: "Pricing",
        headline: "Set the right price without losing the account.",
        body: [
          "The market pushes prices down.",
          "The platform tests the rate, simulates scenarios and maps the risk zone.",
          "We go further: we help leadership set the floor price, frame discounts and secure decisions.",
        ],
        result: "You defend margins on the existing portfolio and go after new accounts without selling at a loss.",
        items: [
          { title: "Renewal scenarios", desc: "Simulate the impact of an increase, a discount, or a scope change before committing." },
          { title: "Premium backtesting", desc: "Compare the technical premium to actual claims experience. Measure the gap. Adjust assumptions." },
          { title: "Group segmentation", desc: "Identify loss-making groups dragging down the portfolio." },
        ],
      },
      {
        label: "Technical monitoring",
        headline: "Detect and understand what actually erodes your result.",
        body: [
          "Drift, fraud, abuse or overconsumption are often confused.",
          "The platform surfaces the signals.",
          "We help you understand the real causes, group by group, cost line by cost line.",
        ],
        result: "You correct at the right place. The portfolio stops bleeding.",
        items: [
          { title: "In-year loss ratio tracking", desc: "No need to wait for year-end. Visualize drift as soon as it appears." },
          { title: "Cost category analysis", desc: "Pharmacy, hospitalization, optical, dental — isolate the cause of the drift." },
          { title: "Fraud & anomaly detection", desc: "Identify providers and policyholders with abnormal behavior." },
        ],
      },
      {
        label: "Decision technology",
        headline: "Decide faster with a quantified, defensible base.",
        body: [
          "The platform leverages predictive models, machine learning and scenarios to anticipate the real impact of decisions before making them.",
          "We turn these analyses into clear, defensible positions for any board meeting.",
        ],
        result: "You decide with more speed, precision and control.\nYour technical governance becomes legible and defensible.",
        items: [
          { title: "IBNR estimates (provisions)", desc: "Provisions compliant with CIMA Article 334-8. Traceable, auditable, justified." },
          { title: "Monte Carlo stress tests", desc: "Confidence interval on the premium. The rate is no longer an opinion — it's a quantified position." },
          { title: "Hypothesis traceability", desc: "Every parameter, every choice is documented. Ideal for audits and board meetings." },
        ],
      },
    ],
    workflowEyebrow: "User Journey",
    workflowTitle: "From raw data to a defensible decision.\nIn 5 steps.",
    workflowSteps: [
      { title: "You start with imperfect data.", desc: "Even incomplete, your data becomes usable." },
      { title: "You make the base reliable.", desc: "Anomalies are corrected, biases identified." },
      { title: "You understand what is really happening.", desc: "The platform surfaces the signals.\nWe help you read the real causes." },
      { title: "You identify where to act.", desc: "Drifts, fraud or overuse become readable.\nWe guide the actions to take." },
      { title: "You take a position.", desc: "The analyses are quantified and structured.\nWe help management frame and defend the decision." },
    ],
    screenshotsEyebrow: "Preview",
    screenshotsTitle: "A clear read to decide on your portfolio.",
    ctaTitle: "See what is really degrading your portfolio.",
    ctaDesc: "In 20 minutes, identify the losses, understand the causes and leave with a first usable read.",
    ctaButton: "Schedule a targeted demo",
  },

  // ───── Page: About ─────
  aProposPage: {
    heroEyebrow: "About",
    heroTitle: "An actuary building the tools he wished he had.",
    heroDesc: "PrimeActuaire is first and foremost actuarial expertise in group health, CIMA zone. The tool exists because no spreadsheet is enough to structure a real pricing advisory.",
    quote: "A technical premium must be a defensible position. Not an opinion adjusted at the margins.",
    quoteAuthor: "Zana",
    quoteRole: "Actuary · Group health advisory CIMA",
    missionEyebrow: "Mission",
    missionTitle: "Give technical directors the means to decide with data.",
    missionDesc: "No intuitions. No commercial pressure. Traceable analyses, before the decision is made.",
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
    heroDesc: "Reflections, analyses and field insights.",
    readMore: "Read →",
    ctaTitle: "Does a topic resonate?",
    ctaDesc: "Let's discuss your portfolio. 20 minutes is enough for an initial assessment.",
    ctaButton: "Schedule a call",
  },

  // ───── Page: Article detail ─────
  articlePage: {
    backLink: "← All articles",
    authorName: "Zana, Founder PrimeActuaire",
    authorBio: "Actuary specialized in group health, CIMA zone.",
    ctaLine: "Does this topic resonate with your challenges?",
    ctaButton: "Schedule a call",
  },
};
