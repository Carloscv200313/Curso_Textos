"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-screen">
                <Image
                    src="/Vergara/fondo.jpeg"
                    alt="Background"
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black">
                    <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                            Jhon Vergara
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                            Bica dibujo, grande Ochoa
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="/Vergara/fondo.jpeg"
                                alt="Profile"
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
                            <p className="text-gray-300 text-lg mb-6">
                            Soy un especialista apasionado por proteger activos digitales y garantizar entornos seguros.
                            Con experiencia en ciberseguridad, me especializo en identificar vulnerabilidades, implementar 
                            soluciones robustas y fortalecer la defensa contra amenazas avanzadas.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">React</Badge>
                                <Badge variant="secondary">Next.js</Badge>
                                <Badge variant="secondary">TypeScript</Badge>
                                <Badge variant="secondary">Node.js</Badge>
                                <Badge variant="secondary">PostgreSQL</Badge>
                                <Badge variant="secondary">Tailwind CSS</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((project) => (
                            <Card key={project} className="bg-black border-zinc-800">
                                <CardContent className="p-0">
                                    <Image
                                        src="/Vergara/fondo.jpeg"
                                        alt={`Project ${project}`}
                                        width={600}
                                        height={400}
                                        className="w-full object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">Nombre del Proyecto {project}</h3>
                                        <p className="text-gray-400 mb-4">
                                            Descripción breve del proyecto y las tecnologías utilizadas.
                                        </p>
                                        <div className="flex gap-2 mb-4">
                                            <Badge>React</Badge>
                                            <Badge>Node.js</Badge>
                                            <Badge>PostgreSQL</Badge>
                                        </div>
                                        <Button variant="secondary">Ver Proyecto</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center">Habilidades</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[
                            "Frontend Development",
                            "Backend Development",
                            "Database Design",
                            "API Development",
                            "UI/UX Design",
                            "Cloud Services",
                            "Version Control",
                            "Agile Methodologies"
                        ].map((skill) => (
                            <Card key={skill} className="bg-zinc-900 border-zinc-800">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-center">{skill}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">¿Interesado en trabajar juntos?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Estoy siempre abierto a discutir nuevos proyectos y oportunidades de colaboración.
                    </p>
                    <Button size="lg">
                        Contáctame
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-black border-t border-zinc-800">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>© 2024 Tu Nombre. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )
}
