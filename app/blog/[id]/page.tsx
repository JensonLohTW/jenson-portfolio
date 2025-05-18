import { blogPosts, type BlogPost } from "@/data/blog-posts"
import BlogPostClient from "./blog-post-client"

/**
 * 生成所有博客文章的静态参数
 * 这个函数是在构建时运行的，用于预生成所有可能的博客文章页面
 */
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

/**
 * 博客文章详情页面 - 服务器组件
 */
export default function BlogPostPage({ params }: { params: { id: string } }) {
  // 查找当前文章
  const post = blogPosts.find((p) => p.id === params.id) || null
  
  // 如果找到文章，查找相关文章
  const relatedPosts = post 
    ? blogPosts
        .filter((p) => p.id !== post.id) // 排除当前文章
        .filter((p) => p.tags.some((tag) => post.tags.includes(tag))) // 查找有共同标签的文章
        .slice(0, 2) // 最多显示2篇相关文章
    : []

  return (
    <BlogPostClient post={post} relatedPosts={relatedPosts} />
  )
}
