import { Tag } from "@/components/tag"
import { Prose } from "@/components/prose"

interface Experience {
  title: string
  company: string
  location: string
  duration: string
  description: string[]
  technologies: string[]
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="space-y-4 py-6">
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-bold">{experience.title}</h3>
          <p className="text-sm text-muted-foreground shrink-0">
            {experience.company} &middot; {experience.location}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">{experience.duration}</p>
      </div>
      <ul className="space-y-2 text-sm" role="list">
        {experience.description.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span
              className="text-muted-foreground shrink-0 mt-0.5"
              aria-hidden="true"
            >
              &middot;
            </span>
            <Prose>
              {item}
            </Prose>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  )
}
