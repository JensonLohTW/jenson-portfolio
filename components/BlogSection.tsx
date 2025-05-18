"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { blogPosts } from "@/data/blog-posts"

/**
 * 博客部分組件
 *
 * 展示博客文章列表，支持搜索和標籤過濾功能
 */
export default function BlogSection() {
  // 狀態管理
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // 獲取所有唯一標籤
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  // 過濾文章
  const filteredPosts = blogPosts.filter((post) => {
    // 搜索查詢過濾
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    // 標籤過濾
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true

    return matchesSearch && matchesTag
  })

  return (
    <section id="blog" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 標題部分 */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            博客文章
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            分享我對技術趨勢、開發實踐和研究成果的見解和經驗。
          </motion.p>
        </div>

        {/* 搜索和過濾部分 */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* 搜索框 */}
            <div className="w-full md:w-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="搜索文章..."
                className="pl-10 w-full md:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* 標籤過濾 */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <Badge
                variant={selectedTag === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
              >
                全部
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* 文章列表 */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">沒有找到匹配的文章</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedTag(null)
              }}
            >
              清除過濾條件
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="block h-full"
                  onClick={() => {
                    // 確保點擊時立即滾動到頂部
                    setTimeout(() => window.scrollTo(0, 0), 0)
                  }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-border hover:border-primary/20">
                    <CardContent className="p-6">
                      {/* 文章元數據 */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime} 分鐘閱讀</span>
                        </div>
                      </div>

                      {/* 文章標題和摘要 */}
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                      {/* 文章標籤 */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-1">
                            <Tag className="h-3 w-3" />
                            <span>{tag}</span>
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button variant="ghost" className="w-full group">
                        閱讀全文
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
