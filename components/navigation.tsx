"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/context/language-context"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

type Language = "ar" | "fr" | "de"

export default function Navigation() {
  const { language, setLanguage, dir, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: "ar", flag: "🇲🇦", name: "العربية" },
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
  ]

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isLanguageOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    // Add a small delay to avoid immediate closure when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside)
    }, 10)
    
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isLanguageOpen])

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Image src="/logo.png" alt="IPFPSP-FES Logo" width={50} height={50} className="w-12 h-12" />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm text-primary">IPFPSP-FES</span>
              <span className="text-xs text-muted-foreground">{t("nav.home")}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#programs" className="px-3 py-2 text-sm font-medium hover:text-primary transition">
              {t("nav.programs")}
            </a>
            <a href="#certifications" className="px-3 py-2 text-sm font-medium hover:text-primary transition">
              {t("nav.certifications")}
            </a>
            <a href="#about" className="px-3 py-2 text-sm font-medium hover:text-primary transition">
              {t("nav.about")}
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium hover:text-primary transition">
              {t("nav.contact")}
            </a>
            <a 
              href="https://german-assist.com/login/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {t("nav.elearning")}
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 relative z-50">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsLanguageOpen((prev) => !prev)
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted transition-colors bg-transparent"
                type="button"
                aria-expanded={isLanguageOpen}
                aria-haspopup="true"
              >
                <span className="text-xl">{currentLang.flag}</span>
                <span className="hidden sm:inline text-xs font-medium">{currentLang.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageOpen && (
                <div 
                  className={`absolute top-full mt-2 w-40 bg-card border border-border rounded-lg shadow-xl py-2 z-[9999] ${
                    dir === "rtl" ? "left-0" : "right-0"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  onClick={(e) => e.stopPropagation()}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setLanguage(lang.code)
                        setIsLanguageOpen(false)
                      }}
                      type="button"
                      role="menuitem"
                      className={`w-full px-4 py-2 text-sm flex items-center gap-3 transition ${
                        dir === "rtl" ? "text-right" : "text-left"
                      } ${
                        language === lang.code
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#programs" className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">
              {t("nav.programs")}
            </a>
            <a href="#certifications" className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">
              {t("nav.certifications")}
            </a>
            <a href="#about" className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">
              {t("nav.about")}
            </a>
            <a href="#contact" className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-lg">
              {t("nav.contact")}
            </a>
            <a 
              href="https://german-assist.com/login/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t("nav.elearning")}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
