"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Quote } from "lucide-react"

/**
 * 推薦評價類型定義
 */
interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  avatar?: string
  content: string
  relationship: string
}

/**
 * 推薦評價數據 - 只保留一條評價
 */
const testimonial: Testimonial = {
  id: "testimonial-himalaya",
  name: "張明",
  position: "產品部主管",
  company: "喜馬拉雅科技",
  avatar: "/testimonials/person1.png",
  content: "可靠、好學、認真",
  relationship: "前雇主",
}

/**
 * 推薦和評價組件
 *
 * 展示客戶、同事和合作夥伴的推薦評價
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 標題部分 */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            推薦與評價
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            來自前雇主的真實評價，展示我的專業能力和工作態度。
          </motion.p>
        </div>

        {/* 單條推薦評價 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12 relative">
              <div className="absolute top-6 left-8 opacity-10">
                <Quote className="h-24 w-24" />
              </div>

              <div className="relative z-10">
                {/* 評價內容 */}
                <p className="text-2xl md:text-3xl font-medium text-center italic mb-10">{testimonial.content}</p>

                {/* 評價者信息 */}
                <div className="flex items-center justify-center">
                  <Avatar className="h-14 w-14 mr-4">
                    <AvatarImage
                      src={testimonial.avatar || "/placeholder.svg?height=56&width=56&query=person"}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-md text-muted-foreground">
                      {testimonial.position}，{testimonial.company}
                    </p>
                    <Badge variant="outline" className="mt-1">
                      {testimonial.relationship}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
