import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { CalendlyHandler } from "@/components/calendly-handler"
import { HtmlLangSetter } from "@/components/html-lang-setter"

export const metadata: Metadata = {
  title: "Azai – Elevate",
  description:
    "Revolutionary project management platform engineered for enterprise teams who demand precision, intelligence, and results at scale.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de-CH">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased overflow-x-hidden`}>
        <HtmlLangSetter />
        <CalendlyHandler />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
