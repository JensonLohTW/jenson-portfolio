import type { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackgroundDecoration from "@/components/BackgroundDecoration"

/**
 * 作品集頁面佈局
 */
export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <BackgroundDecoration />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-16">{children}</main>
      <Footer />
    </div>
  )
}
