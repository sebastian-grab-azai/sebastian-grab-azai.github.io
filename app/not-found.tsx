"use client"

import { usePathname } from "next/navigation"
import LocalizedLink from "@/components/localized-link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const pathname = usePathname() || "/"
  const lang = pathname.startsWith("/en") ? "en" : "de"

  const T =
    lang === "en"
      ? {
          badge: "Not found",
          title: "Page not found",
          lead:
            "The page you’re looking for doesn’t exist or may have been moved.",
          ctaPrimary: "Go to Home",
          ctaSecondary: "Contact Sales",
          homeHref: "/",
          contactHref: "/contact",
        }
      : {
          badge: "Nicht gefunden",
          title: "Seite nicht gefunden",
          lead:
            "Die angeforderte Seite existiert nicht oder wurde verschoben.",
          ctaPrimary: "Zur Startseite",
          ctaSecondary: "Vertrieb kontaktieren",
          homeHref: "/",
          contactHref: "/contact",
        }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {T.title}
            </h1>

            <p className="text-foreground/70 mb-8 leading-relaxed">
              {T.lead}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6">
                <LocalizedLink href={T.homeHref}>{T.ctaPrimary}</LocalizedLink>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-foreground/20 bg-transparent h-11 px-6 hover:bg-foreground/5 hover:text-foreground"
              >
                <LocalizedLink href={T.contactHref}>{T.ctaSecondary}</LocalizedLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <div className="border-t border-gray-700" />
      <Footer />
    </div>
  )
}