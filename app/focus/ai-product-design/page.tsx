"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Lightbulb, Zap, BarChart, Users, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

export default function AIProductDesignPage() {
  // 頁面加載時滾動到頂部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      {/* 返回按鈕 */}
      <Link href="/#focus">
        <Button variant="ghost" className="mb-8 -ml-4 group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          返回關注領域
        </Button>
      </Link>

      {/* 頁面標題 */}
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          AI 賦能產品設計與智能決策
        </motion.h1>
        <Separator className="w-24 mb-6" />
      </div>

      {/* 主圖 */}
      <div className="mb-12 relative rounded-lg overflow-hidden">
        <div className="aspect-video relative">
          <Image src="/ai-product-design.png" alt="AI 賦能產品設計與智能決策" fill className="object-cover" />
        </div>
      </div>

      {/* 個人迷思 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-primary" />
          個人迷思
        </h2>
        <Card className="mb-6">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              在AI快速發展的今天，我常思考：AI究竟應該如何融入產品設計？它是工具還是合作夥伴？
            </p>
            <p className="mb-4">
              我認為，AI不應該只是一個被動的工具，而應該成為產品設計過程中的積極參與者。當我們將AI視為合作夥伴時，它能夠提供獨特的視角和洞察，幫助我們突破思維局限，創造出更具創新性和人性化的產品。
            </p>
            <p className="mb-4">
              同時，我也思考AI在決策過程中的角色。數據驅動決策已經成為共識，但如何平衡算法推薦與人類直覺？我相信最佳的決策模式是人機協作，讓AI處理大量數據分析和模式識別，而人類則負責價值判斷和創造性思考。
            </p>
            <p>
              最終，AI賦能的產品設計不是為了取代人類創造力，而是為了增強它。我們應該追求的是人機協同的設計方法，讓AI和人類各自發揮所長，共同創造更好的產品體驗。
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 行業簡介 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BarChart className="mr-2 h-5 w-5 text-primary" />
          行業簡介
        </h2>
        <div className="space-y-6">
          <p>
            AI在產品設計領域的應用正經歷爆炸式增長。從生成式設計工具到智能用戶研究，AI正在重塑產品開發的每個環節。根據最新研究，採用AI輔助設計的團隊能夠將產品迭代速度提升40%，同時顯著提高創新成功率。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">當前趨勢</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>生成式AI工具在UI/UX設計中的應用</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>個性化推薦系統的精準度提升</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>AI輔助的用戶研究與洞察挖掘</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>預測性分析在產品決策中的應用</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">關鍵技術</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">機器學習</Badge>
                  <Badge variant="outline">自然語言處理</Badge>
                  <Badge variant="outline">計算機視覺</Badge>
                  <Badge variant="outline">推薦算法</Badge>
                  <Badge variant="outline">A/B測試</Badge>
                  <Badge variant="outline">用戶行為分析</Badge>
                  <Badge variant="outline">預測性分析</Badge>
                  <Badge variant="outline">生成式AI</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <p>
            然而，AI賦能產品設計也面臨諸多挑戰。數據隱私、算法偏見、用戶信任等問題需要產品設計師認真對待。成功的AI產品需要在技術創新與人文關懷之間取得平衡，確保技術始終服務於人類需求，而非相反。
          </p>

          <p>
            展望未來，AI與產品設計的融合將更加深入。我們可能會看到更多的自適應界面、情境感知系統和預測性體驗。產品設計師的角色也將演變，從純粹的設計者轉變為AI系統的訓練者和協作者。這一轉變要求設計師不斷學習和適應，掌握新技能，同時保持對人類需求和情感的敏感度。
          </p>
        </div>
      </div>

      {/* 相關案例 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Users className="mr-2 h-5 w-5 text-primary" />
          相關案例
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Netflix的個性化推薦系統</h3>
              <p className="text-muted-foreground mb-4">
                Netflix利用AI分析用戶觀看習慣，提供高度個性化的內容推薦，大幅提升用戶滿意度和留存率。
              </p>
              <Badge>推薦系統</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Spotify的Discovery Weekly</h3>
              <p className="text-muted-foreground mb-4">
                Spotify每週為用戶生成個性化歌單，通過AI分析聽歌習慣和偏好，幫助用戶發現新音樂。
              </p>
              <Badge>個性化體驗</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Airbnb的動態定價系統</h3>
              <p className="text-muted-foreground mb-4">
                Airbnb利用AI分析市場需求、季節性變化等因素，為房東提供智能定價建議，優化收益。
              </p>
              <Badge>智能決策</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Figma的AI設計助手</h3>
              <p className="text-muted-foreground mb-4">
                Figma整合AI功能，幫助設計師自動生成設計元素、優化佈局，提高設計效率。
              </p>
              <Badge>生成式設計</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 返回按鈕 */}
      <div className="text-center">
        <Link href="/#focus">
          <Button className="rounded-full">
            返回關注領域
            <ArrowLeft className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
