"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import type { LocalizedProject } from "@/i18n/dictionary"
import { cn } from "@/lib/utils"

export function PortfolioCard({
  project,
  delay = 0,
}: {
  project: LocalizedProject
  delay?: number
}) {
  const reduce = useReducedMotion()

  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true, margin: "-8% 0px" } as const,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] as const,
          delay,
        },
      }

  return (
    <motion.article {...motionProps} className="group relative h-full">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex h-full flex-col justify-between gap-8 rounded-xl border border-border bg-background p-7 transition sm:p-8",
          "hover:border-foreground hover:bg-foreground hover:text-background"
        )}
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            <span className="rounded-full border border-border p-2.5 text-muted-foreground transition group-hover:border-background group-hover:bg-background group-hover:text-foreground sm:p-3">
              <ArrowUpRight className="size-5 sm:size-6" aria-hidden />
            </span>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground group-hover:text-background sm:text-lg">
            {project.description}
          </p>
        </div>
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-background sm:text-sm">
          {project.href.replace(/^https?:\/\//, "")}
        </p>
      </a>
    </motion.article>
  )
}
