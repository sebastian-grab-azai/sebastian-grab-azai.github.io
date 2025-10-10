import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { de as L } from "@/lib/i18n/de"

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
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">{L.privacy.h1}</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            {L.privacy.sections.map((s, i) => (
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
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>
                <strong>{L.privacy.labels.email}</strong> info@azai.ch
              </p>
              <p>
                <strong>{L.privacy.labels.address}</strong> Azai AG, Wisentalstrasse 7a, 8185 Winkel, Schweiz
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}