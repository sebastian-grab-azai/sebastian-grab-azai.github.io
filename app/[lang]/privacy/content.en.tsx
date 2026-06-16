import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Azai – Elevate",
  description:
    "Information about the processing of personal data when using the Azai platform, including legal bases, security measures, and data subject rights.",
  alternates: {
    canonical: "/en/privacy/",
    languages: {
      "de-CH": "/de/privacy/",
      en: "/en/privacy/",
      "x-default": "/de/privacy/",
    },
  },
  openGraph: {
    title: "Privacy Policy | Azai – Elevate",
    description:
      "Information about the processing of personal data when using the Azai platform, including legal bases, security measures, and data subject rights.",
    url: "/en/privacy/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Azai – Elevate",
    description:
      "Information about the processing of personal data when using the Azai platform, including legal bases, security measures, and data subject rights.",
  },
}

export default function PrivacyPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Controller</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The controller responsible for data processing is:</p>
              <div className="space-y-2 text-muted-foreground">
                <p>Azai AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Switzerland</p>
                <p>Email address for privacy inquiries: info@azai.ch</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Processed</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using the platform, the following data may be processed:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>account data</li>
                <li>company information</li>
                <li>project data</li>
                <li>uploaded documents</li>
                <li>communication data</li>
                <li>technical usage data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Purposes of Data Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Processing takes place in particular for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>providing the platform</li>
                <li>managing user accounts</li>
                <li>providing support</li>
                <li>improving the platform</li>
                <li>ensuring security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Legal Bases</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Personal data is processed on the basis of:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>performance of a contract</li>
                <li>legitimate interests</li>
                <li>legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Processing on Behalf of Customers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Where customers upload personal data to the platform, the provider processes this data on behalf of the
                customer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The details are governed by the Data Processing Agreement (DPA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclosure to Service Providers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following categories of service providers may be used to provide the platform:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>cloud hosting</li>
                <li>email delivery</li>
                <li>monitoring</li>
                <li>security services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                A current list of service providers is available{" "}
                <Link href="/en/subprocessors/" className="text-foreground underline underline-offset-4">
                  here
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Hosting</h2>
              <p className="text-muted-foreground leading-relaxed">
                The platform is hosted by Amazon Warehouse Services (AWS) in data centers located in Switzerland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The provider implements technical and organizational measures, in particular:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>encryption of data transmission</li>
                <li>access controls</li>
                <li>regular backups</li>
                <li>system monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Retention Period</h2>
              <p className="text-muted-foreground leading-relaxed">
                Personal data is stored only for as long as necessary for the respective purposes. After the end of the
                contract, data is deleted in accordance with the periods described in the terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The platform uses technically necessary cookies in order to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>enable user logins</li>
                <li>ensure platform security</li>
                <li>store settings</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                If additional analytics or tracking tools are used, this will only take place with the corresponding
                consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                If data is transferred outside Switzerland or the EU, this will only take place subject to appropriate
                safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Rights of Data Subjects</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Data subjects have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>access</li>
                <li>rectification</li>
                <li>erasure</li>
                <li>restriction of processing</li>
                <li>data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Right to Lodge a Complaint</h2>
              <p className="text-muted-foreground leading-relaxed">
                Data subjects may lodge a complaint with the competent data protection authority. In Switzerland, this is
                the Federal Data Protection and Information Commissioner (FDPIC).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The provider may amend this Privacy Policy if necessary. The current version is available on the website
                and in the app under Settings → Legal.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
