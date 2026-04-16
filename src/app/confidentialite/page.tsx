import type { Metadata } from "next";
import ConfidentialiteClient from "./ConfidentialiteClient";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de PrimeActuaire — données collectées, droits, cookies.",
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return <ConfidentialiteClient />;
}
