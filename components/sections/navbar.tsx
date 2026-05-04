"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About", href: "#about", number: "01" },
  { name: "Skills", href: "#skills", number: "02" },
  { name: "Projects", href: "#projects", number: "03" },
  { name: "AI", href: "#ai-projects", number: "04" },
  { name: "Experience", href: "#experience", number: "05" },
  { name: "Contact", href: "#contact", number: "06" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/95 backdrop-blur-md",
        scrolled && "shadow-lg border-b border-border"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-primary font-bold text-xl hover:opacity-80 transition-opacity"
        >
          AM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary font-mono text-xs mr-1">{link.number}.</span>
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-11 px-8 text-base"
            asChild
          >
            <a href="/Anesu-Muusha-Resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 top-[72px] bg-card z-40 transition-transform duration-300 border-t border-border",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-foreground hover:text-primary transition-colors bg-background px-6 py-3 rounded-lg w-full max-w-xs text-center"
            >
              <span className="text-primary font-mono text-sm mr-2">{link.number}.</span>
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-11 px-8 text-base mt-2"
            asChild
          >
            <a href="/Anesu-Muusha-Resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
