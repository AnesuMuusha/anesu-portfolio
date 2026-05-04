import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Bot, Wand2, Search } from "lucide-react"

const aiProjects = [
  {
    icon: Bot,
    title: "AI-Assisted Test Case Generation",
    description: "Exploring how large language models can help generate comprehensive test cases from user stories and requirements."
  },
  {
    icon: Wand2,
    title: "UI Prototyping with AI Tools",
    description: "Using AI-powered design tools to rapidly prototype and validate user interfaces before development."
  },
  {
    icon: Search,
    title: "Automated Bug Detection",
    description: "Experimenting with AI models to detect potential bugs and edge cases in code changes."
  }
]

export function AIProjects() {
  return (
    <section id="ai-projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            AI Experiments
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-5 h-5 text-primary" />
          <p className="text-muted-foreground">
            Exploring how AI can improve testing workflows and product quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-8 italic">
          This section is actively evolving as I build more AI-powered projects.
        </p>
      </div>
    </section>
  )
}
