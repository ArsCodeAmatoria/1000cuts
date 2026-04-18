"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

/** Matches [Meraki Narrative](https://www.merakinarrative.com/) day/night pill labels from their custom CSS. */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex h-11 min-w-[6.25rem] items-center justify-center rounded-full px-4 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-0",
          className
        )}
        aria-hidden
      >
        …
      </span>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-11 min-w-[6.25rem] items-center justify-center rounded-full border-none px-4 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors",
        isDark
          ? "bg-[#243c2f] text-[#efeba7]"
          : "bg-[#efeba7] text-[#243c2f]",
        className
      )}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? "Lime" : "Green"}
    </button>
  )
}
