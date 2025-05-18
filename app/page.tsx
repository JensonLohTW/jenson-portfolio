"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AboutMe from "@/components/AboutMe"
import Experience from "@/components/Experience"
import Publications from "@/components/Publications"
import CurrentFocus from "@/components/CurrentFocus"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackgroundDecoration from "@/components/BackgroundDecoration"
import ProjectsSection from "@/components/ProjectsSection"
import BentoGrid from "@/components/BentoGrid"
import BlogSection from "@/components/BlogSection"
import Testimonials from "@/components/Testimonials"
import FloatingActionButton from "@/components/FloatingActionButton"

// 導入新的整合能力模塊
import SkillsTabs from "@/components/SkillsTabs"
import IndustryTrends from "@/components/IndustryTrends"

// 在import部分添加新的Awards組件
import Awards from "@/components/Awards"

// 註冊 GSAP 插件
gsap.registerPlugin(ScrollTrigger)

/**
 * 主頁組件
 *
 * 整合所有部分組件，構建完整的個人網站
 */
export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 确保页面加载时滚动到顶部
    window.scrollTo(0, 0)

    // 初始化頁面動畫
    const ctx = gsap.context(() => {
      // 移除对不存在元素的动画
      // 之前的代码尝试动画化 .hero-content 元素，但该元素不存在
      // 如果需要添加入场动画，请确保目标元素存在

      // 例如，可以这样添加安全的动画：
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        gsap.fromTo(
          aboutSection,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" },
        )
      }
    }, mainRef) // 使用 mainRef 作为上下文

    return () => ctx.revert() // 清理動畫
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <BackgroundDecoration />
      <Navbar />

      {/* 主要內容區域 */}
      <main className="relative z-10" ref={mainRef}>
        {/* 各個模塊區域 */}
        <div className="space-y-20 pb-20">
          <AboutMe />
          <BentoGrid />

          {/* 整合的能力模塊 */}
          <SkillsTabs />
          <IndustryTrends />

          <Experience />
          {/* 添加獲獎情況模塊 */}
          <Awards />
          <ProjectsSection />
          <Publications />
          <BlogSection />
          <Testimonials />
          <CurrentFocus />
        </div>
      </main>

      <FloatingActionButton />
      <Footer />
    </div>
  )
}
