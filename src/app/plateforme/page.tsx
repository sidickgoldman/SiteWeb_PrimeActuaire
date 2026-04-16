import type { Metadata } from "next";
import PlateformeClient from "./PlateformeClient";

export const metadata: Metadata = {
  title: "Tarif Santé Pro — Plateforme de tarification santé collective",
  description:
    "Analyse actuarielle en 15 minutes : scénarios de renouvellement, backtesting, suivi S/P, provisions ENR conformes CIMA. Conçue pour les DT et DG.",
  openGraph: {
    title: "Tarif Santé Pro — Plateforme de tarification santé collective",
    description:
      "Analyse actuarielle en 15 minutes : scénarios de renouvellement, backtesting, suivi S/P, provisions ENR conformes CIMA.",
    url: "/plateforme",
  },
};

export default function PlateformePage() {
  return <PlateformeClient />;
}
