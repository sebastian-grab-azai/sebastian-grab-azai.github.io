import type { Metadata } from "next"
import ContactPageENClient from "./ContactClient.en"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our team for questions, feedback, and sales inquiries about Azai Elevate.",
  alternates: {
    canonical: "/en/contact/",
    languages: {
      "de-CH": "/de/contact/",
      en: "/en/contact/",
      "x-default": "/de/contact/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Azai – Elevate",
    locale: "en",
    alternateLocale: ["de_CH"],
    images: [{ url: "/og-image.png", width: 1920, height: 999, alt: "Azai – Elevate" }],
    title: "Contact | Azai – Elevate",
    description: "Get in touch with our team for questions, feedback, and sales inquiries about Azai Elevate.",
    url: "/en/contact/",
  },
  twitter: {
    images: ["/og-image.png"],
    card: "summary_large_image",
    title: "Contact | Azai – Elevate",
    description: "Get in touch with our team for questions, feedback, and sales inquiries about Azai Elevate.",
  },
}

export default function ContactPageEN() {
  return <ContactPageENClient />
}