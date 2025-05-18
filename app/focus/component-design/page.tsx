"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Lightbulb, Layout, Layers, Puzzle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

export default function ComponentDesignPage() {
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
          用戶友好性設計與組件封裝策略
        </motion.h1>
        <Separator className="w-24 mb-6" />
      </div>

      {/* 主圖 */}
      <div className="mb-12 relative rounded-lg overflow-hidden">
        <div className="aspect-video relative">
          <Image src="/component-design.png" alt="用戶友好性設計與組件封裝策略" fill className="object-cover" />
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
              在數字產品日益複雜的今天，我常思考：如何在保持產品功能豐富的同時，確保用戶體驗的簡潔與一致？
            </p>
            <p className="mb-4">
              我認為答案在於組件化設計思維。就像樂高積木一樣，複雜的產品可以由簡單、標準化的組件構建而成。這種方法不僅提高了開發效率，更重要的是確保了用戶體驗的一致性。當用戶在不同頁面和功能間切換時，熟悉的交互模式和視覺元素能夠降低認知負擔，提升使用流暢度。
            </p>
            <p className="mb-4">
              然而，組件封裝也面臨著靈活性與標準化的平衡問題。過度標準化可能限制創新，而過度自定義則會導致混亂。我相信，理想的組件系統應該像一種語言，有基本語法規則（核心組件），但允許創造性表達（可擴展性）。
            </p>
            <p>
              最終，優秀的組件設計不僅服務於用戶，也服務於開發團隊。當設計師和工程師使用同一套組件語言溝通時，協作效率會大幅提升。這種「設計即開發」的理念，是我一直追求的工作方式。
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 行業簡介 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Layout className="mr-2 h-5 w-5 text-primary" />
          行業簡介
        </h2>
        <div className="space-y-6">
          <p>
            組件化設計已成為現代前端開發的核心範式。從早期的Bootstrap到現代的設計系統如Material Design、Ant
            Design等，組件庫的發展反映了行業對標準化、可重用UI元素的需求。根據調查，使用設計系統的團隊能將產品開發時間縮短50%以上。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">設計系統趨勢</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>原子設計方法論的廣泛採用</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>設計代碼一致性工具的發展</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>無障礙設計的標準化</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>設計系統的版本控制與治理</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <Puzzle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">組件開發技術</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>組合式API與Hook模式</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>狀態管理的簡化與優化</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>CSS-in-JS與原子CSS方案</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>組件自動化測試與文檔生成</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p>
            在前後端協作方面，API設計與組件設計的融合成為新趨勢。GraphQL等技術允許前端更精確地請求所需數據，而BFF（Backend
            For Frontend）模式則為不同前端提供定制化API，優化數據傳輸效率。
          </p>

          <p>
            用戶體驗設計也在向更加系統化的方向發展。微交互、動效系統、聲音反饋等細節被納入組件設計中，創造更加豐富、連貫的用戶體驗。同時，無障礙設計不再是事後考慮，而是組件設計的核心要素，確保產品對所有用戶都友好可用。
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline">設計系統</Badge>
            <Badge variant="outline">原子設計</Badge>
            <Badge variant="outline">組件庫</Badge>
            <Badge variant="outline">Storybook</Badge>
            <Badge variant="outline">Figma組件</Badge>
            <Badge variant="outline">主題定制</Badge>
            <Badge variant="outline">無障礙設計</Badge>
            <Badge variant="outline">微前端</Badge>
          </div>
        </div>
      </div>

      {/* 相關案例 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Settings className="mr-2 h-5 w-5 text-primary" />
          相關案例
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Shopify Polaris</h3>
              <p className="text-muted-foreground mb-4">
                Shopify的設計系統，不僅提供UI組件，還包含完整的設計原則、內容指南和開發文檔，確保產品體驗一致性。
              </p>
              <Badge>設計系統</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Airbnb的DLS</h3>
              <p className="text-muted-foreground mb-4">
                Airbnb的設計語言系統(DLS)將設計與代碼緊密結合，實現設計到開發的無縫轉換，大幅提升團隊效率。
              </p>
              <Badge>設計語言</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Headless UI</h3>
              <p className="text-muted-foreground mb-4">
                無樣式的UI組件庫，專注於功能和可訪問性，允許開發者完全自定義外觀，同時保持良好的用戶體驗。
              </p>
              <Badge>無頭組件</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Atlassian設計系統</h3>
              <p className="text-muted-foreground mb-4">
                跨多個產品的統一設計系統，確保Jira、Confluence等產品擁有一致的用戶體驗，降低用戶學習成本。
              </p>
              <Badge>產品一致性</Badge>
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
