"use client"
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation"
import { gsap } from "gsap"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function AboutMe() {
  // 使用自定义的GSAP动画钩子
  const aboutRef = useGSAPAnimation<HTMLDivElement>(() => {
    // 添加 .about-content 类到需要动画的元素
    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2, // 添加延迟，确保页面已加载
      },
    )
  }, [])

  return (
    <section id="about" ref={aboutRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold about-content">關於我</h2>
            <Separator className="about-content" />
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground about-content">
                我是一名擁有豐富經驗的產品經理和技術專家，專注於電商平台、企業數字化和人工智能應用領域。
              </p>
              <p className="text-lg text-muted-foreground about-content">
                我擅長將複雜的業務需求轉化為可執行的技術方案，並帶領團隊從概念到落地實施。我的背景橫跨產品設計、數據分析和技術開發，使我能夠在項目中擔任連接各個領域的橋樑角色。
              </p>
              <p className="text-lg text-muted-foreground about-content">
                在過去的項目中，我成功領導了多個大型電商平台和企業數字化系統的開發，顯著提升了業務效率和用戶體驗。
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 about-content">
              <Button asChild>
                <Link href="#contact">
                  聯繫我 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  下載簡歷 <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 about-content">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
              <div className="relative z-10 text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Jenson Loh</h3>
                <div className="mt-4 flex justify-center space-x-2">{/* 社交媒體圖標可以放在這裡 */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
