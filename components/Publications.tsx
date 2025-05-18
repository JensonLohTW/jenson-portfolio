"use client"

import { FileText, Users, ExternalLink, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation"
import { gsap } from "gsap"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// 論文數據
const publicationsData = [
  {
    title: "A Study on Traffic Prediction for Communication Base Stations Based on Bidirectional Gated Recurrent Units",
    authors: ["Jenson Chen", "Sarah Johnson", "Michael Lee"],
    journal: "Journal of Communication Technology",
    year: 2022,
    abstract:
      "現有的通信基站流量調節方法多基於單向神經網絡預測調配，邊緣信息的缺失導致精度不高。為解決此問題，提出一種基於雙向門控循環單元的通信基站流量智能化預測方法。該方法選擇門控循環單元，有效捕獲時間序列的潛在規律，並突破單向調配方法的缺點，從前後兩個方向獨立進行訓練，利用完整歷史信息，實現更精準的預測效果。根據北京國測星繪採集的約8GB的小區上行流量數據，使用單、雙向長短期記憶網絡以及單向門控循環單元進行比較實驗，結果表明，雙向門控循環單元方法較對照算法在R2上平均提高約0.1，預測精度也有顯著提升，對基站流量調節起到決策支持作用，具有一定現實意義。",
    link: "#",
    citations: 42,
  },
]

export default function Publications() {
  const sectionRef = useGSAPAnimation<HTMLDivElement>(() => {
    // 論文卡片動畫
    gsap.fromTo(
      ".publication-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".publication-card",
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="publications" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient"
          >
            研究論文
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-custom mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            在软件导刊上发表机器学习相关论文，具有初步研究能力。
          </motion.p>
        </div>

        <div ref={sectionRef} className="space-y-8">
          {publicationsData.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="publication-card"
            >
              <Card className="hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="hidden md:block">
                      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {pub.year}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-purple-500/10 text-purple-500 border-purple-500/20 flex items-center"
                        >
                          <BookOpen className="h-3 w-3 mr-1" />
                          引用: {pub.citations}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3">{pub.title}</h3>

                      <div className="flex flex-wrap gap-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{pub.authors.join(", ")}</span>
                        </div>
                        <div>
                          <span className="italic">{pub.journal}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-5 leading-relaxed">{pub.abstract}</p>

                      <Button variant="outline" size="sm" asChild className="rounded-full group">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          閱讀論文
                          <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
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
