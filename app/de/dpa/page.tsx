import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Auftragsverarbeitungsvereinbarung (AVV) | Azai – Elevate",
  description:
    "Auftragsverarbeitungsvereinbarung zwischen dem Kunden als Verantwortlichem und Azai AG als Auftragsverarbeiter für die Nutzung der Azai-Elevate-Plattform.",
  alternates: {
    canonical: "/de/dpa/",
    languages: {
      "de-CH": "/de/dpa/",
      en: "/en/dpa/",
      "x-default": "/de/dpa/",
    },
  },
  openGraph: {
    title: "Auftragsverarbeitungsvereinbarung (AVV) | Azai – Elevate",
    description:
      "Auftragsverarbeitungsvereinbarung zwischen dem Kunden als Verantwortlichem und Azai AG als Auftragsverarbeiter für die Nutzung der Azai-Elevate-Plattform.",
    url: "/de/dpa/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auftragsverarbeitungsvereinbarung (AVV) | Azai – Elevate",
    description:
      "Auftragsverarbeitungsvereinbarung zwischen dem Kunden als Verantwortlichem und Azai AG als Auftragsverarbeiter für die Nutzung der Azai-Elevate-Plattform.",
  },
}

export default function DpaPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Auftragsverarbeitungsvereinbarung (AVV)
          </h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed mb-2">zwischen</p>
              <p className="text-muted-foreground leading-relaxed mb-2">dem Kunden</p>
              <p className="text-muted-foreground leading-relaxed mb-4">(nachfolgend „Verantwortlicher“)</p>
              <p className="text-muted-foreground leading-relaxed mb-2">und</p>
              <p className="text-muted-foreground leading-relaxed mb-2">Azai AG</p>
              <p className="text-muted-foreground leading-relaxed">(nachfolgend „Auftragsverarbeiter“)</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Gegenstand und Dauer der Verarbeitung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter stellt dem Verantwortlichen eine cloudbasierte Softwareplattform für das
                Management von Bauprojekten zur Verfügung (nachfolgend „Plattform“).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Im Rahmen der Nutzung der Plattform kann der Auftragsverarbeiter personenbezogene Daten im Auftrag des
                Verantwortlichen verarbeiten.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Die Verarbeitung erfolgt ausschließlich:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>auf Grundlage der Nutzungsbedingungen</li>
                <li>dieser Auftragsverarbeitungsvereinbarung</li>
                <li>der dokumentierten Weisungen des Verantwortlichen</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Die Dauer der Verarbeitung entspricht der Dauer des Vertragsverhältnisses zwischen den Parteien.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Art und Zweck der Verarbeitung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Verarbeitung personenbezogener Daten erfolgt ausschließlich zur Bereitstellung und zum Betrieb der
                Plattform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Die Verarbeitung umfasst insbesondere:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Speicherung von Projektdaten</li>
                <li>Verwaltung von Benutzerkonten</li>
                <li>Bereitstellung von Kommunikationsfunktionen</li>
                <li>Dokumentenmanagement</li>
                <li>technische Wartung der Plattform</li>
                <li>Supportleistungen</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Eine Verarbeitung zu eigenen Zwecken des Auftragsverarbeiters erfolgt nicht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Kategorien betroffener Personen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Verarbeitung kann folgende Kategorien von Personen betreffen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Mitarbeiter des Verantwortlichen</li>
                <li>Projektleiter</li>
                <li>Bauleiter</li>
                <li>Auftragnehmer und Subunternehmer</li>
                <li>Ansprechpartner bei Kunden oder Lieferanten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Kategorien personenbezogener Daten</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Je nach Nutzung der Plattform können insbesondere folgende Daten verarbeitet werden:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Unternehmenszugehörigkeit</li>
                <li>Projektbezogene Informationen</li>
                <li>Dokumente und Kommunikationsinhalte</li>
                <li>Nutzungs- und Logdaten</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Der Verantwortliche entscheidet selbst, welche personenbezogenen Daten in die Plattform eingestellt werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Weisungsrecht</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter verarbeitet personenbezogene Daten ausschließlich gemäß den Weisungen des
                Verantwortlichen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Weisungen können erfolgen über:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>die Nutzung der Plattform</li>
                <li>schriftliche Anweisungen</li>
                <li>Supportanfragen</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Der Auftragsverarbeiter informiert den Verantwortlichen unverzüglich, wenn eine Weisung gegen geltendes
                Datenschutzrecht verstößt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Vertraulichkeit</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter stellt sicher, dass alle Personen, die Zugang zu personenbezogenen Daten haben,
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>zur Vertraulichkeit verpflichtet sind oder</li>
                <li>einer angemessenen gesetzlichen Verschwiegenheitspflicht unterliegen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Technische und organisatorische Maßnahmen (TOMs)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter ergreift geeignete technische und organisatorische Maßnahmen zum Schutz
                personenbezogener Daten.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Diese Maßnahmen umfassen insbesondere:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Zugriffskontrollen auf Systeme</li>
                <li>Verschlüsselung der Datenübertragung (z. B. HTTPS/TLS)</li>
                <li>rollenbasierte Zugriffsrechte</li>
                <li>regelmäßige Backups</li>
                <li>Monitoring und Logging</li>
                <li>Schutz vor unbefugtem Zugriff</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Der Auftragsverarbeiter kann Sicherheitsmaßnahmen anpassen, sofern das Sicherheitsniveau nicht wesentlich
                reduziert wird.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Subunternehmer (Subprocessor)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter kann zur Bereitstellung der Plattform Subunternehmer einsetzen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Dies können insbesondere sein:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Cloud-Infrastruktur-Anbieter</li>
                <li>E-Mail-Versanddienste</li>
                <li>Monitoring- und Logging-Dienste</li>
                <li>Authentifizierungsdienste</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Eine aktuelle Liste der eingesetzten Subunternehmer ist {" "}
                <Link href="/de/subprocessors/" className="text-foreground underline underline-offset-4">
                  hier
                </Link>
                {" "}verfügbar.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter informiert den Verantwortlichen über Änderungen der Subunternehmerliste.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Der Verantwortliche kann aus berechtigten Gründen gegen den Einsatz eines neuen Subunternehmers Einspruch
                erheben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Datenübermittlung in Drittländer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sofern personenbezogene Daten in Länder außerhalb der Schweiz oder des Europäischen Wirtschaftsraums
                übertragen werden, stellt der Auftragsverarbeiter sicher, dass geeignete Schutzmaßnahmen bestehen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Dies kann erfolgen durch:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Angemessenheitsbeschlüsse</li>
                <li>Standardvertragsklauseln</li>
                <li>andere gesetzlich zulässige Garantien</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Unterstützung des Verantwortlichen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter unterstützt den Verantwortlichen, soweit möglich, bei:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>der Beantwortung von Datenschutzanfragen betroffener Personen</li>
                <li>der Einhaltung gesetzlicher Datenschutzpflichten</li>
                <li>Datenschutz-Folgenabschätzungen</li>
                <li>Sicherheitsmaßnahmen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Meldung von Datenschutzverletzungen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter informiert den Verantwortlichen unverzüglich über
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Datenschutzverletzungen</li>
                <li>Sicherheitsvorfälle</li>
                <li>unbefugten Zugriff auf personenbezogene Daten</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Die Meldung erfolgt innerhalb von 48 Stunden nach Bekanntwerden des Vorfalls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Audit und Nachweispflichten</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter stellt dem Verantwortlichen auf Anfrage Informationen zur Verfügung, die
                erforderlich sind, um die Einhaltung dieser Vereinbarung nachzuweisen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Audits können erfolgen durch:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Dokumentenprüfung</li>
                <li>Zertifizierungen</li>
                <li>Sicherheitsberichte</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Vor-Ort-Audits sind nur mit angemessener Vorankündigung und unter Wahrung von Geschäftsgeheimnissen
                zulässig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Rückgabe und Löschung von Daten</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nach Beendigung des Vertragsverhältnisses wird der Auftragsverarbeiter:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>dem Verantwortlichen die Möglichkeit geben, Daten zu exportieren</li>
                <li>personenbezogene Daten anschließend löschen</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Die Löschung erfolgt innerhalb von 60 Tagen nach Vertragsende, sofern keine gesetzlichen
                Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Haftung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Haftung der Parteien richtet sich nach den Regelungen in den Nutzungsbedingungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Geltung und Änderungen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Auftragsverarbeitungsvereinbarung gilt für die gesamte Dauer der Nutzung der Plattform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Auftragsverarbeiter kann diese Vereinbarung anpassen, sofern gesetzliche Änderungen oder technische
                Entwicklungen dies erforderlich machen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Der Verantwortliche wird über wesentliche Änderungen informiert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Rangfolge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Im Falle von Widersprüchen zwischen dieser Vereinbarung und den Nutzungsbedingungen hat diese
                Auftragsverarbeitungsvereinbarung Vorrang hinsichtlich der Verarbeitung personenbezogener Daten.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
