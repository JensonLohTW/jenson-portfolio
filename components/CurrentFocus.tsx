"use client"

import Image from "next/image"
import { Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation"
import { gsap } from "gsap"
import { Card } from "@/components/ui/card"

// 修改 focusAreas 數據，修正標點符號和空格問題
const focusAreas = [
  {
    title: "AI 賦能產品設計與智能決策",
    description:
      "在產品設計與商業決策過程中，我特別關注生成式AI（如ChatGPT）、機器學習算法與數據驅動分析的應用場景。透過智能推薦、用戶行為預測、個性化體驗設計，讓產品更好地理解用戶需求，提升留存與轉化效率。我相信AI能夠不僅為用戶帶來更符合期待的體驗，更能為企業創造商業洞察與決策支持能力，驅動產品與業務持續增長。",
    image: "/ai-product-design.png",
    link: "/focus/ai-product-design",
  },
  {
    title: "LLM、RAG、推薦系統的實踐與探索",
    description:
      "面對大模型技術快速發展，我積極關注大語言模型（LLM）及其落地方案，例如RAG（檢索增強生成）技術，以及結合行為數據與內容特徵的推薦系統設計與優化。我相信結合檢索與生成技術能大幅提升知識密集型產品的準確性與即時性，例如：智能客服、知識搜尋、個性化學習平台等，幫助用戶快速獲得所需資訊，同時提升企業服務效率。",
    image: "/llm-rag-recommendation.png",
    link: "/focus/llm-rag-recommendation",
  },
  {
    title: "用戶友好性設計與組件封裝策略",
    description:
      "我重視產品的一致性體驗與開發效率提升，持續推動元件化設計與高效重用策略。透過組件封裝、設計規範落地、前後端協作優化，降低開發與維護成本，同時保障用戶在不同模組與流程中擁有一致、順暢、專業的操作體驗。我相信優秀的產品不只面向用戶，更應該兼顧團隊的開發體驗與可持續交付能力。",
    image: "/component-design.png",
    link: "/focus/component-design",
  },
]

export default function CurrentFocus() {
  const sectionRef = useGSAPAnimation<HTMLDivElement>(() => {
    // 卡片動畫
    gsap.fromTo(
      ".focus-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".focus-card",
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="focus" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient"
          >
            當前關注領域
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
            以下是我目前正在探索和研究的技術領域，這些領域代表了我的專業興趣和未來發展方向。
          </motion.p>
        </div>

        <div ref={sectionRef} className="space-y-20">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`focus-card flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 items-center`}
            >
              {/* 圖片 */}
              <div className="w-full md:w-1/2">
                <Card className="overflow-hidden">
                  <div className="relative h-64 md:h-80 w-full group">
                    <Image
                      src={area.image || "/placeholder.svg"}
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Card>
              </div>

              {/* 內容 */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-accent mr-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{area.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>

                <Button variant="outline" asChild className="rounded-full group">
                  <a href={area.link} className="inline-flex items-center">
                    了解更多
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
