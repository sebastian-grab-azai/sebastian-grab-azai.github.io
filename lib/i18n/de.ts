export type HomeDict = {
  hero: {
    badge: string
    title: string
    tagline: string
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
  earlyAccess: {
    badge: string
    title: string
    lead: string
    bullets: string[]
    ctaPrimary: string
    ctaSecondary: string
    footnote?: string
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
  contact: {
    h1: string
    lead: string
    emailLabel: string
    phoneLabel: string
    questionNow: string
    bookLink: string
    form: {
      firstName: string
      lastName: string
      email: string
      phone: string
      phoneOptional: string
      message: string
      submit: string
      sending: string
      success: string
      errorRequired: string
      sendError: string
      gdpr: string
      placeholders: {
        firstName: string
        lastName: string
        email: string
        phone: string
        message: string
      }
    }
  }
  privacy: {
    h1: string
    labels: { email: string; address: string }
    sections: { h2: string; p?: string[]; list?: string[] }[]
  }
  terms: {
    h1: string
    sections: { h2: string; p?: string[]; list?: string[] }[]
  }
}

export const de: HomeDict = {
  hero: {
    badge: "Projektmanagement neu denken",
    title: "Azai Elevate",
    tagline: "smart steuern – lead with intelligence",
    lead1: "Revolutionäre Projektmanagement‑Plattform, entwickelt für Enterprise‑Teams, die",
    lead2a: "Präzision, Intelligenz",
    lead2b: "und Ergebnisse im grossen Massstab benötigen",
    ctaBook: "Termin buchen",
    ctaContact: "Kontakt aufnehmen",
    imageAlt: "Teamarbeit in einem modernen Büro",
  },
  solutions: {
    badge: "Lösungen",
    title: "Erweitertes Risikomanagement-Modul",
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
  earlyAccess: {
    badge: "Early Access",
    title: "Pilotkunden: Vorteile im Frühzugang",
    lead: "Werden Sie Teil unseres Pilotprogramms und gestalten Sie Azai Elevate aktiv mit – mit priorisiertem Support und exklusiven Konditionen.",
    bullets: [
      "Priorisierter Onboarding‑Support",
      "Direkter Einfluss auf Roadmap & Features",
      "Bevorzugte Konditionen während der Pilotphase",
      "Garantierte Migrationsunterstützung"
    ],
    ctaPrimary: "Frühzugang anfragen",
    ctaSecondary: "Termin buchen"
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
  contact: {
    h1: "Kontakt aufnehmen mit Azai",
    lead:
      "Haben Sie Fragen, Feedback oder benötigen Sie Unterstützung? Wir helfen Ihnen gerne weiter. Kontaktieren Sie unser Team – wir melden uns so schnell wie möglich.",
    emailLabel: "E‑Mail",
    phoneLabel: "Telefon",
    questionNow: "Möchten Sie sofort sprechen?",
    bookLink: "Termin buchen",
    form: {
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E‑Mail",
      phone: "Telefon",
      phoneOptional: "(optional)",
      message: "Wie können wir Ihnen helfen?",
      submit: "Anfrage absenden",
      sending: "Wird gesendet...",
      success: "Vielen Dank! Ihre Nachricht wurde gesendet.",
      errorRequired: "Bitte füllen Sie alle Pflichtfelder aus.",
      sendError:
        "Entschuldigung, beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
      gdpr:
        "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung zu.",
      placeholders: {
        firstName: "Vorname",
        lastName: "Nachname",
        email: "beispiel@email.com",
        phone: "+123 456 789",
        message: "Bitte schreiben Sie Ihre Nachricht",
      },
    },
  },
  privacy: {
    h1: "Datenschutzerklärung",
    labels: { email: "E‑Mail:", address: "Adresse:" },
    sections: [
      {
        h2: "1. Einleitung",
        p: [
          "Die Azai AG („wir“, „uns“) nimmt den Schutz Ihrer Daten ernst. Diese Datenschutzerklärung erläutert, wie wir personenbezogene Daten erheben, verwenden, offenlegen und schützen, wenn Sie unsere Projektmanagement‑Plattform und damit verbundenen Dienste nutzen."
        ]
      },
      {
        h2: "2. Welche Daten wir erheben",
        p: ["Wir verarbeiten Daten, die Sie uns direkt bereitstellen, insbesondere:"],
        list: [
          "Kontodaten (Name, E‑Mail‑Adresse, Passwort)",
          "Profildaten (Funktion, Firmenname, Telefonnummer)",
          "Projektdaten und Inhalte, die Sie erstellen oder hochladen",
          "Kommunikationsdaten bei Kontaktaufnahme mit unserem Support",
          "Zahlungsinformationen zu Abrechnungszwecken"
        ]
      },
      {
        h2: "3. Wie wir Ihre Daten nutzen",
        p: ["Wir verwenden die erhobenen Daten, um:"],
        list: [
          "unsere Dienste bereitzustellen, zu betreiben und zu verbessern",
          "Transaktionen abzuwickeln und diesbezügliche Informationen zu versenden",
          "technische Hinweise, Updates und Support‑Mitteilungen zu versenden",
          "auf Kommentare und Anfragen zu reagieren",
          "Nutzungsmuster zu analysieren und die User Experience zu optimieren",
          "technische Probleme und Sicherheitsbedrohungen zu erkennen, zu verhindern und zu beheben"
        ]
      },
      {
        h2: "4. Datensicherheit",
        p: [
          "Wir setzen geeignete technische und organisatorische Massnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen, darunter Verschlüsselung, Zugriffskontrollen und regelmässige Sicherheitsüberprüfungen."
        ]
      },
      {
        h2: "5. Aufbewahrungsdauer",
        p: [
          "Wir bewahren personenbezogene Daten so lange auf, wie es zur Erfüllung der in dieser Datenschutzerklärung genannten Zwecke erforderlich ist, sofern nicht gesetzlich eine längere Aufbewahrung vorgeschrieben oder zulässig ist."
        ]
      },
      {
        h2: "6. Ihre Rechte",
        p: ["Abhängig von Ihrem Wohnsitz haben Sie ggf. folgende Rechte:"],
        list: [
          "Auskunft über die verarbeiteten Daten",
          "Berichtigung unrichtiger Daten",
          "Löschung Ihrer personenbezogenen Daten",
          "Widerspruch gegen bestimmte Verarbeitungen",
          "Datenübertragbarkeit"
        ]
      },
      {
        h2: "7. Internationale Datenübermittlungen",
        p: [
          "Ihre Daten können in Länder ausserhalb Ihres Wohnsitzstaates übermittelt und dort verarbeitet werden. Wir stellen sicher, dass angemessene Schutzmassnahmen gemäss dieser Datenschutzerklärung getroffen werden."
        ]
      },
      {
        h2: "8. Änderungen dieser Erklärung",
        p: [
          "Wir können diese Datenschutzerklärung gelegentlich aktualisieren. Über wesentliche Änderungen informieren wir durch Veröffentlichung der neuen Fassung auf dieser Seite und Aktualisierung des Datums „Zuletzt aktualisiert“."
        ]
      },
      {
        h2: "9. Kontakt",
        p: [
          "Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns bitte unter:"
        ]
      }
    ]
  },
  terms: {
    h1: "Nutzungsbedingungen",
    sections: [
      {
        h2: "1. Zustimmung zu den Bedingungen",
        p: [
          "Durch den Zugriff auf oder die Nutzung der Projektmanagement‑Plattform und Dienste der Azai AG erklären Sie sich mit diesen Nutzungsbedingungen sowie allen anwendbaren Gesetzen und Vorschriften einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, ist Ihnen die Nutzung unserer Dienste untersagt."
        ]
      },
      {
        h2: "2. Nutzungslizenz",
        p: [
          "Vorbehaltlich der Einhaltung dieser Bedingungen gewährt Ihnen die Azai AG eine beschränkte, nicht‑exklusive, nicht übertragbare Lizenz, um unsere Dienste für interne Geschäftszwecke zu nutzen. Diese Lizenz umfasst nicht:"
        ],
        list: [
          "das Modifizieren oder Kopieren von Materialien",
          "die Nutzung der Materialien für kommerzielle Zwecke ausserhalb Ihrer Organisation",
          "den Versuch, Software zurückzuentwickeln (Reverse Engineering)",
          "das Entfernen von Urheberrechts‑ oder Eigentumsvermerken",
          "die Übertragung der Materialien an andere Personen oder Organisationen"
        ]
      },
      {
        h2: "3. Benutzerkonten",
        p: [
          "Sie sind für die Vertraulichkeit Ihrer Zugangsdaten und für alle Aktivitäten verantwortlich, die unter Ihrem Konto stattfinden. Bitte benachrichtigen Sie uns umgehend über jede unbefugte Nutzung. Wir behalten uns das Recht vor, Konten bei Verstoss gegen diese Bedingungen zu sperren oder zu kündigen."
        ]
      },
      {
        h2: "4. Zulässige Nutzung",
        p: ["Sie verpflichten sich, Folgendes zu unterlassen:"],
        list: [
          "die Nutzung unserer Dienste zu rechtswidrigen Zwecken",
          "Verstösse gegen geltende Gesetze oder Vorschriften",
          "Eingriffe in Rechte Dritter",
          "die Übertragung schädlicher Codes oder Malware",
          "den Versuch, unbefugten Zugriff auf unsere Systeme zu erlangen",
          "Störungen der Integrität oder Leistung unserer Dienste"
        ]
      },
      {
        h2: "5. Geistiges Eigentum",
        p: [
          "Sämtliche Inhalte, Funktionen und Funktionalitäten unserer Dienste – einschliesslich, aber nicht beschränkt auf Texte, Grafiken, Logos und Software – sind Eigentum der Azai AG und durch internationale Urheber‑, Marken‑ und andere Schutzrechte geschützt."
        ]
      },
      {
        h2: "6. Zahlungsbedingungen",
        p: [
          "Abonnementgebühren werden im Voraus in regelmässigen Intervallen abgerechnet. Sie ermächtigen uns, Ihr Zahlungsmittel für alle anfallenden Gebühren zu belasten. Gebühren sind nicht erstattungsfähig, es sei denn, dies ist gesetzlich vorgeschrieben oder in Ihrer Vereinbarung ausdrücklich vorgesehen."
        ]
      },
      {
        h2: "7. Verfügbarkeit der Dienste",
        p: [
          "Wir bemühen uns um eine hohe Verfügbarkeit, garantieren jedoch keine unterbrechungsfreie oder fehlerfreie Nutzung. Wir behalten uns vor, Teile der Dienste mit angemessener Vorankündigung zu ändern, auszusetzen oder einzustellen."
        ]
      },
      {
        h2: "8. Haftungsbeschränkung",
        p: [
          "Soweit gesetzlich zulässig, haftet die Azai AG nicht für indirekte, zufällige, besondere, Folge‑ oder Strafschäden, die sich aus der Nutzung oder der Unmöglichkeit der Nutzung unserer Dienste ergeben."
        ]
      },
      {
        h2: "9. Kündigung",
        p: [
          "Wir können Ihren Zugang zu unseren Diensten aus wichtigem Grund und ohne vorherige Ankündigung beenden oder aussetzen, insbesondere bei Verstoss gegen diese Bedingungen. Nach der Kündigung endet Ihr Nutzungsrecht umgehend."
        ]
      },
      {
        h2: "10. Anwendbares Recht",
        p: [
          "Diese Bedingungen unterliegen dem schweizerischen Recht, unter Ausschluss der kollisionsrechtlichen Bestimmungen."
        ]
      },
      {
        h2: "11. Änderungen der Bedingungen",
        p: [
          "Wir behalten uns vor, diese Bedingungen jederzeit zu ändern. Über wesentliche Änderungen informieren wir durch Veröffentlichung der aktualisierten Fassung auf unserer Website. Ihre fortgesetzte Nutzung gilt als Zustimmung zu den geänderten Bedingungen."
        ]
      },
      {
        h2: "12. Kontakt",
        p: [
          "Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter:"
        ]
      }
    ]
  },
}