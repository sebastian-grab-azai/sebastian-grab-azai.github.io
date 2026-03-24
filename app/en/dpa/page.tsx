import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Data Processing Agreement (DPA) | Azai – Elevate",
  description:
    "Data Processing Agreement between the customer as controller and Azai AG as processor for use of the Azai Elevate platform.",
  alternates: {
    canonical: "/en/dpa/",
    languages: {
      "de-CH": "/de/dpa/",
      en: "/en/dpa/",
      "x-default": "/de/dpa/",
    },
  },
  openGraph: {
    title: "Data Processing Agreement (DPA) | Azai – Elevate",
    description:
      "Data Processing Agreement between the customer as controller and Azai AG as processor for use of the Azai Elevate platform.",
    url: "/en/dpa/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Processing Agreement (DPA) | Azai – Elevate",
    description:
      "Data Processing Agreement between the customer as controller and Azai AG as processor for use of the Azai Elevate platform.",
  },
}

export default function DpaPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-10xl">
          <h1 className="legal-title text-4xl md:text-5xl font-bold text-foreground mb-6">Data Processing Agreement (DPA)</h1>

          <div className="legal-content bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed mb-2">between</p>
              <p className="text-muted-foreground leading-relaxed mb-2">the customer</p>
              <p className="text-muted-foreground leading-relaxed mb-4">(hereinafter the “Controller”)</p>
              <p className="text-muted-foreground leading-relaxed mb-2">and</p>
              <p className="text-muted-foreground leading-relaxed mb-2">Azai AG</p>
              <p className="text-muted-foreground leading-relaxed">(hereinafter the “Processor”)</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Subject Matter and Duration of Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor provides the Controller with a cloud-based software platform for the management of
                construction projects (the “Platform”).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the course of using the Platform, the Processor may process personal data on behalf of the Controller.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Processing takes place exclusively:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>on the basis of the Terms of Service</li>
                <li>this Data Processing Agreement</li>
                <li>the documented instructions of the Controller</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The duration of processing corresponds to the duration of the contractual relationship between the parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Nature and Purpose of Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Personal data is processed exclusively for the provision and operation of the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Processing includes in particular:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>storage of project data</li>
                <li>management of user accounts</li>
                <li>provision of communication functions</li>
                <li>document management</li>
                <li>technical maintenance of the Platform</li>
                <li>support services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The Processor does not process data for its own purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Categories of Data Subjects</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Processing may concern the following categories of persons:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>employees of the Controller</li>
                <li>project managers</li>
                <li>site managers</li>
                <li>contractors and subcontractors</li>
                <li>contact persons at customers or suppliers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Categories of Personal Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on use of the Platform, the following data in particular may be processed:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>name</li>
                <li>email address</li>
                <li>telephone number</li>
                <li>company affiliation</li>
                <li>project-related information</li>
                <li>documents and communication content</li>
                <li>usage and log data</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The Controller independently determines which personal data is uploaded to the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Right to Issue Instructions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor processes personal data solely in accordance with the instructions of the Controller.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Instructions may be issued via:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>use of the Platform</li>
                <li>written instructions</li>
                <li>support requests</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The Processor shall inform the Controller without undue delay if an instruction violates applicable data
                protection law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor ensures that all persons with access to personal data
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>are bound to confidentiality, or</li>
                <li>are subject to an adequate statutory duty of confidentiality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Technical and Organisational Measures (TOMs)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor implements appropriate technical and organisational measures to protect personal data.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">These measures include in particular:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>access controls for systems</li>
                <li>encryption of data transmission (e.g. HTTPS/TLS)</li>
                <li>role-based access rights</li>
                <li>regular backups</li>
                <li>monitoring and logging</li>
                <li>protection against unauthorized access</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The Processor may adapt security measures provided that the level of security is not materially reduced.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Subprocessors</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor may engage subprocessors for the provision of the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">These may in particular include:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>cloud infrastructure providers</li>
                <li>email delivery services</li>
                <li>monitoring and logging services</li>
                <li>authentication services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A current list of subprocessors in use is available{" "}
                <Link href="/en/subprocessors/" className="text-foreground underline underline-offset-4">
                  here
                </Link>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor informs the Controller of changes to the subprocessor list.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Controller may object to the use of a new subprocessor for legitimate reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Transfers to Third Countries</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If personal data is transferred to countries outside Switzerland or the European Economic Area, the
                Processor shall ensure that appropriate safeguards are in place.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">This may be achieved by means of:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>adequacy decisions</li>
                <li>Standard Contractual Clauses</li>
                <li>other legally permissible safeguards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Assistance to the Controller</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor shall support the Controller, where possible, with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>responding to data protection requests from data subjects</li>
                <li>compliance with statutory data protection obligations</li>
                <li>data protection impact assessments</li>
                <li>security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Notification of Data Breaches</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor shall inform the Controller without undue delay of
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>data breaches</li>
                <li>security incidents</li>
                <li>unauthorized access to personal data</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Notification shall be made within 48 hours after becoming aware of the incident.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Audit and Demonstration Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor shall provide the Controller, upon request, with the information required to demonstrate
                compliance with this Agreement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Audits may be carried out by means of:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>document reviews</li>
                <li>certifications</li>
                <li>security reports</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                On-site audits are only permissible with reasonable prior notice and subject to the protection of trade
                secrets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Return and Deletion of Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                After termination of the contractual relationship, the Processor shall:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>give the Controller the opportunity to export data</li>
                <li>subsequently delete personal data</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Deletion shall take place within 60 days after the end of the contract unless statutory retention
                obligations apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                The liability of the parties is governed by the provisions set out in the Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Validity and Amendments</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Data Processing Agreement applies for the entire duration of use of the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Processor may amend this Agreement if legal changes or technical developments make this necessary.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Controller will be informed of material changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Order of Precedence</h2>
              <p className="text-muted-foreground leading-relaxed">
                In the event of contradictions between this Agreement and the Terms of Service, this Data Processing
                Agreement shall take precedence with regard to the processing of personal data.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
