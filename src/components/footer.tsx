import { Github, Linkedin, Mail } from "lucide-react"

const socials = [
  { name: "GitHub", url: "https://github.com/albinantoab", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/albin-anto-bb226a13a/",
    icon: Linkedin,
  },
  { name: "Email", url: "mailto:albinantoab@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-2xl px-6 py-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Albin
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
