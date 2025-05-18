import type { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackgroundDecoration from "@/components/BackgroundDecoration"

/**
 * 博客頁面佈局
 *
 * 為所有博客相關頁面提供一致的導航欄和頁腳
 */
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <BackgroundDecoration />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-16">{children}</main>
      <Footer />
    </div>
  )
}
