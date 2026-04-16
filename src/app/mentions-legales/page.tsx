import type { Metadata } from "next";
import MentionsLegalesClient from "./MentionsLegalesClient";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site PrimeActuaire — éditeur, hébergement, propriété intellectuelle.",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />;
}
