"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Server, Globe, Cpu, BarChart, PieChart, Radar } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

/**
 * 技術類型定義
 */
interface Technology {
  name: string
  category: string
  proficiency: number // 0-100
  experience: number // 年數
  projects: number // 使用該技術的項目數量
  isLearning?: boolean
}

/**
 * 技術數據
 */
const technologies: Technology[] = [
  // 前端技術
  { name: "React", category: "frontend", proficiency: 95, experience: 5, projects: 30 },
  { name: "TypeScript", category: "frontend", proficiency: 90, experience: 4, projects: 25 },
  { name: "Next.js", category: "frontend", proficiency: 85, experience: 3, projects: 20 },
  { name: "Vue.js", category: "frontend", proficiency: 80, experience: 3, projects: 15 },
  { name: "Angular", category: "frontend", proficiency: 70, experience: 2, projects: 8 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 90, experience: 3, projects: 22 },
  { name: "SCSS", category: "frontend", proficiency: 85, experience: 5, projects: 28 },
  { name: "GraphQL", category: "frontend", proficiency: 75, experience: 2, projects: 12 },

  // 後端技術
  { name: "Node.js", category: "backend", proficiency: 90, experience: 5, projects: 25 },
  { name: "Express", category: "backend", proficiency: 85, experience: 4, projects: 20 },
  { name: "Python", category: "backend", proficiency: 80, experience: 3, projects: 15 },
  { name: "Django", category: "backend", proficiency: 75, experience: 2, projects: 10 },
  { name: "FastAPI", category: "backend", proficiency: 80, experience: 2, projects: 8 },
  { name: "Java", category: "backend", proficiency: 70, experience: 3, projects: 7 },
  { name: "Spring Boot", category: "backend", proficiency: 65, experience: 2, projects: 5 },

  // 數據庫技術
  { name: "MongoDB", category: "database", proficiency: 85, experience: 4, projects: 18 },
  { name: "PostgreSQL", category: "database", proficiency: 80, experience: 3, projects: 15 },
  { name: "MySQL", category: "database", proficiency: 75, experience: 4, projects: 20 },
  { name: "Redis", category: "database", proficiency: 70, experience: 2, projects: 12 },
  { name: "Elasticsearch", category: "database", proficiency: 65, experience: 1, projects: 5 },

  // AI 技術
  { name: "TensorFlow", category: "ai", proficiency: 80, experience: 3, projects: 10 },
  { name: "PyTorch", category: "ai", proficiency: 85, experience: 3, projects: 12 },
  { name: "NLP", category: "ai", proficiency: 90, experience: 4, projects: 15 },
  { name: "機器學習", category: "ai", proficiency: 85, experience: 4, projects: 18 },
  { name: "深度學習", category: "ai", proficiency: 80, experience: 3, projects: 10 },
  { name: "大型語言模型", category: "ai", proficiency: 75, experience: 1, projects: 5, isLearning: true },

  // DevOps 技術
  { name: "Docker", category: "devops", proficiency: 85, experience: 3, projects: 20 },
  { name: "Kubernetes", category: "devops", proficiency: 60, experience: 1, projects: 4, isLearning: true },
  { name: "CI/CD", category: "devops", proficiency: 80, experience: 3, projects: 15 },
  { name: "AWS", category: "devops", proficiency: 75, experience: 3, projects: 12 },
  { name: "GCP", category: "devops", proficiency: 70, experience: 2, projects: 8 },
  { name: "Terraform", category: "devops", proficiency: 65, experience: 1, projects: 5 },

  // 正在學習的技術
  { name: "Rust", category: "backend", proficiency: 40, experience: 0.5, projects: 2, isLearning: true },
  { name: "WebAssembly", category: "frontend", proficiency: 50, experience: 0.5, projects: 3, isLearning: true },
  { name: "Svelte", category: "frontend", proficiency: 55, experience: 0.5, projects: 2, isLearning: true },
]

