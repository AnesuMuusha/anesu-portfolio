import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">
          06. What&apos;s Next?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          I&apos;m currently open to new opportunities and always interested in 
          discussing quality assurance, test automation, or potential collaborations. 
          Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <Link 
              href="mailto:anesumuusha@gmail.com" 
              className="hover:text-primary transition-colors"
            >
              anesumuusha@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-5 h-5 text-primary" />
            <span>+27 71 927 0935</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-muted-foreground mb-12">
          <MapPin className="w-5 h-5 text-primary" />
          <span>Cape Town, South Africa</span>
        </div>

        <div className="flex items-center justify-center gap-6">
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
    </section>
  )
}
