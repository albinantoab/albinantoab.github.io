import type { Metadata } from "next"
import { Github, Linkedin, Mail } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import { Prose } from "@/components/prose"

export const metadata: Metadata = {
  title: "About",
}

const socials = [
  { name: "GitHub", url: "https://github.com/albinantoab", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/albin-anto-bb226a13a/",
    icon: Linkedin,
  },
  { name: "Email", url: "mailto:albinantoab@gmail.com", icon: Mail },
]

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "Appsmith",
    location: "Bengaluru",
    duration: "July 2021 \u2013 April 2025 \u00b7 3.9 years",
    description: [
      "Architected and implemented a scalable design system leveraging React and TypeScript, accelerating development timelines by 30%.",
      "Enhanced accessibility and theming of platform components, enabling enterprise customisation and driving measurable improvements in revenue.",
      "Developed the split-pane editor and tabs UI, improving user productivity by 20%.",
      "Recognised as one of the top 5 contributors to the Appsmith repository in 2024.",
      "Introduced GitHub workflows to automate and streamline the NPM publishing process.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "Cypress",
      "Jest",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "BitClass",
    location: "Bengaluru",
    duration: "December 2020 \u2013 June 2021 \u00b7 7 months",
    description: [
      "Led a team of two and managed releases and architecture for the main website.",
      "Built Flask backend APIs tailored to the organisation\u2019s business needs.",
      "Handled full DevOps for frontend and backend using AWS, Kubernetes, and Docker.",
      "Mentored junior engineers during React to Next.js migration, achieving 70% SEO improvement.",
      "Designed an internal tool using React, reducing manual onboarding and reporting effort by 50%.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Flask",
      "AWS",
    ],
  },
  {
    title: "Software Engineer II",
    company: "HomeLane",
    location: "Bengaluru",
    duration: "December 2017 \u2013 November 2020 \u00b7 3 years",
    description: [
      "Owned and architected Roster, an internal tool automating workflows for multiple stakeholders.",
      "Integrated Salesforce CRM via webhooks and APIs for lead and opportunity tracking.",
      "Managed CRM migration from Zoho to Salesforce during company acquisition.",
      "Launched workflow that deprecated Smartsheets, saving $12K annually for the organisation.",
      "Created a mobile application using Ionic that reduced project approval time by 40%.",
    ],
    technologies: [
      "React",
      "PHP",
      "CodeIgniter",
      "Python",
      "Ionic",
      "MySQL",
    ],
  },
  {
    title: "Software Engineer",
    company: "Capricoast (Acquired by HomeLane)",
    location: "Bengaluru",
    duration: "January 2017 \u2013 December 2017 \u00b7 1 year",
    description: [
      "Re-architected the quick estimator backend for better performance and customisation.",
      "Integrated robust payment gateways, decreasing payment failure frequency.",
      "Created admin panels for user onboarding, role assignment, and menu mapping.",
    ],
    technologies: ["React", "jQuery", "PHP", "CodeIgniter", "HTML", "CSS"],
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-4 md:px-6 py-16">
      <h1 className="text-2xl font-bold mb-6">About</h1>

      <section className="mb-12 space-y-4">
        <Prose className="space-y-4">
          <p>
            Product Engineer with over a decade of experience building and
            shipping software products end to end. Currently working as an
            Engineering Lead, I focus on taking ownership of the entire product
            lifecycle&mdash;from ideation and architecture to implementation and
            delivery.
          </p>
          <p>
            I care about building things that are well-crafted, accessible, and
            genuinely useful.
          </p>
        </Prose>
        <div className="flex items-center gap-4 pt-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-4 w-4" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-6">Experience</h2>
        <div className="divide-y divide-border">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </div>
      </section>
    </div>
  )
}
