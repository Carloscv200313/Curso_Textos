'use client'

import Image from 'next/image'
import { motion } from "framer-motion"

interface TimelineItem {
    title: string
    content: string[]
    image: string
}

export default function ProjectTimeline() {
    const timelineItems: TimelineItem[] = [
        {
            title: "Fundamentos de Ciberseguridad",
            content: ["Conceptos básicos de ciberseguridad","Redes y protocolos"," Sistemas operativos y administración básica"],
            image: "/alumnos/Oscar/3.png"
        },
        {
            title: "Redes y Seguridad en Redes",
            content: ["Seguridad en redes","Criptografía básica","Introducción a la seguridad inalámbrica"],
            image: "/alumnos/Oscar/4.png"
        },
        {
            title: "Hacking Ético y Pentesting",
            content: ["Introducción al hacking ético","Herramientas de Pentesting","Análisis forense básico"],
            image: "/alumnos/Oscar/5.png"
        },
        {
            title: "Especialización",
            content: ["Seguridad ofensiva","Seguridad defensiva","Análisis forense y respuesta a incidentes","Seguridad en la nube"],
            image: "/alumnos/Oscar/6.png"
        }
    ]

    return (
        <section className="w-full py-12 bg-transparent">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute w-full h-1 bg-transparent top-8 left-0 right-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                            >
                                {/* Image node */}
                                <div className="w-36 h-36 rounded-full bg-white mx-auto mb-4 relative z-10 flex items-center justify-center border-2 border-primary overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                        className="object-cover h-full w-full"
                                    />
                                </div>

                                {/* Content */}
                                <div className="bg-transparent rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <h3 className="text-lg font-semibold text-center mb-4">{item.title}</h3>
                                    <ul className="space-y-2">
                                        {item.content.map((point, pointIndex) => (
                                            <li key={pointIndex} className="text-gray-600">
                                                • {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

