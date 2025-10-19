"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Moon, Sun, Youtube } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const { setTheme, theme } = useTheme();

  console.log(theme);

  return (
    <header className="z-50 absolute top-10 left-1/2 transform -translate-x-1/2 container mx-auto px-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground min-w-[310px]">
          <span className="text-primary">Mentor</span>Pro
        </div>

        <nav className="hidden md:flex items-center justify-between w-[450px] gap-2 px-6 py-4 rounded-full bg-secondary/10 backdrop-blur-sm border border-primary/10">
          <a
            href="#home"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            About me
          </a>
          <a
            href="#services"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#results"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Results
          </a>
          <a
            href="#contact"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Contact me
          </a>
        </nav>

        <div className="flex items-center gap-3 min-w-[310px] ">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Youtube className="h-5 w-5" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Book a consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
