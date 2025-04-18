"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navItems = [
    { href: "#beranda", label: "Beranda" },
    { href: "#kampus", label: "Info Kampus" },
    { href: "#kampus-sulsel", label: "Kampus Sulsel" },
    { href: "#karir", label: "Rekomendasi Karir" },
    { href: "#forum", label: "Forum Diskusi" },
    { href: "#kontak", label: "Kontak BK" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))

      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      } else if (window.scrollY < 100) {
        setActiveSection("beranda")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-between items-center py-3">
          <span className="font-semibold">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-blue-700"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex justify-center gap-6 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className={`font-semibold transition-colors ${
                activeSection === item.href.substring(1)
                  ? "text-white border-b-2 border-white"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-2 pb-3 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`block py-2 px-4 rounded transition-colors ${
                  activeSection === item.href.substring(1) ? "bg-blue-700 text-white" : "hover:bg-blue-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
