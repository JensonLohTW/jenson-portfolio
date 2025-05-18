"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu, ChevronDown, Code, Database, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// 導航鏈接數據
const navLinks = [
  { name: "關於我", href: "#about" },
  { name: "技能", href: "#skills" },
  { name: "經驗", href: "#experience" },
  { name: "項目", href: "#projects", hasDropdown: true },
  { name: "論文", href: "#publications" },
  { name: "關注領域", href: "#focus" },
  { name: "聯繫", href: "#contact" },
]

// 項目快速鏈接 - 修正項目ID以匹配data/projects.ts中的ID
const projectLinks = [
  {
    name: "全渠道電商平台",
    href: "/projects/integrated-ecommerce-platform",
    description: "整合線上線下渠道的全方位電商解決方案",
    icon: <Database className="h-5 w-5 text-blue-500" />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "招標爬蟲系統",
    href: "/projects/tender-crawler-system",
    description: "自動化收集與分析政府招標信息的智能系統",
    icon: <Code className="h-5 w-5 text-green-500" />,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "智能客服系統",
    href: "/projects/intelligent-customer-service",
    description: "結合AI與人工客服的全流程服務平台",
    icon: <MessageCircle className="h-5 w-5 text-purple-500" />,
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [showProjectDropdown, setShowProjectDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 處理滾動事件
  useEffect(() => {
    const handleScroll = () => {
      // 檢測是否滾動超過閾值
      setScrolled(window.scrollY > 20)

      // 檢測當前活動的部分
      const sections = navLinks.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // 處理點擊外部關閉下拉菜單
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProjectDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // 平滑滾動到錨點
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 只有當href是錨點鏈接時才執行滾動邏輯
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        // 獲取導航欄高度，用於計算偏移量
        const navbarHeight = document.querySelector("header")?.offsetHeight || 0

        // 計算元素的位置，考慮導航欄的高度
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight - 20 // 額外添加20px的間距

        // 使用 window.scrollTo 代替 scrollIntoView，以便應用自定義偏移
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
    // 如果不是錨點鏈接，則正常導航（不阻止默認行為）
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gradient">Jenson Loh</span>
          </Link>

          {/* 桌面導航 */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setShowProjectDropdown(true)}
                  onMouseLeave={() => setShowProjectDropdown(false)}
                >
                  <button
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      activeSection === link.href.substring(1)
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${showProjectDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* 項目下拉菜單 - 現代化設計 */}
                  <AnimatePresence>
                    {showProjectDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 mt-2 w-72 rounded-xl overflow-hidden"
                        style={{
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="backdrop-blur-xl bg-background/80 border border-border/50 rounded-xl overflow-hidden">
                          <div className="p-2">
                            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">
                              精選項目
                            </div>
                            {projectLinks.map((project, index) => (
                              <Link
                                key={project.name}
                                href={project.href}
                                className="block rounded-lg hover:bg-accent/50 transition-all duration-200 mb-1 last:mb-0 group"
                              >
                                <div className="p-3">
                                  <div className="flex items-start">
                                    <div
                                      className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mr-3`}
                                    >
                                      {project.icon}
                                    </div>
                                    <div>
                                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                        {project.name}
                                      </div>
                                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                        {project.description}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            <div className="mt-1 pt-1 border-t border-border/50">
                              <Link
                                href="/projects"
                                className="block text-xs text-center py-2 text-primary hover:text-primary/80 font-medium transition-colors"
                              >
                                查看所有項目
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ),
            )}

            {/* 主題切換按鈕 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
              aria-label={theme === "dark" ? "切換到亮色模式" : "切換到暗色模式"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </nav>

          {/* 移動端導航 */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
              aria-label={theme === "dark" ? "切換到亮色模式" : "切換到暗色模式"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="打開菜單">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) =>
                    link.hasDropdown ? (
                      <div key={link.name} className="space-y-2">
                        <div className="px-3 py-2 font-medium">{link.name}</div>
                        <div className="space-y-1">
                          {projectLinks.map((project) => (
                            <Link
                              key={project.name}
                              href={project.href}
                              className="flex items-center px-3 py-2 rounded-lg hover:bg-accent/50 transition-all duration-200 group"
                            >
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-md bg-gradient-to-br ${project.color} flex items-center justify-center mr-3`}
                              >
                                {project.icon}
                              </div>
                              <div>
                                <div className="font-medium text-sm group-hover:text-primary transition-colors">
                                  {project.name}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                  {project.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/projects"
                            className="block text-xs text-center py-2 mt-1 text-primary hover:text-primary/80 font-medium transition-colors"
                          >
                            查看所有項目
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          scrollToSection(e, link.href)
                        }}
                        className={`px-3 py-2 rounded-md transition-colors ${
                          activeSection === link.href.substring(1)
                            ? "bg-accent text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ),
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
