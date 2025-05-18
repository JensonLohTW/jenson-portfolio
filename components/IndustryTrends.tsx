"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Lightbulb, BookOpen, Scale, TrendingUp } from "lucide-react"

export default function IndustryTrends() {
  const skills = [
    {
      title: "關注開源項目與技術趨勢",
      icon: <Lightbulb className="h-5 w-5" style={{ color: "rgb(255, 0, 0)" }} />,
      description: "持續關注開源社區和技術發展趨勢，了解最新技術動態和創新應用，為產品注入前沿理念。",
      areas: ["GitHub Trending", "開源社區", "技術會議", "技術博客"],
    },
    {
      title: "政策解讀與行業動向分析",
      icon: <TrendingUp className="h-5 w-5" style={{ color: "rgb(255, 165, 0)" }} />,
      description: "密切關注行業政策變化和市場動向，分析競爭格局和發展趨勢，為產品戰略提供決策依據。",
      areas: ["行業報告", "政策解讀", "競品分析", "市場調研"],
    },
    {
      title: "法律、經濟常識基礎",
      icon: <Scale className="h-5 w-5" style={{ color: "rgb(255, 255, 0)" }} />,
      description: "具備基本的法律和經濟知識，了解知識產權、數據隱私等相關法規，確保產品合規運營。",
      areas: ["知識產權", "數據隱私", "合同法", "經濟學基礎"],
    },
    {
      title: "跨界知識整合能力",
      icon: <BookOpen className="h-5 w-5" style={{ color: "rgb(0, 128, 0)" }} />,
      description: "整合不同領域的知識和經驗，促進跨學科創新，發現新的產品機會和解決方案。",
      areas: ["設計思維", "用戶心理學", "商業模式", "創新方法論"],
    },
  ]

  return (
    <section id="industry-trends" className="relative py-20 bg-accent/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            行業趨勢與跨界能力
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            洞察行業趨勢，整合跨領域知識，把握市場機遇，推動產品和業務創新。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    {skill.areas.map((area, i) => (
                      <Badge key={i} variant="outline">
                        {area}
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
