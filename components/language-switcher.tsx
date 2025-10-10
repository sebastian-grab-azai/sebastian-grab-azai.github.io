"use client"

import { useCallback, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

type Lang = "de" | "en"

const languages: Array<{ code: Lang; label: string; flag: string }> = [
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
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
            {currentLang.flag}
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
            <span className="text-lg" aria-hidden="true">{lang.flag}</span>
            <span className="ml-2">{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}