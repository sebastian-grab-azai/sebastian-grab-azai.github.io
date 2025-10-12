"use client"

import { useCallback, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ReactCountryFlag from "react-country-flag"

type Lang = "de" | "en"

const languages: Array<{ code: Lang; label: string; country: string }> = [
  { code: "de", label: "Deutsch", country: "DE" },
  { code: "en", label: "English", country: "GB" },
]

function computeLangFromPath(pathname: string | null | undefined): Lang {
  if (!pathname) return "de"
  return pathname.startsWith("/en") ? "en" : "de"
}

function buildPathForLang(pathname: string, target: Lang): string {
  if (pathname === "/" || pathname === "") {
    return `/${target}/`
  }

  if (pathname.startsWith("/de/") || pathname === "/de") {
    return pathname.replace(/^\/de(\/|$)/, `/${target}/`)
  }
  if (pathname.startsWith("/en/") || pathname === "/en") {
    return pathname.replace(/^\/en(\/|$)/, `/${target}/`)
  }

  return `/${target}${pathname.endsWith("/") ? "" : "/"}`
}

const Flag = ({ country }: { country: string }) => (
  <ReactCountryFlag
    countryCode={country}
    svg
    title={country}
    style={{ width: "1.1rem", height: "1.1rem", borderRadius: "2px" }}
    aria-label={`${country} flag`}
  />
)

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname() || "/"
  const current = useMemo(() => computeLangFromPath(pathname), [pathname])

  const selectLang = useCallback(
    (target: Lang) => {
      if (target === current) return
      const nextPath = buildPathForLang(pathname, target)
      const search = typeof window !== "undefined" ? window.location.search : ""
      const hash = typeof window !== "undefined" ? window.location.hash : ""
      router.push(`${nextPath}${search}${hash}`)
    },
    [current, pathname, router]
  )

  const currentLang = languages.find((l) => l.code === current) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" aria-label="Language selection" className="hover:bg-primary/90">
          <span className="mr-2 text-lg leading-none hover:bg-primary/90" aria-hidden="true">
            <Flag country={currentLang.country} />
          </span>
          <span className="uppercase">{current}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => selectLang(lang.code)}
            aria-checked={lang.code === current}
            className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 data-[highlighted]:bg-primary/10 data-[highlighted]:text-foreground"
          >
            <span className="text-lg mt-0" aria-hidden="true"><Flag country={lang.country} /></span>
            <span className="ml-2 mt-0">{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}