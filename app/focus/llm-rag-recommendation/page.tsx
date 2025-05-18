"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Lightbulb, Database, Code, MessageSquare, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

export default function LLMRAGRecommendationPage() {
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
          LLM、RAG、推薦系統的實踐與探索
        </motion.h1>
        <Separator className="w-24 mb-6" />
      </div>

      {/* 主圖 */}
      <div className="mb-12 relative rounded-lg overflow-hidden">
        <div className="aspect-video relative">
          <Image src="/llm-rag-recommendation.png" alt="LLM、RAG、推薦系統的實踐與探索" fill className="object-cover" />
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
              大語言模型（LLM）的出現徹底改變了我們與信息互動的方式，但它們也帶來了一系列深刻的思考。
            </p>
            <p className="mb-4">
              我常思考LLM的「幻覺」問題：當模型生成看似合理但實際上不準確的內容時，用戶如何辨別真偽？這促使我深入研究RAG（檢索增強生成）技術，將LLM的生成能力與可靠的知識庫結合，確保輸出內容的準確性和可靠性。
            </p>
            <p className="mb-4">
              另一個迷思是關於推薦系統與用戶自主性的平衡。當算法越來越精準地預測我們的喜好時，我們是否會被困在信息繭房中？如何設計既能提供個性化體驗，又能鼓勵用戶探索新領域的推薦系統？
            </p>
            <p>
              我相信，技術的終極目標是增強而非替代人類能力。無論是LLM、RAG還是推薦系統，都應該作為工具，幫助人們更高效地獲取信息、做出決策，同時保留人類的判斷力和創造力。這種人機協作的模式，才是我追求的技術發展方向。
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 行業簡介 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Database className="mr-2 h-5 w-5 text-primary" />
          行業簡介
        </h2>
        <div className="space-y-6">
          <p>
            大語言模型（LLM）技術在近年來取得了突破性進展，從GPT-4到Claude再到Llama，模型規模和能力不斷提升。然而，LLM面臨的主要挑戰是知識時效性和準確性，這促使RAG（檢索增強生成）技術的快速發展。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">LLM發展趨勢</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>模型規模更小但性能更優的高效LLM</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>多模態能力的整合（文本、圖像、音頻）</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>領域特定微調與專業化模型</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>本地部署與邊緣計算的LLM應用</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">RAG技術創新</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>高效向量數據庫與相似度搜索</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>混合檢索策略（關鍵詞+語義）</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>多跳推理與複雜查詢處理</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>自適應上下文選擇與優化</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p>
            推薦系統也在經歷重大變革，從基於協同過濾的傳統方法，到結合深度學習的混合推薦模型，再到如今與LLM結合的新一代推薦系統。這些技術融合正在創造更加個性化、解釋性強且能理解用戶意圖的推薦體驗。
          </p>

          <p>
            值得注意的是，這些技術的融合正在催生新的應用場景：智能知識管理系統、個性化學習助手、企業內部智能搜索等。根據市場研究，到2025年，全球80%的企業將部署某種形式的LLM或RAG系統來提升知識工作者的生產力。
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline">向量數據庫</Badge>
            <Badge variant="outline">語義搜索</Badge>
            <Badge variant="outline">嵌入模型</Badge>
            <Badge variant="outline">知識圖譜</Badge>
            <Badge variant="outline">混合推薦</Badge>
            <Badge variant="outline">多模態LLM</Badge>
            <Badge variant="outline">提示工程</Badge>
            <Badge variant="outline">上下文學習</Badge>
          </div>
        </div>
      </div>

      {/* 相關案例 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Code className="mr-2 h-5 w-5 text-primary" />
          相關案例
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Perplexity AI</h3>
              <p className="text-muted-foreground mb-4">
                結合搜索引擎與LLM的問答系統，通過RAG技術提供有來源依據的回答，解決LLM幻覺問題。
              </p>
              <Badge>RAG應用</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">GitHub Copilot</h3>
              <p className="text-muted-foreground mb-4">
                基於LLM的代碼助手，能理解開發者意圖並生成相關代碼，提高編程效率。
              </p>
              <Badge>LLM應用</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Notion AI</h3>
              <p className="text-muted-foreground mb-4">
                將LLM與個人知識庫結合，幫助用戶撰寫、編輯和總結文檔，提升知識工作者生產力。
              </p>
              <Badge>知識管理</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">TikTok推薦算法</h3>
              <p className="text-muted-foreground mb-4">
                結合用戶行為數據與內容特徵的高效推薦系統，能快速學習用戶偏好並推送相關內容。
              </p>
              <Badge>推薦系統</Badge>
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
