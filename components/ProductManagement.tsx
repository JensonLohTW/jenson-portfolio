"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FileText, GitBranch, Users, Workflow, Braces, BarChart } from "lucide-react"

export default function ProductManagement() {
  const skills = [
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

  return (
    <section id="product-management" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            產品規劃與管理能力
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            專業的產品管理能力，從需求收集到產品交付的全流程把控，確保產品成功落地並持續優化。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-background/50 backdrop-blur-sm mr-4">{skill.icon}</div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
