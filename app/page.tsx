import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Results } from "@/components/Results";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Results />
      <About />
      <Services />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
}
