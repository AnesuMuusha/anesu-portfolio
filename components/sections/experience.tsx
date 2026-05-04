"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "ECDConnect",
    role: "Senior QA and User Support",
    period: "Nov 2024 — Present",
    highlights: [
      "Designed, executed, and maintained comprehensive manual and automated tests (regression, UAT, staging, production) to ensure high platform quality",
      "Built and implemented a reusable test automation framework that significantly reduced regression testing time and maintenance effort",
      "Automated test data creation processes, cutting manual setup time by 50% and enabling faster testing across environments",
      "Developed user support automations including chatbots, response templates, and automated workflows, reducing support ticket volume",
      "Led end-to-end QA processes resulting in a 30% reduction in defect rates and 25% increase in user satisfaction",
      "Supervised and mentored a Junior User Support & QA Agent, ensuring consistent quality standards"
    ]
  },
  {
    company: "Peruzal",
    role: "Software Developer",
    period: "Aug 2022 — Oct 2024",
    highlights: [
      "Developed and optimized scalable software solutions using JavaScript and React",
      "Achieved 30% increase in application performance and enhanced user experience",
      "Collaborated using Trello boards and daily stand-up meetings for progress tracking",
      "Participated in testing, debugging, and deploying code to production",
      "Contributed to open-source project: github.com/Peruzal/guides"
    ]
  }
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">05.</span>
            Experience
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all",
                  "hover:bg-secondary/50 hover:text-primary",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                  activeTab === index 
                    ? "border-primary text-primary bg-secondary/30" 
                    : "border-transparent text-muted-foreground"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[320px]">
            <h3 className="text-xl text-foreground mb-1">
              {experiences[activeTab].role}{" "}
              <span className="text-primary">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-sm font-mono text-muted-foreground mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
