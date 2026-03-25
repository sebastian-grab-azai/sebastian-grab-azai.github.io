import type { BlogLang, BlogPost } from "@/lib/blog/posts"
import { BlogPostItem } from "@/components/blog/blog-post-item"

type BlogPostListProps = {
  posts: BlogPost[]
  lang: BlogLang
}

export function BlogPostList({ posts, lang }: BlogPostListProps) {
  return (
    <div className="space-y-10">
      {posts.map((post, index) => (
        <BlogPostItem key={post.slug} post={post} lang={lang} index={index} />
      ))}
    </div>
  )
}
