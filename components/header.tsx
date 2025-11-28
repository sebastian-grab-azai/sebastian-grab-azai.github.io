"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const pathname = usePathname() || "/"
  const lang = pathname.startsWith("/en") ? "en" : "de"

  const L = {
    home: lang === "de" ? "Startseite" : "Home",
    features: lang === "de" ? "Funktionen" : "Features",
    earlyAccess: lang === "de" ? "Frühzugang" : "Early Access",
    booking: lang === "de" ? "Termin buchen" : "Calendar Booking",
    clientLogin: lang === "de" ? "Kunden-Login" : "Client Login",
    contact: lang === "de" ? "Vertrieb kontaktieren" : "Contact Sales",
    navTitle: lang === "de" ? "Navigation" : "Navigation",
  }

  const base = `/${lang}`
  const homeHref = `${base}/`
  const featuresHref = `${base}/#features`
  const earlyHref = `${base}/#early-access`
  const bookHref = `${base}/#book`
  const contactHref = `${base}/contact`

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto max-w-[80rem] px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={homeHref} aria-label="Azai home" className="flex items-center">
            <Image src="/logo_dark.png" alt="Azai Logo" width={60} height={32} priority />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href={homeHref} className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
              {L.home}
            </Link>
            <Link
              href={featuresHref}
              className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
            >
              {L.features}
            </Link>
            <Link
              href={earlyHref}
              className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
            >
              {L.earlyAccess}
            </Link>
            <Link href={bookHref} data-open-calendly="true" className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors">
              {L.booking}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-primary/0 text-foreground hover:text-white hover:bg-primary">
              <Link href="https://app.azai.ch" target="_blank" rel="noopener noreferrer">{L.clientLogin}</Link>
            </Button>
            <Button asChild className="bg-primary text-white hover:text-white hover:bg-primary">
              <Link href={contactHref}>{L.contact}</Link>
            </Button>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-foreground hover:bg-primary/90">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-foreground font-semibold">{L.navTitle}</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 grid gap-2">
                  <Link href={homeHref} className="py-2 text-base font-medium text-foreground hover:text-foreground/70 ml-4">
                    {L.home}
                  </Link>
                  <Link href={featuresHref} className="py-2 text-base font-medium text-foreground hover:text-foreground/70 ml-4">
                    {L.features}
                  </Link>
                  <Link href={earlyHref} className="py-2 text-base font-medium text-foreground hover:text-foreground/70 ml-4">
                    {L.earlyAccess}
                  </Link>
                  <Link href={bookHref} data-open-calendly="true" className="py-2 text-base font-medium text-foreground hover:text-foreground/70 ml-4">
                    {L.booking}
                  </Link>
                </nav>
                <div className="mt-6 grid gap-2">
                  <Button asChild variant="outline" className="justify-start hover:bg-primary ml-4 mr-4">
                    <Link href="https://app.azai.ch" target="_blank" rel="noopener noreferrer">{L.clientLogin}</Link>
                  </Button>
                  <Button asChild className="justify-start hover:bg-primary ml-4 mr-4">
                    <Link href={contactHref}>{L.contact}</Link>
                  </Button>
                  <div className="px-4">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
