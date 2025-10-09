import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, BarChart3, Zap, Code, Gauge, Lock, Star, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
                Transform Your Project Management
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 leading-[1.05] text-balance">
                The Future of Project Excellence
              </h1>
              <p className="text-base lg:text-lg text-foreground/70 mb-8 leading-relaxed">
                Revolutionary project management platform engineered for enterprise teams who demand{" "}
                <span className="font-semibold text-foreground">precision, intelligence,</span> and{" "}
                <span className="font-semibold text-foreground">results at scale.</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6"
                >
                  <a
                    href="#book"
                    className="text-foreground font-semibold inline-block"
                  >
                    Calendar Booking
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-foreground/20 bg-transparent h-11 px-6 hover:bg-foreground/5"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/modern-office-meeting-room-with-team-collaboration.jpg"
                  alt="Team collaboration in modern office"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Risk Management Module */}
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
                    Solutions
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">Advanced Risk Management Module</h2>
                </div>
                <div className="flex items-center">
                  <p className="text-foreground/70 leading-relaxed">
                    Harness the power of AI-driven risk assessment and mitigation. Our flagship module transforms how
                    you identify, analyze, and respond to project risks before they impact your timeline.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#fcf2df]/85 flex items-center justify-center mb-5">
                    <Shield className="h-6 w-6 text-[#0A1628]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Risk Intelligence</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    AI-powered risk detection that sees problems before they happen.
                  </p>
                </div>

                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#fcf2df]/85 flex items-center justify-center mb-5">
                    <BarChart3 className="h-6 w-6 text-[#0A1628]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Real-time Analytics</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Live dashboards that keep your finger on the pulse of every project.
                  </p>
                </div>

                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#fcf2df]/85 flex items-center justify-center mb-5">
                    <Zap className="h-6 w-6 text-[#0A1628]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Smart Automation</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Automated workflows that eliminate manual project management overhead.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
            <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
              Facts and Figures
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Returning Value through Transparency</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              Join us and experience your projects becoming more efficient
            </p>
            <Button
              variant="outline"
              size="default"
              className="border-2 border-foreground/20 bg-transparent hover:bg-foreground/5 hover:text-foreground/90 rounded-lg"
            >
              <Link href="/contact">Talk With Us</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Left Column - Two stacked stat cards */}
            <div className="flex flex-col gap-6">
              <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
                <CardContent className="p-6 md:p-10">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B82F6] mb-3">95%</div>
                  <p className="text-foreground text-base font-medium">Risk Prediction Accuracy</p>
                </CardContent>
              </Card>

              <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
                <CardContent className="p-6 md:p-10">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B82F6] mb-3">40%</div>
                  <p className="text-foreground text-base font-medium">Faster Project Delivery</p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Large card with chart */}
            <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B82F6] mb-3">$2.4M</div>
                <p className="text-foreground text-base font-medium mb-4">Average Cost Savings</p>

                {/* Chart Container */}
                <div className="bg-white rounded-xl p-5 md:p-6 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-foreground">Risk Level Comparison Over Time</h4>
                    <button className="text-foreground/40 hover:text-foreground/60">
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

                  {/* Legend */}
                  <div className="flex gap-4 mb-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-foreground/70">Low</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-foreground/70">Medium</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <span className="text-foreground/70">High</span>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="relative h-32 md:h-32">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-foreground/50 pr-2">
                      <span>50</span>
                      <span>40</span>
                      <span>30</span>
                      <span>20</span>
                    </div>

                    {/* Chart lines */}
                    <div className="ml-6 h-full relative">
                      {/* High risk line (red/pink) */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <polyline
                          fill="none"
                          stroke="#FCA5A5"
                          strokeWidth="2"
                          points="0,40 20,35 40,38 60,32 80,28 100,35 120,30 140,25 160,30 180,22 200,20 220,25 240,20 260,18"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>

                      {/* Medium risk line (yellow) */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <polyline
                          fill="none"
                          stroke="#FCD34D"
                          strokeWidth="2"
                          points="0,80 20,75 40,78 60,70 80,65 100,72 120,68 140,60 160,65 180,58 200,55 220,60 240,52 260,48"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
          <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
            Features
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">
            Revolutionary Project
            <br />
            Management Features
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground/10" />
              <div className="pl-8 space-y-12">
                {/* Feature 1: Advanced Risk Management Module */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#0A1628]" />
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0A1628]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#0A1628]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-xl font-bold">Advanced Risk Management Module</h3>
                        <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-green-100 text-green-700 whitespace-nowrap">
                          Available Now
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                        Harness the power of AI-driven risk assessment and mitigation. Our flagship module transforms
                        how you identify, analyze, and respond to project risks before they impact your timeline.
                      </p>
                      <Button
                        size="default"
                        className="bg-[#0A1628] text-white hover:bg-[#0A1628]/90 h-10 px-6 rounded-lg"
                      >
                        <Link href="/contact">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Feature 2: Cost Management */}
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
                        <h3 className="text-xl font-bold">Cost Management</h3>
                        <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 whitespace-nowrap">
                          Coming Soon
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Advanced budget management with predictive financial modeling and real-time cost analysis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3: Time Management */}
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
                        <h3 className="text-xl font-bold">Time Management</h3>
                        <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 whitespace-nowrap">
                          Coming Soon
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Revolutionary time tracking and resource allocation powered by machine learning algorithms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#FEF7ED] rounded-2xl p-6 md:p-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border/30">
                  <Image
                    src="/RiskManagement.png"
                    alt="Project management dashboard with Gantt chart"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Enterprise Scale Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-[#0A1628] text-white py-16 lg:py-20 px-8 lg:px-16 rounded-3xl">
            <div className="text-center mb-14">
              <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
                Benefits
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5">Built for Enterprise Scale</h2>
              <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
                Modern software architecture engineered for mission-critical performance, bulletproof security, and
                seamless scalability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-[#1A2942] border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#FCF2DF] flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-7 w-7 text-[#0A1628]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-5 text-white">Modern Technology Stack</h3>
                  <div className="space-y-2.5 text-white/80 text-sm leading-relaxed text-center">
                    <p>React 20 with TypeScript</p>
                    <p>.NET 9 Backend Applications</p>
                    <p>PWA Ready & Mobile Optimized</p>
                    <p>Micro-service Architecture</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2942] border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#FCF2DF] flex items-center justify-center mx-auto mb-4">
                    <Gauge className="h-7 w-7 text-[#0A1628]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-5 text-white">Exceptional Performance</h3>
                  <div className="space-y-2.5 text-white/80 text-sm leading-relaxed text-center">
                    <p>Sub-second Load Times</p>
                    <p>Real-time Data Sync</p>
                    <p>Message Queue Communication</p>
                    <p>Edge Computing Optimized</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1A2942] border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#FCF2DF] flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-7 w-7 text-[#0A1628]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-5 text-white">Enterprise Security</h3>
                  <div className="space-y-2.5 text-white/80 text-sm leading-relaxed text-center">
                    <p>Enterprise RBAC</p>
                    <p>GDPR Compliant</p>
                    <p>Zero-trust Architecture</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
              Testimonials
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Loved by Project Leaders</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              See how Azai Elevate is transforming project management across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
              <CardContent className="pt-2 pb-8 px-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-8 leading-relaxed italic">
                  "Azai Elevate identified a critical risk 3 weeks before it would have derailed our $50M infrastructure
                  project. The ROI was immediate and the risk module is genuinely game-changing."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Sarah Martinez</p>
                    <p className="text-sm text-foreground/60">VP of Operations, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
              <CardContent className="pt-2 pb-8 px-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-8 leading-relaxed italic">
                  "The risk management capabilities exceeded our expectations. We've reduced project failures by 80%
                  since implementing Azai Elevate across our organization."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">James Liu</p>
                    <p className="text-sm text-foreground/60">Project Director, Global Systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#F3F4F6] border-0 shadow-sm rounded-2xl">
              <CardContent className="pt-2 pb-8 px-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-8 leading-relaxed italic">
                  "Finally, a project management platform that speaks our language. The React-based interface is
                  lightning fast, and the user experience is absolutely revolutionary."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Elena Kovač</p>
                    <p className="text-sm text-foreground/60">Head of PMO, InnovateCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </section>

        {/* The Process Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
              The Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Get Started in Minutes, Not Months</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6 leading-relaxed">
              Our proven implementation process gets you value from day one
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-[#F3F4F6] text-foreground hover:bg-[#E5E7EB] h-11 px-6 rounded-lg"
            >
              <Link href="/contact">Let's Get in Touch</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
            <div className="relative">
              {/* Large background number */}
              <div className="absolute -top-4 left-0 text-[72px] sm:text-[120px] font-bold text-[#F3F4F6] leading-none select-none block">
                1
              </div>
              <div className="relative pt-16">
                <h3 className="text-lg font-bold mb-3">Connect Your Data</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Seamlessly integrate with your existing tools and data sources in under 30 minutes.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Large background number */}
              <div className="absolute -top-4 left-0 text-[72px] sm:text-[120px] font-bold text-[#F3F4F6] leading-none select-none block">
                2
              </div>
              <div className="relative pt-16">
                <h3 className="text-lg font-bold mb-3">Configure Your Workspace</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Customize dashboards and alerts to match your specific project management needs.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Large background number */}
              <div className="absolute -top-4 left-0 text-[72px] sm:text-[120px] font-bold text-[#F3F4F6] leading-none select-none block">
                3
              </div>
              <div className="relative pt-16">
                <h3 className="text-lg font-bold mb-3">Start Managing</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Begin tracking risks, monitoring progress, and making data-driven decisions immediately.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Large background number */}
              <div className="absolute -top-4 left-0 text-[72px] sm:text-[120px] font-bold text-[#F3F4F6] leading-none select-none block">
                4
              </div>
              <div className="relative pt-16">
                <h3 className="text-lg font-bold mb-3">Scale & Optimize</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Expand across your organization with enterprise-grade security and performance.
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-5">Ready to Transform Your Projects?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Join the numerous project leaders who've already discovered the power of AI-driven project management.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button size="lg" className="bg-white text-[#0A1628] hover:bg-white/90 h-12 px-8 rounded-lg font-medium">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent h-12 px-8 rounded-lg font-medium"
              >
                <Link href="mailto:info@azai.ch?subject=Inquiry Request - Azai Elevate&body=Dear Azai Team,">Request Inquiry</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center text-base text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <span>Setup in minutes</span>
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
