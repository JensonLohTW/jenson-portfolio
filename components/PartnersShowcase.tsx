"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// 合作夥伴數據
const partnersData = [
  {
    name: "TechCorp Inc.",
    logo: "/placeholder.svg", // 替換為真實的logo路徑
    description: "領先的技術解決方案提供商，專注於雲計算和人工智能。",
    website: "https://techcorp.example.com",
  },
  {
    name: "Global Solutions Ltd.",
    logo: "/placeholder.svg",
    description: "全球領先的諮詢公司，提供戰略規劃和業務流程優化服務。",
    website: "https://globalsolutions.example.com",
  },
  {
    name: "Innovation Hub",
    logo: "/placeholder.svg",
    description: "專注於創新技術和創業孵化的加速器。",
    website: "https://innovationhub.example.com",
  },
]

export default function PartnersShowcase() {
  return (
    <section id="partners" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            合作夥伴
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            感謝以下合作夥伴的支持，共同推動技術創新和業務發展。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnersData.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-muted-foreground mb-4">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-auto"
                  >
                    訪問網站
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
