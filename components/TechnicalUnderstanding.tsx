"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code, Database, Server, Globe, Cpu, Terminal } from "lucide-react"

export default function TechnicalUnderstanding() {
  const skills = [
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

  return (
    <section id="technical-understanding" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            技術理解與工具運用能力
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            深入理解技術原理和工具應用，實現產品與技術的無縫對接，提高開發效率和產品質量。
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
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {skill.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
