"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BarChart, GitCompare, LineChart, Database, Code } from "lucide-react"

export default function DataAnalytics() {
  const skills = [
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

  return (
    <section id="data-analytics" className="relative py-20 bg-accent/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            數據分析與增長能力
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            通過數據分析驅動產品決策和業務增長，將複雜數據轉化為可行的洞察和策略。
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
                    {skill.tools.map((tool, i) => (
                      <Badge key={i} variant="outline">
                        {tool}
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
