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
  url?: string
}

export function CalendlyHandler({ url }: Props) {
  const pendingOpenRef = useRef(false)

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
      history.replaceState(null, "", window.location.pathname + window.location.search)
    }
  }

  useEffect(() => {
    handleHash()
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  useEffect(() => {
    const onOpen = () => open()
    window.addEventListener("open-calendly" as any, onOpen as any)
    return () => window.removeEventListener("open-calendly" as any, onOpen as any)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest("a") as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute("href") || ""
      const wantsCalendly =
        anchor.dataset.openCalendly === "true" || href.includes("#book")

      if (!wantsCalendly) return

      e.preventDefault()

      if (window.Calendly?.initPopupWidget) {
        open()
      } else {
        ;(pendingOpenRef as React.MutableRefObject<boolean>).current = true
      }

      try {
        const url = new URL(window.location.href)
        if (url.hash) {
          history.replaceState(null, "", url.pathname + url.search)
        }
      } catch {
      }
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
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

