import { HeroSection } from "@/components/Hero";
import { StatsSection } from "@/components/stats-section";
import { ResultsSection } from "@/components/results-section";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ResultsSection />
      <About />
      <Services />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
}
