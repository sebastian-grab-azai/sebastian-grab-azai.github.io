import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Impressum | Azai – Elevate",
  description:
    "Anbieterkennzeichnung (Schweiz) der Azai AG inkl. Kontaktangaben sowie rechtliche Hinweise (Haftung, Urheberrecht).",
  alternates: {
    canonical: "/de/legal-notice/",
    languages: {
      "de-CH": "/de/legal-notice/",
      en: "/en/legal-notice/",
      "x-default": "/de/legal-notice/",
    },
  },
  openGraph: {
    title: "Impressum | Azai – Elevate",
    description:
      "Anbieterkennzeichnung (Schweiz) der Azai AG inkl. Kontaktangaben sowie rechtliche Hinweise (Haftung, Urheberrecht).",
    url: "/de/legal-notice/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impressum | Azai – Elevate",
    description:
      "Anbieterkennzeichnung (Schweiz) der Azai AG inkl. Kontaktangaben sowie rechtliche Hinweise (Haftung, Urheberrecht).",
  },
}

export default function LegalNoticeDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">Impressum</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Anbieterkennzeichnung</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Firma:</strong> Azai AG
                </p>
                <p>
                  <strong>Adresse:</strong> Wisentalstrasse 7a, 8185 Winkel, Schweiz
                </p>
                <p>
                  <strong>E‑Mail:</strong> info@azai.ch
                </p>
                <p>
                  <strong>Telefon:</strong> +41 79 687 50 82
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Vertretungsberechtigte Person(en)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Laurent Schöni & Burim Kryeziu
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Register- und Unternehmensangaben</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong>UID (Unternehmens‑Identifikationsnummer):</strong> CHE-156.215.257
                </li>
                {/* <li>
                  <strong>MWST‑Nr. (falls anwendbar):</strong> <em>CHE‑xxx.xxx.xxx MWST</em> (bitte nachtragen)
                </li> */}
                <li>
                  <strong>Handelsregisteramt:</strong> Kanton Zürich
                </li>
                <li>
                  <strong>Handelsregisternummer (HR‑Nr.):</strong> CH020.3.056.090-0
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Aufsichts-/Bewilligungsstellen</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Für die angebotenen Leistungen besteht keine sektorspezifische behördliche Bewilligungs- oder Aufsichtspflicht.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Datenschutzaufsicht (zuständige Behörde in der Schweiz): Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB),
                Feldeggweg 1, 3003 Bern, https://www.edoeb.admin.ch
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Berufsrechtliche Angaben</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nicht anwendbar. Die Azai AG übt keine Tätigkeiten eines reglementierten Berufs aus; es bestehen daher keine
                anzugebenden Kammerzugehörigkeiten, Berufsbezeichnungen, Staaten der Verleihung oder einschlägigen
                Berufsordnungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Verantwortlich für Inhalte</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Inhaltlich verantwortlich:</strong> Azai AG
                </p>
                <p>
                  <strong>Adresse:</strong> Wisentalstrasse 7a, 8185 Winkel, Schweiz
                </p>
                <p>
                  <strong>E‑Mail:</strong> info@azai.ch
                </p>
                <p>
                  <strong>Vertretungsberechtigte Personen:</strong> Laurent Schöni & Burim Kryeziu
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Haftungsausschluss (Inhalte)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Gleichwohl übernehmen wir keine
                Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Wir behalten uns
                vor, Inhalte jederzeit anzupassen, zu ergänzen oder zu entfernen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">Haftung für Links</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss
                haben. Für diese fremden Inhalte übernehmen wir keine Haftung. Für die Inhalte der verlinkten Seiten ist
                stets der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen – soweit nicht anders gekennzeichnet
                – dem Urheberrecht der Azai AG oder der jeweils genannten Rechteinhaber. Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                vorherigen schriftlichen Zustimmung der Rechteinhaber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Verbraucherstreitbeilegung / EU‑ODR‑Hinweis</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Azai AG ist ein in der Schweiz ansässiges Unternehmen. Eine Verpflichtung zur Teilnahme an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle besteht nach schweizerischem Recht nicht.
                Wir sind zur Teilnahme nicht verpflichtet und grundsätzlich nicht bereit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hinweis für EU‑Verbraucher: Die EU‑Kommission stellt eine Plattform zur Online‑Streitbeilegung (OS) bereit:
                https://ec.europa.eu/consumers/odr/ – Unsere E‑Mail-Adresse finden Sie oben in der Anbieterkennzeichnung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Kontakt für rechtliche Anliegen</h2>
              <div className="space-y-2 text-muted-foreground">
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