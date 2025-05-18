"use client"

import { motion } from "framer-motion"
import { Award, Medal, GraduationCap, Calendar, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation"
import { gsap } from "gsap"

// 獎項數據
const awardsData = [
  {
    title: "上海市大學計算機能力大賽一等獎",
    organization: "上海市教育委員會",
    year: "2021",
    description: "第十三屆上海市大���計算機能力大賽中獲得一等獎，展示了優秀的計算機專業能力和創新思維。",
    icon: <Trophy className="h-6 w-6 text-primary" />,
    category: "競賽獎項",
  },
  {
    title: "MCM/ICM H獎",
    organization: "美國數學與應用聯合會",
    year: "2021",
    description: "在美國大學生數學建模競賽(MCM/ICM)中獲得H獎，證明了出色的數學建模和問題解決能力。",
    icon: <Medal className="h-6 w-6 text-primary" />,
    category: "國際競賽",
  },
  {
    title: "校級二等獎學金",
    organization: "所在大學",
    year: "2019-2021",
    description: "連續兩年獲得校級二等獎學金，表彰學術表現優異和綜合素質突出。",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    category: "獎學金",
  },
  {
    title: "全國大學生算法設計與編程挑戰賽銅獎",
    organization: "中國計算機學會",
    year: "2020-2021",
    description: "在第二屆全國大學生算法設計與編程挑戰賽(冬季賽)中獲得銅獎，展示了紮實的算法功底和編程能力。",
    icon: <Award className="h-6 w-6 text-primary" />,
    category: "競賽獎項",
  },
]

export default function Awards() {
  // 使用GSAP動畫
  const sectionRef = useGSAPAnimation<HTMLDivElement>(() => {
    // 獎項卡片動畫
    gsap.fromTo(
      ".award-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".award-card",
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="awards" className="relative py-20 bg-accent/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            獲獎情況
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            我在學術和專業領域獲得的各項榮譽和獎項，展示了我的專業能力和持續成長。
          </motion.p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="award-card"
            >
              <Card className="h-full hover:shadow-md transition-all duration-300 overflow-hidden border-none bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    {/* 獎項圖標 */}
                    <div className="p-3 rounded-xl bg-primary/10 mr-4 mt-1 flex-shrink-0">{award.icon}</div>

                    <div>
                      {/* 獎項類別和年份 */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-primary/5">
                          {award.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{award.year}</span>
                        </div>
                      </div>

                      {/* 獎項標題 */}
                      <h3 className="text-xl font-semibold mb-2">{award.title}</h3>

                      {/* 頒發機構 */}
                      <div className="text-sm text-muted-foreground mb-3">頒發機構: {award.organization}</div>

                      {/* 獎項描述 */}
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 成就統計 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-8 md:gap-16 px-8 py-4 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm">
            {[
              { label: "競賽獎項", value: "3+" },
              { label: "獎學金", value: "2+" },
              { label: "國際認可", value: "1+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
