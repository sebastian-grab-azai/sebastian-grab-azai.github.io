import type React from "react"

type JsonLdData = Record<string, unknown> | Array<Record<string, unknown>>

/**
 * Renders a JSON-LD structured-data script tag.
 * Server-rendered so it is present in the static HTML for crawlers.
 */
export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default JsonLd as React.FC<{ data: JsonLdData }>
