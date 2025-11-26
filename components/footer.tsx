"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const pathname = usePathname() || "/"
  const lang = pathname.startsWith("/en") ? "en" : "de"
  const base = `/${lang}`

  const L = {
    links: lang === "de" ? "Links" : "Links",
    home: lang === "de" ? "Startseite" : "Home",
    contact: lang === "de" ? "Kontakt" : "Contact Us",
    booking: lang === "de" ? "Termin buchen" : "Calendar Booking",
    contactSection: lang === "de" ? "Kontakt" : "Contact",
    email: lang === "de" ? "E‑Mail:" : "Email:",
    phone: lang === "de" ? "Telefon:" : "Phone:",
    phoneNumber: lang === "de" ? "+41 79 687 50 82" : "+41 79 218 77 48",
    phoneNumberHref: lang === "de" ? "tel:+41796875082" : "tel:+41792187748",
    address: lang === "de" ? "Adresse:" : "Address:",
    companyBlurb:
      lang === "de"
        ? "Azai ist die KI-gestützte Projektmanagement-Plattform, mit der Enterprise-Teams Projekte termingerecht, im Budget und mit voller Sicherheit liefern."
        : "Azai helps project teams make faster, smarter, and more confident decisions — through one connected platform that turns data into direction.",
    rights: lang === "de" ? "Alle Rechte vorbehalten." : "All rights reserved.",
    privacy: lang === "de" ? "Datenschutzerklärung" : "Privacy Policy",
    terms: lang === "de" ? "Nutzungsbedingungen" : "Terms of Service",
    imprint: lang === "de" ? "Impressum" : "Legal Notice",
    companyName: "Azai AG",
    street: "Wisentalstrasse 7a",
    city: "8185 Winkel",
    country: lang === "de" ? "Schweiz" : "Switzerland",
  }

  const homeHref = `${base}/`
  const contactHref = `${base}/contact`
  const privacyHref = `${base}/privacy`
  const termsHref = `${base}/terms`
  const bookingHref = `${base}/#book`
  const imprintHref = `${base}/legal-notice`

  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href={homeHref} aria-label="Azai home" className="flex items-center mb-6">
              <Image src="/logo.png" alt="Azai Logo" width={55} height={12} priority />
            </Link>
            <p className="text-white/70 leading-relaxed">
              {L.companyBlurb}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">{L.links}</h4>
            <ul className="space-y-3">
              <li>
                <Link href={homeHref} className="text-white/70 hover:text-white transition-colors">
                  {L.home}
                </Link>
              </li>
              <li>
                <Link href={contactHref} className="text-white/70 hover:text-white transition-colors">
                  {L.contact}
                </Link>
              </li>
              <li>
                <a
                  href={bookingHref}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {L.booking}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">{L.contactSection}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@azai.ch" className="hover:text-white transition-colors">
                  info@azai.ch
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={L.phoneNumberHref} className="hover:text-white transition-colors">
                  {L.phoneNumber}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  {L.companyName}
                  <br />
                  {L.street}
                  <br />
                  {L.city}
                  <br />
                  {L.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/90 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">© 2025 {L.companyName}. {L.rights}</p>
          <div className="flex flex-wrap gap-6 md:flex-nowrap justify-center md:justify-start w-full md:w-auto">
            <Link href={privacyHref} className="text-white/70 hover:text-white text-sm transition-colors">
              {L.privacy}
            </Link>
            <Link href={termsHref} className="text-white/70 hover:text-white text-sm transition-colors">
              {L.terms}
            </Link>
            <Link
              href={imprintHref}
              className="text-white/70 hover:text-white text-sm transition-colors w-full text-center md:w-auto md:text-left"
            >
              {L.imprint}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
