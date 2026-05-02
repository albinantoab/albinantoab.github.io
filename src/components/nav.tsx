"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export function Nav() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border">
      <nav
        className="mx-auto max-w-[720px] px-8 py-7 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-[21px] font-medium tracking-[-0.01em] leading-none hover:opacity-80 transition-opacity"
        >
          Albin
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/about"
            className={cn(
              "px-2.5 py-1.5 font-mono text-[13.5px] rounded-md transition-colors hover:bg-[var(--tag-bg)]",
              pathname === "/about"
                ? "text-foreground"
                : "text-ink-3"
            )}
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
