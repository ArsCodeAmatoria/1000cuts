import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Reveal } from "@/components/marketing/reveal"
import { isLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionary"
import { site } from "@/lib/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  if (!isLocale(raw)) return {}
  const dict = getDictionary(raw)
  return {
    title: `${dict.nav.about} — ${dict.metadata.siteTitle}`,
    description: dict.metadata.aboutDescription,
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const dict = getDictionary(raw)

  return (
    <main id="main" className="flex-1">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-14 sm:grid-cols-[1.1fr_0.9fr] sm:gap-16">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {dict.about.title}
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="space-y-8 text-muted-foreground">
            <p className="text-xl leading-relaxed sm:text-2xl">{dict.about.body}</p>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand sm:text-base">
                {dict.about.roleHeading}
              </p>
              <p className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {site.person.name}
              </p>
              <p className="mt-2 text-base uppercase tracking-[0.2em] text-muted-foreground sm:text-lg">
                {dict.about.rolesLine}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  )
}
