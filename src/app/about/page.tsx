import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
}

const socials = [
  { label: "github", handle: "@albinantoab", url: "https://github.com/albinantoab" },
  { label: "linkedin", handle: "/in/albin-anto", url: "https://www.linkedin.com/in/albin-anto-bb226a13a/" },
  { label: "email", handle: "albinantoab@gmail.com", url: "mailto:albinantoab@gmail.com" },
]

export default function About() {
  return (
    <div className="mx-auto max-w-[720px] px-8 py-14">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-medium">Albin Anto</h1>
        <p className="font-mono text-[11px] text-ink-3 tracking-[0.04em] uppercase">
          Product Engineer
        </p>
      </div>

      <p className="text-[19px] leading-[1.6] text-ink-2 max-w-[56ch] mb-8" style={{ textWrap: "pretty" }}>
        Product Engineer with over a decade of experience building and
        shipping software products end to end. Currently working as an
        Engineering Lead, focusing on end-to-end product ownership&mdash;from
        ideation and architecture to implementation and delivery.
      </p>

      <dl className="grid grid-cols-[100px_1fr] gap-x-6 gap-y-3 font-mono text-[12.5px] border-t border-border pt-6 max-w-[480px]">
        {socials.map((s) => (
          <div key={s.label} className="contents">
            <dt className="text-ink-4 uppercase tracking-[0.04em] text-[11px] pt-0.5">
              {s.label}
            </dt>
            <dd>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-border pb-px hover:text-primary hover:border-primary transition-colors"
              >
                {s.handle}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
