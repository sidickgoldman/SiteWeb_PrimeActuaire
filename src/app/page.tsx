import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import HowItWorks from "@/components/HowItWorks";
import Probleme from "@/components/Probleme";
import Piliers from "@/components/Piliers";
import Solution from "@/components/Solution";
import CasUsage from "@/components/CasUsage";
import Methode from "@/components/Methode";
import Insights from "@/components/Insights";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatBar />
        <HowItWorks />
        <Probleme />
        <Piliers />
        <Solution />
        <CasUsage />
        <Methode />
        <Insights />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
