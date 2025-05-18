"use client"

import { useEffect } from "react"
import BlogSection from "@/components/BlogSection"

/**
 * 博客列表頁面
 */
export default function BlogPage() {
  // 頁面加載時滾動到頂部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <BlogSection />
}
