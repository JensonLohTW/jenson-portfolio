"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowRight,
  FileText,
  Lightbulb,
  Award,
  BarChart,
  Users,
  Layers,
  Zap,
  Database,
  Code,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function BentoGrid() {
  return (
    <section id="highlights" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            技能亮點
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            我的專業技能和成就一覽，展示我作為懂技術的產品經理在不同領域的專長和貢獻。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* 大型卡片 - 產品規劃與管理 */}
          <Card className="md:col-span-2 md:row-span-2 hover:shadow-md transition-all duration-300 group overflow-hidden">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-accent mr-3">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">產品規劃與管理專家</h3>
              </div>

              <p className="text-muted-foreground mb-4">
                專注於產品全生命周期管理，從需求收集、優先級排序到產品交付和迭代優化，確保產品成功落地並持續改進。
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {["需求管理", "PRD撰寫", "用戶故事", "產品路線圖"].map((tech) => (
                  <Badge key={tech} variant="outline" className="justify-center py-1.5">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto">
                <div className="relative h-40 w-full rounded-md overflow-hidden">
                  <Image
                    src="/product-management-dashboard.png"
                    alt="產品管理"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 中型卡片 - 數據分析與增長 */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-accent mr-3">
                  <BarChart className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">數據分析與增長</h3>
              </div>

              <p className="text-muted-foreground mb-4">
                善於利用數據驅動產品決策，設計A/B測試，分析用戶行為和業務指標，推動產品持續增長。
              </p>

              <div className="flex items-center text-sm">
                <Badge variant="outline">數據驅動決策</Badge>
                <Badge variant="outline" className="ml-2">
                  A/B測試
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 中型卡片 - 技術理解能力 */}
          <Card className="hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-accent mr-3">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">技術理解能力</h3>
              </div>

              <p className="text-muted-foreground mb-4">
                具備前後端技術基礎知識，理解系統架構和數據流設計，能與開發團隊有效溝通，把控技術可行性。
              </p>

              <div className="flex items-center text-sm">
                <Badge variant="outline">前後端知識</Badge>
                <Badge variant="outline" className="ml-2">
                  系統架構
                </Badge>
                <Badge variant="outline" className="ml-2">
                  API設計
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 中型卡片 - 用戶體驗設計 */}
          <Card className="md:col-span-1 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-accent mr-3">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">用戶體驗設計</h3>
              </div>

              <p className="text-muted-foreground mb-4">
                注重用戶體驗設計，能夠創建用戶流程圖和原型，確保產品易用性和用戶滿意度。
              </p>

              <div className="flex items-center text-sm">
                <Badge variant="outline">用戶流程</Badge>
                <Badge variant="outline" className="ml-2">
                  原型設計
                </Badge>
                <Badge variant="outline" className="ml-2">
                  可用性測試
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 中型卡片 - AI產品設計 */}
          <Card className="md:col-span-1 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-accent mr-3">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">AI產品設計</h3>
              </div>

              <p className="text-muted-foreground mb-4">
                熟悉LLM、RAG等AI技術的應用場景，能夠設計AI相關產品功能，將AI技術轉化為實用的解決方案。
              </p>

              <div className="flex items-center text-sm">
                <Badge variant="outline">LLM應用</Badge>
                <Badge variant="outline" className="ml-2">
                  RAG系統
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 大型卡片 - 主要成就 */}
          <Card className="md:col-span-1 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-accent mr-3">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">主要成就</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Zap className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">主導開發的SaaS產品用戶增長40%，留存率提升25%</p>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">優化用戶旅程，提升轉化率30%，降低獲客成本20%</p>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">設計的分級會員系統提升付費用戶轉化率30%</p>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">建立敏捷開發流程，縮短產品迭代週期50%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 大型卡片 - 跨界能力 */}
          <Card className="md:col-span-3 hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-accent mr-3">
                    <Network className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">跨界能力</h3>
                </div>
                <Button variant="outline" size="sm" className="group">
                  查看詳細能力
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "產品與技術橋接",
                    icon: <Layers className="h-4 w-4 text-primary" />,
                    description: "能夠理解技術原理並轉化為產品需求，有效溝通產品願景和技術實現",
                  },
                  {
                    title: "數據洞察與業務增長",
                    icon: <Database className="h-4 w-4 text-primary" />,
                    description: "善於分析數據，發現業務機會，制定增長策略，推動產品和業務發展",
                  },
                  {
                    title: "行業趨勢與創新思維",
                    icon: <Lightbulb className="h-4 w-4 text-primary" />,
                    description: "持續關注行業動態和技術趨勢，具備跨界知識整合能力和創新思維",
                  },
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center">
                      {skill.icon}
                      <h4 className="font-medium ml-2">{skill.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
