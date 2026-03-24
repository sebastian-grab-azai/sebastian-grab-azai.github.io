import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Azai – Elevate",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten bei der Nutzung der Azai-Plattform, zu Rechtsgrundlagen, Sicherheitsmaßnahmen und Betroffenenrechten.",
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
      "Informationen zur Verarbeitung personenbezogener Daten bei der Nutzung der Azai-Plattform, zu Rechtsgrundlagen, Sicherheitsmaßnahmen und Betroffenenrechten.",
    url: "/de/privacy/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutzerklärung | Azai – Elevate",
    description:
      "Informationen zur Verarbeitung personenbezogener Daten bei der Nutzung der Azai-Plattform, zu Rechtsgrundlagen, Sicherheitsmaßnahmen und Betroffenenrechten.",
  },
}

export default function PrivacyPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">Datenschutzerklärung</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Verantwortlicher</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Verantwortlich für die Datenverarbeitung ist:</p>
              <div className="space-y-2 text-muted-foreground">
                <p>Azai AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Schweiz</p>
                <p>E-Mail-Adresse für Datenschutzanfragen: info@azai.ch</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Verarbeitete Daten</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bei der Nutzung der Plattform können folgende Daten verarbeitet werden:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Accountdaten</li>
                <li>Unternehmensinformationen</li>
                <li>Projektdaten</li>
                <li>hochgeladene Dokumente</li>
                <li>Kommunikationsdaten</li>
                <li>technische Nutzungsdaten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Zwecke der Datenverarbeitung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Die Verarbeitung erfolgt insbesondere zur:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Bereitstellung der Plattform</li>
                <li>Verwaltung von Benutzerkonten</li>
                <li>Durchführung von Support</li>
                <li>Verbesserung der Plattform</li>
                <li>Gewährleistung der Sicherheit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Rechtsgrundlagen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Vertragserfüllung</li>
                <li>berechtigtem Interesse</li>
                <li>gesetzlichen Verpflichtungen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Auftragsverarbeitung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sofern Kunden personenbezogene Daten in die Plattform einstellen, verarbeitet der Anbieter diese Daten im
                Auftrag des Kunden.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die Einzelheiten sind in der Auftragsverarbeitungsvereinbarung (AVV) geregelt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Weitergabe an Dienstleister</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zur Bereitstellung der Plattform können folgende Kategorien von Dienstleistern eingesetzt werden:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Cloud-Hosting</li>
                <li>E-Mail-Versand</li>
                <li>Monitoring</li>
                <li>Sicherheitsdienste</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Eine aktuelle Liste der Dienstleister ist verfügbar unter folgendem Link:{" "}
                <Link href="/de/subprocessors/" className="text-foreground underline underline-offset-4">
                  Subunternehmer
                </Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Hosting</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Plattform wird gehostet bei Amazon Warehouse Services (AWS) in Rechenzentren in der Schweiz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Datensicherheit</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Anbieter setzt technische und organisatorische Maßnahmen ein, insbesondere:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Verschlüsselung der Datenübertragung</li>
                <li>Zugriffskontrollen</li>
                <li>regelmäßige Backups</li>
                <li>Monitoring der Systeme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Aufbewahrungsdauer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich
                ist. Nach Vertragsende werden Daten gemäß den in den Nutzungsbedingungen beschriebenen Fristen gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Plattform verwendet technisch notwendige Cookies, um:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Benutzeranmeldungen zu ermöglichen</li>
                <li>Sicherheit der Plattform zu gewährleisten</li>
                <li>Einstellungen zu speichern</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Sofern zusätzliche Analyse- oder Trackingtools eingesetzt werden, erfolgt dies nur mit entsprechender
                Einwilligung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Internationale Datenübertragung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sollten Daten außerhalb der Schweiz oder der EU übertragen werden, erfolgt dies nur unter Einhaltung
                geeigneter Schutzmaßnahmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Rechte der betroffenen Personen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Betroffene Personen haben das Recht auf:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Auskunft</li>
                <li>Berichtigung</li>
                <li>Löschung</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Beschwerderecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Betroffene Personen können sich bei der zuständigen Datenschutzbehörde beschweren. In der Schweiz ist dies
                der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Änderungen dieser Datenschutzerklärung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Anbieter kann diese Datenschutzerklärung bei Bedarf anpassen. Die jeweils aktuelle Version ist auf der
                Website und in der App unter Einstellungen → Rechtliches verfügbar.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
