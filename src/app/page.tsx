import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import Probleme from "@/components/Probleme";
import Piliers from "@/components/Piliers";
import CasUsage from "@/components/CasUsage";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatBar />
        <Probleme />
        <Piliers />
        <CasUsage />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
