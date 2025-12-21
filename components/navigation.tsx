"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/context/language-context"
import { Menu, X, ChevronDown, MoreVertical } from "lucide-react"
import Image from "next/image"

type Language = "ar" | "fr" | "de"

export default function Navigation() {
  const { language, setLanguage, dir, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const moreDropdownRef = useRef<HTMLDivElement>(null)

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: "ar", flag: "🇲🇦", name: "العربية" },
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" },
  ]

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  // Primary navigation items (always visible on large screens)
  const primaryNavItems = [
    { href: "#about", key: "nav.about" },
    { href: "#programs", key: "nav.programs" },
    { href: "#registration", key: "nav.registration" },
    { href: "#contact", key: "nav.contact" },
  ]

  // Secondary navigation items (in dropdown on medium screens)
  const secondaryNavItems = [
    { href: "#vision", key: "nav.vision" },
    { href: "#values", key: "nav.values" },
    { href: "#campus", key: "nav.campus" },
    { href: "#diplomas", key: "nav.diplomas" },
    { href: "#languages", key: "nav.languages" },
    { href: "#online", key: "nav.online" },
    { href: "#companies", key: "nav.companies" },
    { href: "#faq", key: "nav.faq" },
  ]

  // Handle hash links on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        // Wait for page to be fully rendered
        const scrollToHash = () => {
          const targetId = hash.replace('#', '')
          let element = document.getElementById(targetId)
          
          // Try querySelector as fallback
          if (!element) {
            element = document.querySelector(`[id="${targetId}"]`) as HTMLElement
          }
          
          if (element) {
            const headerOffset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            })
          }
        }
        
        // Try immediately
        scrollToHash()
        
        // Also try after a short delay in case DOM isn't ready
        setTimeout(scrollToHash, 100)
        setTimeout(scrollToHash, 500)
      }
    }

    // Handle initial hash after component mounts
    setTimeout(handleHashScroll, 0)

    // Handle hash changes (e.g., browser back/forward)
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsLanguageOpen(false)
      }
      
      // Only close more dropdown if clicking outside AND not on a button inside it
      if (moreDropdownRef.current) {
        const clickedButton = (target as HTMLElement).closest('button')
        if (!moreDropdownRef.current.contains(target) && !clickedButton) {
          setIsMoreOpen(false)
        }
      }
    }

    if (isLanguageOpen || isMoreOpen) {
      // Use a longer delay to allow button clicks to register first
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
      }, 100)
      
      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isLanguageOpen, isMoreOpen])

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsOpen(false)
  }

  // Smooth scroll to section with offset for sticky navbar
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    const targetId = href.replace('#', '')
    
    // Close menus first
    setIsOpen(false)
    setIsMoreOpen(false)
    
    // Function to perform the scroll
    const performScroll = () => {
      let element = document.getElementById(targetId)
      
      // Try querySelector as fallback
      if (!element) {
        element = document.querySelector(`[id="${targetId}"]`) as HTMLElement
      }
      
      // Try finding by data attribute or any element with the ID
      if (!element) {
        const allElements = document.querySelectorAll(`[id]`)
        for (let i = 0; i < allElements.length; i++) {
          if (allElements[i].id === targetId) {
            element = allElements[i] as HTMLElement
            break
          }
        }
      }
      
      if (element) {
        // Calculate the exact position with offset for sticky navbar
        const headerOffset = 100
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const elementTop = rect.top + scrollTop
        const offsetPosition = elementTop - headerOffset

        // Scroll to the calculated position
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        })
        
        // Update URL hash
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', href)
        }
        return true
      }
      return false
    }
    
    // Try immediately
    if (!performScroll()) {
      // If element not found, try after delays (for dynamic content)
      setTimeout(() => {
        if (!performScroll()) {
          setTimeout(() => {
            if (!performScroll()) {
              // Final attempt
              setTimeout(performScroll, 300)
            }
          }, 200)
        }
      }, 100)
    }
  }

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

          {/* Desktop Navigation - Large screens (lg and above) */}
          <div className="hidden lg:flex items-center gap-0.5 flex-wrap max-w-4xl">
            {primaryNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-2.5 py-2 text-xs xl:text-sm font-medium hover:text-primary hover:bg-muted/50 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsMoreOpen(!isMoreOpen)
                }}
                className="px-2.5 py-2 text-xs xl:text-sm font-medium hover:text-primary hover:bg-muted/50 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap"
                type="button"
              >
                <span>{t("nav.more")}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMoreOpen && (
                <div
                  ref={moreDropdownRef}
                  className={`absolute top-full mt-1 w-48 bg-card border border-border rounded-lg shadow-xl py-2 z-[9999] ${
                    dir === "rtl" ? "left-0" : "right-0"
                  }`}
                >
                  {secondaryNavItems.map((item) => {
                    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault()
                      e.stopPropagation()
                      
                      const targetId = item.href.replace('#', '')
                      
                      // Update URL immediately
                      if (window.history && window.history.pushState) {
                        window.history.pushState(null, '', item.href)
                      } else {
                        window.location.hash = targetId
                      }
                      
                      // Close dropdown after a tiny delay to ensure click registers
                      setTimeout(() => {
                        setIsMoreOpen(false)
                      }, 10)
                      
                      // Scroll to element
                      const scrollToElement = () => {
                        let element = document.getElementById(targetId)
                        if (!element) {
                          element = document.querySelector(`[id="${targetId}"]`) as HTMLElement
                        }
                        
                        if (element) {
                          const headerOffset = 100
                          const rect = element.getBoundingClientRect()
                          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0
                          const elementTop = rect.top + scrollTop
                          const offsetPosition = elementTop - headerOffset
                          
                          window.scrollTo({
                            top: Math.max(0, offsetPosition),
                            behavior: 'smooth'
                          })
                          return true
                        }
                        return false
                      }
                      
                      // Try immediately, then retry if needed
                      requestAnimationFrame(() => {
                        if (!scrollToElement()) {
                          setTimeout(() => {
                            if (!scrollToElement()) {
                              setTimeout(scrollToElement, 200)
                            }
                          }, 100)
                        }
                      })
                    }
                    
                    return (
                      <button
                        key={item.href}
                        type="button"
                        onClick={handleClick}
                        className={`w-full text-left block px-4 py-2 text-xs xl:text-sm hover:bg-muted transition cursor-pointer ${
                          dir === "rtl" ? "text-right" : "text-left"
                        }`}
                      >
                        {t(item.key)}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
            <a
              href="https://german-assist.com/login/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs xl:text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap ml-1"
            >
              {t("nav.elearning")}
            </a>
          </div>

          {/* Tablet Navigation - Medium screens (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center gap-1">
            {primaryNavItems.slice(0, 3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-2 py-1.5 text-xs font-medium hover:text-primary hover:bg-muted/50 rounded-md transition-colors cursor-pointer"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsMoreOpen(!isMoreOpen)
                }}
                className="px-2 py-1.5 text-xs font-medium hover:text-primary hover:bg-muted/50 rounded-md transition-colors flex items-center gap-1"
                type="button"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
              {isMoreOpen && (
                <div
                  ref={moreDropdownRef}
                  className={`absolute top-full mt-1 w-56 bg-card border border-border rounded-lg shadow-xl py-2 z-[9999] max-h-[80vh] overflow-y-auto ${
                    dir === "rtl" ? "left-0" : "right-0"
                  }`}
                >
                  {primaryNavItems.slice(3).map((item) => {
                    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault()
                      e.stopPropagation()
                      
                      const targetId = item.href.replace('#', '')
                      
                      // Update URL immediately
                      if (window.history && window.history.pushState) {
                        window.history.pushState(null, '', item.href)
                      } else {
                        window.location.hash = targetId
                      }
                      
                      // Close dropdown after a tiny delay to ensure click registers
                      setTimeout(() => {
                        setIsMoreOpen(false)
                      }, 10)
                      
                      // Scroll to element
                      const scrollToElement = () => {
                        let element = document.getElementById(targetId)
                        if (!element) {
                          element = document.querySelector(`[id="${targetId}"]`) as HTMLElement
                        }
                        
                        if (element) {
                          const headerOffset = 100
                          const rect = element.getBoundingClientRect()
                          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0
                          const elementTop = rect.top + scrollTop
                          const offsetPosition = elementTop - headerOffset
                          
                          window.scrollTo({
                            top: Math.max(0, offsetPosition),
                            behavior: 'smooth'
                          })
                          return true
                        }
                        return false
                      }
                      
                      // Try immediately, then retry if needed
                      requestAnimationFrame(() => {
                        if (!scrollToElement()) {
                          setTimeout(() => {
                            if (!scrollToElement()) {
                              setTimeout(scrollToElement, 200)
                            }
                          }, 100)
                        }
                      })
                    }
                    
                    return (
                      <button
                        key={item.href}
                        type="button"
                        onClick={handleClick}
                        className={`w-full text-left block px-4 py-2 text-xs hover:bg-muted transition cursor-pointer ${
                          dir === "rtl" ? "text-right" : "text-left"
                        }`}
                      >
                        {t(item.key)}
                      </button>
                    )
                  })}
                  <div className="border-t border-border my-1" />
                  {secondaryNavItems.map((item) => {
                    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault()
                      e.stopPropagation()
                      
                      const targetId = item.href.replace('#', '')
                      
                      // Update URL immediately
                      if (window.history && window.history.pushState) {
                        window.history.pushState(null, '', item.href)
                      } else {
                        window.location.hash = targetId
                      }
                      
                      // Close dropdown after a tiny delay to ensure click registers
                      setTimeout(() => {
                        setIsMoreOpen(false)
                      }, 10)
                      
                      // Scroll to element
                      const scrollToElement = () => {
                        let element = document.getElementById(targetId)
                        if (!element) {
                          element = document.querySelector(`[id="${targetId}"]`) as HTMLElement
                        }
                        
                        if (element) {
                          const headerOffset = 100
                          const rect = element.getBoundingClientRect()
                          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0
                          const elementTop = rect.top + scrollTop
                          const offsetPosition = elementTop - headerOffset
                          
                          window.scrollTo({
                            top: Math.max(0, offsetPosition),
                            behavior: 'smooth'
                          })
                          return true
                        }
                        return false
                      }
                      
                      // Try immediately, then retry if needed
                      requestAnimationFrame(() => {
                        if (!scrollToElement()) {
                          setTimeout(() => {
                            if (!scrollToElement()) {
                              setTimeout(scrollToElement, 200)
                            }
                          }, 100)
                        }
                      })
                    }
                    
                    return (
                      <button
                        key={item.href}
                        type="button"
                        onClick={handleClick}
                        className={`w-full text-left block px-4 py-2 text-xs hover:bg-muted transition cursor-pointer ${
                          dir === "rtl" ? "text-right" : "text-left"
                        }`}
                      >
                        {t(item.key)}
                      </button>
                    )
                  })}
                  <div className="border-t border-border my-1" />
                  <a
                    href="https://german-assist.com/login/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMoreOpen(false)}
                    className={`block px-4 py-2 text-xs bg-primary/10 text-primary font-medium hover:bg-primary/20 transition ${
                      dir === "rtl" ? "text-right" : "text-left"
                    }`}
                  >
                    {t("nav.elearning")}
                  </a>
                </div>
              )}
            </div>
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
          <div className="md:hidden pb-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {t("nav.home")}
              </div>
              {primaryNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href)
                    handleNavClick()
                  }}
                  className="block px-3 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors cursor-pointer"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
            <div className="space-y-1 mt-4">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {t("nav.more")}
              </div>
              {secondaryNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href)
                    handleNavClick()
                  }}
                  className="block px-3 py-2.5 text-sm font-medium hover:bg-muted rounded-lg transition-colors cursor-pointer"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <a
                href="https://german-assist.com/login/index.php"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="block px-3 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                {t("nav.elearning")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
