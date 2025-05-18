import { blogPosts, type BlogPost } from "@/data/blog-posts"
import BlogPostClient from "./blog-post-client"
import { generateStaticParams as getParams } from "./generateParams"

// 导出生成静态参数函数
export const generateStaticParams = getParams

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
