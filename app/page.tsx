"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LoadingLogo } from "@/components/loading-logo"

export default function RootRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Wait for 2 shine iterations (2 × 1.5s = 3s) before redirecting
    const timer = setTimeout(() => {
      router.replace("/de/")
    }, 1500)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-background"
        role="status"
        aria-label="Loading"
      >
        <div className="w-[240px] max-sm:w-[160px]">
          <LoadingLogo width={240} color="#011526" iterations={2} />
        </div>
      </div>
      <noscript>
        <main className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center text-sm text-foreground/70">
            <p>
              JavaScript ist deaktiviert. Bitte öffnen Sie{" "}
              <a href="/de/" className="underline">/de/</a>.
            </p>
          </div>
        </main>
      </noscript>
    </>
  )
}
