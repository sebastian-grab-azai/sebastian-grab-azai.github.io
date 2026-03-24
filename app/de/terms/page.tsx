import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | Azai – Elevate",
  description:
    "Rechtliche Bedingungen für die Nutzung der Azai-Elevate-Plattform, einschließlich Lizenz, Verfügbarkeit, Support, Haftung und Vertragslaufzeit.",
  alternates: {
    canonical: "/de/terms/",
    languages: {
      "de-CH": "/de/terms/",
      en: "/en/terms/",
      "x-default": "/de/terms/",
    },
  },
  openGraph: {
    title: "Nutzungsbedingungen | Azai – Elevate",
    description:
      "Rechtliche Bedingungen für die Nutzung der Azai-Elevate-Plattform, einschließlich Lizenz, Verfügbarkeit, Support, Haftung und Vertragslaufzeit.",
    url: "/de/terms/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutzungsbedingungen | Azai – Elevate",
    description:
      "Rechtliche Bedingungen für die Nutzung der Azai-Elevate-Plattform, einschließlich Lizenz, Verfügbarkeit, Support, Haftung und Vertragslaufzeit.",
  },
}

export default function TermsPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">Nutzungsbedingungen</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Geltungsbereich</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Nutzungsbedingungen regeln die Nutzung der Softwareplattform Azai Elevate (nachfolgend „Plattform“)
                der Azai AG, Wisentalstrasse 7a, 8185 Winkel, Schweiz (nachfolgend „Anbieter“).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Plattform stellt eine cloudbasierte Projektmanagementlösung für Unternehmen der Bau- und
                Immobilienbranche bereit.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Nutzung der Plattform ist ausschließlich für Unternehmen und gewerbliche Nutzer (B2B) vorgesehen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mit der Registrierung oder Nutzung der Plattform erklärt sich der Kunde mit diesen Nutzungsbedingungen
                einverstanden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Leistungsbeschreibung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Anbieter stellt eine cloudbasierte Softwarelösung bereit, die insbesondere folgende Funktionen
                umfasst:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Verwaltung von Bauprojekten</li>
                <li>Dokumentation von Projektfortschritten</li>
                <li>Kommunikation zwischen Projektbeteiligten</li>
                <li>Dokumentenmanagement</li>
                <li>Reporting und Auswertung</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">Der genaue Funktionsumfang richtet sich nach:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>dem gewählten Lizenzmodell</li>
                <li>den aktuell verfügbaren Funktionen der Plattform</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Der Anbieter behält sich vor, Funktionen der Plattform weiterzuentwickeln oder anzupassen, sofern dadurch
                der wesentliche Vertragszweck nicht beeinträchtigt wird.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Registrierung und Benutzerkonten</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zur Nutzung der Plattform ist die Erstellung eines Benutzerkontos erforderlich.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Der Kunde verpflichtet sich,</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>korrekte und vollständige Angaben zu machen</li>
                <li>Zugangsdaten vertraulich zu behandeln</li>
                <li>den Zugriff unbefugter Dritter zu verhindern</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Der Kunde ist für sämtliche Aktivitäten verantwortlich, die über sein Benutzerkonto erfolgen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Nutzung im Namen eines Unternehmens</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Durch die Registrierung bestätigt der Nutzer, dass er berechtigt ist, die Plattform im Namen des
                Unternehmens oder der Organisation zu nutzen, für die er das Konto erstellt.
              </p>
              <p className="text-muted-foreground leading-relaxed">Das Unternehmen gilt als Vertragspartner des Anbieters.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Lizenz und Nutzungsrechte</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Der Anbieter gewährt dem Kunden ein</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>nicht exklusives</li>
                <li>nicht übertragbares</li>
                <li>zeitlich auf die Vertragsdauer beschränktes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">Recht zur Nutzung der Plattform.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Der Kunde ist nicht berechtigt:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>die Software zu kopieren</li>
                <li>zu verändern</li>
                <li>zu reverse-engineeren</li>
                <li>weiterzuverkaufen oder zu vermieten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Kundendaten und Datenhoheit</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Alle Daten, die durch den Kunden oder dessen Nutzer in die Plattform eingestellt werden (nachfolgend
                „Kundendaten“), verbleiben im Eigentum des Kunden.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Der Anbieter verarbeitet diese Daten ausschließlich:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>zur Bereitstellung der Plattform</li>
                <li>zur Wartung und Verbesserung des Dienstes</li>
                <li>gemäß den geltenden Datenschutzgesetzen</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Weitere Details zur Datenverarbeitung ergeben sich aus der Datenschutzerklärung sowie aus der
                Auftragsverarbeitungsvereinbarung (AVV).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Verfügbarkeit und Wartung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Anbieter bemüht sich, die Plattform mit einer jährlichen Verfügbarkeit von 99 % bereitzustellen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Nicht als Ausfallzeiten gelten:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>geplante Wartungsarbeiten</li>
                <li>notwendige Sicherheitsupdates</li>
                <li>Ereignisse außerhalb der Kontrolle des Anbieters</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Geplante Wartungsarbeiten werden nach Möglichkeit mit angemessener Vorlaufzeit angekündigt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Anbieter stellt Supportleistungen über folgende Kanäle bereit:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>E-Mail</li>
                <li>Feedback-Button innerhalb der App</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Supportanfragen werden an Arbeitstagen innerhalb von 48 Stunden bearbeitet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die durchschnittliche Lösungszeit kann je nach Komplexität variieren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Zahlungsbedingungen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Nutzung der Plattform erfolgt auf Basis eines Lizenzmodells mit regelmäßigen Gebühren.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Die Höhe der Gebühren ergibt sich aus</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>der jeweils gültigen Preisliste</li>
                <li>individuellen Vereinbarungen mit dem Kunden</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rechnungen sind innerhalb von 14 Tagen zu bezahlen, soweit nichts anderes mit dem Kunden vereinbart
                wurde.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bei Zahlungsverzug kann der Anbieter den Zugriff auf die Plattform vorübergehend sperren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Zulässige Nutzung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Kunde verpflichtet sich, die Plattform nicht zu verwenden für:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>rechtswidrige Aktivitäten</li>
                <li>Verbreitung von Malware</li>
                <li>unbefugten Zugriff auf Systeme</li>
                <li>automatisierte Angriffe auf die Plattform</li>
                <li>Scraping oder unerlaubte Datenerhebung</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Der Anbieter ist berechtigt, bei Verstößen entsprechende Maßnahmen zu ergreifen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Drittanbieter-Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Plattform kann Dienste von Drittanbietern nutzen, insbesondere:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Cloud-Infrastruktur</li>
                <li>E-Mail-Services</li>
                <li>Authentifizierungsdienste</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Der Anbieter stellt eine aktuelle Liste dieser Dienstleister{" "}
                <Link href="/de/subprocessors/" className="text-foreground underline underline-offset-4">
                  hier
                </Link>{" "}
                bereit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Haftung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Anbieter haftet nur für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten verursacht
                wurden.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Haftung des Anbieters ist auf den Betrag begrenzt, den der Kunde innerhalb der letzten 12 Monate für
                die Nutzung der Plattform bezahlt hat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die Haftung für indirekte Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Höhere Gewalt</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Anbieter haftet nicht für Leistungsstörungen aufgrund von Ereignissen außerhalb seiner Kontrolle,
                insbesondere:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Naturkatastrophen</li>
                <li>Stromausfälle</li>
                <li>Ausfälle von Cloud-Infrastruktur</li>
                <li>Cyberangriffe</li>
                <li>behördliche Maßnahmen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Vertragslaufzeit und Kündigung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Der Vertrag läuft auf unbegrenzte Dauer.</p>
              <p className="text-muted-foreground leading-relaxed">
                Der Kunde kann den Vertrag mit einer Frist von 30 Tagen zum Ende der Abrechnungsperiode kündigen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Datenexport und Löschung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nach Vertragsende hat der Kunde die Möglichkeit, seine Daten innerhalb von 30 Tagen zu exportieren.
                Unterstützung beim Datenexport stellt der Anbieter dem Kunden auf Anfrage bereit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Anschließend werden die Daten des Kunden innerhalb von 60 Tagen endgültig gelöscht, sofern keine
                gesetzlichen Aufbewahrungspflichten bestehen oder etwas alternatives vereinbart wurde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Änderungen der Nutzungsbedingungen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Anbieter kann diese Nutzungsbedingungen anpassen. Wesentliche Änderungen werden den Kunden mindestens
                30 Tage im Voraus mitgeteilt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Anwendbares Recht</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Es gilt das Recht der Schweiz.</p>
              <p className="text-muted-foreground leading-relaxed">Gerichtsstand ist Zürich.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter info@azai.ch.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
