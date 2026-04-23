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
    slug: "azai-benchmarking",
    date: "2026-04-23",
    title: {
      de: "Diese Woche bei Azai",
      en: "This week at Azai",
    },
    intro: {
      de: "Neben unserem Risikomanagement ist jetzt auch das Terminmanagement live. Damit werden Projekte nicht nur transparenter, sondern auch deutlich besser steuerbar. Und das ist erst der nächste Schritt.",
      en: "In addition to our risk management system, our schedule management system is now live as well. This not only makes projects more transparent, but also significantly easier to manage. And that’s just the next step.",
    },
    sections: [
      {
        heading: {
          de: "Bald kommt unser Benchmarking-Modul.",
          en: "Our benchmarking module will be available soon.",
        },
        paragraphs: [
          {
            de: "Bauunternehmen können ihre Projekte mit hunderten Vergleichsprojekten aus der Schweiz, Deutschland und Österreich abgleichen – nach Kriterien wie Kosten, Region, Budget, Fläche - direkt für denselben Bautyp. So wird schnell sichtbar:",
            en: "Construction companies can compare their projects with hundreds of similar projects from Switzerland, Germany, and Austria—based on criteria such as cost, region, budget, and floor area—all for the same type of building. This quickly reveals:",
          },
        ],
        bullets: [
          {
            de: "Sind meine Annahmen realistisch?",
            en: "Are my assumptions realistic?",
          },
          {
            de: "Welche Kosten und welche Projektdauer sind vergleichbar?",
            en: "What are the comparable costs and project durations?",
          },
        ],
      },
      {
        heading: {
          de: "Besonders spannend",
          en: "Especially exciting",
        },
        paragraphs: [
          {
            de: "In Azai lassen sich künftig auch eigene Projekte direkt miteinander vergleichen – für noch präzisere Referenzwerte und die wirklich passende Vergleichsgruppe. Natürlich übersichtlich und grafisch aufbereitet in der Plattform. Mehr Transparenz. Bessere Entscheidungen. Weniger Bauchgefühl.",
            en: "In Azai, you’ll soon be able to directly compare your own projects with one another—for even more precise benchmarks and the perfect peer group. All presented clearly and visually within the platform. More transparency. Better decisions. Less guesswork.",
          },
        ],
      },
    ],
    media: [
      {
        type: "image",
        src: "https://media.licdn.com/dms/image/v2/D5622AQHf56FxhNxxWA/feedshare-shrink_800/B56Z25PUObKwAc-/0/1776929293445?e=1778716800&v=beta&t=j0OKlnGUV5fHFMQVL7k1BNcI-6jg5a5Vo1YsB5zLPxg",
        alt: {
          de: "Das Azai Benchmarking-Modul",
          en: "The Azai Benchmarking Module",
        },
        caption: {
          de: "Das Azai Benchmarking-Modul",
          en: "The Azai Benchmarking Module",
        },
      },
      {
        type: "externalLink",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7452981646787575808",
        title: {
          de: "LinkedIn-Beitrag öffnen",
          en: "Open LinkedIn post",
        },
        description: {
          de: "Azai Benchmarking-Modul",
          en: "Azai Benchmarking Module",
        },
      },
    ],
  },
  {
    slug: "azai-time-management",
    date: "2026-04-16",
    title: {
      de: "Das neue Azai Terminmodul",
      en: "The new Azai Time Module",
    },
    intro: {
      de: "Gerade in der Bau- und Immobilienbranche reicht es nicht, Termine nur zu erfassen — entscheidend ist, Abhängigkeiten, Verzögerungen und Auswirkungen frühzeitig sichtbar zu machen.",
      en: "Especially in the construction and real estate industries, it’s not enough to simply track deadlines—what matters most is identifying dependencies, delays, and their consequences early on.",
    },
    sections: [
      {
        heading: {
          de: "Warum Azai Terminmanagement?",
          en: "Why Azai time management?",
        },
        paragraphs: [
          {
            de: "Mit dem neuen Terminmodul in Azai können Teams:",
            en: "With the new scheduling module in Azai, teams can:",
          },
        ],
        bullets: [
          {
            de: "Termine und Abhängigkeiten strukturiert abbilden",
            en: "Map schedules and dependencies in a structured way",
          },
          {
            de: "Abläufe direkt im interaktiven Gantt-Diagramm bearbeiten",
            en: "Edit workflows directly in the interactive Gantt chart",
          },
          {
            de: "den kritischen Pfad analysieren",
            en: "Analyze the critical path",
          },
          {
            de: "Änderungen und Verzögerungen über die Historie nachvollziehen",
            en: "Track changes and delays via the history",
          },
          {
            de: "den Ist-/Soll-Fortschritt bewerten und gezielt Maßnahmen definieren",
            en: "Evaluate actual vs. target progress and define targeted measures",
          },
          {
            de: "über ein umfangreiches Dashboard eine saubere Gesamtübersicht erhalten.",
            en: "Get a clear overview via a comprehensive dashboard.",
          },
        ],
      },
      {
        paragraphs: [
          {
            de: "So wird Terminmanagement nicht nur dokumentiert, sondern aktiv zur Steuerung von Projekten genutzt.",
            en: "In this way, schedule management is not only documented but also actively used to manage projects.",
          },
        ],
      },
    ],
    media: [
      {
        type: "video",
        src: "https://dms.licdn.com/playlist/vid/v2/D5605AQEY-IWZs2uevQ/mp4-720p-30fp-crf28/B56Z2VHJQgKkCI-/0/1776323174306?e=1776931200&v=beta&t=fOfHp8KRTYDkJ0Og6lPGWtbnLF9ScptWucBMtgaXI8M",
        title: {
          de: "Azai Terminmanagement",
          en: "Azai time management",
        },
      },
      {
        type: "externalLink",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7450439413123186688",
        title: {
          de: "LinkedIn-Beitrag öffnen",
          en: "Open LinkedIn post",
        },
        description: {
          de: "Termine im Bauprojekt managen – um auf Abhängigkeiten zu reagieren.",
          en: "Managing deadlines in a construction project – to address dependencies.",
        },
      },
    ],
  },
  {
    slug: "azai-user-management",
    date: "2026-04-09",
    title: {
      de: "Azai - Benutzermanagement",
      en: "Azai - User Management",
    },
    intro: {
      de: "Mit Azai schaffen wir ein Benutzermanagement, das nicht nur sicher, sondern auch wirklich praxistauglich ist.",
      en: "With Azai, user management is not only secure but also built for real-world project structures.",
    },
    sections: [
      {
        heading: {
          de: "Unser mehrstufiges Berechtigungsmodell",
          en: "Our multi-level permission model",
        },
        paragraphs: [
          {
            de: "...sorgt dafür, dass jede Person genau die Zugriffe erhält, die sie braucht. Mandantentrennung, Programmrollen für den Gesamtüberblick, Projektrollen für Administration, Bearbeitung oder Leserechte – und als besonderer Vorteil: modulgenaue Freigaben innerhalb eines Projekts.",
            en: "...ensures that every user gets exactly the access they need. Tenant separation, program-level roles for overarching visibility, project-level roles for administration, editing, or read-only access — and, as a special advantage, module-specific permissions within each project.",
          },
        ],
        bullets: [
          {
            de: "Mitarbeitende können z. B. im selben Projekt das Zeitmodul bearbeiten, ohne automatisch Zugriff auf das Kostenmodul zu erhalten.",
            en: "In practice, this means a team member can, for example, manage schedules in the time module without automatically being allowed to edit the cost module in the same project.",
          },
          {
            de: "So wird Zusammenarbeit über Organisationen, Programme und Projekte hinweg flexibel steuerbar, transparent und sicher.",
            en: "This makes collaboration across organizations, programs, and projects flexible, transparent, and secure.",
          },
        ],
      },
    ],
    media: [
      {
        type: "externalLink",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7447949555230408705",
        title: {
          de: "LinkedIn-Beitrag öffnen",
          en: "Open LinkedIn post",
        },
        description: {
          de: "Azai - Benutzermanagement",
          en: "Azai - User Management",
        },
      },
    ],
},
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
        src: "https://media.licdn.com/dms/image/v2/D4E22AQG9mX0pvnDStg/feedshare-shrink_800/B4EZ1Ok8AXIEAg-/0/1775139799428?e=1778716800&v=beta&t=8zHcQHs2HF2-XagvU-pJno9JDpyaiMdwSf3f1GTc5eA",
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
        src: "https://media.licdn.com/dms/image/v2/D4D22AQHQyU_oTYhO9g/feedshare-shrink_800/B4DZ0utmC0GUAc-/0/1774605197816?e=1778716800&v=beta&t=uD_B3AT82ozqmUEOOSYLYtQ_jFC08iSkbnaUjqQMbJ0",
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
