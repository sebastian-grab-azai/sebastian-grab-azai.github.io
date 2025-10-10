export type HomeDict = {
  hero: {
    badge: string
    title: string
    lead1: string
    lead2a: string
    lead2b: string
    ctaBook: string
    ctaContact: string
    imageAlt: string
  }
  solutions: {
    badge: string
    title: string
    lead: string
    items: {
      riskIntelligence: { title: string; desc: string }
      realtimeAnalytics: { title: string; desc: string }
      smartAutomation: { title: string; desc: string }
    }
  }
  facts: {
    badge: string
    title: string
    lead: string
    talkCta: string
    stat1: { value: string; label: string }
    stat2: { value: string; label: string }
    stat3: { value: string; label: string }
    chart: {
      title: string
      legend: { low: string; medium: string; high: string }
    }
  }
  features: {
    badge: string
    titleLine1: string
    titleLine2: string
    item1: {
      title: string
      badge: string
      lead: string
      ctaContact: string
    }
    item2: {
      title: string
      badge: string
      lead: string
    }
    item3: {
      title: string
      badge: string
      lead: string
    }
    imageAlt: string
  }
  benefits: {
    badge: string
    title: string
    lead: string
    card1: { title: string; bullets: string[] }
    card2: { title: string; bullets: string[] }
    card3: { title: string; bullets: string[] }
  }
  process: {
    badge: string
    title: string
    lead: string
    button: string
    steps: {
      s1: { title: string; desc: string }
      s2: { title: string; desc: string }
      s3: { title: string; desc: string }
      s4: { title: string; desc: string }
    }
  }
  finalCta: {
    title: string
    lead: string
    ctaSales: string
    ctaInquiry: string
    bullets: { b1: string; b2: string; b3: string }
  }
}

export const de: HomeDict = {
  hero: {
    badge: "Projektmanagement neu denken",
    title: "Die Zukunft exzellenter Projekte",
    lead1: "Revolutionäre Projektmanagement‑Plattform, entwickelt für Enterprise‑Teams, die",
    lead2a: "Präzision, Intelligenz",
    lead2b: "und Ergebnisse im grossen Massstab",
    ctaBook: "Termin buchen",
    ctaContact: "Kontakt aufnehmen",
    imageAlt: "Teamarbeit in einem modernen Büro",
  },
  solutions: {
    badge: "Lösungen",
    title: "Erweitertes Risikomanagement‑Modul",
    lead:
      "Nutzen Sie KI‑gestützte Risikoanalyse und ‑minderung. Unser Flaggschiffmodul verändert, wie Sie Risiken identifizieren, analysieren und adressieren, bevor sie Ihren Zeitplan beeinflussen.",
    items: {
      riskIntelligence: {
        title: "Risikointelligenz",
        desc: "KI‑gestützte Risikoerkennung, die Probleme erkennt, bevor sie entstehen.",
      },
      realtimeAnalytics: {
        title: "Echtzeit‑Analysen",
        desc: "Live‑Dashboards halten Sie jederzeit über alle Projekte auf dem Laufenden.",
      },
      smartAutomation: {
        title: "Intelligente Automatisierung",
        desc: "Automatisierte Workflows reduzieren manuellen Aufwand im Projektmanagement.",
      },
    },
  },
  facts: {
    badge: "Fakten und Zahlen",
    title: "Mehrwert durch Transparenz",
    lead: "Schliessen Sie sich uns an und erleben Sie effizientere Projekte.",
    talkCta: "Sprechen Sie mit uns",
    stat1: { value: "95%", label: "Treffsicherheit der Risikoprognose" },
    stat2: { value: "40%", label: "Schnellere Projektauslieferung" },
    stat3: { value: "CHF 2.4 Mio.", label: "Durchschnittliche Kosteneinsparung" },
    chart: {
      title: "Risikoniveau im Zeitverlauf",
      legend: { low: "Niedrig", medium: "Mittel", high: "Hoch" },
    },
  },
  features: {
    badge: "Funktionen",
    titleLine1: "Revolutionäre",
    titleLine2: "Funktionen für das Projektmanagement",
    item1: {
      title: "Erweitertes Risikomanagement‑Modul",
      badge: "Ab sofort verfügbar",
      lead:
        "Nutzen Sie die Kraft KI‑gestützter Risikoerkennung und ‑minderung. Unser Flaggschiffmodul verändert, wie Sie Risiken identifizieren, analysieren und adressieren, bevor sie Ihren Zeitplan beeinflussen.",
      ctaContact: "Vertrieb kontaktieren",
    },
    item2: {
      title: "Kostenmanagement",
      badge: "Demnächst verfügbar",
      lead:
        "Fortgeschrittenes Budgetmanagement mit prädiktiver Finanzmodellierung und Echtzeit‑Kostenanalyse.",
    },
    item3: {
      title: "Zeitmanagement",
      badge: "Demnächst verfügbar",
      lead:
        "Revolutionäres Zeiterfassen und Ressourcenallokation, unterstützt durch Machine‑Learning‑Algorithmen.",
    },
    imageAlt: "Projektmanagement‑Dashboard mit Gantt‑Diagramm",
  },
  benefits: {
    badge: "Vorteile",
    title: "Für den Unternehmenseinsatz gebaut",
    lead:
      "Moderne Softwarearchitektur für missionskritische Performance, robuste Sicherheit und nahtlose Skalierung.",
    card1: {
      title: "Moderner Technologiestack",
      bullets: ["React 20 mit TypeScript", ".NET 9 Backend‑Applikationen", "PWA‑bereit & Mobil optimiert", "Micro‑Service‑Architektur"],
    },
    card2: {
      title: "Herausragende Performance",
      bullets: ["Ladezeiten unter 1 Sekunde", "Echtzeit‑Datensynchronisation", "Message‑Queue‑Kommunikation", "Edge‑optimiert"],
    },
    card3: {
      title: "Enterprise‑Sicherheit",
      bullets: ["Enterprise RBAC", "DSGVO‑konform", "Zero‑Trust‑Architektur"],
    },
  },
  process: {
    badge: "Der Prozess",
    title: "Start in Minuten statt Monaten",
    lead: "Unser bewährter Implementierungsprozess liefert Mehrwert ab Tag eins.",
    button: "Kontakt aufnehmen",
    steps: {
      s1: { title: "Daten verbinden", desc: "Binden Sie bestehende Tools und Datenquellen in unter 30 Minuten an." },
      s2: { title: "Arbeitsumgebung konfigurieren", desc: "Passen Sie Dashboards und Alarme an Ihre Anforderungen an." },
      s3: { title: "Loslegen", desc: "Risiken verfolgen, Fortschritt überwachen, datenbasiert entscheiden." },
      s4: { title: "Skalieren und optimieren", desc: "Organisationweit ausrollen – mit Enterprise‑Sicherheit und Performance." },
    },
  },
  finalCta: {
    title: "Bereit, Ihre Projekte zu transformieren?",
    lead:
      "Schliessen Sie sich den zahlreichen Projektleitenden an, die bereits die Vorteile KI‑gestützten Projektmanagements nutzen.",
    ctaSales: "Vertrieb kontaktieren",
    ctaInquiry: "Anfrage senden",
    bullets: {
      b1: "Keine Kreditkarte erforderlich",
      b2: "30 Tage kostenlos testen",
      b3: "Einrichtung in wenigen Minuten",
    },
  },
}