import type { Metadata } from "next"
import ContactPageENClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact | Azai AG – Elevate",
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
    title: "Contact | Azai AG – Elevate",
    description: "Get in touch with our team for questions, feedback, and sales inquiries about Azai Elevate.",
    url: "/en/contact/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Azai AG – Elevate",
    description: "Get in touch with our team for questions, feedback, and sales inquiries about Azai Elevate.",
  },
}

export default function ContactPageEN() {
  return <ContactPageENClient />
}