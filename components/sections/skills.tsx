import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TestTube, Code, Shield } from "lucide-react"

const skillGroups = [
  {
    title: "Testing & QA",
    icon: TestTube,
    skills: [
      "End-to-End Testing (Playwright)",
      "Functional & Regression Testing",
      "Smoke & Sanity Testing",
      "Cross-browser Testing",
      "UI Testing & Validation",
      "API Testing (REST APIs)"
    ]
  },
  {
    title: "Engineering",
    icon: Code,
    skills: [
      "JavaScript / TypeScript",
      "Frontend Development (React)",
      "Test Automation Frameworks",
      "CI/CD Integration for Tests",
      "DOM Manipulation & Debugging",
      "JSON Handling"
    ]
  },
  {
    title: "Quality Practices",
    icon: Shield,
    skills: [
      "Test Case Design & Planning",
      "Incident Management",
      "Agile Methodologies",
      "User Support Automation",
      "Chatbots & Workflows",
      "Writing Automated Test Scripts"
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Skills & Expertise
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <group.icon className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg text-foreground">{group.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
