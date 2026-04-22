import type { Metadata } from "next";
import MethodeClient from "./MethodeClient";

export const metadata: Metadata = {
  title: "Méthode — De la donnée à la décision défendable",
  description:
    "Trois étapes pour transformer vos bordereaux en arbitrages opposables : structuration du portefeuille, chiffrage des fuites de rentabilité, décision fondée sur données réelles.",
  openGraph: {
    title: "Méthode — De la donnée à la décision défendable",
    description:
      "PrimeActuaire : méthode actuarielle en trois étapes pour défendre vos décisions tarifaires en comité, renouvellement et face au courtier.",
    url: "/methode",
  },
};

export default function MethodePage() {
  return <MethodeClient />;
}
