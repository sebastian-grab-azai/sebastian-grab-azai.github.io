import type { Metadata } from "next"
import ContactPageDEClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Kontakt | Azai AG – Elevate",
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
    title: "Kontakt | Azai AG – Elevate",
    description:
      "Kontaktieren Sie unser Team. Wir unterstützen Sie bei Fragen, Feedback und Anfragen rund um Azai Elevate.",
    url: "/de/contact/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Azai AG – Elevate",
    description:
      "Kontaktieren Sie unser Team. Wir unterstützen Sie bei Fragen, Feedback und Anfragen rund um Azai Elevate.",
  },
}

export default function ContactPageDE() {
  return <ContactPageDEClient />
}