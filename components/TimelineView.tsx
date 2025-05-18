"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * 時間線事件類型定義
 */
interface TimelineEvent {
  id: string
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string | "present"
  description: string
  details?: string[]
  achievements?: string[]
  skills?: string[]
  type: "work" | "education" | "award"
  url?: string
}

/**
 * 時間線事件數據
 */
const timelineEvents: TimelineEvent[] = [
  // 工作經驗
  {
    id: "job-techcorp",
    title: "高級前端工程師",
    organization: "TechCorp Inc.",
    location: "台北",
    startDate: "2020-06",
    endDate: "present",
    description:
      "負責公司核心產品的前端架構設計和開發，使用 React 和 TypeScript 構建高性能 Web 應用。帶領前端團隊實施最佳實踐和新技術，提升產品用戶體驗和開發效率。",
    details: [
      "設計和實現公司核心產品的前端架構，確保可擴展性和可維護性",
      "帶領 5 人前端團隊，制定技術標準和開發流程",
      "與產品和設計團隊密切合作，將設計概念轉化為高質量的用戶界面",
      "優化前端性能，提高應用加載速度和運行效率",
      "指導初級開發人員，組織技術分享和培訓活動",
    ],
    achievements: [
      "重構前端架構，提升應用性能 40%",
      "實施組件庫和設計系統，加速開發流程",
      "優化 CI/CD 流程，減少 50% 部署時間",
      "推動採用 TypeScript，減少 30% 的生產環境錯誤",
    ],
    skills: ["React", "TypeScript", "Redux", "Next.js", "Tailwind CSS", "GraphQL", "Jest", "CI/CD"],
    type: "work",
    url: "https://techcorp.example.com",
  },
  {
    id: "job-ai-research",
    title: "研究科學家",
    organization: "AI Research Lab",
    location: "新竹",
    startDate: "2018-03",
    endDate: "2020-05",
    description:
      "專注於自然語言處理和機器學習研究，開發創新算法和模型。參與多個研究項目，發表多篇學術論文，並將研究成果應用於實際產品中。",
    details: [
      "設計和實現自然語言處理模型，用於文本分類、情感分析和命名實體識別",
      "開發機器學習算法，提高模型準確性和效率",
      "撰寫研究論文並在頂級會議和期刊上發表",
      "將研究成果轉化為實用的 API 和工具",
      "指導研究生完成碩士論文研究",
    ],
    achievements: [
      "開發新型 NLP 模型，提高文本分類準確率 15%",
      "設計高效數據處理流程，加速模型訓練",
      "發表 3 篇研究論文於頂級 AI 會議",
      "指導 3 名研究生完成碩士論文研究",
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "機器學習", "深度學習", "數據分析"],
    type: "work",
    url: "https://ai-research.example.com",
  },
  {
    id: "job-startupx",
    title: "軟體工程師",
    organization: "StartupX",
    location: "台北",
    startDate: "2016-07",
    endDate: "2018-02",
    description:
      "作為早期團隊成員，參與產品從零到一的全過程。負責前後端開發，使用 Node.js 和 React 構建 SaaS 平台，並參與產品設計和用戶體驗優化。",
    details: [
      "參與產品從概念到發布的全過程",
      "使用 Node.js 和 Express 開發後端 API",
      "使用 React 構建響應式前端界面",
      "設計和實現數據庫架構",
      "參與產品決策和用戶體驗優化",
    ],
    achievements: [
      "從零構建核心產品功能，獲得首輪融資",
      "優化用戶註冊流程，提升轉化率 25%",
      "實施響應式設計，提升移動端用戶體驗",
      "構建自動化測試系統，提高代碼質量",
    ],
    skills: ["JavaScript", "Node.js", "React", "Express", "MongoDB", "Redis", "Docker"],
    type: "work",
    url: "https://startupx.example.com",
  },

  // 教育經歷
  {
    id: "edu-phd",
    title: "計算機科學博士",
    organization: "國立台灣大學",
    location: "台北",
    startDate: "2013-09",
    endDate: "2016-06",
    description:
      "專注於人工智能和自然語言處理研究，開發創新算法和模型。博士論文題目：「基於深度學習的自然語言理解與生成」。",
    details: [
      "研究方向：自然語言處理、機器學習、深度學習",
      "開發新型神經網絡架構，用於自然語言理解和生成",
      "參與多個研究項目和國際合作",
      "發表多篇研究論文於頂級會議和期刊",
      "擔任多門研究生課程的助教",
    ],
    achievements: [
      "博士論文獲得校級優秀論文獎",
      "發表 5 篇研究論文於頂級 AI 會議和期刊",
      "獲得國家科學委員會研究獎學金",
      "參與國際學術交流項目",
    ],
    skills: ["機器學習", "深度學習", "自然語言處理", "Python", "研究方法", "數據分析"],
    type: "education",
    url: "https://ntu.edu.tw",
  },
  {
    id: "edu-masters",
    title: "計算機科學碩士",
    organization: "國立清華大學",
    location: "新竹",
    startDate: "2011-09",
    endDate: "2013-06",
    description: "專注於算法和數據結構研究，以及分佈式系統設計。碩士論文題目：「高效分佈式計算框架的設計與實現」。",
    details: [
      "研究方向：分佈式系統、算法設計、高性能計算",
      "設計和實現高效分佈式計算框架",
      "參與多個研究項目",
      "擔任本科生課程助教",
    ],
    achievements: ["碩士論文獲得系級優秀論文獎", "發表 2 篇研究論文", "獲得全額獎學金"],
    skills: ["分佈式系統", "算法", "Java", "C++", "高性能計算"],
    type: "education",
    url: "https://nthu.edu.tw",
  },
  {
    id: "edu-bachelors",
    title: "計算機科學學士",
    organization: "國立交通大學",
    location: "新竹",
    startDate: "2007-09",
    endDate: "2011-06",
    description: "主修計算機科學，輔修數學。專注於編程語言、數據結構和算法設計。",
    details: [
      "主修課程：數據結構、算法設計、操作系統、計算機網絡、數據庫系統",
      "輔修數學課程：線性代數、離散數學、概率論",
      "參與多個編程競賽和項目",
      "擔任編程課程助教",
    ],
    achievements: ["以優異成績畢業，GPA 3.9/4.0", "獲得校級編程競賽一等獎", "獲得兩次學期獎學金"],
    skills: ["C/C++", "Java", "數據結構", "算法", "數據庫"],
    type: "education",
    url: "https://nycu.edu.tw",
  },

  // 獎項和認證
  {
    id: "award-best-paper",
    title: "最佳論文獎",
    organization: "國際人工智能會議 (ICAI)",
    location: "線上",
    startDate: "2022-11",
    endDate: "2022-11",
    description: "論文「基於深度學習的自然語言處理新方法」獲得最佳論文獎。",
    type: "award",
    url: "https://icai.example.com",
  },
  {
    id: "award-innovation",
    title: "技術創新獎",
    organization: "亞洲科技創新峰會",
    location: "新加坡",
    startDate: "2021-05",
    endDate: "2021-05",
    description: "因在 AI 驅動的數據分析平台開發中的創新貢獻而獲獎。",
    type: "award",
    url: "https://tech-summit.example.com",
  },
  {
    id: "cert-aws",
    title: "AWS 解決方案架構師專業認證",
    organization: "Amazon Web Services",
    location: "線上",
    startDate: "2020-03",
    endDate: "2023-03",
    description: "獲得 AWS 解決方案架構師專業級認證，展示在設計和部署 AWS 上可擴展、高可用和容錯應用程序的專業知識。",
    type: "award",
    url: "https://aws.amazon.com/certification/",
  },
  {
    id: "cert-google-cloud",
    title: "Google 專業數據工程師認證",
    organization: "Google Cloud",
    location: "線上",
    startDate: "2019-08",
    endDate: "2022-08",
    description: "獲得 Google 專業數據工程師認證，展示在設計、構建、操作和保護數據處理系統方面的專業知��。",
    type: "award",
    url: "https://cloud.google.com/certification/data-engineer",
  },
]

