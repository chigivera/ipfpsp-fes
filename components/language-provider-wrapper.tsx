"use client"

import { LanguageProvider } from "@/context/language-context"
import type { ReactNode } from "react"

export function LanguageProviderWrapper({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
