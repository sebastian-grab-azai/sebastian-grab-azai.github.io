import type React from "react"

export function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }]
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return children
}
