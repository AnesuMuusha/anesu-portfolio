import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 md:hidden">
            <Link 
              href="https://github.com/anesumuusha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/anesumuusha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link 
              href="mailto:anesumuusha@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Designed & Built by Anesu Muusha
          </p>
          
          <p className="text-sm font-mono text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
