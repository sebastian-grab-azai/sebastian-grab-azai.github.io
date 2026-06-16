import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { CalendlyHandler } from "@/components/calendly-handler"
import { HtmlLangSetter } from "@/components/html-lang-setter"

const siteUrl = "https://www.azai.ch"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Azai – Elevate | KI-gestütztes Projektmanagement für Enterprise-Teams",
    template: "%s | Azai – Elevate",
  },
  description:
    "Revolutionary project management platform engineered for enterprise teams who demand precision, intelligence, and results at scale.",
  applicationName: "Azai – Elevate",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Azai AG", url: siteUrl }],
  creator: "Azai AG",
  publisher: "Azai AG",
  formatDetection: { telephone: true, address: false, email: false },
  alternates: {
    canonical: "/de/",
    languages: {
      "de-CH": "/de/",
      en: "/en/",
      "x-default": "/de/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Azai – Elevate",
    locale: "de_CH",
    alternateLocale: ["en"],
    url: "/",
    title: "Azai – Elevate",
    description:
      "Revolutionary project management platform engineered for enterprise teams who demand precision, intelligence, and results at scale.",
    images: [{ url: "/og-image.png", width: 1920, height: 999, alt: "Azai – Elevate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azai – Elevate",
    description:
      "Revolutionary project management platform engineered for enterprise teams who demand precision, intelligence, and results at scale.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de-CH">
      <head>
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
