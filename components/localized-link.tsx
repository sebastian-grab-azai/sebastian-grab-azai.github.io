"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { buildLocalizedHref, type Lang } from "@/lib/i18n"

export type LocalizedLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string
  targetLang?: Lang
}

export default function LocalizedLink({ href, targetLang, ...rest }: LocalizedLinkProps) {
  const pathname = usePathname() || "/"
  const localizedHref = buildLocalizedHref(pathname, href, targetLang)
  return <Link href={localizedHref} {...rest} />
}