/**
 * 時間線視圖組件
 *
 * 展示職業和學術發展歷程
 */
export default function TimelineView() {
  // 狀態管理
  const [activeTab, setActiveTab] = useState<string>("all")
  const [expandedEvents, setExpandedEvents] = useState<string[]>([])

  // 過濾事件
  const filteredEvents =
    activeTab === "all" ? timelineEvents : timelineEvents.filter((event) => event.type === activeTab)

  // 切換事件展開狀態
  const toggleEventExpansion = (eventId: string) => {
    setExpandedEvents((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]))
  }

  // 格式化日期
  const formatDate = (dateString: string) => {
    if (dateString === "present") return "至今"
    const [year, month] = dateString.split("-")
    return `${year}年${month}月`
  }

  return (
    <section id="timeline" className="relative py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 標題部分 */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            職業發展歷程
          </motion.h2>
          <Separator className="w-12 mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            我的職業和學術發展時間線，展示我的專業成長和成就。
          </motion.p>
        </div>

        {/* 標籤過濾 */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="grid grid-cols-3 md:grid-cols-4 w-full">
            <TabsTrigger value="all" className="flex items-center gap-1">
              <Calendar className="h-4 w-4 md:mr-1" />
              <span>全部</span>
            </TabsTrigger>
            <TabsTrigger value="work" className="flex items-center gap-1">
              <Briefcase className="h-4 w-4 md:mr-1" />
              <span>工作經驗</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-1">
              <GraduationCap className="h-4 w-4 md:mr-1" />
              <span>教育經歷</span>
            </TabsTrigger>
            <TabsTrigger value="award" className="flex items-center gap-1">
              <Award className="h-4 w-4 md:mr-1" />
              <span>獎項與認證</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* 時間線 */}
        <div className="relative">
          {/* 時間線軸 */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/20"></div>
          </div>

          <div className="space-y-12">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* 時間點 */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-background rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 border-2 border-primary shadow-md">
                  {event.type === "work" ? (
                    <Briefcase className="h-5 w-5" />
                  ) : event.type === "education" ? (
                    <GraduationCap className="h-5 w-5" />
                  ) : (
                    <Award className="h-5 w-5" />
                  )}
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                  <Card className="hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      {/* 事件標題和日期 */}
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-foreground mb-2 md:mb-0">{event.title}</h3>
                        <Badge variant="outline">
                          {formatDate(event.startDate)} - {formatDate(event.endDate)}
                        </Badge>
                      </div>

                      {/* 組織和地點 */}
                      <div className="flex items-center text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          {event.type === "work" ? (
                            <Briefcase className="h-4 w-4 mr-1" />
                          ) : event.type === "education" ? (
                            <GraduationCap className="h-4 w-4 mr-1" />
                          ) : (
                            <Award className="h-4 w-4 mr-1" />
                          )}
                          <span>{event.organization}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {/* 事件描述 */}
                      <p className="text-muted-foreground mb-5 leading-relaxed">{event.description}</p>

                      {/* 展開的詳細信息 */}
                      {expandedEvents.includes(event.id) && (
                        <div className="space-y-4 mb-4">
                          {/* 詳細內容 */}
                          {event.details && event.details.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="font-medium text-foreground">詳細內容</h4>
                              <ul className="space-y-1">
                                {event.details.map((detail, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                                    <span className="text-muted-foreground">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* 成就 */}
                          {event.achievements && event.achievements.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="font-medium text-foreground">主要成就</h4>
                              <ul className="space-y-1">
                                {event.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                                    <span className="text-muted-foreground">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* 技能 */}
                          {event.skills && event.skills.length > 0 && (
                            <div className="space-y-2">
                              <h4 className="font-medium text-foreground">相關技能</h4>
                              <div className="flex flex-wrap gap-2">
                                {event.skills.map((skill, i) => (
                                  <Badge key={i} variant="outline">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 網站鏈接 */}
                          {event.url && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                訪問網站
                              </a>
                            </Button>
                          )}
                        </div>
                      )}

                      {/* 展開/收起按鈕 */}
                      {(event.details || event.achievements || event.skills) && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleEventExpansion(event.id)}
                          className="mt-2"
                        >
                          {expandedEvents.includes(event.id) ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-1" /> 收起詳情
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-1" /> 查看詳情
                            </>
                          )}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
