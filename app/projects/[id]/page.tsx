"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  Code,
  ExternalLink,
  Github,
  Server,
  Database,
  Cpu,
  Shield,
  Lock,
  BarChart,
  Users,
  ShoppingBag,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { projectsData, type Project } from "@/data/projects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 滾動到頁面頂部
    window.scrollTo(0, 0)

    if (params.id) {
      const foundProject = projectsData.find((p) => p.id === params.id)
      setProject(foundProject || null)
      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-12"></div>
          <div className="h-64 bg-muted rounded mb-8"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-4xl text-center">
        <h1 className="text-2xl font-bold mb-4">項目未找到</h1>
        <p className="text-muted-foreground mb-8">抱歉，您請求的項目不存在或已被移除。</p>
        <Button asChild>
          <Link href="/projects">返回項目列表</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <Button variant="ghost" className="mb-8 -ml-4" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        返回
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{project.date}</span>
          </div>
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              <span>演示</span>
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              <span>源碼</span>
            </Link>
          )}
        </div>
        <p className="text-lg">{project.fullDescription}</p>
      </div>

      <Tabs defaultValue="product">
        <TabsList className="mb-8">
          <TabsTrigger value="product">產品視角</TabsTrigger>
          <TabsTrigger value="technical">技術視角</TabsTrigger>
        </TabsList>
        <TabsContent value="product">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">產品視角</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.productPerspective}</p>

              <h3 className="text-lg font-medium mb-3">項目成果</h3>
              <ul className="space-y-2 mb-6">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-medium mb-3">挑戰與解決方案</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="technical">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">技術視角</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.technicalPerspective}</p>

              {/* 技術架構圖 - 針對標案爬蟲系統 */}
              {project.id === "tender-crawler-system" && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">系統架構</h3>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Server className="h-4 w-4 mr-2 text-blue-500" />
                          <h4 className="font-medium">爬蟲層</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>Selenium/Playwright 爬蟲引擎</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>IP代理池管理</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>瀏覽器指紋偽裝</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>請求頻率控制</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Database className="h-4 w-4 mr-2 text-green-500" />
                          <h4 className="font-medium">數據處理層</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>Apache Airflow 工作流</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>Spark 數據處理</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>PostgreSQL/MongoDB 存儲</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>數據清洗與標準化</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Cpu className="h-4 w-4 mr-2 text-purple-500" />
                          <h4 className="font-medium">智能分配層</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>協同過濾算法</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>強化學習模型</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>多維度評分系統</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>資源負載均衡</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 技術架構圖 - 針對電商平台 */}
              {project.id === "integrated-ecommerce-platform" && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">系統架構</h3>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Server className="h-4 w-4 mr-2 text-blue-500" />
                          <h4 className="font-medium">前端架構</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>Vue.js 組件化開發</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>Tailwind CSS 響應式設計</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>GSAP 動畫與交互</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>數據可視化儀表板</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Database className="h-4 w-4 mr-2 text-green-500" />
                          <h4 className="font-medium">後端架構</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>Spring Boot 微服務</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>MyBatis-Plus ORM</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>Redis 緩存與分布式鎖</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>MySQL 數據存儲</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-purple-500" />
                          <h4 className="font-medium">安全與性能</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>Sa-Token 認證授權</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>XSS 攻擊防禦</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>樂觀鎖防超賣</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>統一異常處理</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 技術架構圖 - 針對ERP系統 */}
              {project.id === "enterprise-erp-system" && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">系統架構</h3>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-blue-500" />
                          <h4 className="font-medium">業務模塊</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>銷售追蹤系統</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>CRM線索管理</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>智能排班系統</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>庫存管理與預測</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <ShoppingBag className="h-4 w-4 mr-2 text-green-500" />
                          <h4 className="font-medium">技術架構</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>React 前端框架</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>Spring Cloud 微服務</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>MySQL/MongoDB 數據存儲</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>Selenium 自動化數據採集</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-purple-500" />
                          <h4 className="font-medium">智能算法</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>遺傳算法排班優化</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>LSTM 庫存預測模型</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>XGBoost 銷售預測</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>多維度數據分析</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 電商平台特有的技術亮點 */}
              {project.id === "integrated-ecommerce-platform" && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">技術亮點</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Lock className="h-4 w-4 mr-2 text-amber-500" />
                          <h4 className="font-medium">分布式架構</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 mr-1.5"></div>
                            <span>雪花算法生成分布式ID</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 mr-1.5"></div>
                            <span>Redisson實現分布式鎖</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 mr-1.5"></div>
                            <span>分布式會話管理</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <BarChart className="h-4 w-4 mr-2 text-blue-500" />
                          <h4 className="font-medium">數據分析</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>用戶行為分析</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>商品銷售預測</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>多維度數據可視化</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Shield className="h-4 w-4 mr-2 text-green-500" />
                          <h4 className="font-medium">安全機制</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>XSS攻擊防禦</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>CSRF防護</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>SQL注入防護</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Server className="h-4 w-4 mr-2 text-purple-500" />
                          <h4 className="font-medium">系統穩定性</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>統一異常處理</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>統一系統日誌</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>統一參數驗證</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* ERP系統特有的技術亮點 */}
              {project.id === "enterprise-erp-system" && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">技術亮點</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Users className="h-4 w-4 mr-2 text-amber-500" />
                          <h4 className="font-medium">智能排班系統</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 mr-1.5"></div>
                            <span>遺傳算法與模擬退火結合</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 mr-1.5"></div>
                            <span>多約束條件優化</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 mr-1.5"></div>
                            <span>員工偏好與技能匹配</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <BarChart className="h-4 w-4 mr-2 text-blue-500" />
                          <h4 className="font-medium">庫存預測系統</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>LSTM時序預測模型</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>多維度特徵工程</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-1.5"></div>
                            <span>自動化數據採集與處理</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <ShoppingBag className="h-4 w-4 mr-2 text-green-500" />
                          <h4 className="font-medium">銷售追蹤系統</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>多渠道數據整合</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>實時銷售監控</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-1.5"></div>
                            <span>銷售漏斗分析</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Server className="h-4 w-4 mr-2 text-purple-500" />
                          <h4 className="font-medium">系統架構</h4>
                        </div>
                        <ul className="text-sm space-y-1 pl-6">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>微服務架構設計</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>容器化部署與管理</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-1.5"></div>
                            <span>高可用性設計</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              <h3 className="text-lg font-medium mb-3">技術棧</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    <Code className="h-3 w-3" />
                    <span>{tech}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator className="my-12" />

      <div>
        <h2 className="text-xl font-semibold mb-6">其他項目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData
            .filter((p) => p.id !== project.id)
            .slice(0, 2)
            .map((relatedProject) => (
              <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="block">
                <Card className="hover:shadow-md transition-shadow border-border hover:border-primary/20 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">{relatedProject.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{relatedProject.shortDescription}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{relatedProject.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
