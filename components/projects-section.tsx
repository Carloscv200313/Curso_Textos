import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Proyecto 1",
              description: "Descripción del proyecto 1. Tecnologías utilizadas y resultados alcanzados.",
              image: "/placeholder.svg?height=400&width=600",
              tags: ["React", "Node.js", "MongoDB"],
            },
            {
              title: "Proyecto 2",
              description: "Descripción del proyecto 2. Tecnologías utilizadas y resultados alcanzados.",
              image: "/placeholder.svg?height=400&width=600",
              tags: ["Next.js", "TypeScript", "Tailwind"],
            },
            {
              title: "Proyecto 3",
              description: "Descripción del proyecto 3. Tecnologías utilizadas y resultados alcanzados.",
              image: "/placeholder.svg?height=400&width=600",
              tags: ["Vue.js", "Express", "PostgreSQL"],
            },
          ].map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-white/10 hover:border-blue-500/50 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-sm bg-blue-500/10 text-blue-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                  Ver Proyecto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

