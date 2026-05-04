export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            Results-driven <span className="text-foreground">Senior QA professional</span> with 
            4 years of experience in quality assurance, user support, and software development. 
            I hold an <span className="text-foreground">IT Diploma</span> and <span className="text-foreground">ISTQB certification</span>, 
            enabling deep collaboration with development teams and effective root-cause analysis.
          </p>
          
          <p className="text-lg">
            My background as a <span className="text-foreground">Software Developer at Peruzal</span> gave me 
            hands-on experience with JavaScript and React, which now informs how I approach quality assurance. 
            This technical foundation allows me to:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base my-6">
            {[
              "Build reusable test automation frameworks",
              "Automate test data creation processes",
              "Integrate QA into CI/CD pipelines",
              "Perform thorough root-cause analysis",
              "Develop user support automations",
              "Mentor junior QA team members"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg">
            I&apos;m actively adopting <span className="text-foreground">generative AI and AI-powered testing tools</span> to 
            accelerate test case generation, enhance automation resilience, and improve overall testing efficiency. 
            Based in <span className="text-foreground">Cape Town, South Africa</span>, I&apos;m passionate about 
            improving product reliability and user experience.
          </p>
        </div>
      </div>
    </section>
  )
}
