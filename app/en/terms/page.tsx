import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Azai – Elevate",
  description:
    "Review the terms and conditions for using Azai AG's project management platform and services.",
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
      "Review the terms and conditions for using Azai AG's project management platform and services.",
    url: "/en/terms/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Azai – Elevate",
    description:
      "Review the terms and conditions for using Azai AG's project management platform and services.",
  },
}

export default function TermsPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#FCF2DF]">
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Azai's project management platform and services, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms,
                you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subject to your compliance with these Terms, Azai grants you a limited, non-exclusive, non-transferable
                license to access and use our services for your internal business purposes. This license does not
                include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for commercial purposes outside your organization</li>
                <li>Attempting to reverse engineer any software</li>
                <li>Removing any copyright or proprietary notations</li>
                <li>Transferring the materials to another person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You agree to notify us immediately of any unauthorized use of
                your account. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use our services for any unlawful purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful code or malware</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics,
                logos, and software, are owned by Azai AG and are protected by international copyright, trademark, and
                other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Subscription fees are billed in advance on a recurring basis. You authorize us to charge your payment
                method for all fees incurred. Fees are non-refundable except as required by law or as explicitly stated
                in your subscription agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide reliable service, we do not guarantee that our services will be uninterrupted
                or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any
                time with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Azai AG shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice, for any
                reason, including breach of these Terms. Upon termination, your right to use the services will
                immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Switzerland, without
                regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                posting the updated Terms on our website. Your continued use of our services after such changes
                constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
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