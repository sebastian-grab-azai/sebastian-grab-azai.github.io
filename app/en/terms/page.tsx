import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Azai – Elevate",
  description:
    "Legal terms governing the use of the Azai Elevate platform, including license rights, availability, support, liability, and contract duration.",
  alternates: {
    canonical: "/en/terms/",
    languages: {
      "de-CH": "/de/terms/",
      en: "/en/terms/",
      "x-default": "/de/terms/",
    },
  },
  openGraph: {
    title: "Terms of Service | Azai – Elevate",
    description:
      "Legal terms governing the use of the Azai Elevate platform, including license rights, availability, support, liability, and contract duration.",
    url: "/en/terms/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Azai – Elevate",
    description:
      "Legal terms governing the use of the Azai Elevate platform, including license rights, availability, support, liability, and contract duration.",
  },
}

export default function TermsPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Scope</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service govern the use of the Azai Elevate software platform (the “Platform”) provided by
                Azai AG, Wisentalstrasse 7a, 8185 Winkel, Switzerland (the “Provider”).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Platform provides a cloud-based project management solution for companies in the construction and real
                estate sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Use of the Platform is intended exclusively for companies and commercial users (B2B).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By registering for or using the Platform, the customer agrees to these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Provider offers a cloud-based software solution that includes, in particular, the following features:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>management of construction projects</li>
                <li>documentation of project progress</li>
                <li>communication between project participants</li>
                <li>document management</li>
                <li>reporting and analytics</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">The exact scope of features depends on:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>the selected license model</li>
                <li>the currently available features of the Platform</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The Provider reserves the right to further develop or modify Platform features, provided that the essential
                contractual purpose is not impaired.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Registration and User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Use of the Platform requires the creation of a user account.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">The customer undertakes to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>provide accurate and complete information</li>
                <li>keep access credentials confidential</li>
                <li>prevent access by unauthorized third parties</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The customer is responsible for all activities carried out through its user account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Use on Behalf of a Company</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By registering, the user confirms that they are authorized to use the Platform on behalf of the company or
                organization for which the account is created.
              </p>
              <p className="text-muted-foreground leading-relaxed">The company shall be deemed the contractual partner of the Provider.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. License and Rights of Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The Provider grants the customer a</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>non-exclusive</li>
                <li>non-transferable</li>
                <li>term-limited to the duration of the contract</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">right to use the Platform.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">The customer is not entitled to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>copy the software</li>
                <li>modify it</li>
                <li>reverse engineer it</li>
                <li>resell or rent it</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Customer Data and Data Ownership</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All data uploaded to the Platform by the customer or its users (“Customer Data”) remains the property of
                the customer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">The Provider processes this data solely:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>to provide the Platform</li>
                <li>to maintain and improve the service</li>
                <li>in accordance with applicable data protection laws</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Further details on data processing can be found in the Privacy Policy and the Data Processing Agreement
                (DPA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Availability and Maintenance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Provider endeavors to make the Platform available with an annual availability of 99%.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">The following shall not be considered downtime:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>planned maintenance work</li>
                <li>necessary security updates</li>
                <li>events outside the Provider’s control</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Planned maintenance work will, where possible, be announced with reasonable advance notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The Provider offers support through the following channels:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>email</li>
                <li>feedback button within the app</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Support requests are processed within 48 hours on business days.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The average resolution time may vary depending on complexity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Use of the Platform is based on a licensing model with recurring fees.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">The amount of the fees is determined by</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>the applicable price list</li>
                <li>individual agreements with the customer</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Invoices are payable within 14 days unless otherwise agreed with the customer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In the event of late payment, the Provider may temporarily suspend access to the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Permitted Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The customer undertakes not to use the Platform for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>unlawful activities</li>
                <li>distribution of malware</li>
                <li>unauthorized access to systems</li>
                <li>automated attacks on the Platform</li>
                <li>scraping or unauthorized data collection</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The Provider is entitled to take appropriate measures in the event of violations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Platform may use services provided by third parties, in particular:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>cloud infrastructure</li>
                <li>email services</li>
                <li>authentication services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The Provider makes an up-to-date list of these service providers available{" "}
                <Link href="/en/subprocessors/" className="text-foreground underline underline-offset-4">
                  here
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Provider shall only be liable for damages caused by intentional misconduct or gross negligence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Provider’s liability is limited to the amount paid by the customer for use of the Platform during the
                preceding 12 months.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Liability for indirect damages, loss of profit, or consequential damages is excluded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Provider shall not be liable for disruptions in performance caused by events outside its control,
                including in particular:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>natural disasters</li>
                <li>power outages</li>
                <li>cloud infrastructure outages</li>
                <li>cyberattacks</li>
                <li>governmental measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contract Term and Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The contract runs for an indefinite period.</p>
              <p className="text-muted-foreground leading-relaxed">
                The customer may terminate the contract with 30 days’ notice to the end of the billing period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Data Export and Deletion</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After the end of the contract, the customer has the opportunity to export its data within 30 days. The
                Provider will provide support with data export upon request.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Thereafter, the customer’s data will be permanently deleted within 60 days unless statutory retention
                obligations apply or an alternative arrangement has been agreed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Changes to the Terms of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Provider may amend these Terms of Service. Material changes will be communicated to customers at least
                30 days in advance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Swiss law shall apply.</p>
              <p className="text-muted-foreground leading-relaxed">Place of jurisdiction is Zurich.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at info@azai.ch.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
