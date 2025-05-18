"use client"

import { useState } from "react"
import { Briefcase, Award, MapPin, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// 經驗數據
const experienceData = [
  {
    title: "產品經理",
    company: "OFFICESTAR",
    location: "上海",
    period: "2022 - 現在",
    description:
      "負責公司數字化轉型戰略的產品規劃與執行，主導開發了提升辦公效率的SaaS解決方案。通過深入的用戶研究和數據分析，成功識別並解決了客戶痛點，優化了產品體驗。",
    achievements: [
      "設計並實施了數字化辦公解決方案，提升客戶工作效率40%",
      "主導產品從概念到上市的全流程，實現首年營收增長35%",
      "優化用戶旅程和界面設計，提高用戶留存率25%",
      "建立了敏捷開發流程，縮短產品迭代週期50%",
    ],
  },
  {
    title: "增長運營專家",
    company: "小紅書",
    location: "上海",
    period: "2020 - 2022",
    description:
      "負責平台內容生態和社區運營策略，設計並執行了多個提升用戶參與度和內容質量的項目。通過數據驅動的方法優化了推薦算法和內容分發機制，顯著提升了平台活躍度和用戶黏性。",
    achievements: [
      "設計的內容激勵機制使優質創作者增長30%，平台內容互動率提升25%",
      "優化用戶增長漏斗，降低獲客成本20%，提高轉化率15%",
      "開發並實施了精準用戶畫像系統，提升廣告點擊率35%",
      "主導跨部門合作項目，實現平台月活用戶增長40%",
    ],
  },
  {
    title: "商業化產品經理",
    company: "上海喜馬拉雅科技有限公司",
    location: "上海",
    period: "2018 - 2020",
    description:
      "負責音頻內容平台的商業化產品設計和變現策略，開發了多元化的收入模式和會員體系。通過精細化運營和用戶行為分析，優化了付費轉化路徑和定價策略，顯著提升了平台營收。",
    achievements: [
      "設計的分級會員系統提升了付費用戶轉化率30%，會員續訂率增長25%",
      "開發的廣告投放系統提高了廣告主ROI 40%，平台廣告收入增長35%",
      "優化內容定價策略，提升單用戶平均收入20%",
      "建立了完整的數據分析體系，為商業決策提供精準支持",
    ],
  },
]

export default function Experience() {
  // 添加狀態來跟踪每個經驗項的展開狀態
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  // 切換展開/收起狀態的函數
  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            工作經驗
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            我的職業生涯橫跨技術開發和研究領域，積累了豐富的實戰經驗。
          </motion.p>
        </div>

        <div className="relative">
          {/* 時間線 */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/20"></div>
          </div>

          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* 時間點 */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-background rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 border-2 border-primary shadow-md">
                  <Briefcase className="h-5 w-5" />
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                  <Card className="hover:border-primary/20 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-foreground mb-2 md:mb-0">{exp.title}</h3>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>

                      <div className="flex items-center text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                      {/* 查看詳情按鈕 */}
                      <motion.button
                        onClick={() => toggleExpand(index)}
                        className="flex items-center gap-2 text-primary font-medium mb-4 group"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <motion.div
                          animate={{ rotate: expandedItems.includes(index) ? 180 : 0 }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                          className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                        >
                          <ChevronDown className="h-4 w-4 text-primary" />
                        </motion.div>
                        <span>{expandedItems.includes(index) ? "收起詳情" : "查看詳情"}</span>
                      </motion.button>

                      {/* 詳細成就 */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: expandedItems.includes(index) ? "auto" : 0,
                          opacity: expandedItems.includes(index) ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          opacity: { duration: 0.2 },
                          height: { type: "spring", stiffness: 300, damping: 30 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pt-2">
                          <h4 className="font-medium text-foreground flex items-center">
                            <Award className="h-4 w-4 mr-2" />
                            主要成就
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                                <span className="text-muted-foreground">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
