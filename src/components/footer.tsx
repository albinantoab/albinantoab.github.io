const links = [
  { label: "github", url: "https://github.com/albinantoab" },
  { label: "linkedin", url: "https://www.linkedin.com/in/albin-anto-bb226a13a/" },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-8 pt-8 pb-10">
        <p className="font-mono text-[12.5px] text-ink-3">
          &copy; {new Date().getFullYear()} Albin
        </p>
        <div className="flex gap-3.5 font-mono text-[11.5px] tracking-[0.02em] text-ink-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
