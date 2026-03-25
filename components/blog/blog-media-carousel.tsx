"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import type { BlogLang, BlogMedia } from "@/lib/blog/posts"
import { getLocalizedText } from "@/lib/blog/posts"

type BlogMediaCarouselProps = {
  media: BlogMedia[]
  lang: BlogLang
}

function BlogMediaSlide({ item, lang }: { item: BlogMedia; lang: BlogLang }) {
  if (item.type === "image") {
    return (
      <figure className="overflow-hidden rounded-[2rem] bg-[#f8f5ee]">
        <div className="relative aspect-[5/4] w-full">
          <Image
            src={item.src}
            alt={getLocalizedText(item.alt, lang)}
            fill
            sizes="(min-width: 1024px) 42rem, 100vw"
            className="object-contain p-4 sm:p-6"
            priority
          />
        </div>
        {item.caption ? (
          <figcaption className="border-t border-black/5 px-5 py-4 text-sm leading-relaxed text-foreground/60 sm:px-6">
            {getLocalizedText(item.caption, lang)}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  if (item.type === "video") {
    return (
      <figure className="overflow-hidden rounded-[2rem] bg-[#f8f5ee]">
        <div className="aspect-[5/4] w-full bg-black">
          <video
            controls
            playsInline
            poster={item.poster}
            className="h-full w-full"
            title={getLocalizedText(item.title, lang)}
          >
            <source src={item.src} />
          </video>
        </div>
        {item.caption ? (
          <figcaption className="border-t border-black/5 px-5 py-4 text-sm leading-relaxed text-foreground/60 sm:px-6">
            {getLocalizedText(item.caption, lang)}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  if (item.type === "linkedinEmbed") {
    return (
      <figure className="overflow-hidden rounded-[2rem] bg-[#f8f5ee]">
        <div className="aspect-[5/4] w-full bg-white">
          <iframe
            src={item.src}
            title={getLocalizedText(item.title, lang)}
            className="h-full w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
        {item.caption ? (
          <figcaption className="border-t border-black/5 px-5 py-4 text-sm leading-relaxed text-foreground/60 sm:px-6">
            {getLocalizedText(item.caption, lang)}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  return (
    <div className="flex aspect-[5/4] flex-col justify-between rounded-[2rem] bg-[#f8f5ee] p-6 sm:p-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/45">LinkedIn</p>
        <h4 className="mb-4 text-2xl font-semibold leading-tight text-foreground">
          {getLocalizedText(item.title, lang)}
        </h4>
        <p className="max-w-xl text-base leading-relaxed text-foreground/70">
          {getLocalizedText(item.description, lang)}
        </p>
      </div>

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        {getLocalizedText(item.title, lang)}
      </a>
    </div>
  )
}

export function BlogMediaCarousel({ media, lang }: BlogMediaCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1)

  const hasMultipleMedia = media.length > 1

  useEffect(() => {
    if (!api) return

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1)
    }

    updateCurrent()
    api.on("select", updateCurrent)
    api.on("reInit", updateCurrent)

    return () => {
      api.off("select", updateCurrent)
      api.off("reInit", updateCurrent)
    }
  }, [api])

  return (
    <div className="space-y-4">
      <Carousel
        className="w-full"
        opts={{ loop: hasMultipleMedia }}
        setApi={setApi}
      >
        <CarouselContent className="!ml-0">
          {media.map((item, index) => (
            <CarouselItem key={index} className="!pl-0">
              <BlogMediaSlide item={item} lang={lang} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {hasMultipleMedia ? (
          <>
            <CarouselPrevious
              className="left-4 top-1/2 h-8 w-8 -translate-y-1/2 border-black/10 bg-white/95 text-foreground shadow-sm hover:bg-white hover:text-foreground disabled:opacity-40"
            />
            <CarouselNext
              className="right-4 top-1/2 h-8 w-8 -translate-y-1/2 border-black/10 bg-white/95 text-foreground shadow-sm hover:bg-white hover:text-foreground disabled:opacity-40"
            />
          </>
        ) : null}
      </Carousel>

      {hasMultipleMedia ? (
        <div className="flex items-center justify-between gap-4 px-1">
          <div className="flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${current === index + 1 ? "w-10 bg-primary" : "w-4 bg-black/15"}`}
              />
            ))}
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/45">
            {String(current).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
          </p>
        </div>
      ) : null}
    </div>
  )
}
