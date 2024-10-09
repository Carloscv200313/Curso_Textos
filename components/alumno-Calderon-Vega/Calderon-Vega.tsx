"use client"
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { TypewriterEffectDemo } from './titulo'
import { Imagen } from './foto'

const alumno = {
    nombre: "Carlos Calderon",
    foto: "/alumnos/carlos_calderon/foto.png",
    titulo: "Ingeniera de Software Full Stack",
    descripcion: "Carlos es una apasionado desarrollador con experiencia en tecnologías web modernas. Su enfoque se centra en crear soluciones innovadoras y escalables. Con una sólida formación en ingeniería de software y un ojo agudo para el diseño, Carlos se esfuerza por construir aplicaciones que no solo funcionen perfectamente, sino que también ofrezcan una experiencia de usuario excepcional.",
    contacto: {
        email: "https://www.facebook.com/profile.php?id=100070618440202",
        linkedin: "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/",
        twitter: "https://www.instagram.com/cscv200313/",
        github: "https://github.com/Carloscv200313"
    },
    proyectos: [
        {
            id: 1,
            nombre: "EcoTrack",
            descripcion: "Una aplicación móvil para rastrear y reducir la huella de carbono personal.",
            imagen: "/img/imagen-00.jpg",
            github: "https://github.com/anagarcia/ecotrack"
        },
        {
            id: 2,
            nombre: "MindfulAI",
            descripcion: "Un chatbot de terapia cognitivo-conductual impulsado por IA para apoyo de salud mental.",
            imagen: "/img/imagen-01.jpg",
            github: "https://github.com/anagarcia/mindfulai"
        },
        {
            id: 3,
            nombre: "CodeCollab",
            descripcion: "Plataforma de colaboración en tiempo real para desarrolladores con características de pair programming.",
            imagen: "/img/imagen-02.jpg",
            github: "https://github.com/anagarcia/codecollab"
        }
    ]
}

export default function PaginaCarlosCalderon() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    return (
        <div className="min-h-screen bg-gray-950 p-8 relative overflow-hidden ">
            {/* Destellos blancos */}
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="container mt-12 mx-auto relative z-0">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <Imagen/>
                        <div className="flex-1">
                            <TypewriterEffectDemo/>
                            <motion.p
                                className="text-gray-400 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                {alumno.descripcion}
                            </motion.p>
                            <motion.div
                                className="flex space-x-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <a href={`mailto:${alumno.contacto.email}`} className="text-gray-400 hover:text-white transition-colors">
                                    <Mail size={24} />
                                </a>
                                <a href={alumno.contacto.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href={alumno.contacto.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter size={24} />
                                </a>
                                <a href={alumno.contacto.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={24} />
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    <motion.h2
                        className="text-3xl font-semibold mt-12 mb-6 text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        Proyectos Destacados
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {alumno.proyectos.map((proyecto, index) => (
                            <motion.div
                                key={proyecto.id}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                                onMouseEnter={() => setHoveredProject(proyecto.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="relative">
                                    <Image
                                        src={proyecto.imagen} alt={proyecto.nombre}
                                        className="w-full h-48 object-cover"
                                        width={50000}
                                        height={50000}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredProject === proyecto.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <a
                                            href={proyecto.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-purple-400 transition-colors"
                                        >
                                            <Github size={40} />
                                        </a>
                                    </motion.div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-200">{proyecto.nombre}</h3>
                                    <p className="text-gray-400 text-sm">{proyecto.descripcion}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                
            </div>
        </div>
    )
}