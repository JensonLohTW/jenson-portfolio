import dynamic from "next/dynamic"
import { projectsData } from "@/data/projects"

// 动态引入客户端组件渲染项目详情
const ProjectClient = dynamic(() => import("./project-client"), { ssr: false })

// 在构建时预生成所有项目页面静态参数
export async function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }))
}

// 服务器组件: 根据 params.id 查找项目并传给客户端组件
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id) || null
  return <ProjectClient project={project} />
}
