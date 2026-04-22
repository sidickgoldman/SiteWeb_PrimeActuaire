import type { Metadata } from "next";
import ExpertisesClient from "./ExpertisesClient";

export const metadata: Metadata = {
  title: "Expertises — Tarification, pilotage et technologie actuarielle",
  description:
    "Trois axes d'intervention pour les directions techniques et générales en santé collective CIMA : tarification défendable, pilotage technique, technologie décisionnelle.",
  openGraph: {
    title: "Expertises — Tarification, pilotage et technologie actuarielle",
    description:
      "PrimeActuaire : trois piliers pour structurer vos décisions tarifaires en santé collective zone CIMA.",
    url: "/expertises",
  },
};

export default function ExpertisesPage() {
  return <ExpertisesClient />;
}
