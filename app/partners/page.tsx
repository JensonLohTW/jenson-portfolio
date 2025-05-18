"use client"

import { useEffect } from "react"
import PartnersShowcase from "@/components/PartnersShowcase"

/**
 * 合作夥伴頁面
 */
export default function PartnersPage() {
  // 頁面加載時滾動到頂部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <PartnersShowcase />
}
