import { getLocalizedText, type BlogLang, type BlogPost } from "@/lib/blog/posts"

export const siteUrl = "https://www.azai.ch"
export const siteName = "Azai – Elevate"
export const legalName = "Azai AG"

type Lang = "de" | "en"

const inLanguage = (lang: Lang) => (lang === "de" ? "de-CH" : "en")

/** Stable @id reference to the Organization node. */
function organizationRef() {
  return { "@id": `${siteUrl}/#organization` }
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: legalName,
    alternateName: siteName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
    image: `${siteUrl}/og-image.png`,
    sameAs: ["https://app.azai.ch"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@azai.ch",
        telephone: "+41 79 687 50 82",
        areaServed: "CH",
        availableLanguage: ["de", "en"],
      },
    ],
  }
}

export function webSiteSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: `${siteUrl}/${lang}/`,
    inLanguage: inLanguage(lang),
    publisher: organizationRef(),
  }
}

export function blogSchema(lang: Lang, posts: BlogPost[]) {
  const blogUrl = `${siteUrl}/${lang}/blog/`
  const blogLang = lang as BlogLang
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": blogUrl,
    url: blogUrl,
    name: `${siteName} Blog`,
    inLanguage: inLanguage(lang),
    publisher: organizationRef(),
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: getLocalizedText(post.title, blogLang),
      description: getLocalizedText(post.intro, blogLang),
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: inLanguage(lang),
      url: `${blogUrl}#${post.slug}`,
      mainEntityOfPage: blogUrl,
      author: { "@type": "Organization", name: legalName, url: siteUrl },
      publisher: organizationRef(),
    })),
  }
}
