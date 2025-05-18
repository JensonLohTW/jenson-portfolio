"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Github, Play, Minimize } from "lucide-react"
import Image from "next/image"

/**
 * 項目類型定義
 */
interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  image: string
  demoEmbed?: string // iframe 嵌入代碼或 URL
  category: "web" | "mobile" | "ai" | "other"
}

/**
 * 項目數據
 */
const projects: Project[] = [
  {
    id: "coming-soon-1",
    title: "即将到来 - 日本語学習アプリ",
    description: "日本語を学ぶための対話型アプリケーション。文法、語彙、会話練習を含む包括的な学習体験を提供します。",
    technologies: ["React Native", "TypeScript", "Firebase", "日本語 API"],
    image: "/japanese-learning-app.png",
    category: "mobile",
  },
  {
    id: "coming-soon-2",
    title: "即将到来 - ポートフォリオ分析ツール",
    description:
      "投資ポートフォリオを分析し、リスクとリターンのバランスを最適化するためのツール。様々な資産クラスにわたるパフォーマンスを視覚化します。",
    technologies: ["Vue.js", "D3.js", "Python", "金融データAPI"],
    image: "/portfolio-analysis-tool.png",
    category: "web",
  },
  {
    id: "coming-soon-3",
    title: "即将到来 - AI 言語学習アシスタント",
    description:
      "AIを活用した言語学習アシスタント。ユーザーの学習スタイルに適応し、パーソナライズされた学習体験を提供します。",
    technologies: ["Python", "TensorFlow", "React", "OpenAI API"],
    image: "/ai-language-assistant.png",
    category: "ai",
  },
  {
    id: "coming-soon-4",
    title: "即将到来 - 健康トラッキングアプリ",
    description:
      "日々の健康状態、運動、栄養摂取を追跡するためのアプリケーション。データ分析に基づいたパーソナライズされた健康アドバイスを提供します。",
    technologies: ["Flutter", "Dart", "Firebase", "健康データAPI"],
    image: "/placeholder.svg?key=efkq7",
    category: "mobile",
  },
]

/**
 * 互動式作品集組件
 *
 * 展示項目並提供交互式演示功能
 */
export default function InteractivePortfolio() {
  // 狀態管理
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [expandedDemo, setExpandedDemo] = useState<string | null>(null)

  // 過濾項目
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="relative py-20">
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
            互動式作品集
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            探索我的項目並體驗互動式演示，了解我的技術能力和創意解決方案。
          </motion.p>
        </div>

        {/* 項目分類標籤 */}
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-10">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 w-full">
            <TabsTrigger value="all">全部</TabsTrigger>
            <TabsTrigger value="web">Web 應用</TabsTrigger>
            <TabsTrigger value="mobile">移動應用</TabsTrigger>
            <TabsTrigger value="ai">AI 項目</TabsTrigger>
            <TabsTrigger value="other">其他</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* 項目列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex-grow flex flex-col">
                  {/* 項目圖片 */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {/* 演示按鈕 */}
                    {project.demoEmbed && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="rounded-full"
                          onClick={() => setExpandedDemo(project.id)}
                        >
                          <Play className="h-5 w-5" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* 項目信息 */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    {/* 技術標籤 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* 項目鏈接 */}
                    <div className="flex gap-3 mt-auto">
                      {project.demoUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            訪問網站
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            查看代碼
                          </a>
                        </Button>
                      )}
                      {project.demoEmbed && (
                        <Button variant="outline" size="sm" onClick={() => setExpandedDemo(project.id)}>
                          <Play className="h-4 w-4 mr-2" />
                          演示
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 擴展演示模態框 */}
        {expandedDemo && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border rounded-lg shadow-lg w-full max-w-5xl max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">{projects.find((p) => p.id === expandedDemo)?.title} - 演示</h3>
                <Button variant="ghost" size="icon" onClick={() => setExpandedDemo(null)}>
                  <Minimize className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-grow overflow-hidden">
                <iframe
                  src={projects.find((p) => p.id === expandedDemo)?.demoEmbed}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
