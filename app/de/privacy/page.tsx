import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Azai – Elevate",
  description:
    "Erfahren Sie, wie die Azai AG Ihre personenbezogenen Daten bei der Nutzung unserer Plattform und Dienste erhebt, verwendet und schützt.",
  alternates: {
    canonical: "/de/privacy/",
    languages: {
      "de-CH": "/de/privacy/",
      en: "/en/privacy/",
      "x-default": "/de/privacy/",
    },
  },
  openGraph: {
    title: "Datenschutzerklärung | Azai – Elevate",
    description:
      "Informationen zur Erhebung, Nutzung und zum Schutz Ihrer personenbezogenen Daten durch die Azai AG.",
    url: "/de/privacy/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutzerklärung | Azai – Elevate",
    description:
      "Informationen zur Erhebung, Nutzung und zum Schutz Ihrer personenbezogenen Daten durch die Azai AG.",
  },
}

export default function PrivacyPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Datenschutzerklärung</h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Einleitung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Azai AG („wir“, „uns“) nimmt den Schutz Ihrer Daten ernst. Diese Datenschutzerklärung erläutert, wie wir
                personenbezogene Daten erheben, verwenden, offenlegen und schützen, wenn Sie unsere Projektmanagement-Plattform
                und damit verbundenen Dienste nutzen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Welche Daten wir erheben</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir verarbeiten Daten, die Sie uns direkt bereitstellen, insbesondere:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Kontodaten (Name, E‑Mail‑Adresse, Passwort)</li>
                <li>Profildaten (Funktion, Firmenname, Telefonnummer)</li>
                <li>Projektdaten und Inhalte, die Sie erstellen oder hochladen</li>
                <li>Kommunikationsdaten bei Kontaktaufnahme mit unserem Support</li>
                <li>Zahlungsinformationen zu Abrechnungszwecken</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Wie wir Ihre Daten nutzen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir verwenden die erhobenen Daten, um:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>unsere Dienste bereitzustellen, zu betreiben und zu verbessern</li>
                <li>Transaktionen abzuwickeln und diesbezügliche Informationen zu versenden</li>
                <li>technische Hinweise, Updates und Support-Mitteilungen zu versenden</li>
                <li>auf Kommentare und Anfragen zu reagieren</li>
                <li>Nutzungsmuster zu analysieren und die User Experience zu optimieren</li>
                <li>technische Probleme und Sicherheitsbedrohungen zu erkennen, zu verhindern und zu beheben</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Datensicherheit</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir setzen geeignete technische und organisatorische Massnahmen ein, um Ihre personenbezogenen Daten vor
                unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen, darunter Verschlüsselung,
                Zugriffskontrollen und regelmässige Sicherheitsüberprüfungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Aufbewahrungsdauer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir bewahren personenbezogene Daten so lange auf, wie es zur Erfüllung der in dieser Datenschutzerklärung
                genannten Zwecke erforderlich ist, sofern nicht gesetzlich eine längere Aufbewahrung vorgeschrieben oder
                zulässig ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Abhängig von Ihrem Wohnsitz haben Sie ggf. folgende Rechte in Bezug auf Ihre personenbezogenen Daten:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Auskunft über die verarbeiteten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer personenbezogenen Daten</li>
                <li>Widerspruch gegen bestimmte Verarbeitungen</li>
                <li>Datenübertragbarkeit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Internationale Datenübermittlungen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ihre Daten können in Länder ausserhalb Ihres Wohnsitzstaates übermittelt und dort verarbeitet werden.
                Wir stellen sicher, dass angemessene Schutzmassnahmen gemäss dieser Datenschutzerklärung getroffen werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Änderungen dieser Erklärung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir können diese Datenschutzerklärung gelegentlich aktualisieren. Über wesentliche Änderungen informieren wir
                durch Veröffentlichung der neuen Fassung auf dieser Seite und Aktualisierung des Datums „Zuletzt aktualisiert“.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns bitte unter:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>
                  <strong>E‑Mail:</strong> info@azai.ch
                </p>
                <p>
                  <strong>Adresse:</strong> Azai AG, Wisentalstrasse 7a, 8185 Winkel, Schweiz
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}