"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HtmlLangSetter() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof document === "undefined") return
    const isEN = pathname?.startsWith("/en")
    document.documentElement.lang = isEN ? "en" : "de-CH"
  }, [pathname])

  return null
}