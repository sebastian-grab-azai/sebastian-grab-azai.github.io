import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"

export const dynamic = "force-static"

const langs = ["de", "en"] as const

type RouteConfig = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}

const routes: RouteConfig[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "dpa", changeFrequency: "yearly", priority: 0.4 },
  { path: "privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "terms", changeFrequency: "yearly", priority: 0.4 },
  { path: "subprocessors", changeFrequency: "yearly", priority: 0.4 },
  { path: "legal-notice", changeFrequency: "yearly", priority: 0.3 },
]

const urlFor = (lang: string, path: string) => `${siteUrl}/${lang}/${path ? `${path}/` : ""}`

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.flatMap((route) =>
    langs.map((lang) => ({
      url: urlFor(lang, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          "de-CH": urlFor("de", route.path),
          en: urlFor("en", route.path),
          "x-default": urlFor("de", route.path),
        },
      },
    }))
  )
}
