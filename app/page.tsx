"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RootRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/de/")
  }, [router])

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center text-sm text-foreground/70">
        <p>Weiterleitung zur deutschen Seite …</p>
        <noscript>
          <p className="mt-2">
            JavaScript ist deaktiviert. Bitte öffnen Sie{" "}
            <a href="/de/" className="underline">
              /de/
            </a>
            .
          </p>
        </noscript>
      </div>
    </main>
  )
}
