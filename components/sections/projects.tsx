import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "K53 Mastery App",
    description: "A learning platform for driving test preparation. Led testing and quality assurance efforts.",
    contributions: [
      "Designed and implemented automated UI tests",
      "Identified and resolved critical user flow issues",
      "Improved application stability before deployment"
    ],
    tags: ["Playwright", "React", "E2E Testing"],
    github: "#",
    external: "#"
  },
  {
    title: "Food Order System",
    description: "A food delivery application with complex ordering workflows and payment integration.",
    contributions: [
      "Developed comprehensive API test suites",
      "Implemented load testing for peak hour scenarios",
      "Reduced order processing bugs by 60%"
    ],
    tags: ["Cypress", "API Testing", "Performance"],
    github: "#",
    external: "#"
  },
  {
    title: "Expense Tracker",
    description: "Personal finance management tool with data visualization and reporting features.",
    contributions: [
      "Built automated regression test suite",
      "Validated data integrity across transactions",
      "Ensured cross-browser compatibility"
    ],
    tags: ["Jest", "React Testing Library", "CI/CD"],
    github: "#",
    external: "#"
  },
  {
    title: "Portfolio Website",
    description: "Professional portfolio showcasing projects and skills with modern design.",
    contributions: [
      "Implemented accessibility testing protocols",
      "Validated responsive design across devices",
      "Set up automated visual regression tests"
    ],
    tags: ["Next.js", "Lighthouse", "A11y"],
    github: "#",
    external: "#"
  },
  {
    title: "Task Management Tool",
    description: "Productivity application for tracking tasks and measuring progress over time.",
    contributions: [
      "Created end-to-end test scenarios",
      "Implemented state management testing",
      "Validated data persistence and sync"
    ],
    tags: ["Selenium", "JavaScript", "MongoDB"],
    github: "#",
    external: "#"
  },
  {
    title: "E-Learning Platform",
    description: "Online course platform with video content, quizzes, and progress tracking.",
    contributions: [
      "Developed test automation framework",
      "Validated video streaming functionality",
      "Tested user progress tracking accuracy"
    ],
    tags: ["Playwright", "Node.js", "PostgreSQL"],
    github: "#",
    external: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    <Link 
                      href={project.github} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link 
                      href={project.external} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {project.contributions.map((contribution, contribIndex) => (
                    <li key={contribIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
