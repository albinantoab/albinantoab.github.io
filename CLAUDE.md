# Project: Albin Anto — Portfolio & Blog

## Rules

1. **Minimal design** — prioritize whitespace, clean typography, and content readability
2. **Responsive** — mobile-first, works on all screen sizes
3. **WCAG 2.2 compliant** — all text meets AA contrast ratios minimum (AAA where possible)
4. **Keyboard accessible** — all interactive elements reachable and operable via keyboard, visible focus indicators
5. **Consistency** — same element must look and behave the same everywhere; reuse shared styles, never create a second variant of the same UI pattern
6. **Prose typography for all reading text** — all paragraphs and long-form text must use the `<Prose>` component (`src/components/prose.tsx`): 16px/1.5 on mobile, 18px/1.6 on desktop. Never hardcode `leading-relaxed` or font sizes on reading text directly.

## Identity

Albin should be described as **Product Engineer** — NOT "fullstack". His role is Engineering Lead with end-to-end product ownership.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- shadcn/ui (New York style)
- Lucide icons
- Atkinson Hyperlegible font
- MDX for blog posts (`src/content/blog/*.mdx`)
- Deployed on Vercel

## Color System

Full WCAG-compliant color palette defined in `src/app/globals.css` with light and dark mode CSS custom properties. Do not introduce new colors without verifying contrast ratios.

## Commands

- `yarn dev` — dev server with Turbopack
- `yarn build` — production build
- `yarn lint` — ESLint
