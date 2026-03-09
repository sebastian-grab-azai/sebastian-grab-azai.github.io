"use client"

import { useEffect, useState } from "react"
import { LoadingLogo } from "@/components/loading-logo"

export function SplashOverlay() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "done">("visible")

  useEffect(() => {
    const initialOverlay = document.getElementById("splash-initial")
    if (initialOverlay) initialOverlay.remove()

    if (phase === "done") return

    const shineTimer = setTimeout(() => {
      setPhase("exiting")
    }, 3000)

    const removeTimer = setTimeout(() => {
      setPhase("done")
    }, 3500)

    return () => {
      clearTimeout(shineTimer)
      clearTimeout(removeTimer)
    }
  }, [phase])

  if (phase === "done") return null

  return (
    <div
      id="splash-overlay"
      role="status"
      aria-label="Loading"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--background, #fcf2df)",
        pointerEvents: phase === "exiting" ? "none" : "auto",
        animation:
          phase === "exiting"
            ? "splashFadeOut 0.5s ease-out forwards"
            : undefined,
      }}
    >
      <style>{`
        @keyframes splashFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes splashEnterLogo {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .splash-logo-wrapper {
            animation: none !important;
          }
        }
      `}</style>
      <div
        className="splash-logo-wrapper w-[240px] max-sm:w-[160px] [&_svg]:w-full [&_svg]:h-auto"
        style={{
          animation: "splashEnterLogo 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        }}
      >
        <LoadingLogo width={240} color="#011526" iterations={2} />
      </div>
    </div>
  )
}
