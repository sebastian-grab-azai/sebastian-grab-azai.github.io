"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

type Props = {
  /** Optionaler Override – falls du den Link gezielt per Prop setzen willst */
  url?: string
}

export function CalendlyHandler({ url }: Props) {
  const pendingOpenRef = useRef(false)

  // ENV lesen (Client: build-time inlined). Prop > ENV > ""
  const calendlyUrl =
    (url ?? process.env.NEXT_PUBLIC_CALENDLY_URL ?? "").trim()

  const open = () => {
    if (!calendlyUrl) {
      console.warn(
        "Calendly: Kein Link gesetzt. Lege NEXT_PUBLIC_CALENDLY_URL in deiner .env fest oder übergib <CalendlyHandler url='...'>."
      )
      return
    }
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: calendlyUrl })
    }
  }

  const handleHash = () => {
    if (typeof window === "undefined") return
    if (window.location.hash === "#book") {
      if (window.Calendly?.initPopupWidget) {
        open()
      } else {
        pendingOpenRef.current = true
      }
      // Hash entfernen, damit kein doppeltes Auslösen passiert
      history.replaceState(null, "", window.location.pathname + window.location.search)
    }
  }

  useEffect(() => {
    handleHash()
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (pendingOpenRef.current || window.location.hash === "#book") {
            open()
            pendingOpenRef.current = false
          }
        }}
      />
    </>
  )
}
