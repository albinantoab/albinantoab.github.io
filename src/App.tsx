import './App.css'
import { ArrowUpRight, Github, Globe, Linkedin, Mail, Phone } from 'lucide-react'

function App() {
  const startDate = new Date('2016-04-01')
  const now = new Date()
  let years = now.getFullYear() - startDate.getFullYear()
  let months = now.getMonth() - startDate.getMonth()
  if (months < 0) {
    years--
    months += 12
  }

  const skills = [
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'PHP',
    'Ionic',
    'Tailwind CSS',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold">AA</span>
            <span className="hidden sm:block text-sm tracking-wide text-gray-700">Software Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#experience" className="hover:text-gray-900">Experience</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/albinantoab"
              target="_blank"
              rel="noreferrer noopener"
              className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/albin-anto-bb226a13a"
              target="_blank"
              rel="noreferrer noopener"
              className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main id="home" className="px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="py-16 md:py-24">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Bangalore, India</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
                Building dependable web and mobile experiences.
              </h1>
              <p className="text-lg text-gray-600">
                I design and ship pragmatic, resilient software across the stack — from thoughtful React UIs to
                robust Node.js APIs. I optimize for clarity, maintainability, and speed of iteration.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:albinanto@gmail.com"
                  className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800"
                >
                  <Mail className="h-4 w-4" /> Get in touch
                </a>
                <a
                  href="https://github.com/albinantoab"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Github className="h-4 w-4" /> View GitHub
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                  <div className="text-2xl font-semibold">{years}+</div>
                  <div className="text-xs text-gray-500">Years experience</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                  <div className="text-2xl font-semibold">10+</div>
                  <div className="text-xs text-gray-500">Core tools</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                  <div className="text-2xl font-semibold">Full‑stack</div>
                  <div className="text-xs text-gray-500">Web & mobile</div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Work */}
          <section id="work" className="py-10">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-xl font-medium">Featured work</h2>
              <a href="https://albinantoab.github.io" target="_blank" rel="noreferrer noopener" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
                All projects <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <article className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">Personal Portfolio</h3>
                  <a href="https://albinantoab.github.io" target="_blank" rel="noreferrer noopener" className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-gray-200 group-hover:bg-gray-50">
                    <Globe className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Minimal, fast, accessible. Built with React, TypeScript and Tailwind, optimized for clarity and performance.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-700">React</span>
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-700">TypeScript</span>
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-700">Tailwind</span>
                </div>
              </article>

              {/* Project 2 */}
              <article className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">Open Source & Experiments</h3>
                  <a href="https://github.com/albinantoab" target="_blank" rel="noreferrer noopener" className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-gray-200 group-hover:bg-gray-50">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Small libraries, UI experiments, and contributions — focused on developer experience and ergonomics.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-700">DX</span>
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-700">Tooling</span>
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-700">UI</span>
                </div>
              </article>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-14">
            <h2 className="text-xl font-medium mb-6">Experience</h2>
            <ol className="relative border-l border-gray-200 ml-3">
              <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-xs">1</span>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-medium">Software Engineer — Full‑stack</h3>
                    <span className="text-xs text-gray-500">2016 — Present</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Shipping production apps end‑to‑end: React front‑ends, Node APIs, SQL/NoSQL data stores, and mobile with Ionic.
                  </p>
                </div>
              </li>
              <li className="mb-2 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-xs">2</span>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-medium">Key Focus Areas</h3>
                    <span className="text-xs text-gray-500">Ongoing</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>Developer experience, maintainable patterns, and clear interfaces</li>
                    <li>Performance, accessibility, and fast feedback loops</li>
                    <li>Pragmatic architecture and reliable deployments</li>
                  </ul>
                </div>
              </li>
            </ol>
          </section>

          {/* Skills */}
          <section id="skills" className="py-10">
            <h2 className="text-xl font-medium mb-6">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="skill-tag rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-14">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-medium">Let’s build something useful.</h2>
                <p className="text-gray-600 mt-1">Reach me via email or phone — I usually respond within a day.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:albinanto@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a href="tel:+918867114110" className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>
            <footer className="mt-6 flex items-center justify-between text-xs text-gray-500">
              <span>© {new Date().getFullYear()} Albin Anto</span>
              <div className="flex items-center gap-3">
                <a href="https://albinantoab.github.io" target="_blank" rel="noreferrer noopener" className="hover:text-gray-800 inline-flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5" /> Website
                </a>
                <a href="https://github.com/albinantoab" target="_blank" rel="noreferrer noopener" className="hover:text-gray-800 inline-flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/albin-anto-bb226a13a" target="_blank" rel="noreferrer noopener" className="hover:text-gray-800 inline-flex items-center gap-1">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </div>
            </footer>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App