import type { Metadata } from "next"
import ContactPageDEClient from "./ContactClient.de"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie unser Team. Wir unterstützen Sie bei Fragen, Feedback und Anfragen rund um Azai Elevate.",
  alternates: {
    canonical: "/de/contact/",
    languages: {
      "de-CH": "/de/contact/",
      en: "/en/contact/",
      "x-default": "/de/contact/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Azai – Elevate",
    locale: "de_CH",
    alternateLocale: ["en"],
    images: [{ url: "/og-image.png", width: 1920, height: 999, alt: "Azai – Elevate" }],
    title: "Kontakt | Azai – Elevate",
    description:
      "Kontaktieren Sie unser Team. Wir unterstützen Sie bei Fragen, Feedback und Anfragen rund um Azai Elevate.",
    url: "/de/contact/",
  },
  twitter: {
    images: ["/og-image.png"],
    card: "summary_large_image",
    title: "Kontakt | Azai – Elevate",
    description:
      "Kontaktieren Sie unser Team. Wir unterstützen Sie bei Fragen, Feedback und Anfragen rund um Azai Elevate.",
  },
}

export default function ContactPageDE() {
  return <ContactPageDEClient />
}