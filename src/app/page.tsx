"use client";

import { Header, PageContainer, Experience, About } from "@/components/common";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  ReactIcon,
  FlutterIcon,
  TypescriptIcon,
  JavascriptIcon,
  NodeIcon,
  PythonIcon,
  PHPIcon,
  HTMLIcon,
  CSSIcon,
  FastAPIIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

const socials = [
  {
    name: "Github",
    url: "https://github.com/albinantoab",
    icon: Github,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/albinantoab/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:albinantoab@gmail.com",
    icon: Mail,
  },
];

const skills = [
  {
    name: "React",
    icon: ReactIcon,
    hoverColor: "hover:text-[#61DAFB]",
    link: "https://react.dev/",
  },
  {
    name: "Flutter",
    icon: FlutterIcon,
    hoverColor: "hover:text-[#3FB6D3]",
    link: "https://flutter.dev/",
  },
  {
    name: "Typescript",
    icon: TypescriptIcon,
    hoverColor: "hover:text-[#007acc]",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: JavascriptIcon,
    hoverColor: "hover:text-[#F0DB4F]",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Node JS",
    icon: NodeIcon,
    hoverColor: "hover:text-[#5fa04e]",
    link: "https://nodejs.org/",
  },
  {
    name: "Fast API",
    icon: FastAPIIcon,
    hoverColor: "hover:text-[#049688]",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    name: "Python",
    icon: PythonIcon,
    hoverColor: "hover:text-[#FFD845]",
    link: "https://www.python.org/",
  },
  {
    name: "PHP",
    icon: PHPIcon,
    hoverColor: "hover:text-[#777BB4]",
    link: "https://www.php.net/",
  },
  {
    name: "HTML",
    icon: HTMLIcon,
    hoverColor: "hover:text-[#E44D26]",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: CSSIcon,
    hoverColor: "hover:text-[#1572B6]",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

export default function Home() {

  return (
    <>
      <Header />
      <PageContainer>
        <section
          id="main"
          className="scroll-snap-section flex flex-col items-center justify-center gap-2 relative w-full"
        >
          <h1 className="text-4xl font-bold">Albin Anto</h1>
          <p className="text-sm text-muted-foreground tracking-[0.08rem] text-center">
            Engineering Lead • Crafting Frontend & Mobile Experiences •
            Product-Focused Engineer
          </p>

          {/* Socials */}
          <div className="flex items-center justify-center gap-6 mt-4">
            {socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <social.icon className="w-6 h-6 text-gray-700 hover:text-primary purple-glow-icon" />
              </a>
            ))}
          </div>

          {/* Skills */}
          <div className="flex items-center justify-center gap-8 mt-4 absolute bottom-[3rem] w-full overflow-x-auto scrollbar-hide">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={cn(
                    `cursor-pointer p-4 text-gray-300 md:text-gray-800 `,
                    skill.hoverColor
                  )}
                  title={skill.name}
                >
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent
                      className={`w-4 h-4transition-colors duration-300`}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience section */}
        <section
          id="experience"
          className="scroll-snap-section flex items-center justify-center"
        >
          <Experience />
        </section>

        {/* <section
          id="projects"
          className="scroll-snap-section flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground">
              Projects section coming soon...
            </p>
          </div>
        </section> */}

        <section
          id="about"
          className="scroll-snap-section flex items-center justify-center"
        >
          <About />
        </section>
      </PageContainer>
    </>
  );
}
