"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const alumno = {
    nombre: "Carlos Calderon",
    foto: "/alumnos/carlos_calderon/foto.jpeg",
    titulo: "Ingeniera de Software Full Stack",
    descripcion: "Ana es una apasionada desarrolladora con experiencia en tecnologías web modernas. Su enfoque se centra en crear soluciones innovadoras y escalables. Con una sólida formación en ingeniería de software y un ojo agudo para el diseño, Ana se esfuerza por construir aplicaciones que no solo funcionen perfectamente, sino que también ofrezcan una experiencia de usuario excepcional.",
    contacto: {
        email: "ana.garcia@email.com",
        linkedin: "https://linkedin.com/in/anagarcia",
        twitter: "https://twitter.com/anagarcia",
        github: "https://github.com/anagarcia"
    },
    proyectos: [
        {
            id: 1,
            nombre: "EcoTrack",
            descripcion: "Una aplicación móvil para rastrear y reducir la huella de carbono personal.",
            imagen: "",
            github: "https://github.com/anagarcia/ecotrack"
        },
        {
            id: 2,
            nombre: "MindfulAI",
            descripcion: "Un chatbot de terapia cognitivo-conductual impulsado por IA para apoyo de salud mental.",
            imagen: "",
            github: "https://github.com/anagarcia/mindfulai"
        },
        {
            id: 3,
            nombre: "CodeCollab",
            descripcion: "Plataforma de colaboración en tiempo real para desarrolladores con características de pair programming.",
            imagen: "",
            github: "https://github.com/anagarcia/codecollab"
        }
    ]
}

export default function Home() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    return (
        <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
            {/* Fondo animado */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(100)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-blue-900 rounded-full mix-blend-screen filter blur-xl opacity-20"
                        style={{
                            width: Math.random() * 300 + 50,
                            height: Math.random() * 300 + 50,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            scale: [1, 1.5, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-900 bg-opacity-60 rounded-xl p-8 backdrop-blur-lg shadow-2xl"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <motion.img
                            src={alumno.foto}
                            alt={alumno.nombre}
                            className="w-64 h-64 rounded-full object-cover border-4 border-purple-600 shadow-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        />
                        <div className="flex-1">
                            <motion.h1
                                className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                {alumno.nombre}
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-300 mb-4"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                {alumno.titulo}
                            </motion.p>
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
                </motion.div>
            </div>
        </div>
    )
}