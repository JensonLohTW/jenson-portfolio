"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { blogPosts, type BlogPost } from "@/data/blog-posts"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import ReactMarkdown from "react-markdown"

/**
 * 博客文章詳情頁面
 *
 * 顯示單篇博客文章的完整內容，包括標題、作者、日期、標籤和正文
 */
export default function BlogPostPage() {
  // 獲取路由參數和路由器實例
  const params = useParams()
  const router = useRouter()

  // 狀態管理
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  // 頁面加載時獲取文章數據
  useEffect(() => {
    // 滾動到頁面頂部
    window.scrollTo(0, 0)

    if (params.id) {
      // 查找當前文章
      const foundPost = blogPosts.find((p) => p.id === params.id)
      setPost(foundPost || null)

      // 如果找到文章，查找相關文章
      if (foundPost) {
        const related = blogPosts
          .filter((p) => p.id !== foundPost.id) // 排除當前文章
          .filter((p) => p.tags.some((tag) => foundPost.tags.includes(tag))) // 查找有共同標籤的文章
          .slice(0, 2) // 最多顯示2篇相關文章

        setRelatedPosts(related)
      }

      setLoading(false)
    }
  }, [params.id])

  // 加載狀態顯示
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-12"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  // 文章未找到顯示
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-4xl text-center">
        <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
        <p className="text-muted-foreground mb-8">抱歉，您請求的文章不存在或已被移除。</p>
        <Button asChild>
          <Link href="/blog">返回博客列表</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      {/* 返回按鈕 */}
      <Button variant="ghost" className="mb-8 -ml-4" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        返回
      </Button>

      {/* 文章標題和元數據 */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
          {/* 作者信息 */}
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
          </div>

          {/* 發布日期 */}
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>

          {/* 閱讀時間 */}
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.readTime} 分鐘閱讀</span>
          </div>
        </div>

        {/* 文章標籤 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              <span>{tag}</span>
            </Badge>
          ))}
        </div>

        {/* 文章摘要 */}
        <p className="text-lg font-medium">{post.excerpt}</p>
      </div>

      <Separator className="my-8" />

      {/* 文章內容 */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <Separator className="my-12" />

      {/* 相關文章 */}
      {relatedPosts.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-6">相關文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="block">
                <Card className="hover:shadow-md transition-shadow border-border hover:border-primary/20 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">{relatedPost.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{relatedPost.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
