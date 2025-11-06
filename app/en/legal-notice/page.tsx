import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Legal Notice | Azai – Elevate",
  description:
    "Provider identification (Switzerland) of Azai AG including contact details and legal notices (liability, copyright).",
  alternates: {
    canonical: "/en/legal-notice/",
    languages: {
      "de-CH": "/de/legal-notice/",
      en: "/en/legal-notice/",
      "x-default": "/de/legal-notice/",
    },
  },
  openGraph: {
    title: "Legal Notice | Azai – Elevate",
    description:
      "Provider identification (Switzerland) of Azai AG including contact details and legal notices (liability, copyright).",
    url: "/en/legal-notice/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice | Azai – Elevate",
    description:
      "Provider identification (Switzerland) of Azai AG including contact details and legal notices (liability, copyright).",
  },
}

export default function LegalNoticeEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">Legal Notice</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Provider identification</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Company:</strong> Azai AG
                </p>
                <p>
                  <strong>Address:</strong> Wisentalstrasse 7a, 8185 Winkel, Switzerland
                </p>
                <p>
                  <strong>Email:</strong> info@azai.ch
                </p>
                <p>
                  <strong>Phone:</strong> +41 79 687 50 82
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Authorized representative(s)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Laurent Schöni & Burim Kryeziu
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Register and company details</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong>UID (Company Identification Number):</strong> CHE-156.215.257
                </li>
                {/* <li>
                  <strong>VAT No. (if applicable):</strong> CH020.3.056.090-0
                </li> */}
                <li>
                  <strong>Commercial Register Office:</strong> Canton of Zurich
                </li>
                <li>
                  <strong>Commercial Register No.:</strong> CH020.3.056.090-0
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Supervisory/authorisation bodies</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                No sector-specific authorisation or regulatory supervision is required for the services offered.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Data protection authority (competent authority in Switzerland): Federal Data Protection and Information Commissioner (FDPIC),
                Feldeggweg 1, 3003 Bern, https://www.edoeb.admin.ch
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Professional regulations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Not applicable. Azai AG does not practice a regulated profession; therefore, no chamber memberships, professional titles,
                countries of conferment, or professional rules are to be indicated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Responsible for content</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Content responsibility:</strong> Azai AG
                </p>
                <p>
                  <strong>Address:</strong> Wisentalstrasse 7a, 8185 Winkel, Switzerland
                </p>
                <p>
                  <strong>Email:</strong> info@azai.ch
                </p>
                <p>
                  <strong>Authorised representatives:</strong> Laurent Schöni & Burim Kryeziu
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Liability disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The contents of this website are created with the greatest possible care. However, we assume no liability
                for the correctness, completeness, and up-to-dateness of the content. We reserve the right to modify,
                supplement, or remove content at any time.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">Links</h3>
              <p className="text-muted-foreground leading-relaxed">
                This website may contain links to external third-party websites over whose content we have no control. We
                therefore accept no liability for such external content. The respective provider or operator of the pages
                is always responsible for the content of the linked pages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Copyright</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless otherwise indicated, the content and works published on this website are subject to copyright owned
                by Azai AG or the respective rights holders. Reproduction, editing, distribution, and any kind of use
                outside the limits of copyright law require the prior written consent of the rights holders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Consumer dispute resolution / EU ODR</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Azai AG is a company based in Switzerland. There is no obligation under Swiss law to participate in
                consumer dispute resolution proceedings before a consumer arbitration board. We are not obliged and
                generally not willing to participate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Note for EU consumers: The European Commission provides a platform for online dispute resolution (ODR):
                https://ec.europa.eu/consumers/odr/ – Our email address is provided above in the provider identification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact for legal matters</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong> info@azai.ch
                </p>
                <p>
                  <strong>Address:</strong> Azai AG, Wisentalstrasse 7a, 8185 Winkel, Switzerland
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