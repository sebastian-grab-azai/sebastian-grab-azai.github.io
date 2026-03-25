import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostList } from "@/components/blog/blog-post-list"
import { getBlogPosts } from "@/lib/blog/posts"

export const metadata: Metadata = {
  title: "Blog | Azai – Elevate",
  description:
    "Insights, updates, and articles on project management, transparency, risk, and smarter execution with AI.",
  alternates: {
    canonical: "/en/blog/",
    languages: {
      "de-CH": "/de/blog/",
      en: "/en/blog/",
      "x-default": "/de/blog/",
    },
  },
  openGraph: {
    title: "Blog | Azai – Elevate",
    description:
      "Insights, updates, and articles on project management, transparency, risk, and smarter execution with AI.",
    url: "/en/blog/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Azai – Elevate",
    description:
      "Insights, updates, and articles on project management, transparency, risk, and smarter execution with AI.",
  },
}

const posts = getBlogPosts()

export default function BlogPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 pb-12 pt-12 lg:px-8 lg:pb-14 lg:pt-14">
          <BlogPostList posts={posts} lang="en" />
        </section>
      </main>

      <Footer />
    </div>
  )
}
