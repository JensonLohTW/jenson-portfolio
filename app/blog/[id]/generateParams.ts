import { blogPosts } from "@/data/blog-posts"

/**
 * 生成所有博客文章的静态参数
 */
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
} 