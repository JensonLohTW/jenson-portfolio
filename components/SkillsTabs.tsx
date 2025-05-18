"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  GitBranch,
  Users,
  Workflow,
  Braces,
  BarChart,
  GitCompare,
  LineChart,
  Database,
  Code,
  Server,
  Globe,
  Cpu,
  Terminal,
  Network,
  Grid,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState("product")
  const [viewMode, setViewMode] = useState<"grid" | "network">("grid")
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // 產品規劃與管理能力數據
  const productSkills = [
    {
      title: "需求池管理與優先級排序",
      icon: <GitBranch className="h-5 w-5" style={{ color: "rgb(255, 0, 0)" }} />,
      description: "管理產品需求池，根據業務價值、技術可行性和用戶需求進行優先級排序，確保資源高效分配。",
    },
    {
      title: "PRD/MRD撰寫與用戶故事設計",
      icon: <FileText className="h-5 w-5" style={{ color: "rgb(255, 165, 0)" }} />,
      description: "撰寫專業的產品需求文檔和市場需求文檔，設計清晰的用戶故事，確保團隊對產品願景和功能有共同理解。",
    },
    {
      title: "用戶流程圖與原型設計",
      icon: <Workflow className="h-5 w-5" style={{ color: "rgb(255, 255, 0)" }} />,
      description: "使用 Mermaid、腦圖、Axure/Figma 等工具創建用戶流程圖和低保真原型，視覺化產品概念和用戶體驗。",
    },
    {
      title: "跨部門溝通協作",
      icon: <Users className="h-5 w-5" style={{ color: "rgb(0, 128, 0)" }} />,
      description: "與設計、開發、測試、市場等團隊有效溝通，協調資源，確保產品按計劃順利交付。",
    },
    {
      title: "任務拆解與排期管理",
      icon: <BarChart className="h-5 w-5" style={{ color: "rgb(0, 0, 255)" }} />,
      description: "將複雜項目拆解為可管理的任務，制定合理的開發排期，追蹤進度並及時調整。",
    },
    {
      title: "產品全生命周期管理",
      icon: <Braces className="h-5 w-5" style={{ color: "rgb(75, 0, 130)" }} />,
      description: "從概念到退役，全面管理產品生命周期的各個階段，包括規劃、開發、發布、迭代和優化。",
    },
  ]

  // 數據分析與增長能力數據
  const dataSkills = [
    {
      title: "數據驅動決策思維",
      icon: <BarChart className="h-5 w-5" style={{ color: "rgb(255, 0, 0)" }} />,
      description: "基於數據分析結果制定產品和業務決策，避免主觀臆斷，提高決策準確性和效率。",
      tools: ["Tableau", "PowerBI", "Google Analytics"],
    },
    {
      title: "A/B 測試設計與實施",
      icon: <GitCompare className="h-5 w-5" style={{ color: "rgb(255, 165, 0)" }} />,
      description: "設計科學的 A/B 測試實驗，驗證產品假設，優化用戶體驗和業務指標。",
      tools: ["Optimizely", "Google Optimize", "VWO"],
    },
    {
      title: "核心指標分析",
      icon: <LineChart className="h-5 w-5" style={{ color: "rgb(255, 255, 0)" }} />,
      description: "分析轉化率、留存率、LTV 等核心指標，發現問題並提出改進方案，推動業務增長。",
      tools: ["Mixpanel", "Amplitude", "Looker"],
    },
    {
      title: "數據埋點設計與執行",
      icon: <Code className="h-5 w-5" style={{ color: "rgb(0, 128, 0)" }} />,
      description: "設計合理的數據埋點方案，追蹤用戶行為和產品性能，為分析提供數據基礎。",
      tools: ["GTM", "Segment", "Firebase Analytics"],
    },
    {
      title: "數據清洗與分析",
      icon: <Database className="h-5 w-5" style={{ color: "rgb(0, 0, 255)" }} />,
      description: "使用 SQL 和 Python 進行數據清洗、轉換和分析，從海量數據中提取有價值的洞察。",
      tools: ["SQL", "Python", "Pandas", "NumPy"],
    },
  ]

  // 技術理解與工具運用能力數據
  const techSkills = [
    {
      title: "前後端技術基礎知識",
      icon: <Code className="h-5 w-5" style={{ color: "rgb(255, 0, 0)" }} />,
      description: "具備 SpringBoot、Vue、MySQL 等前後端技術的基礎知識，能夠與開發團隊有效溝通，理解技術限制和可能性。",
      technologies: ["SpringBoot", "Vue", "React", "MySQL", "Node.js"],
    },
    {
      title: "系統架構與數據流設計",
      icon: <Server className="h-5 w-5" style={{ color: "rgb(255, 165, 0)" }} />,
      description: "理解系統架構和數據流設計原則，能夠參與架構討論，確保產品設計與技術實現的一致性。",
      technologies: ["微服務", "API設計", "數據流", "系統集成"],
    },
    {
      title: "API工具應用",
      icon: <Globe className="h-5 w-5" style={{ color: "rgb(255, 255, 0)" }} />,
      description: "熟練使用 Postman 等 API 工具進行接口測試和調試，確保前後端交互的正確性和效率。",
      technologies: ["Postman", "Swagger", "API文檔"],
    },
    {
      title: "自動化測試工具",
      icon: <Terminal className="h-5 w-5" style={{ color: "rgb(0, 128, 0)" }} />,
      description: "了解 Selenium、JMeter 等自動化測試工具的應用，能夠設計基本的測試用例，確保產品質量。",
      technologies: ["Selenium", "JMeter", "自動化測試"],
    },
    {
      title: "版本管理與命令行操作",
      icon: <Database className="h-5 w-5" style={{ color: "rgb(0, 0, 255)" }} />,
      description: "熟悉 Git 版本管理和基本命令行操作，能夠進行代碼版本控制和簡單的開發環境配置。",
      technologies: ["Git", "GitHub", "命令行", "版本控制"],
    },
    {
      title: "LLM技術應用",
      icon: <Cpu className="h-5 w-5" style={{ color: "rgb(75, 0, 130)" }} />,
      description: "了解大型語言模型的應用原理，掌握提示詞工程和 RAG 系統的基本概念，能夠設計 AI 相關產品功能。",
      technologies: ["提示詞工程", "RAG系統", "LLM應用", "AI產品設計"],
    },
  ]

  // 添加網絡圖的節點數據
  const networkNodes = [
    // 產品規劃與管理能力
    { id: "需求管理", group: "product", value: 25 },
    { id: "PRD撰寫", group: "product", value: 20 },
    { id: "流程設計", group: "product", value: 22 },
    { id: "跨部門協作", group: "product", value: 30 },
    { id: "任務管理", group: "product", value: 18 },
    { id: "生命周期", group: "product", value: 15 },

    // 數據分析與增長能力
    { id: "數據決策", group: "data", value: 28 },
    { id: "A/B測試", group: "data", value: 20 },
    { id: "指標分析", group: "data", value: 25 },
    { id: "數據埋點", group: "data", value: 18 },
    { id: "數據清洗", group: "data", value: 22 },

    // 技術理解與工具運用能力
    { id: "前後端知識", group: "tech", value: 24 },
    { id: "系統架構", group: "tech", value: 20 },
    { id: "API工具", group: "tech", value: 15 },
    { id: "自動化測試", group: "tech", value: 18 },
    { id: "版本管理", group: "tech", value: 16 },
    { id: "LLM應用", group: "tech", value: 22 },
    // 行業趨勢與跨界能力
    { id: "開源趨勢", group: "trend", value: 24 },
    { id: "政策解讀", group: "trend", value: 22 },
    { id: "法律經濟", group: "trend", value: 20 },
    { id: "跨界知識", group: "trend", value: 26 },
  ]

  // 添加網絡圖的連接數據
  const networkLinks = [
    // 產品內部連接
    { source: "需求管理", target: "PRD撰寫", value: 8 },
    { source: "PRD撰寫", target: "流程設計", value: 10 },
    { source: "流程設計", target: "任務管理", value: 6 },
    { source: "任務管理", target: "生命周期", value: 7 },
    { source: "生命周期", target: "需求管理", value: 9 },
    { source: "跨部門協作", target: "需求管理", value: 7 },
    { source: "跨部門協作", target: "任務管理", value: 8 },

    // 數據內部連接
    { source: "數據決策", target: "A/B測試", value: 9 },
    { source: "A/B測試", target: "指標分析", value: 8 },
    { source: "指標分析", target: "數據埋點", value: 7 },
    { source: "數據埋點", target: "數據清洗", value: 10 },
    { source: "數據清洗", target: "數據決策", value: 6 },

    // 技術內部連接
    { source: "前後端知識", target: "系統架構", value: 9 },
    { source: "系統架構", target: "API工具", value: 8 },
    { source: "API工具", target: "自動化測試", value: 6 },
    { source: "自動化測試", target: "版本管理", value: 7 },
    { source: "版本管理", target: "LLM應用", value: 5 },
    { source: "LLM應用", target: "前後端知識", value: 7 },

    // 跨領域連接
    { source: "需求管理", target: "數據決策", value: 8 },
    { source: "PRD撰寫", target: "前後端知識", value: 9 },
    { source: "流程設計", target: "系統架構", value: 10 },
    { source: "跨部門協作", target: "指標分析", value: 7 },
    { source: "任務管理", target: "自動化測試", value: 6 },
    { source: "數據埋點", target: "API工具", value: 8 },
    { source: "數據清洗", target: "LLM應用", value: 9 },
    { source: "A/B測試", target: "流程設計", value: 7 },
    // 行業趨勢內部連接
    { source: "開源趨勢", target: "政策解讀", value: 7 },
    { source: "政策解讀", target: "法律經濟", value: 9 },
    { source: "法律經濟", target: "跨界知識", value: 8 },
    { source: "跨界知識", target: "開源趨勢", value: 6 },

    // 行業趨勢與其他領域的連接
    { source: "開源趨勢", target: "前後端知識", value: 10 },
    { source: "開源趨勢", target: "LLM應用", value: 9 },
    { source: "政策解讀", target: "數據決策", value: 8 },
    { source: "政策解讀", target: "需求管理", value: 7 },
    { source: "法律經濟", target: "生命周期", value: 6 },
    { source: "跨界知識", target: "跨部門協作", value: 9 },
    { source: "跨界知識", target: "系統架構", value: 7 },
  ]

  // 添加繪製網絡圖的函數
  useEffect(() => {
    if (viewMode === "network" && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // 添加圓角矩形方法
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
        if (width < 2 * radius) radius = width / 2
        if (height < 2 * radius) radius = height / 2
        this.beginPath()
        this.moveTo(x + radius, y)
        this.arcTo(x + width, y, x + width, y + height, radius)
        this.arcTo(x + width, y + height, x, y + height, radius)
        this.arcTo(x, y + height, x, y, radius)
        this.arcTo(x, y, x + width, y, radius)
        this.closePath()
        return this
      }

      // 設置canvas尺寸
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = 800
      }

      // 清除畫布
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 添加交互狀態
      let hoveredNode = null
      let selectedNode = null

      // 添加鼠標事件處理
      canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top

        // 檢查是否懸停在節點上
        hoveredNode = null
        for (const node of nodes) {
          const dx = mouseX - node.x
          const dy = mouseY - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < node.value / 1.5) {
            hoveredNode = node
            canvas.style.cursor = "pointer"
            break
          }
        }

        if (!hoveredNode) {
          canvas.style.cursor = "default"
        }
      })

      canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top

        // 檢查是否點擊了節點
        for (const node of nodes) {
          const dx = mouseX - node.x
          const dy = mouseY - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < node.value / 1.5) {
            selectedNode = selectedNode === node ? null : node
            break
          }
        }
      })

      // 定義顏色映射
      const groupColors: Record<string, string> = {
        product: "#3b82f6", // 藍色
        data: "#10b981", // 綠色
        tech: "#8b5cf6", // 紫色
        trend: "#f59e0b", // 橙色 - 行業趨勢與跨界能力
      }

      // 使用力導向算法模擬節點位置
      // 這是一個簡化版本，實際應用中可能需要更複雜的算法
      const nodes = [...networkNodes]
      const links = [...networkLinks]

      // 初始化節點位置
      nodes.forEach((node) => {
        node.x = Math.random() * (canvas.width - 100) + 50
        node.y = Math.random() * (canvas.height - 100) + 50
        node.vx = 0
        node.vy = 0
      })

      // 模擬力導向佈局
      const simulation = () => {
        // 計算節點間的斥力
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[j].x - nodes[i].x
            const dy = nodes[j].y - nodes[i].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const repulsion = 2000 / (distance * distance)

            if (distance > 0) {
              nodes[i].vx -= (dx / distance) * repulsion
              nodes[i].vy -= (dy / distance) * repulsion
              nodes[j].vx += (dx / distance) * repulsion
              nodes[j].vy += (dy / distance) * repulsion
            }
          }
        }

        // 計算連接的引力
        links.forEach((link) => {
          const source = nodes.find((n) => n.id === link.source)
          const target = nodes.find((n) => n.id === link.target)

          if (source && target) {
            const dx = target.x - source.x
            const dy = target.y - source.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const attraction = distance * 0.01 * link.value

            if (distance > 0) {
              source.vx += (dx / distance) * attraction
              source.vy += (dy / distance) * attraction
              target.vx -= (dx / distance) * attraction
              target.vy -= (dy / distance) * attraction
            }
          }
        })

        // 更新節點位置
        nodes.forEach((node) => {
          node.x += node.vx * 0.1
          node.y += node.vy * 0.1
          node.vx *= 0.9
          node.vy *= 0.9

          // 邊界檢查
          if (node.x < 50) node.x = 50
          if (node.x > canvas.width - 50) node.x = canvas.width - 50
          if (node.y < 50) node.y = 50
          if (node.y > canvas.height - 50) node.y = 50
          if (node.y > canvas.height - 50) node.y = canvas.height - 50
        })

        // 繪製連接
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        links.forEach((link) => {
          const source = nodes.find((n) => n.id === link.source)
          const target = nodes.find((n) => n.id === link.target)

          if (source && target) {
            ctx.beginPath()
            ctx.moveTo(source.x, source.y)
            ctx.lineTo(target.x, target.y)
            ctx.strokeStyle = `rgba(150, 150, 150, ${link.value / 15})`
            ctx.lineWidth = link.value / 5
            ctx.stroke()
          }
        })

        // 繪製節點
        nodes.forEach((node) => {
          const isHovered = node === hoveredNode
          const isSelected = node === selectedNode
          const nodeSize = (node.value / 2) * (isHovered ? 1.2 : 1)

          // 如果節點被選中，高亮相關連接
          if (isSelected) {
            links.forEach((link) => {
              if (link.source === node.id || link.target === node.id) {
                const source = nodes.find((n) => n.id === link.source)
                const target = nodes.find((n) => n.id === link.target)

                if (source && target) {
                  ctx.beginPath()
                  ctx.moveTo(source.x, source.y)
                  ctx.lineTo(target.x, target.y)
                  ctx.strokeStyle = `rgba(255, 215, 0, 0.8)` // 金色高亮
                  ctx.lineWidth = link.value / 3 + 2
                  ctx.stroke()
                }
              }
            })
          }

          // 繪製節點
          ctx.beginPath()
          ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)

          // 選中或懸停時添加發光效果
          if (isSelected || isHovered) {
            ctx.shadowColor = groupColors[node.group]
            ctx.shadowBlur = 15
            ctx.fillStyle = isSelected ? "#ffffff" : groupColors[node.group]
          } else {
            ctx.shadowBlur = 0
            ctx.fillStyle = groupColors[node.group]
          }

          ctx.fill()

          // 繪製節點標籤
          ctx.fillStyle = isSelected ? groupColors[node.group] : "#ffffff"
          ctx.font = `${isHovered || isSelected ? "bold 14px" : "12px"} sans-serif`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(node.id, node.x, node.y)

          // 如果懸停在節點上，顯示詳細信息
          if (isHovered) {
            const infoX = node.x
            const infoY = node.y - nodeSize - 30

            // 繪製信息背景
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
            ctx.roundRect(infoX - 100, infoY - 15, 200, 30, 5)
            ctx.fill()

            // 繪製信息文本
            ctx.fillStyle = "#ffffff"
            ctx.font = "12px sans-serif"
            ctx.fillText(
              `${node.group === "product" ? "產品" : node.group === "data" ? "數據" : "技術"} | 關聯: ${
                links.filter((l) => l.source === node.id || l.target === node.id).length
              }`,
              infoX,
              infoY,
            )
          }

          // 重置陰影
          ctx.shadowBlur = 0
        })

        // 繪製圖例
        const legendY = 30
        const legendX = 50
        Object.entries(groupColors).forEach(([group, color], index) => {
          const x = legendX + index * 150

          ctx.beginPath()
          ctx.arc(x, legendY, 8, 0, Math.PI * 2)
          ctx.fillStyle = color
          ctx.fill()

          ctx.fillStyle = "#333333"
          ctx.font = "14px sans-serif"
          ctx.textAlign = "left"
          ctx.textBaseline = "middle"
          ctx.fillText(
            group === "product"
              ? "產品規劃與管理"
              : group === "data"
                ? "數據分析與增長"
                : group === "tech"
                  ? "技術理解與工具運用"
                  : "行業趨勢與跨界能力",
            x + 15,
            legendY,
          )
        })

        // 繼續模擬
        if (viewMode === "network") {
          requestAnimationFrame(simulation)
        }
      }

      // 開始模擬
      simulation()
    }
  }, [viewMode, activeTab])

  // 滾動到視圖中心
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [activeTab])

  // 在標籤列後添加視圖切換按鈕
  return (
    <section id="skills-tabs" className="relative py-20" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            專業能力
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            全方位的專業能力，從產品規劃到技術實現，從數據分析到行業洞察，為產品成功保駕護航。
          </motion.p>
        </div>

        <Tabs defaultValue="product" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* 蘋果風格的標籤列 */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <TabsList className="h-14 p-1 bg-background border border-border rounded-full">
                <TabsTrigger
                  value="product"
                  className="h-12 px-8 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  產品規劃與管理
                </TabsTrigger>
                <TabsTrigger
                  value="data"
                  className="h-12 px-8 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  數據分析與增長
                </TabsTrigger>
                <TabsTrigger
                  value="tech"
                  className="h-12 px-8 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  技術理解與工具運用
                </TabsTrigger>
              </TabsList>

              {/* 視圖切換按鈕 */}
              <div className="flex items-center gap-2 bg-background border border-border rounded-full p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-full h-10 px-4"
                >
                  <Grid className="h-4 w-4 mr-2" />
                  網格視圖
                </Button>
                <Button
                  variant={viewMode === "network" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("network")}
                  className="rounded-full h-10 px-4"
                >
                  <Network className="h-4 w-4 mr-2" />
                  網絡圖
                </Button>
              </div>
            </div>
          </div>

          {/* 內容區域 */}
          <div className="relative overflow-hidden min-h-[600px]">
            {/* 網格視圖 */}
            {viewMode === "grid" && (
              <AnimatePresence mode="wait">
                {/* 產品規劃與管理能力 */}
                <TabsContent value="product" className="w-full absolute top-0 left-0 right-0" key="product">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {productSkills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-md transition-all duration-300 border-none bg-background/50 backdrop-blur-sm">
                            <CardContent className="p-6 flex flex-col h-full">
                              <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-background/50 backdrop-blur-sm mr-4">
                                  {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{skill.title}</h3>
                              </div>
                              <p className="text-muted-foreground">{skill.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                {/* 數據分析與增長能力 */}
                <TabsContent value="data" className="w-full absolute top-0 left-0 right-0" key="data">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {dataSkills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-md transition-all duration-300 border-none bg-background/50 backdrop-blur-sm">
                            <CardContent className="p-6 flex flex-col h-full">
                              <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-background/50 backdrop-blur-sm mr-4">
                                  {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{skill.title}</h3>
                              </div>
                              <p className="text-muted-foreground mb-4">{skill.description}</p>
                              <div className="mt-auto flex flex-wrap gap-2">
                                {skill.tools.map((tool, i) => (
                                  <Badge key={i} variant="secondary">
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>

                {/* 技術理解與工具運用能力 */}
                <TabsContent value="tech" className="w-full absolute top-0 left-0 right-0" key="tech">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {techSkills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-md transition-all duration-300 border-none bg-background/50 backdrop-blur-sm">
                            <CardContent className="p-6 flex flex-col h-full">
                              <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-background/50 backdrop-blur-sm mr-4">
                                  {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{skill.title}</h3>
                              </div>
                              <p className="text-muted-foreground mb-4">{skill.description}</p>
                              <div className="mt-auto flex flex-wrap gap-2">
                                {skill.technologies.map((tech, i) => (
                                  <Badge key={i} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            )}

            {/* 網絡圖視圖 */}
            {viewMode === "network" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                  <p className="text-center text-muted-foreground mb-4">
                    探索不同能力之間的關聯性，了解它們如何相互影響和協同工作。
                  </p>
                  <p className="text-center text-muted-foreground mb-4">
                    <span className="bg-primary/10 px-2 py-1 rounded text-primary">提示：</span>{" "}
                    懸停查看詳情，點擊節點高亮相關連接
                  </p>
                  <canvas ref={canvasRef} className="w-full h-[800px] rounded-lg"></canvas>
                </div>
              </motion.div>
            )}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
