"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav
        className="mx-auto max-w-2xl px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Albin
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/about"
            className={cn(
              "px-3 py-2 text-sm rounded-md transition-colors hover:bg-muted",
              pathname === "/about"
                ? "text-foreground"
                : "text-muted-foreground"
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
