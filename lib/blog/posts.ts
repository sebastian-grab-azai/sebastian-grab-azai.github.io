export type BlogLang = "de" | "en"

export type LocalizedText = {
  de: string
  en: string
}

export type BlogSection = {
  heading?: LocalizedText
  paragraphs: LocalizedText[]
  bullets?: LocalizedText[]
}

export type BlogMediaImage = {
  type: "image"
  src: string
  alt: LocalizedText
  caption?: LocalizedText
}

export type BlogMediaVideo = {
  type: "video"
  src: string
  title: LocalizedText
  caption?: LocalizedText
  poster?: string
}

export type BlogMediaLinkedInEmbed = {
  type: "linkedinEmbed"
  src: string
  title: LocalizedText
  caption?: LocalizedText
}

export type BlogMediaExternalLink = {
  type: "externalLink"
  url: string
  title: LocalizedText
  description: LocalizedText
}

export type BlogMedia = BlogMediaImage | BlogMediaVideo | BlogMediaLinkedInEmbed | BlogMediaExternalLink

export type BlogPost = {
  slug: string
  date: string
  title: LocalizedText
  intro: LocalizedText
  sections: BlogSection[]
  media: BlogMedia[]
}

export const blogPosts: BlogPost[] = [
    {
      slug: "azai-partnership",
      date: "2026-04-02",
      title: {
        de: "Strategische Partnerschaft mit Azai",
        en: "Strategic Partnership with Azai",
      },
      intro: {
        de: "Mit einer strategischen Partnerschaft mit Azai profitieren Sie nicht nur von einem bereits funktionierenden Produkt, sondern gestalten dessen Weiterentwicklung aktiv mit.",
        en: "By entering into a strategic partnership with Azai, you not only benefit from a proven product, but also play an active role in shaping its future development.",
      },
      sections: [
        {
          heading: {
            de: "Was das bedeutet?",
            en: "What does that mean?",
          },
          paragraphs: [
            {
              de: "Sie erhalten Ihre Projektdaten managementgerecht aufbereitet, schaffen früh Transparenz in Ihrer Organisation und sichern sich gleichzeitig:",
              en: "You’ll receive your project data in a format tailored for management, establish transparency within your organization early on, and at the same time ensure:",
            },
          ],
          bullets: [
            {
              de: "direkten Einfluss auf Roadmap & Features",
              en: "direct influence on the roadmap and features",
            },
            {
              de: "bevorzugte Konditionen in der Pilotphase",
              en: "preferential terms during the pilot phase",
            },
            {
              de: "garantierte Migrationsunterstützung",
              en: "guaranteed migration support",
            },
            {
              de: "Zugang zu neuen Modulen bereits im Mock-up-Stadium",
              en: "access to new modules as early as the mock-up stage",
            },
          ],
        },
        {
          heading: {
            de: "Warum?",
            en: "Why?",
          },
          paragraphs: [
            {
              de: "So entsteht eine Lösung, die sich nicht nur in der Praxis bewährt, sondern auch gezielt an Ihre Anforderungen anpasst. Für individuelle Erweiterungen und Features, die speziell für Ihre Organisation entwickelt werden, setzen wir auf eine partnerschaftliche Beteiligung an den Entwicklungskosten. Früh einsteigen heißt: sofort profitieren und die Zukunft der Plattform mitgestalten.",
              en: "The result is a solution that not only proves its worth in practice but is also tailored specifically to your needs. For custom extensions and features developed specifically for your organization, we rely on a partnership-based approach to sharing development costs. Getting on board early means reaping immediate benefits and helping to shape the platform’s future.",
            },
          ],
        },
      ],
      media: [
        {
          type: "image",
          src: "https://media.licdn.com/dms/image/v2/D4E22AQG9mX0pvnDStg/feedshare-shrink_800/B4EZ1Ok8AXIEAg-/0/1775139799428?e=1776902400&v=beta&t=9JfDMslRMmGYk14o5NcKA7xGywzJgk6hZaQ7z2fflXU",
          alt: {
            de: "Das Azai Partnership Programm",
            en: "The Azai Partnership Program",
          },
          caption: {
            de: "Das Azai Partnership Programm",
            en: "The Azai Partnership Program",
          },
        },
        {
          type: "externalLink",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7445475968003153920",
          title: {
            de: "LinkedIn-Beitrag öffnen",
            en: "Open LinkedIn post",
          },
          description: {
            de: "Strategische Partnerschaft mit Azai",
            en: "Strategic Partnership with Azai",
          },
        },
      ],
    },





    {
      slug: "azai-structure",
      date: "2026-03-27",
      title: {
        de: "Komplexe Projekte brauchen klare Strukturen.",
        en: "Complex projects require clear structures.",
      },
      intro: {
        de: "Mit Azai bilden Unternehmen ihre Projektlandschaft genau so ab, wie sie in der Realität funktioniert. Von der Mandantenebene über optionale Programme bis hin zu den einzelnen Projekten: Azai schafft eine flexible Hierarchie, die sich an Ihre Organisation anpasst — nicht umgekehrt.",
        en: "With Azai, companies can map their project landscape exactly as it operates in reality. From the client level to optional programs and down to individual projects, Azai creates a flexible hierarchy that adapts to your organization—not the other way around.",
      },
      sections: [
        {
          heading: {
            de: "Was das bedeutet?",
            en: "What does that mean?",
          },
          paragraphs: [
            {
              de: "Ein Nutzer kann mehreren Unternehmen zugeordnet sein. Programme können mehrere Projekte bündeln - Und wenn keine Programme benötigt werden, wird diese Ebene einfach ausgeblendet.",
              en: "A user can be assigned to multiple companies. Programs can group multiple projects—and if no programs are needed, this level is simply hidden.",
            },
          ],
          bullets: [
            {
              de: "Programmebene: Hier lassen sich alle Projektdaten in einem übergeordneten Dashboard aggregiert auswerten.",
              en: "Program level: Here, all project data can be aggregated and analyzed in a high-level dashboard.",
            },
            {
              de: "Projektebene: Der Ort, an dem alle Projektinformationen zusammenkommen.",
              en: "Project level: The place where all project information comes together.",
            },
            {
              de: "Rechteverwaltung: Nicht jeder muss alles sehen. Zugriffe können gezielt auf Projekt-, Programm- oder Mandantenebene vergeben werden.",
              en: "Access Management: Not everyone needs to see everything. Access can be granted specifically at the project, program, or client level.",
            },
          ],
        },
        {
          heading: {
            de: "Ihr Vorteil",
            en: "Your benefit",
          },
          paragraphs: [
            {
              de: "Mehr Übersicht. Mehr Kontrolle. Mehr Skalierbarkeit. Für Unternehmen, die nicht nur Projekte verwalten, sondern komplexe Strukturen professionell steuern wollen.",
              en: "Greater clarity. Greater control. Greater scalability. For companies that want to do more than just manage projects—they want to professionally manage complex structures.",
            },
          ],
        },
      ],
      media: [
        {
          type: "image",
          src: "https://media.licdn.com/dms/image/v2/D4D22AQHQyU_oTYhO9g/feedshare-shrink_800/B4DZ0utmC0GUAc-/0/1774605197816?e=1776297600&v=beta&t=BisrqU9YL39eDVAuRJF_FoltXOkiKmLACBJ5frvOQgw",
          alt: {
            de: "Die Azai Projektstruktur - relevante Insights für alle Stakeholder.",
            en: "The Azai Project Structure – Relevant Insights for All Stakeholders.",
          },
          caption: {
            de: "Die Azai Projektstruktur - relevante Insights für alle Stakeholder.",
            en: "The Azai Project Structure – Relevant Insights for All Stakeholders.",
          },
        },
        {
          type: "externalLink",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7443233686281510912",
          title: {
            de: "LinkedIn-Beitrag öffnen",
            en: "Open LinkedIn post",
          },
          description: {
            de: "Komplexe Projekte brauchen klare Strukturen.",
            en: "Complex projects require clear structures.",
          },
        },
      ],
    },
    {
    slug: "azai-risk-management",
    date: "2026-03-19",
    title: {
      de: "Risiken im Bauprojekt managen – statt nur darauf zu reagieren",
      en: "Managing risks in construction projects – instead of reacting to them",
    },
    intro: {
      de: "In Projekten entstehen Risiken nicht erst, wenn sie eintreten. Sie entstehen viel früher: In der Planungsphase, bei der Koordination und in Entscheidungsprozessen.",
      en: "In projects, risks rarely appear out of nowhere. They emerge much earlier — during planning, coordination, and decision-making.",
    },
    sections: [
      {
        heading: {
          de: "Azai Risikomanagement-Modul",
          en: "Azai risk management module",
        },
        paragraphs: [
          {
            de: "Mit dem Risikomanagement-Modul unserer Azai Plattform unterstützen wir Projektteams dabei, Risiken strukturiert zu erfassen, zu bewerten und aktiv zu steuern.",
            en: "With the Risk Management module of the Azai platform, project teams can identify, assess, and actively manage risks in a structured way.",
          },
        ],
        bullets: [
          {
            de: "Risikoregister: Risiken erfassen, Eintrittswahrscheinlichkeit und Auswirkungen bewerten sowie Verantwortliche definieren",
            en: "Risk register: Capture project risks, assess probability and impact, and assign responsible stakeholders",
          },
          {
            de: "Massnahmenmanagement: Gegenmassnahmen planen, Verantwortlichkeiten zuweisen und Fortschritt verfolgen ",
            en: "Mitigation management: Define countermeasures, assign ownership, and track progress",
          },
          {
            de: "Workshop-Funktion: Risiko-Workshops vorbereiten, relevante Risiken bündeln und Ergebnisse direkt dokumentieren",
            en: "Workshop functionality: Prepare and structure risk workshops by grouping relevant risks and documenting discussion points",
          },
          {
            de: "Risikoreporting: Übersichtliche Risikomatrix, Kennzahlen zu Auswirkungen auf Kosten und Termine sowie Analyse nach individuellen Kategorien",
            en: "Risk reporting: A clear risk matrix, key indicators for potential impact on cost and schedule, and analysis based on customizable categories",
          },
        ],
      },
      {
        heading: {
          de: "Maximale Anpassbarkeit an reale Projektstrukturen",
          en: "Maximum flexibility for real project environments",
        },
        paragraphs: [
          {
            de: "Das Modul lässt sich weitgehend konfigurieren – sodass jedes Projektteam das Risikomanagement genau an seine Prozesse anpassen kann. So wird aus einer statischen Risikoliste ein aktives Steuerungsinstrument für Bauprojekte.",
            en: "The module is highly configurable, allowing project teams to adapt risk management to their own workflows and project structures. This turns a static risk list into an active management tool for construction projects.",
          },
        ],
      },
    ],
    media: [
      {
        type: "video",
        src: "https://dms.licdn.com/playlist/vid/v2/D4D05AQHFzH9DwdAOzg/mp4-720p-30fp-crf28/B4DZ0GHUcdH4CI-/0/1773924078277?e=2147483647&v=beta&t=2AbGTDlSykLThaXpGZLOCkShggzOp0dzgnk3ChfXNx0",
        title: {
          de: "Azai Risikomanagement",
          en: "Azai risk management",
        },
      },
      {
        type: "externalLink",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7440376889212452864",
        title: {
          de: "LinkedIn-Beitrag öffnen",
          en: "Open LinkedIn post",
        },
        description: {
          de: "Risiken im Bauprojekt managen – statt nur darauf zu reagieren.",
          en: "Managing risks in construction projects – instead of reacting to them.",
        },
      },
    ],
  },
  {
    slug: "azai-launch",
    date: "2025-12-05",
    title: {
      de: "Azai AG Produkt-Launch Ankündigung",
      en: "Azai AG Product Launch Announcement",
    },
    intro: {
      de: "Wir freuen uns, einen wichtigen Meilenstein bekanntzugeben – unser MVP ist offiziell live! Unser erstes Modul, Risk Management, wurde lanciert und steht nun bereit, von Ihnen erkundet zu werden.",
      en: "We’re thrilled to share a major milestone - our MVP is officially live! Our first module, Risk Management, is now launched and ready for you to explore.",
    },
    sections: [
      {
        heading: {
          de: "Kontaktieren Sie uns für den Early-Access",
          en: "Contact us for early access",
        },
        paragraphs: [
          {
            de: "Dies markiert den Beginn unserer Reise, Unternehmensrisiken neu zu denken: erkennen, überwachen und proaktiv managen – effizienter als je zuvor. Egal, ob Sie bereits Kunde sind oder einfach neugierig auf innovatives Risikomanagement, wir laden Sie ein, es auszuprobieren, zu testen, herauszufordern und bei der Weiterentwicklung mitzuwirken.",
            en: "For new posts, you only add another entry in the data file. Layout, bilingual content, date display, and alternating alignment all stay consistent automatically.",
          },
        ],
      },
      {
        heading: {
          de: "Unsere Vision",
          en: "Our vision",
        },
        paragraphs: [
          {
            de: "Azai Elevate hilft Unternehmen, Projektdaten in klare Entscheidungen zu verwandeln – mit Predictive Insights, nahtloser Integration und Enterprise-Sicherheit.",
            en: "Azai Elevate helps companies turn project data into clear decisions—with predictive insights, seamless integration, and enterprise-grade security.",
          },
        ],
      },
    ],
    media: [
      {
        type: "image",
        src: "/assets/risk/RiskManagementDashboard.png",
        alt: {
          de: "Risiko Management Übersicht",
          en: "Risk management overview",
        },
      },
      {
        type: "image",
        src: "/assets/risk/RiskManagementRegister.png",
        alt: {
          de: "Risiko Management",
          en: "Risk management",
        },
      },
      {
        type: "externalLink",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7402668843975802880",
        title: {
          de: "LinkedIn-Beitrag öffnen",
          en: "Open LinkedIn post",
        },
        description: {
          de: "Wir freuen uns, einen wichtigen Meilenstein bekanntzugeben – unser MVP ist offiziell live!",
          en: "We’re thrilled to share a major milestone - our MVP is officially live!",
        },
      },
    ],
  },
]

export function getLocalizedText(value: LocalizedText, lang: BlogLang) {
  return value[lang]
}

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
}
