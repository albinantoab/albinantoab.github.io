"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { name: "Experience", href: "#experience" },
  // { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

interface HeaderProps {
  onClickCallback?: (section: string) => void;
}

export const Header = ({ onClickCallback }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState("main");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = ['main', 'experience', 'about'];
    
    const handleScroll = () => {
      // Find the scroll container
      const scrollContainer = document.querySelector('.scroll-snap-container');
      if (scrollContainer) {
        setIsScrolled(scrollContainer.scrollTop > 0);
        
        // Update active section based on scroll position
        const viewportHeight = window.innerHeight;
        const scrollTop = scrollContainer.scrollTop;
        const currentSectionIndex = Math.round(scrollTop / viewportHeight);
        const currentSection = sections[currentSectionIndex] || 'main';
        setActiveSection(currentSection);
      } else {
        // Fallback to window scroll if container not found
        setIsScrolled(window.scrollY > 0);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        
        const currentIndex = sections.indexOf(activeSection);
        let nextIndex;
        
        if (event.key === 'ArrowDown') {
          nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
          nextIndex = Math.max(currentIndex - 1, 0);
        }
        
        if (nextIndex !== currentIndex) {
          const nextSection = sections[nextIndex];
          const scrollContainer = document.querySelector('.scroll-snap-container');
          const element = document.getElementById(nextSection);
          
          if (scrollContainer && element) {
            const scrollTop = element.offsetTop;
            scrollContainer.scrollTo({
              top: scrollTop,
              behavior: "smooth"
            });
          }
        }
      }
    };

    // Listen to scroll events on the scroll container
    const scrollContainer = document.querySelector('.scroll-snap-container');
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    } else {
      // Fallback to window scroll
      window.addEventListener("scroll", handleScroll);
    }

    // Listen to keyboard events
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection]);

  const handleNavClick = (href: string) => {
    const section = href.replace("#", "");
    onClickCallback?.(section);
    
    // Find the scroll container and target element
    const scrollContainer = document.querySelector('.scroll-snap-container');
    const element = document.getElementById(section);
    
    if (scrollContainer && element) {
      // Calculate the position of the element relative to the scroll container
      const scrollTop = element.offsetTop;
      
      // Smooth scroll within the container
      scrollContainer.scrollTo({
        top: scrollTop,
        behavior: "smooth"
      });
    } else if (element) {
      // Fallback to regular scrollIntoView
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
