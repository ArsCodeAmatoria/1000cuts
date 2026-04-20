import type { Locale } from "@/i18n/config"

const paragraphClassName =
  "text-lg leading-relaxed text-muted-foreground sm:text-xl [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic"

export function WritingSection({
  locale,
  title,
}: {
  locale: Locale
  title: string
}) {
  if (locale === "fr") {
    return (
      <section
        className="space-y-6"
        aria-labelledby="home-writing-heading"
      >
        <h2
          id="home-writing-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        <div className={`space-y-5 ${paragraphClassName}`}>
          <p>
            J’écris pour le <em>cinéma indépendant</em> à une{" "}
            <strong>échelle réelle</strong> : une prémisse qui tient, une pression sur les
            personnages, et une tonalité qui tient encore quand la production reste sobre.
          </p>
          <p>
            J’aime la <strong>collaboration</strong> quand elle sert la scène —{" "}
            <em>des notes claires</em>, <em>des itérations rapides</em>, et un scénario que les
            départements peuvent <strong>vraiment tourner</strong>.
          </p>
          <p>
            Je suis attirée par le travail <strong>réalisable</strong> : des choix qui respectent la
            distribution, les lieux, le calendrier et le son —{" "}
            <em>les contraintes comme discipline</em>, pas comme compromis.
          </p>
          <p>
            Si vous avez un projet ou un dossier à faire lire, <strong>écrivez-moi</strong> — je
            pourrai vous parler de l’adéquation et des prochaines étapes.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6" aria-labelledby="home-writing-heading">
      <h2
        id="home-writing-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      <div className={`space-y-5 ${paragraphClassName}`}>
        <p>
          I write for <em>independent film</em> at <strong>real scale</strong>: a premise that holds,
          pressure on the characters, and a tone that still works when the production stays lean.
        </p>
        <p>
          I like <strong>collaboration</strong> when it serves the scene—<em>clear notes</em>,{" "}
          <em>fast iterations</em>, and a script that departments can actually <strong>shoot</strong>.
        </p>
        <p>
          I&apos;m drawn to <strong>producible</strong> work: choices that respect cast, locations,
          schedule, and sound—<em>constraints as discipline</em>, not compromise.
        </p>
        <p>
          If you have a project or a packet you want read, <strong>reach out</strong>—I can talk about
          fit and next steps.
        </p>
      </div>
    </section>
  )
}
