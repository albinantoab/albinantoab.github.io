"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-[30px] w-[30px]" aria-hidden="true" />
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-lg text-ink-3 hover:bg-[var(--tag-bg)] hover:text-foreground transition-colors"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[15px] w-[15px]" />
      ) : (
        <Moon className="h-[15px] w-[15px]" />
      )}
    </button>
  )
}
