import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FeatureCarousel } from "@/components/feature-carousel"
import { Shield, BarChart3, Zap, Gauge, Lock, Check } from "lucide-react"
import LocalizedLink from "@/components/localized-link"
import { de as L } from "@/lib/i18n/de"

export const metadata: Metadata = {
  title: "Azai – Elevate | Revolutionäre Projektmanagement-Plattform für Unternehmen",
  description:
    "KI-gestütztes Risikomanagement, Echtzeit-Analysen und Automatisierung. Entwickelt für Enterprise-Teams, die Präzision, Intelligenz und Ergebnisse im grossen Massstab verlangen.",
  alternates: {
    canonical: "/de/",
    languages: {
      "de-CH": "/de/",
      en: "/en/",
      "x-default": "/de/",
    },
  },
  openGraph: {
    title: "Azai – Elevate | Revolutionäre Projektmanagement-Plattform für Unternehmen",
    description:
      "KI-gestütztes Risikomanagement, Echtzeit-Analysen und Automatisierung für Enterprise-Teams.",
    url: "/de/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azai – Elevate | Revolutionäre Projektmanagement-Plattform für Unternehmen",
    description:
      "KI-gestütztes Risikomanagement, Echtzeit-Analysen und Automatisierung für Enterprise-Teams.",
  },
}

