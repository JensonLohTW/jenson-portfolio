import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingActionButton from "@/components/FloatingActionButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jenson Loh - 懂技術的產品經理",
  description: "Jenson Loh 的個人網站，展示產品管理能力、技術理解和專業經驗。",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 添加useEffect来控制初始滚动位置
  // 注意：这需要将组件转换为客户端组件
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
