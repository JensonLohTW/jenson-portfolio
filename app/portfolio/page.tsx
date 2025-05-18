"use client"

import { useEffect } from "react"
import InteractivePortfolio from "@/components/InteractivePortfolio"

/**
 * 作品集頁面
 */
export default function PortfolioPage() {
  // 頁面加載時滾動到頂部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <InteractivePortfolio />
}
