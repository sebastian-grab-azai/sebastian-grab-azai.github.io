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

export function CalendlyHandler() {
  const pendingOpenRef = useRef(false)

  const open = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/sebastian-grab-smiit/60min",
      })
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
    // Beim ersten Laden prüfen
    handleHash()
    // Auf spätere Hash-Änderungen reagieren
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