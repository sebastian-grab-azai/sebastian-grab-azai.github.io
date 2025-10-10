import { de, type HomeDict } from "./de"
import { en } from "./en"

export type Lang = "de" | "en"

export function getDictionary(lang: Lang): HomeDict {
  return lang === "en" ? en : de
}

export function detectLangFromPath(pathname: string | null | undefined): Lang {
  if (!pathname) return "de"
  return pathname.startsWith("/en") ? "en" : "de"
}

/**
 * Build a localized path by ensuring the first segment is /de or /en
 * - Accepts relative in-app hrefs like "/", "/contact", "/#anchor", "#anchor"
 * - Keeps trailing slash consistency (app has trailingSlash enabled)
 */
export function buildLocalizedHref(currentPathname: string, href: string, target?: Lang): string {
  // External or mailto / tel / protocol-based links: return as-is
  if (/^[a-zA-Z]+:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href
  }

  // Pure hash like "#book": prefix with current language path root
  if (href.startsWith("#")) {
    const currentLang = target ?? detectLangFromPath(currentPathname)
    return `/${currentLang}/${href}`
  }

  // Normalize pathname and target language
  const currentLang = target ?? detectLangFromPath(currentPathname)
  const normalized = href.startsWith("/") ? href : `/${href}`

  // If href already contains language segment, replace to target/currentLang
  if (normalized.startsWith("/de/") || normalized === "/de") {
    return normalized.replace(/^\/de(\/|$)/, `/${currentLang}/`)
  }
  if (normalized.startsWith("/en/") || normalized === "/en") {
    return normalized.replace(/^\/en(\/|$)/, `/${currentLang}/`)
  }

  // Otherwise prefix with language
  return `/${currentLang}${normalized.endsWith("/") ? normalized : `${normalized}/`}`
}