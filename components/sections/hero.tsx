"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 lg:py-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-primary font-mono text-sm mb-4 tracking-wide">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
              <span className="text-balance">Anesu Muusha.</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 leading-tight">
              <span className="text-balance">Senior QA Tester.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Results-driven QA professional with 4+ years of experience in quality assurance 
              and software development. I build scalable test automation frameworks, integrate 
              AI-powered testing tools, and improve product reliability. Based in Cape Town.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-11 px-8 text-base"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-11 px-8 text-base"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
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

            <div className="flex items-center gap-6">
              <Link 
                href="https://github.com/anesumuusha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link 
                href="https://linkedin.com/in/anesumuusha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link 
                href="mailto:anesumuusha@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4" />
              {/* Image container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-card border border-border">
                <Image
                  src="/images/profile.jpg"
                  alt="Anesu Muusha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
