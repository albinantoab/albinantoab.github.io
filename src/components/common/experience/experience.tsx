"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCard {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experienceData: ExperienceCard[] = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Appsmith",
    location: "Bengaluru",
    duration: "July 2021 - Present (3.5 years)",
    description: [
      "Architected and implemented a scalable design system leveraging React and TypeScript, accelerating development timelines by 30% and enhancing code maintainability.",
      "Enhanced accessibility and theming of platform components, enabling enterprise customisation and driving measurable improvements in revenue and user satisfaction.",
      "Developed the split-pane editor and tabs UI, improving user productivity by 20% and enhancing navigation across key workflows.",
      "Contributed to the UI development of seat-based pricing, improving the user experience and streamlining the pricing process.",
      "Recognised as one of the top 5 contributors to the Appsmith repository in 2024.",
      "Added various unit tests using Jest across the platform, enhancing stability and increasing test coverage by 5%.",
      "Fixed and added Cypress tests to ensure UI functionality and stability, improving overall test reliability and platform performance.",
      "Introduced GitHub workflows to automate and streamline the NPM publishing process."
    ],
    technologies: ["React", "TypeScript", "HTML", "CSS", "JavaScript", "NPM", "Cypress", "Jest"]
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "BitClass",
    location: "Bengaluru",
    duration: "December 2020 - June 2021 (7 months)",
    description: [
      "Utilized effective leadership strategies to guide a team of two individuals and successfully manage the releases and architecture for the main website.",
      "Developed robust Flask backend solutions by designing and building APIs tailored to the organization's unique business needs.",
      "Expertly handled the full scope of DevOps responsibilities for both the backend and frontend of the website, utilizing AWS, Kubernetes, and Docker to streamline processes and increase efficiency.",
      "Demonstrated strong mentorship abilities by providing guidance and support to junior team members during the conversion of existing React pages to Next.js, resulting in a 70% improvement in SEO performance.",
      "Designed, architected, and implemented a powerful internal tool using React, reducing manual effort for user onboarding, course creation, and reporting by 50%.",
      "Conducted thorough code reviews, efficiently debugged problems, and implemented effective solutions to ensure optimal performance and functionality of the website.",
      "Successfully developed and executed comprehensive project plans by taking initial concepts and transforming them into tangible, effective solutions.",
      "Demonstrated expertise in full website redesigns by improving navigation, enhancing visuals, and strengthening search engine rankings to boost overall user engagement and satisfaction."
    ],
    technologies: ["React", "Next.js", "Typescript", "HTML", "CSS", "Python", "Flask", "Jest"]
  },
  {
    id: 3,
    title: "Software Engineer II",
    company: "HomeLane",
    location: "Bengaluru",
    duration: "December 2017 - November 2020 (3 years)",
    description: [
      "Took ownership and architecting internal tool called Roster which helps organization to automate manual work done by different stake holders.",
      "Integrated salesforce CRM to Roster using web-hooks and APIs to keep track of leads and opportunities and to distribute them to appropriate stake holders.",
      "Managed migration of CRM from Zoho to Salesforce during company acquisition which was cost effective solution since third party managed migrations are cost intensive.",
      "Launched 10-40 workflow on Roster which deprecated Smartsheets completely from HomeLane's Ops workflow (making it all available in single product - Roster) and fetched annual saving of $12K for organisation.",
      "Optimised table structures, queries and code base in order to reduce API response time.",
      "Conduct code review in order to ensure code quality is as per standards.",
      "Drafted SRS and PRD documents for multiple projects.",
      "Directed software design and development across multifaceted team to meet product needs for functionality, timeline and performance.",
      "Created a robust mobile application using Ionic that reduced project approval time by 40%, enabling users to complete tasks without the need for bulky laptops, thereby increasing overall productivity for field operations.",
      "Integrated Datadog logging to system for capturing error logs which helped in faster bug fix of field issues.",
      "Was involved in both frontend and backend tasks in creation of multiple dashboards for different stake holders which helped them to better understand their priority tasks and act accordingly.",
      "Involved in migration of PHP UI to React in order to decrease page load time and to isolate frontend and backend.",
      "Re-architected backend and database design using MySQL to support multiple orders for a single user, while mentoring a team of 4 to implement the solution.",
      "Wrote payout calculation engine to calculate payouts for partners which automated most of financial tasks.",
      "Exposed REST APIs using the PHP CodeIgniter framework to ensure seamless communication between multiple systems.",
      "Performed troubleshooting of technical issues within production environment.",
      "Led the Blitz development initiative as Subject Matter Expert and primary point-of-contact for project management staff, building the solution using Ionic."
    ],
    technologies: ["React", "Next.js", "Typescript", "PHP", "CodeIgniter", "Python", "Ionic", "HTML", "CSS", "SCSS"]
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Capricoast (Acquired by HomeLane)",
    location: "Bengaluru",
    duration: "January 2017 - December 2017 (1 year)",
    description: [
      "Re-architected and wrote quick estimator backend and made it more optimized and customisable.",
      "Actively participated in production issue resolution.",
      "Integrated more robust and trustable payment gateways to the system and decreased the frequency of payment failures.",
      "Created a microsite for showing completed projects under the supervision of the manager.",
      "Created admin panels which facilitated tech team in onboarding users to the system, assigning roles, and mapping menus."
    ],
    technologies: ["React", "JQuery", "HTML", "CSS", "PHP", "CodeIgniter"]
  }
];

export function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % experienceData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + experienceData.length) % experienceData.length);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50; // Minimum swipe distance to trigger navigation
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left - go to next
        nextCard();
      } else {
        // Swiped right - go to previous
        prevCard();
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextCard();
      } else {
        prevCard();
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextCard();
      } else if (event.key === "ArrowLeft") {
        prevCard();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentExperience = experienceData[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 sm:mt-24 px-2 sm:px-4 h-full flex flex-col justify-center">
      {/* Main Content Area */}
      <div className="flex items-center relative">
        {/* Experience Card */}
        <div className="w-full mx-2 sm:mx-8">
          <div
            ref={cardRef}
            className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-2xl h-[calc(100dvh-140px)] sm:h-[calc(100vh-200px)] flex flex-col cursor-grab active:cursor-grabbing select-none sm:bg-black/20"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {currentExperience.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2 text-muted-foreground mb-2">
                <span className="font-semibold text-primary text-xs sm:text-sm">
                  {currentExperience.company}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm">
                  {currentExperience.location}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm">
                  {currentExperience.duration}
                </span>
              </div>
            </div>

            {/* Description - Scrollable */}
            <div className="flex-1 overflow-y-auto mb-4 sm:mb-6 pr-1 sm:pr-2">
              <ul className="space-y-2 sm:space-y-3">
                {currentExperience.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-primary mt-1 sm:mt-1.5 flex-shrink-0 text-xs sm:text-sm">
                      •
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies - Fixed */}
            <div className="flex-shrink-0">
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {currentExperience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-[8px] sm:text-[10px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2 flex-shrink-0">
        {experienceData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20",
              index === currentIndex
                ? "bg-primary border-primary purple-glow-hover-subtle"
                : "hover:bg-white/20"
            )}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