/**
 * 獲取類別圖標
 */
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "frontend":
      return <Globe className="h-5 w-5" />
    case "backend":
      return <Server className="h-5 w-5" />
    case "database":
      return <Database className="h-5 w-5" />
    case "ai":
      return <Cpu className="h-5 w-5" />
    case "devops":
      return <Code className="h-5 w-5" />
    default:
      return <Code className="h-5 w-5" />
  }
}

/**
 * 獲取類別顏色
 */
const getCategoryColor = (category: string, isDark: boolean) => {
  switch (category) {
    case "frontend":
      return isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)"
    case "backend":
      return isDark ? "rgba(220, 220, 220, 0.9)" : "rgba(30, 30, 30, 0.9)"
    case "database":
      return isDark ? "rgba(180, 180, 180, 0.9)" : "rgba(60, 60, 60, 0.9)"
    case "ai":
      return isDark ? "rgba(140, 140, 140, 0.9)" : "rgba(90, 90, 90, 0.9)"
    case "devops":
      return isDark ? "rgba(100, 100, 100, 0.9)" : "rgba(120, 120, 120, 0.9)"
    default:
      return isDark ? "rgba(200, 200, 200, 0.9)" : "rgba(50, 50, 50, 0.9)"
  }
}

/**
 * 技術棧可視化組件
 *
 * 使用不同的圖表和可視化方式展示技術能力
 */
