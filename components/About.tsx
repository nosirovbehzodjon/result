import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {`Hi! I'm a certified confidence coach with over 10 years of
                experience helping individuals transform their lives through
                self-belief and personal development. My journey started when I
                overcame my own confidence struggles, and I've dedicated my
                career to helping others do the same.`}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Why Choose Me?
              </h3>
              <ul className="space-y-3">
                {[
                  "Certified coach with proven track record",
                  "10+ years of experience in personal development",
                  "Helped 5,000+ individuals build confidence",
                  "Evidence-based coaching methods",
                  "Personalized approach for every client",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Schedule a Free Consultation
            </Button>
          </div>

          <div className="relative overflow-hidden h-96 md:h-full">
            <Image
              fill
              className="object-cover absolute"
              alt="about"
              src={"/about.jpg"}
            />
            {/* <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-full flex items-center justify-center border border-primary/20"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
