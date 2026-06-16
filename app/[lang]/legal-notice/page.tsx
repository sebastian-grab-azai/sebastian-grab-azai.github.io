import type { Metadata } from "next"
import ContentDE, { metadata as metadataDE } from "./content.de"
import ContentEN, { metadata as metadataEN } from "./content.en"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return lang === "en" ? metadataEN : metadataDE
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return lang === "en" ? <ContentEN /> : <ContentDE />
}
