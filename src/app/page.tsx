import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import Probleme from "@/components/Probleme";
import Piliers from "@/components/Piliers";
import CasUsage from "@/components/CasUsage";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PrimeActuaire — Tarification & gouvernance technique santé collective CIMA",
  description:
    "PrimeActuaire accompagne les directions techniques et générales en assurance santé collective : tarification, diagnostic portefeuille, arbitrages chiffrés. Zone CIMA — Côte d'Ivoire.",
  keywords: [
    "tarification santé collective CIMA",
    "actuaire assurance Côte d'Ivoire",
    "diagnostic portefeuille santé assurance",
    "renouvellement contrat groupe assurance",
    "provisions ENR assurance santé",
    "ratio S/P santé collective",
    "gouvernance technique assurance CIMA",
    "PrimeActuaire",
  ],
  openGraph: {
    title: "PrimeActuaire — Tarification & gouvernance technique santé collective CIMA",
    description:
      "Accompagnement des directions techniques en assurance santé collective : tarification, diagnostic, arbitrages. Zone CIMA.",
    url: "https://www.primeactuaire.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatBar />
        <Probleme />
        <Piliers teaser />
        <CasUsage teaser />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
