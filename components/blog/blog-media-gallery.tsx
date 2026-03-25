import type { BlogLang, BlogMedia } from "@/lib/blog/posts"
import { BlogMediaCarousel } from "@/components/blog/blog-media-carousel"

type BlogMediaGalleryProps = {
  media: BlogMedia[]
  lang: BlogLang
}

export function BlogMediaGallery({ media, lang }: BlogMediaGalleryProps) {
  if (!media.length) return null

  return (
    <div className="rounded-[2rem] border border-black/5 bg-white/80 p-3 shadow-[0_18px_50px_rgba(10,22,40,0.08)] backdrop-blur-sm sm:p-4">
      <BlogMediaCarousel media={media} lang={lang} />
    </div>
  )
}
