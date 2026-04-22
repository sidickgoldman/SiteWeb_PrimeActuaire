import type { Metadata } from "next";
import CasUsageClient from "./CasUsageClient";

export const metadata: Metadata = {
  title: "Cas d'usage — Situations concrètes en santé collective CIMA",
  description:
    "Renouvellement sous tension, segmentation des groupes déficitaires, remise commerciale, diagnostic par poste, stress tests : des missions réelles en zone CIMA.",
  openGraph: {
    title: "Cas d'usage — PrimeActuaire",
    description:
      "Des situations concrètes où PrimeActuaire transforme les données en arbitrages défendables.",
    url: "/cas-usage",
  },
};

export default function CasUsagePage() {
  return <CasUsageClient />;
}
