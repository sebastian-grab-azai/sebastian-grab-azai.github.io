import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostList } from "@/components/blog/blog-post-list"
import { getBlogPosts } from "@/lib/blog/posts"

export const metadata: Metadata = {
  title: "Blog | Azai – Elevate",
  description:
    "Einblicke, Updates und Beiträge zu Projektmanagement, Transparenz, Risiken und smarter Steuerung mit KI.",
  alternates: {
    canonical: "/de/blog/",
    languages: {
      "de-CH": "/de/blog/",
      en: "/en/blog/",
      "x-default": "/de/blog/",
    },
  },
  openGraph: {
    title: "Blog | Azai – Elevate",
    description:
      "Einblicke, Updates und Beiträge zu Projektmanagement, Transparenz, Risiken und smarter Steuerung mit KI.",
    url: "/de/blog/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Azai – Elevate",
    description:
      "Einblicke, Updates und Beiträge zu Projektmanagement, Transparenz, Risiken und smarter Steuerung mit KI.",
  },
}

const posts = getBlogPosts()

export default function BlogPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 pb-12 pt-12 lg:px-8 lg:pb-14 lg:pt-14">
          <BlogPostList posts={posts} lang="de" />
        </section>
      </main>

      <Footer />
    </div>
  )
}
