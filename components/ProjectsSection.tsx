"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Briefcase, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projectsData } from "@/data/projects"
import { Separator } from "@/components/ui/separator"
import type { Project } from "@/data/projects"

export default function ProjectsSection() {
  // 修改 featuredProjects 的獲取方式，確保新的項目被包含
  const featuredProjects = [
    projectsData.find((p) => p.id === "tender-crawler-system"),
    projectsData.find((p) => p.id === "integrated-ecommerce-platform"),
    projectsData.find((p) => p.id === "intelligent-customer-service"),
  ].filter(Boolean) as Project[]

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            專案作品
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            以下是我參與開發的一些代表性項目，每個項目都從產品經理和工程師的角度提供了詳細的視角。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="block h-full"
                onClick={() => {
                  // 確保點擊時立即滾動到頂部
                  setTimeout(() => window.scrollTo(0, 0), 0)
                }}
              >
                <Card className="h-full hover:shadow-md transition-shadow border-border hover:border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        <span>產品視角</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Code className="h-3 w-3" />
                        <span>技術視角</span>
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full group">
                      查看詳情
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            onClick={() => {
              // 確保點擊時立即滾動到頂部
              setTimeout(() => window.scrollTo(0, 0), 0)
            }}
          >
            <Link href="/projects">
              查看所有專案
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
