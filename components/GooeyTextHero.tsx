"use client"

import { useState, useEffect, useRef } from "react"

export default function GooeyTextHero() {
  const [text, setText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  // 确保"Sometimes naive."是第一个显示的文本
  const texts = ["Sometimes naive.", "創新", "專業", "高效", "Jenson Loh"]

  // 用于调试的引用
  const cycleCountRef = useRef(0)
  const isFirstRender = useRef(true)

  useEffect(() => {
    // 首次渲染时直接设置为第一个文本
    if (isFirstRender.current) {
      setText("")
      isFirstRender.current = false
    }

    const timeout = setTimeout(() => {
      const currentText = texts[currentTextIndex]

      if (isDeleting) {
        setText(currentText.substring(0, currentIndex - 1))
        setCurrentIndex((prev) => prev - 1)
        setTypingSpeed(50) // 删除时速度更快
      } else {
        setText(currentText.substring(0, currentIndex + 1))
        setCurrentIndex((prev) => prev + 1)
        setTypingSpeed(150) // 正常打字速度
      }

      // 如果完成当前文本的打字
      if (!isDeleting && currentIndex === currentText.length) {
        setTypingSpeed(2000) // 在结尾处暂停
        setIsDeleting(true)
      }
      // 如果删除了当前文本
      else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        cycleCountRef.current += 1 // 增加循环计数
        setTypingSpeed(500) // 在打下一个文本之前暂停
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentIndex, currentTextIndex, isDeleting, texts, typingSpeed])

  // 添加调试信息
  console.log(
    `Current text: "${text}", Index: ${currentTextIndex}, Deleting: ${isDeleting}, Cycles: ${cycleCountRef.current}`,
  )

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center relative z-10">
          <div className="h-[120px] md:h-[150px] flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              {text}
              <span className="animate-pulse">|</span>
            </h1>
            {/* 添加一个固定的文本，确保"Sometimes naive."始终可见 */}
            <p className="mt-4 text-xl text-gray-600">Sometimes naive.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
