import type { Metadata } from "next"
import { RootRedirect } from "@/components/root-redirect"

export const metadata: Metadata = {
  alternates: {
    canonical: "/de/",
    languages: {
      "de-CH": "/de/",
      en: "/en/",
      "x-default": "/de/",
    },
  },
}

export default function Page() {
  return <RootRedirect />
}
