"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// 確保 GSAP 插件已註冊
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAPAnimation<T extends HTMLElement>(callback: () => void, dependencies: any[] = []) {
  const ref = useRef<T>(null)

  useEffect(() => {
    // 確保 DOM 元素已加載
    if (!ref.current) return

    // 創建 GSAP 上下文
    const ctx = gsap.context(() => {
      callback()
    }, ref)

    // 清理函數
    return () => {
      ctx.revert() // 清理所有動畫
    }
  }, dependencies)

  return ref
}
