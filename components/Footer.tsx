"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ArrowRight, Heart, ExternalLink, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [year, setYear] = useState(new Date().getFullYear())
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [copied, setCopied] = useState(false)
  const fullText = "Sometimes naive."
  const contactEmail = "jenson_loh_tw@outlook.com"

  // 确保年份在客户端渲染时更新
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  // 打字机效果
  useEffect(() => {
    let currentIndex = 0
    let direction = "typing" // typing or deleting

    // 光标闪烁效果
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    // 打字效果
    const typingInterval = setInterval(() => {
      if (direction === "typing") {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          // 完成打字后等待一段时间
          setTimeout(() => {
            direction = "deleting"
          }, 2000)
        }
      } else {
        if (currentIndex > 0) {
          setTypedText(fullText.substring(0, currentIndex - 1))
          currentIndex--
        } else {
          // 删除完成后等待一段时间再重新开始
          setTimeout(() => {
            direction = "typing"
          }, 500)
        }
      }
    }, 150)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(typingInterval)
    }
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // 這裡可以添加訂閱邏輯
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(contactEmail).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  // 社交媒体链接数据
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    {
      icon: Mail,
      href: "#",
      label: "Email",
      onClick: copyEmailToClipboard,
    },
  ]

  // 快速链接数据
  const quickLinks = [
    { name: "關於我", href: "#about" },
    { name: "技術能力", href: "#skills" },
    { name: "工作經驗", href: "#experience" },
    { name: "項目展示", href: "#projects" },
    { name: "研究論文", href: "#publications" },
    { name: "當前關注", href: "#focus" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-background/90 pt-24 pb-12 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,255,0.2),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,120,120,0.2),transparent_40%)]"></div>
      </div>

      {/* 顶部装饰 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
        <div className="w-28 h-14 bg-gradient-to-r from-primary/80 to-primary/40 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md">
          <div className="w-24 h-10 bg-background/90 rounded-full backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* 关于部分 */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-5 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                關於 Jenson
              </h3>
              <p className="text-muted-foreground/90 mb-7 leading-relaxed text-base">
                我是一位懂技術的產品經理，擁有技術背景和產品思維。我專注於將用戶需求、業務目標和技術可行性有機結合，通過數據驅動的方法和用戶中心的設計理念，打造卓越的產品體驗。
              </p>
              <div className="flex space-x-4 relative">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        onClick={social.onClick}
                      >
                        <social.icon className="h-5 w-5 text-primary/80" />
                      </a>
                    </Button>
                  </motion.div>
                ))}

                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -50, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, y: -40 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 0.4,
                      }}
                      className="absolute left-0 z-50"
                    >
                      <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-md border border-primary/20 shadow-lg rounded-lg px-4 py-2.5 text-sm">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground">郵箱已複製到剪貼板</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* 快速链接 */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-5 text-foreground">快速鏈接</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 订阅部分 */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-5 text-foreground">訂閱更新</h3>
            <p className="text-muted-foreground/90 mb-5 leading-relaxed">訂閱我的郵件列表，獲取最新動態。</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex overflow-hidden rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 focus-within:border-primary/60 focus-within:ring-1 focus-within:ring-primary/30">
                <Input
                  type="email"
                  placeholder="您的電子郵件"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-0 bg-transparent focus-visible:ring-0 rounded-none px-4"
                />
                <Button
                  type="submit"
                  className="rounded-none bg-primary/80 hover:bg-primary text-primary-foreground transition-all duration-300"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-500 dark:text-green-400 text-sm"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400"></span>
                  <span>感謝訂閱！</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* 版权信息 */}
        <Separator className="mb-8 opacity-20" />
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground/70">
          <motion.p
            className="text-sm mb-4 md:mb-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            © {year} Jenson Loh. 保留所有權利。
          </motion.p>

          <motion.div
            className="flex items-center text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span>使用 </span>
            <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Heart className="h-3 w-3 mx-1.5 text-pink-500" />
            </motion.div>
            <span> 和 </span>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mx-1 hover:underline flex items-center group"
            >
              React
              <ExternalLink className="h-2.5 w-2.5 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <span> 構建</span>
            <motion.span
              className="ml-2 italic text-primary relative group inline-flex"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {typedText}
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity ml-0.5`}>|</span>
              <span className="absolute -bottom-px left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
            </motion.span>
          </motion.div>

          <motion.div
            className="text-sm mt-4 md:mt-0 relative group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <button
              onClick={copyEmailToClipboard}
              className="inline-flex items-center hover:text-primary transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-primary/50 mr-2"></span>
              通過郵件聯繫我
              <span className="ml-1.5 font-medium">{contactEmail}</span>
              <Copy className="h-3.5 w-3.5 ml-1.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
