import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const subprocessors = [
  {
    provider: "Amazon Web Services",
    service: "Backend Cloud Hosting",
    purpose: "Betrieb der Infrastruktur der Plattform",
    location: "Zürich, Schweiz",
    mechanism: "Standardvertragsklauseln mit AWS",
  },
  {
    provider: "Amazon Web Services",
    service: "Frontend Cloud Hosting",
    purpose: "Betrieb der Infrastruktur der Plattform",
    location: "Frankfurt, Deutschland",
    mechanism: "Standardvertragsklauseln mit AWS",
  },
  {
    provider: "Amazon Web Services",
    service: "AWS Simple E-Mail-Service",
    purpose: "E-Mail-Versand über die Plattform",
    location: "Frankfurt, Deutschland",
    mechanism: "Standardvertragsklauseln mit AWS",
  },
  {
    provider: "Functional Software, Inc.",
    service: "Sentry.io Monitoring & Fehleranalyse",
    purpose: "Unterstützung bei der Analyse und Behebung von Bugs",
    location: "Deutschland",
    mechanism: "Standardvertragsklauseln mit Sentry.io",
  },
  {
    provider: "Marker.io",
    service: "Feedback-Einbindung und Reporting",
    purpose: "Erhebung Ihrer Feedback-Eingaben",
    location: "Irland",
    mechanism: "Standardvertragsklauseln mit Marker.io",
  },
  {
    provider: "DevArch OÜ",
    service: "Subprocessor des Auftragsverarbeiters",
    purpose: "Plattformentwicklung & Instandhaltung",
    location: "Spanien",
    mechanism: "Individuelle Datenschutzvereinbarung mit dem Subprocessor",
  },
]

export const metadata: Metadata = {
  title: "Liste der Subunternehmer | Azai – Elevate",
  description:
    "Übersicht über die von Azai eingesetzten Subunternehmer, deren Leistungen, Verarbeitungszwecke und Datenschutzmechanismen.",
  alternates: {
    canonical: "/de/subprocessors/",
    languages: {
      "de-CH": "/de/subprocessors/",
      en: "/en/subprocessors/",
      "x-default": "/de/subprocessors/",
    },
  },
  openGraph: {
    title: "Liste der Subunternehmer | Azai – Elevate",
    description:
      "Übersicht über die von Azai eingesetzten Subunternehmer, deren Leistungen, Verarbeitungszwecke und Datenschutzmechanismen.",
    url: "/de/subprocessors/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liste der Subunternehmer | Azai – Elevate",
    description:
      "Übersicht über die von Azai eingesetzten Subunternehmer, deren Leistungen, Verarbeitungszwecke und Datenschutzmechanismen.",
  },
}

export default function SubprocessorsPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Liste der Subunternehmer
          </h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Liste enthält Drittanbieter („Subunternehmer“), die von Azai zur Bereitstellung und zum Betrieb der
                Plattform eingesetzt werden können und im Rahmen dessen Zugriff auf personenbezogene Daten haben können.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Liste ist Bestandteil der Auftragsverarbeitungsvereinbarung (AVV).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Anbieter kann Subunternehmer hinzufügen oder ersetzen, sofern:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>die gesetzlichen Anforderungen eingehalten werden</li>
                <li>geeignete Datenschutzmaßnahmen bestehen</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aktualisierungen dieser Liste werden auf dieser Seite veröffentlicht.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Letzte Aktualisierung:</strong> 24.03.2026
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Kategorien von Subunternehmern</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subunternehmer können insbesondere folgende Dienstleistungen erbringen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Cloud-Hosting und Infrastruktur</li>
                <li>Datenbankhosting</li>
                <li>E-Mail-Versand</li>
                <li>Authentifizierung</li>
                <li>Monitoring und Logging</li>
                <li>Fehleranalyse</li>
                <li>Support-Tools</li>
                <li>Zahlungsabwicklung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Aktuelle Subunternehmer</h2>
              <div className="-mx-2 overflow-x-auto px-2 sm:mx-0 sm:px-0">
                <div className="min-w-max rounded-xl border border-border">
                  <table className="min-w-[900px] text-sm text-left">
                  <thead className="bg-muted/50 text-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Anbieter</th>
                      <th className="px-4 py-3 font-semibold">Dienstleistung</th>
                      <th className="px-4 py-3 font-semibold">Zweck der Verarbeitung</th>
                      <th className="px-4 py-3 font-semibold">Datenstandort</th>
                      <th className="px-4 py-3 font-semibold">Datenschutzmechanismus</th>
                    </tr>
                  </thead>
                    <tbody>
                      {subprocessors.map((subprocessor) => (
                        <tr key={`${subprocessor.provider}-${subprocessor.service}`} className="border-t border-border align-top">
                          <td className="px-4 py-3 text-muted-foreground">{subprocessor.provider}</td>
                          <td className="px-4 py-3 text-muted-foreground">{subprocessor.service}</td>
                          <td className="px-4 py-3 text-muted-foreground">{subprocessor.purpose}</td>
                          <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{subprocessor.location}</td>
                          <td className="px-4 py-3 text-muted-foreground">{subprocessor.mechanism}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Beschreibung der Kategorien</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cloud-Infrastruktur</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Diese Anbieter stellen die technische Infrastruktur für den Betrieb der Plattform bereit.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-2">Mögliche Daten:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Benutzerdaten</li>
                    <li>Projektdaten</li>
                    <li>Dokumente</li>
                    <li>Systemlogs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Kommunikationsdienste</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">Diese Anbieter können zum Versand von:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                    <li>Systembenachrichtigungen</li>
                    <li>Passwort-Resets</li>
                    <li>Einladungs-E-Mails</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">eingesetzt werden.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Monitoring und Fehleranalyse</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">Diese Dienste helfen dabei:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                    <li>Systemstabilität sicherzustellen</li>
                    <li>Fehler zu identifizieren</li>
                    <li>Sicherheitsvorfälle zu erkennen</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Dabei können technische Metadaten verarbeitet werden.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Änderungen der Subunternehmer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Anbieter kann Subunternehmer hinzufügen oder ersetzen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Kunden werden über Änderungen informiert durch:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Aktualisierung dieser Seite</li>
                <li>E-Mail-Benachrichtigung an die Organisation</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Kunden können aus berechtigten datenschutzrechtlichen Gründen gegen neue Subunternehmer Einwände
                erheben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fragen zu dieser Liste können gerichtet werden an: info@azai.ch
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
