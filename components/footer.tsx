import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" aria-label="Azai home" className="flex items-center mb-6">
              <Image src="/logo.png" alt="Azai Logo" width={55} height={12} priority />
            </Link>
            <p className="text-white/70 leading-relaxed">
              Azai is the AI-powered project management platform that helps enterprise teams deliver projects on time,
              on budget, and with complete confidence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#book"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Calendar Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@azai.ch" className="hover:text-white transition-colors">
                  info@azai.ch
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+123456789" className="hover:text-white transition-colors">
                  +123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  Azai AG
                  <br />
                  Bahnhofplatz 1<br />
                  8001 Zürich
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2025 Azai AG. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
