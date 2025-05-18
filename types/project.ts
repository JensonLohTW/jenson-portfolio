export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  productPerspective: string
  technicalPerspective: string
  technologies: string[]
  challenges: string[]
  outcomes: string[]
  date: string
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
}
