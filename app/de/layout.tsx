import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    languages: {
      "de-CH": "/de/",
      en: "/en/",
      "x-default": "/de/",
    },
  },
}

export default function DELayout({ children }: { children: React.ReactNode }) {
  return children
}