import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const subprocessors = [
  {
    provider: "Amazon Web Services",
    service: "Backend Cloud Hosting",
    purpose: "Operation of the platform infrastructure",
    location: "Zurich, Switzerland",
    mechanism: "Standard Contractual Clauses with AWS",
  },
  {
    provider: "Amazon Web Services",
    service: "Frontend Cloud Hosting",
    purpose: "Operation of the platform infrastructure",
    location: "Frankfurt, Germany",
    mechanism: "Standard Contractual Clauses with AWS",
  },
  {
    provider: "Amazon Web Services",
    service: "AWS Simple Email Service",
    purpose: "Email delivery through the platform",
    location: "Frankfurt, Germany",
    mechanism: "Standard Contractual Clauses with AWS",
  },
  {
    provider: "Functional Software, Inc.",
    service: "Sentry.io Monitoring & Error Analysis",
    purpose: "Support with the analysis and resolution of bugs",
    location: "Germany",
    mechanism: "Standard Contractual Clauses with Sentry.io",
  },
  {
    provider: "Marker.io",
    service: "Feedback Collection and Reporting",
    purpose: "Collection of your feedback submissions",
    location: "Ireland",
    mechanism: "Standard Contractual Clauses with Marker.io",
  },
  {
    provider: "DevArch OÜ",
    service: "Subprocessor of the Processor",
    purpose: "Platform development and maintenance",
    location: "Spain",
    mechanism: "Individual data protection agreement with the subprocessor",
  },
]

export const metadata: Metadata = {
  title: "Subprocessor List | Azai – Elevate",
  description:
    "Overview of subprocessors engaged by Azai, including their services, processing purposes, data locations, and privacy safeguards.",
  alternates: {
    canonical: "/en/subprocessors/",
    languages: {
      "de-CH": "/de/subprocessors/",
      en: "/en/subprocessors/",
      "x-default": "/de/subprocessors/",
    },
  },
  openGraph: {
    title: "Subprocessor List | Azai – Elevate",
    description:
      "Overview of subprocessors engaged by Azai, including their services, processing purposes, data locations, and privacy safeguards.",
    url: "/en/subprocessors/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subprocessor List | Azai – Elevate",
    description:
      "Overview of subprocessors engaged by Azai, including their services, processing purposes, data locations, and privacy safeguards.",
  },
}

export default function SubprocessorsPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Subprocessor List
          </h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This list contains third-party providers (“subprocessors”) that Azai may engage to provide and operate the
                platform and that may have access to personal data in that context.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This list forms part of the Data Processing Agreement (DPA).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The provider may add or replace subprocessors provided that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>all applicable legal requirements are complied with</li>
                <li>appropriate data protection measures are in place</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Updates to this list will be published on this page.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Last updated:</strong> 31 March 2026
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Categories of Subprocessors</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subprocessors may in particular provide the following services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Cloud hosting and infrastructure</li>
                <li>Database hosting</li>
                <li>Email delivery</li>
                <li>Authentication</li>
                <li>Monitoring and logging</li>
                <li>Error analysis</li>
                <li>Support tools</li>
                <li>Payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Current Subprocessors</h2>
              <div className="-mx-2 overflow-x-auto px-2 sm:mx-0 sm:px-0">
                <div className="min-w-max rounded-xl border border-border">
                  <table className="min-w-[900px] text-sm text-left">
                  <thead className="bg-muted/50 text-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Provider</th>
                      <th className="px-4 py-3 font-semibold">Service</th>
                      <th className="px-4 py-3 font-semibold">Purpose of Processing</th>
                      <th className="px-4 py-3 font-semibold">Data Location</th>
                      <th className="px-4 py-3 font-semibold">Data Protection Mechanism</th>
                    </tr>
                  </thead>
                    <tbody>
                      {subprocessors.map((subprocessor) => (
                        <tr key={`${subprocessor.provider}-${subprocessor.service}`} className="border-t border-border align-top">
                          <td className="px-4 py-3 text-muted-foreground">{subprocessor.provider}</td>
                          <td className="px-4 py-3 text-muted-foreground">{subprocessor.service}</td>
                          <td className="px-4 py-3 text-muted-foreground">{subprocessor.purpose}</td>
                          <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{subprocessor.location}</td>
                          <td className="px-4 py-3 text-muted-foreground">{subprocessor.mechanism}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Description of the Categories</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cloud Infrastructure</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These providers supply the technical infrastructure required to operate the platform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-2">Possible data involved:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>User data</li>
                    <li>Project data</li>
                    <li>Documents</li>
                    <li>System logs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Communication Services</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">These providers may be used to send:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                    <li>System notifications</li>
                    <li>Password resets</li>
                    <li>Invitation emails</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">through the platform.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Monitoring and Error Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">These services help to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                    <li>ensure system stability</li>
                    <li>identify errors</li>
                    <li>detect security incidents</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Technical metadata may be processed for these purposes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Subprocessors</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The provider may add or replace subprocessors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Customers will be informed of changes by:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>an update to this page</li>
                <li>email notification to the organization</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Customers may object to new subprocessors for legitimate data protection reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about this list may be sent to: info@azai.ch
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
