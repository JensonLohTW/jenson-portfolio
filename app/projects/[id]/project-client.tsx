"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  Code,
  ExternalLink,
  Github,
  Server,
  Database,
  Cpu,
  Shield,
  Lock,
  BarChart,
  Users,
  ShoppingBag,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { type Project } from "@/data/projects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

interface ProjectClientProps {
  project: Project | null
}

export default function ProjectClient({ project }: ProjectClientProps) {
  const router = useRouter()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-4xl text-center">
        <h1 className="text-2xl font-bold mb-4">項目未找到</h1>
        <p className="text-muted-foreground mb-8">抱歉，您請求的項目不存在或已被移除。</p>
        <Button asChild>
          <Link href="/projects">返回項目列表</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* 将原 page.tsx 中的 UI 代码粘贴到这里，使用 project 变量代替状态 */}
      {/* ... UI 代码略 ... */}
    </>
  )
} 