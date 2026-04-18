export const site = {
  name: "A Thousand Cuts Films",
  tagline: "Independent film production",
  email: "1000cutsfilms@gmail.com",
  location: "British Columbia, Canada",
  person: {
    name: "Leigh Akin",
    roles: ["Producer", "Director", "Writer"],
  },
  portfolio: [
    {
      title: "earlier",
      href: "https://earlier-phi.vercel.app/",
      description:
        "Indie thriller — three friends stage a woods intervention; wild mushrooms derail the night, someone vanishes, and memory won’t hold. Written by Leigh Akin. Hope, BC · Silver Lake.",
    },
    {
      title: "Flower",
      href: "https://flower-script.vercel.app/",
      description:
        "Animated musical adventure · YA fantasy — she’s born without a scent in a world that only believes what it can measure. Story by Lynne Tapper; screenplay and songs by Leigh Akin.",
    },
    {
      title: "The Child",
      href: "https://the-child.vercel.app/",
      description:
        "Screen story set in ancient Mongolia: a guilt-ridden young warrior who thinks control can prevent loss must escort a mysterious child across the vast steppe.",
    },
    {
      title: "Caislean Dubh",
      href: "https://caislean-dubh.vercel.app/",
      description:
        "Irish psychological thriller / horror — strangers at a remote castle find their names in the ledger; doubles rise from a black pond. Script reader with Save the Cat beats and scene anchors.",
    },
    {
      title: "Fish",
      href: "https://fish-script.vercel.app/",
      description:
        "Cinematic musical in River Z — Zuri fights corruption and reaches fallen icon Marcus Vale to save the town and the river. Leigh Akin screenplay and songs; Motown soul, hip-hop, songs as memory and transformation.",
    },
  ] as const,
}
