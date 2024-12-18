import { Code2, Cpu, Globe } from 'lucide-react'

export function StatsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-8 h-8 text-blue-500" />,
              title: "Proyectos",
              value: "10+",
              description: "Proyectos Completados",
            },
            {
              icon: <Cpu className="w-8 h-8 text-blue-500" />,
              title: "Tecnologías",
              value: "15+",
              description: "Tecnologías Dominadas",
            },
            {
              icon: <Globe className="w-8 h-8 text-blue-500" />,
              title: "Experiencia",
              value: "3+",
              description: "Años de Experiencia",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                {stat.icon}
                <h3 className="mt-4 text-xl font-semibold text-white">{stat.title}</h3>
                <p className="mt-2 text-3xl font-bold text-blue-500">{stat.value}</p>
                <p className="mt-2 text-white/70">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

