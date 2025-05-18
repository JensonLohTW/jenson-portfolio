"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Code, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { projectsData } from "@/data/projects"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // 滾動到頁面頂部
    window.scrollTo(0, 0)
  }, [])

  // 過濾項目
  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">我的項目</h1>
        <Separator className="w-12 mx-auto mb-6" />
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          這裡展示了我參與開發的各種項目，涵蓋前端、後端、人工智能等多個領域。
        </p>

        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="搜索項目或技術..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">沒有找到匹配的項目</p>
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            清除搜索
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="block h-full"
              onClick={() => {
                // 確保點擊時立即滾動到頂部
                setTimeout(() => window.scrollTo(0, 0), 0)
              }}
            >
              <Card className="h-full hover:shadow-md transition-shadow border-border hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{project.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        <Code className="h-3 w-3" />
                        <span>{tech}</span>
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                    )}
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
          ))}
        </div>
      )}
    </div>
  )
}
