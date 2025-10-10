import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { de as L } from "@/lib/i18n/de"

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | Azai – Elevate",
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
    title: "Nutzungsbedingungen | Azai – Elevate",
    description:
      "Bedingungen für die Nutzung der Projektmanagement-Plattform und Dienste der Azai AG.",
    url: "/de/terms/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutzungsbedingungen | Azai – Elevate",
    description:
      "Bedingungen für die Nutzung der Projektmanagement-Plattform und Dienste der Azai AG.",
  },
}

export default function TermsPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">{L.terms.h1}</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            {L.terms.sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{s.h2}</h2>
                {s.p?.map((t, j) => (
                  <p
                    key={j}
                    className={j < (s.p?.length ?? 0) - 1 ? "text-muted-foreground leading-relaxed mb-4" : "text-muted-foreground leading-relaxed"}
                  >
                    {t}
                  </p>
                ))}
                {s.list && (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    {s.list.map((li, k) => (
                      <li key={k}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            {/* Kontaktinformationen */}
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>
                <strong>E‑Mail:</strong> info@azai.ch
              </p>
              <p>
                <strong>Adresse:</strong> Azai AG, Wisentalstrasse 7a, 8185 Winkel, Schweiz
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}