"use client"

import React, { useState } from "react"
import { Shield, Clock, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import LocalizedLink from "@/components/localized-link"
import { FeatureCarousel } from "@/components/feature-carousel"
import { cn } from "@/lib/utils"

type FeaturesData = {
  badge: string
  titleLine1: string
  titleLine2: string
  item1: {
    title: string
    badge: string
    lead: string
    ctaContact: string
  }
  item2: {
    title: string
    badge: string
    lead: string
  }
  item3: {
    title: string
    badge: string
    lead: string
    ctaContact?: string
  }
  imageAlt: string
}

export function FeaturesSection({ data }: { data: FeaturesData }) {
  const [activeModule, setActiveModule] = useState<"risk" | "time">("risk")

  const riskImages = [
    { src: "/assets/risk/RiskManagementDashboard.png", alt: data.imageAlt },
    { src: "/assets/risk/RiskManagementMatrix.png", alt: data.imageAlt },
    { src: "/assets/risk/RiskManagementRegister.png", alt: data.imageAlt },
    { src: "/assets/risk/RiskManagementMeasures.png", alt: data.imageAlt },
  ]

  const timeImages = [
    { src: "/assets/time/TimeManagementTimeline.png", alt: data.imageAlt },
    { src: "/assets/time/TimeManagementRegister.png", alt: data.imageAlt },
    { src: "/assets/time/TimeManagementAssessment.png", alt: data.imageAlt },
  ]

  return (
    <section id="features" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="inline-block text-[11px] font-semibold tracking-wide text-foreground/90 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm mb-5">
          {data.badge}
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 leading-tight">
          {data.titleLine1}
          <br />
          {data.titleLine2}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground/10" />
            <div className="pl-8 space-y-12">
              {/* Feature 1: Risk Module */}
              <div 
                className={cn(
                  "relative cursor-pointer transition-opacity duration-200",
                  activeModule !== "risk" && "opacity-50 hover:opacity-80"
                )}
                onClick={() => setActiveModule("risk")}
              >
                {activeModule === "risk" && (
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#0A1628]" />
                )}
                <div className="flex items-start gap-4 mb-3">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    activeModule === "risk" ? "bg-[#0A1628]/10" : "bg-foreground/5"
                  )}>
                    <Shield className={cn(
                      "w-5 h-5",
                      activeModule === "risk" ? "text-[#0A1628]" : "text-foreground/40"
                    )} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold">{data.item1.title}</h3>
                      <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-green-100 text-green-700 whitespace-nowrap">
                        {data.item1.badge}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {data.item1.lead}
                    </p>
                    {activeModule === "risk" && (
                      <Button
                        size="default"
                        className="bg-[#0A1628] text-white hover:bg-[#0A1628]/90 h-10 px-6 rounded-lg"
                        asChild
                      >
                        <LocalizedLink href="/contact">{data.item1.ctaContact}</LocalizedLink>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Feature 3: Time Module */}
              <div 
                className={cn(
                  "relative cursor-pointer transition-opacity duration-200",
                  activeModule !== "time" && "opacity-50 hover:opacity-80"
                )}
                onClick={() => setActiveModule("time")}
              >
                {activeModule === "time" && (
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#0A1628]" />
                )}
                <div className="flex items-start gap-4 mb-3">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    activeModule === "time" ? "bg-[#0A1628]/10" : "bg-foreground/5"
                  )}>
                    <Clock className={cn(
                      "w-5 h-5",
                      activeModule === "time" ? "text-[#0A1628]" : "text-foreground/40"
                    )} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold">{data.item3.title}</h3>
                      <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-green-100 text-green-700 whitespace-nowrap">
                        {data.item3.badge}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {data.item3.lead}
                    </p>
                    {activeModule === "time" && data.item3.ctaContact && (
                      <Button
                        size="default"
                        className="bg-[#0A1628] text-white hover:bg-[#0A1628]/90 h-10 px-6 rounded-lg"
                        asChild
                      >
                        <LocalizedLink href="/contact">{data.item3.ctaContact}</LocalizedLink>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Feature 2: Cost Module (Coming Soon) */}
              <div className="relative opacity-50">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Coins className="w-5 h-5 text-foreground/40" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold">{data.item2.title}</h3>
                      <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 whitespace-nowrap">
                        {data.item2.badge}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {data.item2.lead}
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
                  images={activeModule === "risk" ? riskImages : timeImages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
