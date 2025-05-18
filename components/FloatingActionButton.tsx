"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, ArrowUp, Moon, Sun } from "lucide-react"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const { theme, setTheme } = useTheme()

  // 控制按鈕顯示，滾動超過 300px 才顯示
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    // 添加延迟，确保不会影响初始加载
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // 初始检查
    }, 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // 回到頂部功能
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setIsOpen(false)
  }

  // 切換主題功能
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {/* 展開的按鈕 */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* 回到頂部按鈕 */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    size="icon"
                    className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={scrollToTop}
                    aria-label="回到頂部"
                  >
                    <ArrowUp className="h-5 w-5" />
                  </Button>
                </motion.div>

                {/* 切換主題按鈕 */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Button
                    size="icon"
                    className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={toggleTheme}
                    aria-label={theme === "dark" ? "切換到亮色模式" : "切換到暗色模式"}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* 主按鈕 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              className={`h-14 w-14 rounded-full shadow-lg ${
                isOpen ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
              } text-primary-foreground`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "關閉選項" : "打開選項"}
            >
              <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                <Plus className="h-6 w-6" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
