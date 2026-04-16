import type { Metadata } from "next";
import AProposClient from "./AProposClient";

export const metadata: Metadata = {
  title: "À propos — L'actuaire derrière PrimeActuaire",
  description:
    "PrimeActuaire est né d'un constat terrain : les directions techniques en zone CIMA manquent d'outils adaptés pour défendre leurs décisions tarifaires.",
  openGraph: {
    title: "À propos — L'actuaire derrière PrimeActuaire",
    description:
      "PrimeActuaire : rigueur actuarielle, focus santé collective CIMA, accompagnement DT/DG.",
    url: "/a-propos",
  },
};

export default function AProposPage() {
  return <AProposClient />;
}
