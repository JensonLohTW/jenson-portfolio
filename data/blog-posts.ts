// 博客文章數據類型定義
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage?: string
  date: string
  author: {
    name: string
    avatar?: string
  }
  tags: string[]
  readTime: number // 閱讀時間（分鐘）
}

// 博客文章數據
export const blogPosts: BlogPost[] = [
  {
    id: "react-typescript-best-practices",
    title: "React 與 TypeScript 最佳實踐指南",
    excerpt: "探討在 React 項目中使用 TypeScript 的最佳實踐，包括類型定義、組件設計和狀態管理。",
    content: `
# React 與 TypeScript 最佳實踐指南

在現代前端開發中，TypeScript 已經成為提高代碼質量和開發效率的重要工具。本文將分享在 React 項目中使用 TypeScript 的一些最佳實踐。

## 1. 組件 Props 類型定義

為組件定義明確的 Props 類型是使用 TypeScript 的基礎：

\`\`\`tsx
// 不推薦
const Button = (props) => {
  // ...
};

// 推薦
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button = ({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) => {
  // ...
};
\`\`\`

## 2. 使用函數組件和 React.FC

雖然 \`React.FC\` 提供了隱式的 children 類型，但現在更推薦直接使用函數組件並明確定義 props 類型：

\`\`\`tsx
// 不推薦
const Header: React.FC<HeaderProps> = (props) => {
  // ...
};

// 推薦
const Header = ({ title, subtitle }: HeaderProps) => {
  // ...
};
\`\`\`

## 3. 狀態管理中的類型安全

在使用 useState 和 useReducer 時，明確定義狀態類型：

\`\`\`tsx
// useState 示例
const [user, setUser] = useState<User | null>(null);

// useReducer 示例
type Action = 
  | { type: 'INCREMENT'; payload: number }
  | { type: 'DECREMENT'; payload: number };

const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);
\`\`\`

## 4. 事件處理函數類型

為事件處理函數提供正確的類型：

\`\`\`tsx
// 不推薦
const handleChange = (e) => {
  // ...
};

// 推薦
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // ...
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // ...
};
\`\`\`

## 5. 使用泛型組件

創建可復用的泛型組件：

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// 使用
<List
  items={users}
  renderItem={(user) => <UserCard user={user} />}
/>
\`\`\`

## 結論

TypeScript 與 React 的結合可以顯著提高代碼質量和開發體驗。通過遵循這些最佳實踐，您可以充分利用 TypeScript 的類型系統，創建更加健壯和可維護的 React 應用。
    `,
    date: "2023-08-15",
    author: {
      name: "Jenson Chen",
      avatar: "/avatar.png",
    },
    tags: ["React", "TypeScript", "前端開發"],
    readTime: 8,
  },
  {
    id: "nextjs-server-components",
    title: "深入理解 Next.js 的服務器組件",
    excerpt: "探討 Next.js 服務器組件的工作原理、優勢以及實際應用場景。",
    content: `
# 深入理解 Next.js 的服務器組件

Next.js 13 引入的服務器組件（Server Components）是 React 生態系統中的一個重大進步。本文將深入探討服務器組件的工作原理、優勢以及實際應用場景。

## 服務器組件是什麼？

服務器組件是在服務器上渲染的 React 組件，它們允許開發者在服務器上執行某些操作，如數據獲取、訪問後端資源等，而無需將這些邏輯和相關依賴發送到客戶端。

## 服務器組件與客戶端組件的區別

服務器組件：
- 在服務器上渲染
- 可以訪問後端資源（數據庫、文件系統等）
- 不包含交互邏輯
- 減少客戶端 JavaScript 包大小

客戶端組件：
- 在瀏覽器中渲染
- 可以使用狀態、效果和瀏覽器 API
- 支持事件處理和用戶交互
- 需要發送到客戶端執行

## 在 Next.js 中使用服務器組件

在 Next.js 13+ 的 App Router 中，所有組件默認都是服務器組件。要明確指定一個組件為客戶端組件，需要在文件頂部添加 'use client' 指令：

\`\`\`tsx
// 這是一個服務器組件
async function ServerComponent() {
  const data = await fetchData(); // 直接在服務器上獲取數據
  return <div>{data.map(item => <p>{item.name}</p>)}</div>;
}

// 這是一個客戶端組件
'use client'
import { useState } from 'react';

function ClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## 服務器組件的優勢

1. **更好的性能**：減少發送到客戶端的 JavaScript 數量
2. **直接訪問後端資源**：無需 API 層即可訪問數據庫
3. **改進的初始加載體驗**：更快的首次內容繪製
4. **自動代碼拆分**：更細粒度的代碼分割

## 實際應用場景

### 數據獲取

\`\`\`tsx
// app/users/page.tsx
async function UsersPage() {
  // 直接從數據庫獲取數據，無需 API 路由
  const users = await db.user.findMany();
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

### 混合使用服務器和客戶端組件

\`\`\`tsx
// ServerComponent.tsx
async function ServerComponent() {
  const data = await fetchExpensiveData();
  
  return (
    <div>
      <h1>Server Rendered Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ClientComponent initialCount={data.count} />
    </div>
  );
}

// ClientComponent.tsx
'use client'
import { useState } from 'react';

function ClientComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## 結論

Next.js 的服務器組件代表了 React 應用架構的一個重要進步，它允許開發者結合服務器渲染和客戶端交互的優勢，創建更高效、更可擴展的 Web 應用。通過理解和正確使用服務器組件，開發者可以顯著提升應用性能和用戶體驗。
    `,
    date: "2023-09-22",
    author: {
      name: "Jenson Chen",
      avatar: "/avatar.png",
    },
    tags: ["Next.js", "React", "服務器組件"],
    readTime: 10,
  },
  {
    id: "ai-enterprise-applications",
    title: "大型語言模型在企業應用中的實踐",
    excerpt: "探討如何將 GPT 等大型語言模型整合到企業應用中，包括最佳實踐和常見挑戰。",
    content: `
# 大型語言模型在企業應用中的實踐

隨著 GPT-4、Claude 和 Llama 等大型語言模型（LLMs）的發展，企業有了前所未有的機會來改革其業務流程和客戶體驗。本文將探討如何有效地將這些模型整合到企業應用中。

## LLMs 在企業中的應用場景

### 1. 客戶服務自動化

大型語言模型可以處理客戶查詢、解決常見問題，並在需要時將複雜問題升級給人工客服：

\`\`\`typescript
// 簡化的客服聊天機器人實現
async function handleCustomerQuery(query: string): Promise<string> {
  // 1. 分析查詢意圖
  const intent = await analyzeIntent(query);
  
  // 2. 根據意圖處理查詢
  if (intent.confidence > 0.8) {
    if (intent.type === 'simple_question') {
      return await generateAnswer(query);
    } else if (intent.type === 'complex_issue') {
      await createSupportTicket(query);
      return "您的問題需要進一步處理，我已創建一個支持工單，我們的團隊將盡快與您聯繫。";
    }
  }
  
  // 3. 回退策略
  return "很抱歉，我無法完全理解您的問題。您能否提供更多詳情，或者您希望與客服人員交談嗎？";
}

async function analyzeIntent(query: string) {
  const response = await llmClient.complete({
    prompt: \`分析以下客戶查詢的意圖：\n\n"\${query}"\n\n意圖類型：\`,
    max_tokens: 50
  });
  
  // 解析回應並確定意圖類型和置信度
  // ...
}
\`\`\`

### 2. 內容生成與管理

LLMs 可以協助生成營銷文案、產品描述、報告摘要等內容：

\`\`\`typescript
interface ContentRequest {
  type: 'blog_post' | 'product_description' | 'email_campaign';
  topic: string;
  targetAudience: string;
  keyPoints: string[];
  tone: 'formal' | 'casual' | 'technical';
  length: 'short' | 'medium' | 'long';
}

async function generateContent(request: ContentRequest): Promise<string> {
  const prompt = buildPromptFromRequest(request);
  
  const response = await llmClient.complete({
    prompt,
    max_tokens: getMaxTokensForLength(request.length),
    temperature: getToneTemperature(request.tone)
  });
  
  return postProcessContent(response.text);
}
\`\`\`

### 3. 數據分析與洞察

LLMs 可以幫助分析和解釋複雜的業務數據：

\`\`\`typescript
async function analyzeBusinessData(data: any, question: string): Promise<{
  answer: string;
  visualization?: string;
  confidence: number;
}> {
  // 將數據轉換為模型可理解的格式
  const formattedData = formatDataForLLM(data);
  
  // 構建提示
  const prompt = \`基於以下數據：\n\n\${formattedData}\n\n回答問題：\${question}\n\n\`;
  
  // 獲取模型回應
  const response = await llmClient.complete({
    prompt,
    max_tokens: 500
  });
  
  // 解析回應
  return parseAnalysisResponse(response.text);
}
\`\`\`

## 整合 LLMs 的最佳實踐

### 1. 提示工程（Prompt Engineering）

設計有效的提示是成功使用 LLMs 的關鍵：

- 提供清晰的指示和上下文
- 使用示例（少樣本學習）
- 分解複雜任務為多個步驟

### 2. 處理模型局限性

- 實施事實檢查機制
- 設計回退策略
- 建立人工審核流程

### 3. 優化成本和性能

\`\`\`typescript
// 實現緩存機制減少 API 調用
class LLMCache {
  private cache: Map<string, { response: string, timestamp: number }> = new Map();
  private ttl: number; // 緩存生存時間（毫秒）
  
  constructor(ttlInMinutes: number = 60) {
    this.ttl = ttlInMinutes * 60 * 1000;
  }
  
  async getResponse(prompt: string, generateFn: () => Promise<string>): Promise<string> {
    const cacheKey = this.hashPrompt(prompt);
    const cached = this.cache.get(cacheKey);
    
    // 檢查緩存是否有效
    if (cached && Date.now() - cached.timestamp < this.ttl) {
      return cached.response;
    }
    
    // 生成新回應
    const response = await generateFn();
    
    // 更新緩存
    this.cache.set(cacheKey, {
      response,
      timestamp: Date.now()
    });
    
    return response;
  }
  
  private hashPrompt(prompt: string): string {
    // 實現哈希函數
    // ...
  }
}
\`\`\`

## 常見挑戰與解決方案

### 1. 數據隱私與安全

- 使用本地部署的模型
- 實施數據脫敏技術
- 遵循監管要求

### 2. 模型偏見與公平性

- 多樣化訓練數據
- 實施偏見檢測
- 持續監控和改進

### 3. 用戶體驗設計

- 設置適當的用戶期望
- 提供透明的錯誤處理
- 設計自然的對話流程

## 結論

大型語言模型為企業應用帶來了革命性的可能性，但成功整合需要仔細的規劃和實施。通過遵循最佳實踐並解決常見挑戰，企業可以充分利用這些強大的 AI 工具，提升效率、改善客戶體驗並創造新的業務價值。
    `,
    date: "2023-10-10",
    author: {
      name: "Jenson Chen",
      avatar: "/avatar.png",
    },
    tags: ["AI", "大型語言模型", "企業應用"],
    readTime: 12,
  },
]
