import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | Azai AG – Elevate",
  description:
    "Lesen Sie die Bedingungen für die Nutzung der Projektmanagement-Plattform und Dienste der Azai AG.",
  alternates: {
    canonical: "/de/terms/",
    languages: {
      "de-CH": "/de/terms/",
      en: "/en/terms/",
      "x-default": "/de/terms/",
    },
  },
  openGraph: {
    title: "Nutzungsbedingungen | Azai AG – Elevate",
    description:
      "Bedingungen für die Nutzung der Projektmanagement-Plattform und Dienste der Azai AG.",
    url: "/de/terms/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutzungsbedingungen | Azai AG – Elevate",
    description:
      "Bedingungen für die Nutzung der Projektmanagement-Plattform und Dienste der Azai AG.",
  },
}

export default function TermsPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nutzungsbedingungen</h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Zustimmung zu den Bedingungen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Durch den Zugriff auf oder die Nutzung der Projektmanagement-Plattform und Dienste der Azai AG erklären
                Sie sich mit diesen Nutzungsbedingungen sowie allen anwendbaren Gesetzen und Vorschriften einverstanden.
                Wenn Sie mit diesen Bedingungen nicht einverstanden sind, ist Ihnen die Nutzung unserer Dienste untersagt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Nutzungslizenz</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vorbehaltlich der Einhaltung dieser Bedingungen gewährt Ihnen die Azai AG eine beschränkte,
                nicht-exklusive, nicht übertragbare Lizenz, um unsere Dienste für interne Geschäftszwecke zu nutzen.
                Diese Lizenz umfasst nicht:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>das Modifizieren oder Kopieren von Materialien</li>
                <li>die Nutzung der Materialien für kommerzielle Zwecke ausserhalb Ihrer Organisation</li>
                <li>den Versuch, Software zurückzuentwickeln (Reverse Engineering)</li>
                <li>das Entfernen von Urheberrechts- oder Eigentumsvermerken</li>
                <li>die Übertragung der Materialien an andere Personen oder Organisationen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Benutzerkonten</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie sind für die Vertraulichkeit Ihrer Zugangsdaten und für alle Aktivitäten verantwortlich, die unter
                Ihrem Konto stattfinden. Bitte benachrichtigen Sie uns umgehend über jede unbefugte Nutzung. Wir behalten
                uns das Recht vor, Konten bei Verstoss gegen diese Bedingungen zu sperren oder zu kündigen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Zulässige Nutzung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Sie verpflichten sich, Folgendes zu unterlassen:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>die Nutzung unserer Dienste zu rechtswidrigen Zwecken</li>
                <li>Verstösse gegen geltende Gesetze oder Vorschriften</li>
                <li>Eingriffe in Rechte Dritter</li>
                <li>die Übertragung schädlicher Codes oder Malware</li>
                <li>den Versuch, unbefugten Zugriff auf unsere Systeme zu erlangen</li>
                <li>Störungen der Integrität oder Leistung unserer Dienste</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Geistiges Eigentum</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sämtliche Inhalte, Funktionen und Funktionalitäten unserer Dienste – einschliesslich, aber nicht
                beschränkt auf Texte, Grafiken, Logos und Software – sind Eigentum der Azai AG und durch internationale
                Urheber-, Marken- und andere Schutzrechte geschützt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Zahlungsbedingungen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Abonnementgebühren werden im Voraus in regelmässigen Intervallen abgerechnet. Sie ermächtigen uns, Ihr
                Zahlungsmittel für alle anfallenden Gebühren zu belasten. Gebühren sind nicht erstattungsfähig, es sei denn,
                dies ist gesetzlich vorgeschrieben oder in Ihrer Vereinbarung ausdrücklich vorgesehen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Verfügbarkeit der Dienste</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir bemühen uns um eine hohe Verfügbarkeit, garantieren jedoch keine unterbrechungsfreie oder fehlerfreie
                Nutzung. Wir behalten uns vor, Teile der Dienste mit angemessener Vorankündigung zu ändern, auszusetzen
                oder einzustellen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Haftungsbeschränkung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Soweit gesetzlich zulässig, haftet die Azai AG nicht für indirekte, zufällige, besondere, Folge- oder
                Strafschäden, die sich aus der Nutzung oder der Unmöglichkeit der Nutzung unserer Dienste ergeben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Kündigung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir können Ihren Zugang zu unseren Diensten aus wichtigem Grund und ohne vorherige Ankündigung beenden
                oder aussetzen, insbesondere bei Verstoss gegen diese Bedingungen. Nach der Kündigung endet Ihr Nutzungsrecht
                umgehend.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Anwendbares Recht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Bedingungen unterliegen dem schweizerischen Recht, unter Ausschluss der kollisionsrechtlichen
                Bestimmungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Änderungen der Bedingungen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir behalten uns vor, diese Bedingungen jederzeit zu ändern. Über wesentliche Änderungen informieren wir
                durch Veröffentlichung der aktualisierten Fassung auf unserer Website. Ihre fortgesetzte Nutzung gilt als
                Zustimmung zu den geänderten Bedingungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter:
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