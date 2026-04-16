import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights — Perspectives sur la santé collective en zone CIMA",
  description:
    "Analyses, retours terrain et réflexions sur la tarification, la gouvernance technique et le pilotage de portefeuille santé collective en zone CIMA.",
  openGraph: {
    title: "Insights — Perspectives sur la santé collective",
    description:
      "Analyses terrain sur la tarification, la gouvernance technique et le pilotage en zone CIMA.",
    url: "/insights",
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}
