"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Globe, Database, Server, Cpu, Lightbulb } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// 技能數據
const skillsData = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "CSS/SCSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "GraphQL", level: 75 },
    { name: "Redux", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 85 },
    { name: "Python", level: 80 },
    { name: "Django", level: 75 },
    { name: "FastAPI", level: 80 },
    { name: "RESTful API", level: 90 },
    { name: "Microservices", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Redis", level: 70 },
    { name: "Elasticsearch", level: 65 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 75 },
    { name: "CI/CD", level: 80 },
    { name: "AWS", level: 75 },
    { name: "GCP", level: 70 },
    { name: "Terraform", level: 65 },
  ],
  ai: [
    { name: "TensorFlow", level: 80 },
    { name: "PyTorch", level: 85 },
    { name: "NLP", level: 90 },
    { name: "機器學習", level: 85 },
    { name: "深度學習", level: 80 },
    { name: "數據分析", level: 85 },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            技術能力
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            我擁有全棧開發和人工智能領域的豐富經驗，以下是我的主要技術專長。
          </motion.p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="frontend" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline">前端開發</span>
                <span className="md:hidden">前端</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <Server className="h-4 w-4" />
                <span className="hidden md:inline">後端開發</span>
                <span className="md:hidden">後端</span>
              </TabsTrigger>
              <TabsTrigger value="database" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span className="hidden md:inline">數據庫</span>
                <span className="md:hidden">數據庫</span>
              </TabsTrigger>
              <TabsTrigger value="devops" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="hidden md:inline">DevOps</span>
                <span className="md:hidden">DevOps</span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                <span className="hidden md:inline">人工智能</span>
                <span className="md:hidden">AI</span>
              </TabsTrigger>
            </TabsList>

            {Object.entries(skillsData).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-foreground flex items-center">
                              <Lightbulb className="h-4 w-4 mr-2" />
                              {skill.name}
                            </div>
                            <Badge variant="outline">{skill.level}%</Badge>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* 專業技能卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Globe className="h-10 w-10" />,
              title: "前端專家",
              description: "專注於創建高性能、響應式和無障礙的用戶界面，使用最新的前端技術和框架。",
            },
            {
              icon: <Server className="h-10 w-10" />,
              title: "全棧開發",
              description: "能夠從前端到後端進行全棧開發，構建完整的應用程序解決方案，確保各層之間的無縫集成。",
            },
            {
              icon: <Cpu className="h-10 w-10" />,
              title: "AI 研究",
              description: "在自然語言處理和機器學習領域有深入研究，能夠將 AI 技術應用於實際業務問題。",
            },
          ].map((skill, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-accent mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
