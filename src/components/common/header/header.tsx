"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const section = href.replace("#", "");
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav
        className={cn(
          "flex items-center justify-between gap-5 px-3 py-2 rounded-md transition-all duration-300 ease-in-out",
          isScrolled
            ? "backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl"
            : "backdrop-blur-md"
        )}
        style={{
          backdropFilter: isScrolled
            ? "blur(20px) saturate(180%) contrast(120%)"
            : "blur(12px) saturate(150%) contrast(110%)",
          WebkitBackdropFilter: isScrolled
            ? "blur(20px) saturate(180%) contrast(120%)"
            : "blur(12px) saturate(150%) contrast(110%)",
        }}
      >
        {/* Logo/Brand */}
        <button
          onClick={() => handleNavClick("#main")}
          className="text-sm font-bold text-foreground hover:text-primary transition-colors duration-200 px-2 rounded-xl cursor-pointer"
        >
          <Image src="/ab.png" alt="Albin" width={36} height={36} />
        </button>

        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "relative px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-md cursor-pointer",
                "hover:text-primary hover:bg-black/10",
                activeSection === item.href.replace("#", "")
                  ? "text-primary bg-black/15"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {activeSection === item.href.replace("#", "") && (
                <div className="absolute inset-0 rounded-md border border-primary/50" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
