export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "HTML/CSS", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "React", level: 80 },
            { name: "Node.js", level: 75 },
            { name: "TypeScript", level: 70 },
            { name: "Python", level: 65 },
            { name: "SQL", level: 75 },
            { name: "Git", level: 80 },
          ].map((skill, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-white/70 mt-2">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

