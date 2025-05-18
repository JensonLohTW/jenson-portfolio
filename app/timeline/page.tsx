"use client"

import { useEffect } from "react"
import TimelineView from "@/components/TimelineView"

/**
 * 時間線頁面
 */
export default function TimelinePage() {
  // 頁面加載時滾動到頂部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <TimelineView />
}
