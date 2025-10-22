import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="relative">
      <Header />

      {/* Background image */}
      <Image
        className="absolute object-cover object-center md:object-right-top"
        fill
        alt="dsd"
        src={"/hero.jpg"}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-background to-accent/20" />
      <div className="absolute top-1/4 left-1/4 hidden md:block w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Small tagline */}
            <div
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="text-sm text-muted-foreground">
                « Expert Mentor Transforming Careers »
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="text-6xl md:text-8xl font-bold mb-8 text-balance leading-tight opacity-0 translate-y-6 animate-[fadeUp_1s_ease-out_forwards]"
              style={{ animationDelay: "0.6s" }}
            >
              Transform. <span className="text-primary">Elevate.</span>{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "0.5px hsl(0 0% 98% / 0.5)" }}
              >
                Succeed.
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty opacity-0 translate-y-6 animate-[fadeUp_1s_ease-out_forwards]"
              style={{ animationDelay: "0.9s" }}
            >
              Empowering ambitious professionals to unlock their full potential
              through personalized mentorship and proven strategies
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 translate-y-6 animate-[fadeUp_1s_ease-out_forwards]"
              style={{ animationDelay: "1.2s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full group"
              >
                Book a call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 bg-transparent"
              >
                View success stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <section className="relative">
      <Header />
      <Image
        className="absolute object-cover object-center md:object-right-top"
        fill
        alt="dsd"
        src={"/hero.jpg"}
      />

      <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-background to-accent/20" />
      <div className="absolute top-1/4 left-1/4 hidden md:block w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border">
              <span className="text-sm text-muted-foreground">
                « Expert Mentor Transforming Careers »
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance leading-tight">
              Transform. <span className="text-primary">Elevate.</span>{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "0.5px hsl(0 0% 98% / 0.5)" }}
              >
                Succeed.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
              Empowering ambitious professionals to unlock their full potential
              through personalized mentorship and proven strategies
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full group"
              >
                Book a call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 bg-transparent"
              >
                View success stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