export default function HomePageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
                {L.hero.badge}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 leading-[1.05] text-balance">
                {L.hero.title}
              </h1>
              <p className="text-base lg:text-lg text-foreground/70 mb-8 leading-relaxed">
                {L.hero.lead1}{" "}
                <span className="font-semibold text-foreground">{L.hero.lead2a}</span>{" "}
                <span className="font-semibold text-foreground">{L.hero.lead2b}</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6"
                >
                  <a href="#book" className="text-foreground font-semibold inline-block">
                    {L.hero.ctaBook}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-foreground/20 bg-transparent h-11 px-6 hover:bg-foreground/5"
                >
                  <LocalizedLink href="/contact">{L.hero.ctaContact}</LocalizedLink>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  // src="/modern-office-meeting-room-with-team-collaboration.jpg"
                  src="/assets/office.png"
                  alt={L.hero.imageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions / Advanced Risk Management Module */}
        <section className="relative py-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_55%,#ffffff_55%,#ffffff_100%)]" />
          </div>
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="bg-white border-0 shadow-xl rounded-3xl">
              <CardContent className="p-6 md:p-10 lg:p-14">
                <div className="grid lg:grid-cols-2 gap-10 mb-14">
                  <div>
                    <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
                      {L.solutions.badge}
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight">{L.solutions.title}</h2>
                  </div>
                  <div className="flex items-center">
                    <p className="text-foreground/70 leading-relaxed">
                      {L.solutions.lead}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#fcf2df]/85 flex items-center justify-center mb-5">
                      <Shield className="h-6 w-6 text-[#0A1628]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{L.solutions.items.riskIntelligence.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {L.solutions.items.riskIntelligence.desc}
                    </p>
                  </div>

                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#fcf2df]/85 flex items-center justify-center mb-5">
                      <BarChart3 className="h-6 w-6 text-[#0A1628]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{L.solutions.items.realtimeAnalytics.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {L.solutions.items.realtimeAnalytics.desc}
                    </p>
                  </div>

                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#fcf2df]/85 flex items-center justify-center mb-5">
                      <Zap className="h-6 w-6 text-[#0A1628]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{L.solutions.items.smartAutomation.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {L.solutions.items.smartAutomation.desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Facts and Figures Section */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
                {L.facts.badge}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{L.facts.title}</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
                {L.facts.lead}
              </p>
              <Button
                variant="outline"
                size="default"
                className="border-2 border-foreground/20 bg-transparent hover:bg-foreground/5 hover:text-foreground/90 rounded-lg"
              >
                <LocalizedLink href="/contact">{L.facts.talkCta}</LocalizedLink>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="flex flex-col gap-6">
                <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
                  <CardContent className="p-6 md:p-10">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B82F6] mb-3">{L.facts.stat1.value}</div>
                    <p className="text-foreground text-base font-medium">{L.facts.stat1.label}</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
                  <CardContent className="p-6 md:p-10">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B82F6] mb-3">{L.facts.stat2.value}</div>
                    <p className="text-foreground text-base font-medium">{L.facts.stat2.label}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
                <CardContent className="p-6 md:p-8">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B82F6] mb-3">{L.facts.stat3.value}</div>
                  <p className="text-foreground text-base font-medium mb-4">{L.facts.stat3.label}</p>

                  <div className="bg-white rounded-xl p-5 md:p-6 mt-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-semibold text-foreground">{L.facts.chart.title}</h4>
                      <button className="text-foreground/40 hover:text-foreground/60" aria-label="Refresh">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex gap-4 mb-4 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-foreground/70">{L.facts.chart.legend.low}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span className="text-foreground/70">{L.facts.chart.legend.medium}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <span className="text-foreground/70">{L.facts.chart.legend.high}</span>
                      </div>
                    </div>

                    <div className="relative h-32 md:h-32">
                      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-foreground/50 pr-2">
                        <span>50</span>
                        <span>40</span>
                        <span>30</span>
                        <span>20</span>
                      </div>

                      <div className="ml-6 h-full relative">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <polyline
                            fill="none"
                            stroke="#FCA5A5"
                            strokeWidth="2"
                            points="0,40 20,35 40,38 60,32 80,28 100,35 120,30 140,25 160,30 180,22 200,20 220,25 240,20 260,18"
                          />
                        </svg>

                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <polyline
                            fill="none"
                            stroke="#FCD34D"
                            strokeWidth="2"
                            points="0,80 20,75 40,78 60,70 80,65 100,72 120,68 140,60 160,65 180,58 200,55 220,60 240,52 260,48"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        <section id="features" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
              {L.features.badge}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">
              {L.features.titleLine1}
              <br />
              {L.features.titleLine2}
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground/10" />
                <div className="pl-8 space-y-12">
                  {/* Feature 1 */}
                  <div className="relative">
                    <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#0A1628]" />
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0A1628]/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-[#0A1628]" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-xl font-bold">{L.features.item1.title}</h3>
                          <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-green-100 text-green-700 whitespace-nowrap">
                            {L.features.item1.badge}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                          {L.features.item1.lead}
                        </p>
                        <Button
                          size="default"
                          className="bg-[#0A1628] text-white hover:bg-[#0A1628]/90 h-10 px-6 rounded-lg"
                        >
                          <LocalizedLink href="/contact">{L.features.item1.ctaContact}</LocalizedLink>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-xl font-bold">{L.features.item2.title}</h3>
                          <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 whitespace-nowrap">
                            {L.features.item2.badge}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          {L.features.item2.lead}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-xl font-bold">{L.features.item3.title}</h3>
                          <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 whitespace-nowrap">
                            {L.features.item3.badge}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          {L.features.item3.lead}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image side */}
              <div className="relative">
                <div className="bg-[#FEF7ED] rounded-2xl p-6 md:p-8">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border/30">
                    <FeatureCarousel
                      images={[
                        { src: "/assets/risk/RiskManagementDashboard.png", alt: L.features.imageAlt },
                        { src: "/assets/risk/RiskManagementMatrix.png", alt: L.features.imageAlt },
                        { src: "/assets/risk/RiskManagementMeasures.png", alt: L.features.imageAlt },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Scale (Benefits) */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-[#0A1628] text-white py-16 lg:py-20 px-8 lg:px-16 rounded-3xl">
              <div className="text-center mb-14">
                <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
                  {L.benefits.badge}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-5">{L.benefits.title}</h2>
                <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
                  {L.benefits.lead}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="bg-[#1A2942] border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-xl bg-[#FCF2DF] flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-7 w-7 text-[#0A1628]" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold mb-5 text-white">{L.benefits.card1.title}</h3>
                    <div className="space-y-2.5 text-white/80 text-sm leading-relaxed text-center">
                      {L.benefits.card1.bullets.map((b, i) => (
                        <p key={i}>{b}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1A2942] border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-xl bg-[#FCF2DF] flex items-center justify-center mx-auto mb-4">
                      <Gauge className="h-7 w-7 text-[#0A1628]" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold mb-5 text-white">{L.benefits.card2.title}</h3>
                    <div className="space-y-2.5 text-white/80 text-sm leading-relaxed text-center">
                      {L.benefits.card2.bullets.map((b, i) => (
                        <p key={i}>{b}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1A2942] border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-xl bg-[#FCF2DF] flex items-center justify-center mx-auto mb-4">
                      <Lock className="h-7 w-7 text-[#0A1628]" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold mb-5 text-white">{L.benefits.card3.title}</h3>
                    <div className="space-y-2.5 text-white/80 text-sm leading-relaxed text-center">
                      {L.benefits.card3.bullets.map((b, i) => (
                        <p key={i}>{b}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
                {L.process.badge}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">{L.process.title}</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-6 leading-relaxed">
                {L.process.lead}
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-[#F3F4F6] text-foreground hover:bg-[#E5E7EB] h-11 px-6 rounded-lg"
              >
                <LocalizedLink href="/contact">{L.process.button}</LocalizedLink>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute -top-4 left-0 text-[72px] sm:text-[120px] font-bold text-[#F3F4F6] leading-none select-none block">
                  1
                </div>
                <div className="relative pt-16">
                  <h3 className="text-lg font-bold mb-3">{L.process.steps.s1.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {L.process.steps.s1.desc}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 left-0 text-[72px] sm:text-[120px] font-bold text-[#F3F4F6] leading-none select-none block">
                  2
                </div>
                <div className="relative pt-16">
                  <h3 className="text-lg font-bold mb-3">{L.process.steps.s2.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {L.process.steps.s2.desc}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 left-0 text-[72px] sm:text-[120px] font-bold text-[#F3F4F6] leading-none select-none block">
                  3
                </div>
                <div className="relative pt-16">
                  <h3 className="text-lg font-bold mb-3">{L.process.steps.s3.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {L.process.steps.s3.desc}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 left-0 text-[72px] sm:text-[120px] font-bold text-[#F3F4F6] leading-none select-none block">
                  4
                </div>
                <div className="relative pt-16">
                  <h3 className="text-lg font-bold mb-3">{L.process.steps.s4.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {L.process.steps.s4.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <div className="relative -mt-20 pt-20" aria-hidden="true" />
        <section className="bg-[#0A1628] text-white py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-5">{L.finalCta.title}</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              {L.finalCta.lead}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button size="lg" className="bg-white text-[#0A1628] hover:bg-white/90 h-12 px-8 rounded-lg font-medium">
                <LocalizedLink href="/contact">{L.finalCta.ctaSales}</LocalizedLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent h-12 px-8 rounded-lg font-medium"
              >
                <a href="mailto:info@azai.ch?subject=Anfrage%20-%20Azai%20Elevate&body=Guten%20Tag%20Azai-Team%2C%0A%0Aich%20habe%20Interesse%20an%20Azai%20Elevate.%20Bitte%20kontaktieren%20Sie%20mich.%0A%0ABesten%20Dank.">
                  {L.finalCta.ctaInquiry}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center text-base text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <span>{L.finalCta.bullets.b1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <span>{L.finalCta.bullets.b2}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <span>{L.finalCta.bullets.b3}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="border-t border-gray-700" />
      <Footer />
    </div>
  )
}