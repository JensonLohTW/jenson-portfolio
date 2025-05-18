"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// 修改這裡：使用 next-themes 提供的 useTheme hook
import { useTheme as useNextTheme } from "next-themes"

export function useTheme() {
  // 直接返回 next-themes 提供的 useTheme hook 的結果
  return useNextTheme()
}
