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
/*   {
    slug: "ai-risk-insights",
    date: "2026-03-24",
    title: {
      de: "Wie KI Risiko- und Projekttransparenz in Führungsteams verbessert",
      en: "How AI improves risk and project transparency for leadership teams",
    },
    intro: {
      de: "Ein strukturierter Überblick darüber, wie Teams operative Risiken früher erkennen, Projekte sauber priorisieren und schneller fundierte Entscheidungen treffen können.",
      en: "A structured look at how teams can identify operational risks earlier, prioritize projects more clearly, and make better decisions faster.",
    },
    sections: [
      {
        heading: {
          de: "Warum dieses Thema wichtig ist",
          en: "Why this matters",
        },
        paragraphs: [
          {
            de: "Viele Organisationen arbeiten heute mit einer hohen Anzahl paralleler Initiativen. Ohne ein konsistentes Bild über Status, Risiken und Prioritäten entsteht schnell Unsicherheit im Management.",
            en: "Many organizations run a large number of initiatives in parallel. Without a consistent view of status, risk, and priorities, uncertainty builds quickly at the leadership level.",
          },
          {
            de: "Ein datengetriebener Ansatz hilft dabei, kritische Entwicklungen früher sichtbar zu machen und Entscheidungen nicht nur auf Gefühl, sondern auf belastbare Signale zu stützen.",
            en: "A data-driven approach helps surface critical developments earlier and supports decisions based on reliable signals instead of instinct alone.",
          },
        ],
        bullets: [
          {
            de: "Frühere Identifikation von Abweichungen und Eskalationen",
            en: "Earlier identification of deviations and escalation risks",
          },
          {
            de: "Bessere Priorisierung über mehrere Programme hinweg",
            en: "Better prioritization across multiple programs",
          },
          {
            de: "Einheitliche Entscheidungsgrundlagen für Führungsteams",
            en: "Shared decision-making foundations for leadership teams",
          },
        ],
      },
      {
        heading: {
          de: "Was ein guter Beitrag zeigen sollte",
          en: "What a strong post should highlight",
        },
        paragraphs: [
          {
            de: "Diese Blog-Struktur ist bewusst so aufgebaut, dass Sie zukünftige Beiträge sehr einfach ergänzen können: Titel, Datum, deutsche und englische Inhalte sowie beliebig viele Medienblöcke pro Beitrag.",
            en: "This blog structure is intentionally designed so future posts are easy to add: title, date, German and English content, plus any number of media blocks per post.",
          },
        ],
      },
    ],
    media: [
      {
        type: "image",
        src: "/assets/risk/RiskManagementDashboard.png",
        alt: {
          de: "Dashboard für Risikomanagement und Projekttransparenz",
          en: "Dashboard for risk management and project transparency",
        },
        caption: {
          de: "Beispielhafte Visualisierung für Risiko- und Projektstatus.",
          en: "Example visualization for risk and project status.",
        },
      },
      {
        type: "image",
        src: "/assets/risk/RiskManagementMatrix.png",
        alt: {
          de: "Risikomatrix mit priorisierten Handlungsfeldern",
          en: "Risk matrix with prioritized action areas",
        },
        caption: {
          de: "Mehrere Medien pro Beitrag werden automatisch untereinander dargestellt.",
          en: "Multiple media items per post are displayed in a vertical stack automatically.",
        },
      },
    ],
  }, */
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
