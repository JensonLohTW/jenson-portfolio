import { projectsData } from "@/data/projects"
// @ts-ignore
import ProjectClient from "./project-client"

// 在构建时预生成所有项目页面静态参数
export async function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }))
}

// 服务器组件: 根据 params.id 查找项目并传给客户端组件
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id) || null
  return <ProjectClient project={project} />
}
