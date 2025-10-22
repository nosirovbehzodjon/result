"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Menu, Moon, Sun, X, Youtube } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export function Header() {
  const { setTheme, theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(theme);

  return (
    <header className="z-50 absolute top-10 left-1/2 transform -translate-x-1/2 container mx-auto px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-foreground  lg:min-w-[300px]">
          <span className="text-primary">Mentor</span>Pro
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-between w-[450px] gap-2 px-6 py-4 rounded-full bg-secondary/10 backdrop-blur-sm border border-primary/10">
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

        {/* Right buttons */}
        <div className="flex items-center gap-3 min-w-[180px]">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center rounded-full border border-primary/10 p-2"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
            Book a consultation
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/10 backdrop-blur-sm border border-primary/10">
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
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:hidden">
            Book a consultation
          </Button>
        </nav>
      )}
    </header>
    // <header className="z-50 absolute top-10 left-1/2 transform -translate-x-1/2 container mx-auto px-6">
    //   <div className="flex items-center justify-between">
    //     <div className="text-2xl font-bold text-foreground min-w-[310px]">
    //       <span className="text-primary">Mentor</span>Pro
    //     </div>

    //     <nav className="hidden md:flex items-center justify-between w-[450px] gap-2 px-6 py-4 rounded-full bg-secondary/10 backdrop-blur-sm border border-primary/10">
    //       <a
    //         href="#home"
    //         className="text-sm text-foreground hover:text-primary transition-colors"
    //       >
    //         Home
    //       </a>
    //       <a
    //         href="#about"
    //         className="text-sm text-foreground hover:text-primary transition-colors"
    //       >
    //         About me
    //       </a>
    //       <a
    //         href="#services"
    //         className="text-sm text-foreground hover:text-primary transition-colors"
    //       >
    //         Services
    //       </a>
    //       <a
    //         href="#results"
    //         className="text-sm text-foreground hover:text-primary transition-colors"
    //       >
    //         Results
    //       </a>
    //       <a
    //         href="#contact"
    //         className="text-sm text-foreground hover:text-primary transition-colors"
    //       >
    //         Contact me
    //       </a>
    //     </nav>

    //     <div className="flex items-center gap-3 min-w-[310px] ">
    //       <Button
    //         variant="ghost"
    //         size="icon"
    //         className="rounded-full"
    //         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    //       >
    //         <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
    //         <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    //         <span className="sr-only">Toggle theme</span>
    //       </Button>
    //       <Button variant="ghost" size="icon" className="rounded-full">
    //         <Linkedin className="h-5 w-5" />
    //       </Button>
    //       <Button variant="ghost" size="icon" className="rounded-full">
    //         <Youtube className="h-5 w-5" />
    //       </Button>
    //       <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
    //         Book a consultation
    //       </Button>
    //     </div>
    //   </div>
    // </header>
  );
}