export default function TechStackVisualization() {
  // 獲取主題
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // 狀態管理
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [activeChart, setActiveChart] = useState<string>("bar")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  // 過濾技術
  const filteredTechnologies =
    activeCategory === "all" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  // 獲取所有類別
  const categories = Array.from(new Set(technologies.map((tech) => tech.category)))

  // 繪製圖表的 canvas 引用
  const barChartRef = useRef<HTMLCanvasElement>(null)
  const radarChartRef = useRef<HTMLCanvasElement>(null)
  const bubbleChartRef = useRef<HTMLCanvasElement>(null)

  // 當類別或圖表類型變化時重新繪製圖表
  useEffect(() => {
    if (activeChart === "bar") {
      drawBarChart()
    } else if (activeChart === "radar") {
      drawRadarChart()
    } else if (activeChart === "bubble") {
      drawBubbleChart()
    }
  }, [activeCategory, activeChart, theme])

  // 當窗口大小變化時重新繪製圖表
  useEffect(() => {
    const handleResize = () => {
      if (activeChart === "bar") {
        drawBarChart()
      } else if (activeChart === "radar") {
        drawRadarChart()
      } else if (activeChart === "bubble") {
        drawBubbleChart()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeChart, activeCategory, theme])

  /**
   * 繪製條形圖
   */
  const drawBarChart = () => {
    const canvas = barChartRef.current
    if (!canvas) return

    // 設置 canvas 尺寸
    const container = canvas.parentElement
    if (container) {
      canvas.width = container.clientWidth
      canvas.height = Math.max(filteredTechnologies.length * 45, 400)
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const data = [...filteredTechnologies].sort((a, b) => b.proficiency - a.proficiency)
    const barHeight = 30
    const barSpacing = 15
    const maxBarWidth = canvas.width - 150 // 留出空間顯示標籤
    const startY = 30

    // 設置文字樣式
    ctx.font = "14px sans-serif"
    ctx.textBaseline = "middle"

    // 繪製每個技術的條形
    data.forEach((tech, index) => {
      const y = startY + index * (barHeight + barSpacing)
      const barWidth = (tech.proficiency / 100) * maxBarWidth

      // 繪製技術名稱
      ctx.fillStyle = isDark ? "#e5e5e5" : "#333333"
      ctx.textAlign = "right"
      ctx.fillText(tech.name, 100, y + barHeight / 2)

      // 繪製條形背景
      ctx.fillStyle = isDark ? "#333333" : "#e5e5e5"
      ctx.fillRect(120, y, maxBarWidth, barHeight)

      // 繪製條形
      ctx.fillStyle = tech.isLearning
        ? isDark
          ? "#8b5cf6"
          : "#a78bfa" // 紫色表示學習中
        : getCategoryColor(tech.category, isDark)
      ctx.fillRect(120, y, barWidth, barHeight)

      // 繪製熟練度百分比
      ctx.fillStyle = isDark ? "#e5e5e5" : "#333333"
      ctx.textAlign = "left"
      ctx.fillText(`${tech.proficiency}%`, 130 + barWidth, y + barHeight / 2)
    })
  }

  /**
   * 繪製雷達圖
   */
  const drawRadarChart = () => {
    const canvas = radarChartRef.current
    if (!canvas) return

    // 設置 canvas 尺寸
    const container = canvas.parentElement
    if (container) {
      canvas.width = container.clientWidth
      canvas.height = 500
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 選擇要顯示的技術（每個類別選擇熟練度最高的幾個）
    let techsToShow: Technology[] = []

    if (activeCategory === "all") {
      const categoriesToShow = ["frontend", "backend", "database", "ai", "devops"]
      categoriesToShow.forEach((category) => {
        const techsInCategory = technologies
          .filter((tech) => tech.category === category)
          .sort((a, b) => b.proficiency - a.proficiency)
          .slice(0, 2)

        techsToShow.push(...techsInCategory)
      })
    } else {
      techsToShow = filteredTechnologies.sort((a, b) => b.proficiency - a.proficiency).slice(0, 10)
    }

    const numPoints = techsToShow.length
    if (numPoints < 3) return // 雷達圖至少需要3個點

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 50

    // 繪製雷達圖背景
    ctx.beginPath()
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2 - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.strokeStyle = isDark ? "#333333" : "#e5e5e5"
    ctx.stroke()

    // 繪製同心圓
    for (let r = 0.2; r <= 1; r += 0.2) {
      ctx.beginPath()
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2 - Math.PI / 2
        const x = centerX + radius * r * Math.cos(angle)
        const y = centerY + radius * r * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = isDark ? "#333333" : "#e5e5e5"
      ctx.stroke()
    }

    // 繪製軸線
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2 - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = isDark ? "#333333" : "#e5e5e5"
      ctx.stroke()

      // 繪製技術名稱
      const labelX = centerX + (radius + 20) * Math.cos(angle)
      const labelY = centerY + (radius + 20) * Math.sin(angle)

      ctx.fillStyle = isDark ? "#e5e5e5" : "#333333"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(techsToShow[i].name, labelX, labelY)
    }

    // 繪製數據點
    ctx.beginPath()
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2 - Math.PI / 2
      const value = techsToShow[i].proficiency / 100
      const x = centerX + radius * value * Math.cos(angle)
      const y = centerY + radius * value * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
    ctx.fill()
    ctx.strokeStyle = isDark ? "#ffffff" : "#000000"
    ctx.stroke()

    // 繪製數據點
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2 - Math.PI / 2
      const value = techsToShow[i].proficiency / 100
      const x = centerX + radius * value * Math.cos(angle)
      const y = centerY + radius * value * Math.sin(angle)

      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fillStyle = getCategoryColor(techsToShow[i].category, isDark)
      ctx.fill()
    }
  }

  /**
   * 繪製氣泡圖
   */
  const drawBubbleChart = () => {
    const canvas = bubbleChartRef.current
    if (!canvas) return

    // 設置 canvas 尺寸
    const container = canvas.parentElement
    if (container) {
      canvas.width = container.clientWidth
      canvas.height = 500
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const data = filteredTechnologies
    const padding = 50
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // 找出經驗和項目數的最大值
    const maxExperience = Math.max(...data.map((tech) => tech.experience))
    const maxProjects = Math.max(...data.map((tech) => tech.projects))

    // 繪製坐標軸
    ctx.beginPath()
    ctx.moveTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding) // x軸
    ctx.moveTo(padding, canvas.height - padding)
    ctx.lineTo(padding, padding) // y軸
    ctx.strokeStyle = isDark ? "#666666" : "#999999"
    ctx.stroke()

    // 繪製軸標籤
    ctx.fillStyle = isDark ? "#e5e5e5" : "#333333"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("經驗（年）", canvas.width / 2, canvas.height - 10)

    ctx.save()
    ctx.translate(15, canvas.height / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.textAlign = "center"
    ctx.fillText("項目數量", 0, 0)
    ctx.restore()

    // 繪製氣泡
    data.forEach((tech) => {
      const x = padding + (tech.experience / maxExperience) * chartWidth
      const y = canvas.height - padding - (tech.projects / maxProjects) * chartHeight
      const radius = (tech.proficiency / 100) * 30 + 5 // 根據熟練度調整氣泡大小

      // 繪製氣泡
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = tech.isLearning
        ? isDark
          ? "rgba(139, 92, 246, 0.7)"
          : "rgba(167, 139, 250, 0.7)" // 紫色表示學習中
        : `${getCategoryColor(tech.category, isDark).replace("0.9", "0.7")}`
      ctx.fill()
      ctx.strokeStyle = isDark ? "#ffffff" : "#000000"
      ctx.stroke()

      // 如果鼠標懸停在技術上，顯示詳細信息
      if (hoveredTech === tech.name) {
        ctx.fillStyle = isDark ? "#ffffff" : "#000000"
        ctx.font = "bold 12px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(tech.name, x, y - radius - 10)
      }
    })

    // 添加圖例
    const legendX = padding
    const legendY = padding
    const legendSpacing = 25
    const categories = Array.from(new Set(data.map((tech) => tech.category)))

    ctx.font = "12px sans-serif"
    ctx.textAlign = "left"

    categories.forEach((category, index) => {
      const y = legendY + index * legendSpacing

      // 繪製圖例顏色塊
      ctx.beginPath()
      ctx.arc(legendX + 7, y + 7, 7, 0, Math.PI * 2)
      ctx.fillStyle = getCategoryColor(category, isDark).replace("0.9", "0.7")
      ctx.fill()
      ctx.strokeStyle = isDark ? "#ffffff" : "#000000"
      ctx.stroke()

      // 繪製圖例文字
      ctx.fillStyle = isDark ? "#e5e5e5" : "#333333"
      ctx.fillText(category.charAt(0).toUpperCase() + category.slice(1), legendX + 20, y + 10)
    })

    // 添加學習中的圖例
    const learningY = legendY + categories.length * legendSpacing
    ctx.beginPath()
    ctx.arc(legendX + 7, learningY + 7, 7, 0, Math.PI * 2)
    ctx.fillStyle = isDark ? "rgba(139, 92, 246, 0.7)" : "rgba(167, 139, 250, 0.7)"
    ctx.fill()
    ctx.strokeStyle = isDark ? "#ffffff" : "#000000"
    ctx.stroke()
    ctx.fillStyle = isDark ? "#e5e5e5" : "#333333"
    ctx.fillText("學習中", legendX + 20, learningY + 10)
  }

  // 處理 canvas 上的鼠標移動
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>, chartType: string) => {
    if (chartType !== "bubble") return

    const canvas = bubbleChartRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const padding = 50
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // 找出經驗和項目數的最大值
    const maxExperience = Math.max(...filteredTechnologies.map((tech) => tech.experience))
    const maxProjects = Math.max(...filteredTechnologies.map((tech) => tech.projects))

    // 檢查鼠標是否懸停在任何氣泡上
    let hoveredTechnology = null
    for (const tech of filteredTechnologies) {
      const bubbleX = padding + (tech.experience / maxExperience) * chartWidth
      const bubbleY = canvas.height - padding - (tech.projects / maxProjects) * chartHeight
      const radius = (tech.proficiency / 100) * 30 + 5

      const distance = Math.sqrt(Math.pow(x - bubbleX, 2) + Math.pow(y - bubbleY, 2))
      if (distance <= radius) {
        hoveredTechnology = tech.name
        break
      }
    }

    setHoveredTech(hoveredTechnology)
    if (hoveredTechnology) {
      drawBubbleChart() // 重新繪製以顯示懸停效果
    }
  }

  return (
    <section id="tech-stack" className="relative py-20">
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
            技術棧可視化
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            通過互動式圖表探索我的技術專長和經驗，了解我在不同領域的技能水平。
          </motion.p>
        </div>

        {/* 控制面板 */}
        <div className="mb-10 flex flex-col md:flex-row gap-6 justify-between">
          {/* 類別過濾 */}
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full md:w-auto"
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
              <TabsTrigger value="all" className="flex items-center gap-1">
                全部
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="flex items-center gap-1">
                  {getCategoryIcon(category)}
                  <span className="hidden md:inline">
                    {category === "frontend"
                      ? "前端"
                      : category === "backend"
                        ? "後端"
                        : category === "database"
                          ? "數據庫"
                          : category === "ai"
                            ? "AI"
                            : "DevOps"}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* 圖表類型選擇 */}
          <div className="flex gap-2">
            <Button
              variant={activeChart === "bar" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveChart("bar")}
              className="flex items-center gap-1"
            >
              <BarChart className="h-4 w-4" />
              <span className="hidden md:inline">條形圖</span>
            </Button>
            <Button
              variant={activeChart === "radar" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveChart("radar")}
              className="flex items-center gap-1"
            >
              <Radar className="h-4 w-4" />
              <span className="hidden md:inline">雷達圖</span>
            </Button>
            <Button
              variant={activeChart === "bubble" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveChart("bubble")}
              className="flex items-center gap-1"
            >
              <PieChart className="h-4 w-4" />
              <span className="hidden md:inline">氣泡圖</span>
            </Button>
          </div>
        </div>

        {/* 圖表顯示區域 */}
        <Card className="mb-8">
          <CardContent className="p-6">
            {/* 條形圖 */}
            <div className={`w-full ${activeChart === "bar" ? "block" : "hidden"}`}>
              <canvas ref={barChartRef} className="w-full"></canvas>
            </div>

            {/* 雷達圖 */}
            <div className={`w-full ${activeChart === "radar" ? "block" : "hidden"}`}>
              <canvas ref={radarChartRef} className="w-full"></canvas>
            </div>

            {/* 氣泡圖 */}
            <div className={`w-full ${activeChart === "bubble" ? "block" : "hidden"}`}>
              <canvas
                ref={bubbleChartRef}
                className="w-full"
                onMouseMove={(e) => handleMouseMove(e, "bubble")}
                onMouseLeave={() => {
                  setHoveredTech(null)
                  drawBubbleChart()
                }}
              ></canvas>
            </div>
          </CardContent>
        </Card>

        {/* 技術列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Card key={category} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b flex items-center gap-2">
                  {getCategoryIcon(category)}
                  <h3 className="font-semibold">
                    {category === "frontend"
                      ? "前端技術"
                      : category === "backend"
                        ? "後端技術"
                        : category === "database"
                          ? "數據庫技術"
                          : category === "ai"
                            ? "AI 技術"
                            : "DevOps 技術"}
                  </h3>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {technologies
                      .filter((tech) => tech.category === category)
                      .sort((a, b) => b.proficiency - a.proficiency)
                      .map((tech) => (
                        <Badge
                          key={tech.name}
                          variant={tech.isLearning ? "secondary" : "outline"}
                          className="flex items-center gap-1"
                        >
                          {tech.name}
                          {tech.isLearning && <span className="text-xs ml-1">(學習中)</span>}
                        </Badge>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
