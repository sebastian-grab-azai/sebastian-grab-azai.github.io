"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type ModernLoaderProps = {
  message?: string
  className?: string
}

export default function ModernLoader({ message = "Laden …", className }: ModernLoaderProps) {
  return (
    <div
      className={cn(
        "min-h-screen grid place-items-center bg-white",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative w-full max-w-sm">
        <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(10,22,40,0.08),_transparent_60%)]" />
        <div className="relative rounded-2xl bg-white ring-1 ring-black/5 shadow-xl p-8 text-center">
          <Image
            src="/logo_dark.png"
            alt="Azai"
            width={72}
            height={32}
            priority
            className="mx-auto mb-5"
          />
          <div className="mx-auto mb-5 h-10 w-10 rounded-full border-4 border-[#0A1628]/20 border-t-[#0A1628] animate-spin" />
          <p className="text-sm text-foreground/70">{message}</p>
        </div>
      </div>
    </div>
  )
}