"use client"

import React, { useCallback, useState } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export type FeatureCarouselImage = { src: string; alt: string }

export function FeatureCarousel({ images, className }: { images: FeatureCarouselImage[]; className?: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openAt = useCallback((idx: number) => {
    setActiveIndex(idx)
    setLightboxOpen(true)
  }, [])

  if (!images?.length) return null

  return (
    <div className={cn("relative", className)}>
      <Carousel className="w-full">
        {/* Entfernt Standard-Gutter, damit nichts „links abgeschnitten“ wirkt */}
        <CarouselContent className="!ml-0">
          {images.map((img, idx) => (
            <CarouselItem key={idx} className="!pl-0">
              <button
                type="button"
                onClick={() => openAt(idx)}
                className="block w-full focus:outline-none cursor-zoom-in"
                aria-label="Open image in full view"
              >
                {/* 7:5 entspricht 700x500 – Bild wird vollständig via object-contain gezeigt */}
                <AspectRatio ratio={7 / 5} className="relative bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className="object-contain"
                    priority={idx === 0}
                  />
                </AspectRatio>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 hover:bg-primary" />
        <CarouselNext className="right-3 hover:bg-primary" />
      </Carousel>

      {/* Lightbox / Vollansicht */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="p-0 bg-transparent border-none shadow-none max-w-[95vw] sm:max-w-[95vw]">
          <DialogTitle className="sr-only">{images[activeIndex]?.alt || "Image preview"}</DialogTitle>
          <DialogDescription className="sr-only">Press Escape or click outside to close</DialogDescription>
          <div className="relative w-[95vw] max-w-[1400px] h-[85vh] mx-auto bg-black rounded-md p-2 sm:p-4">
            <Image
              src={images[activeIndex]?.src ?? ""}
              alt={images[activeIndex]?.alt ?? ""}
              fill
              sizes="100vw"
              className="object-contain bg-white"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}