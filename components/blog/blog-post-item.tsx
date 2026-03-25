import type { BlogLang, BlogPost } from "@/lib/blog/posts"
import { getLocalizedText } from "@/lib/blog/posts"
import { BlogMediaGallery } from "@/components/blog/blog-media-gallery"

type BlogPostItemProps = {
  post: BlogPost
  lang: BlogLang
  index: number
}

function formatPostDate(date: string, lang: BlogLang) {
  return new Intl.DateTimeFormat(lang === "de" ? "de-CH" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export function BlogPostItem({ post, lang, index }: BlogPostItemProps) {
  const isEven = index % 2 === 0
  const textColumnClass = isEven ? "lg:order-1" : "lg:order-2"
  const mediaColumnClass = isEven ? "lg:order-2" : "lg:order-1"
  const accentLabel = lang === "de" ? "Blogbeitrag" : "Journal entry"

  return (
    <article className="relative overflow-hidden border-t border-black/10 py-14 first:border-t-0 first:pt-0 lg:py-20 lg:first:pt-0">
      <div className="pointer-events-none absolute inset-x-0 top-8 -z-10 hidden h-40 lg:block" />

      <div className="mb-10 max-w-3xl">
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/45">
          <span>{accentLabel}</span>
          <span className="h-1 w-1 rounded-full bg-foreground/25" />
          <span>{formatPostDate(post.date, lang)}</span>
        </div>

        <h2 className="mb-5 max-w-4xl text-2xl font-semibold leading-[1.05] text-balance text-foreground sm:text-3xl lg:text-4xl">
          {getLocalizedText(post.title, lang)}
        </h2>

        <p className="max-w-3xl text-md leading-relaxed text-foreground/68 lg:text-lg">
          {getLocalizedText(post.intro, lang)}
        </p>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
        <div className={textColumnClass}>
          <div className="space-y-10 border-l border-black/10 pl-5 sm:pl-7 lg:pl-8">
            {post.sections.map((section, sectionIndex) => (
              <section key={`${post.slug}-${sectionIndex}`} className="space-y-4">
                {section.heading ? (
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-2xl">
                    {getLocalizedText(section.heading, lang)}
                  </h3>
                ) : null}

                <div className="space-y-4 text-[1.02rem] leading-8 text-foreground/74">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${post.slug}-${sectionIndex}-${paragraphIndex}`}>
                      {getLocalizedText(paragraph, lang)}
                    </p>
                  ))}
                </div>

                {section.bullets?.length ? (
                  <ul className="space-y-3 pl-5 text-[1.02rem] leading-8 text-foreground/74 marker:text-foreground/35">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={`${post.slug}-${sectionIndex}-bullet-${bulletIndex}`} className="list-disc">
                        {getLocalizedText(bullet, lang)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <div className={`${mediaColumnClass} lg:sticky lg:top-24`}>
          <BlogMediaGallery media={post.media} lang={lang} />
        </div>
      </div>
    </article>
  )
}
