"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { InfiniteMovingCardsDemo } from "@/components/infinito";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
    const words = [
        {text: "Ingeniería",},
        {text: "de",},
        {text: "Sistemas:",},
        {text: "Mi",},
        {text: "camino",},
        {text: "hacia",},
        {text: "la",},
        {text: "innovación",
         className: "text-blue-300 dark:text-blue-400",},
    ];

    const projects = [
        {
            title: "Sistema de Gestión de Biblioteca",
            description: "Aplicación web desarrollada con React y Node.js para administrar préstamos y devoluciones de libros.",
            image: "/alumnos/Miguel_Calderon/bibliteca.jpg",
        },
        {
            title: "App de Monitoreo de Redes",
            description: "Herramienta de monitoreo de redes creada con Python y Django, utilizando visualizaciones en tiempo real.",
            image: "/alumnos/Miguel_Calderon/redes.jpg",
        },
        {
            title: "Algoritmo de Optimización de Rutas",
            description: "Implementación de un algoritmo genético para optimizar rutas de entrega, desarrollado en Java.",
            image: "/alumnos/Miguel_Calderon/rutas.jpg",
        },
    ];

    return (
        <>
            <div className="h-screen bg-black relative overflow-hidden">
                <Image
                    width={10000}
                    height={500}
                    src="/alumnos/Miguel_Calderon/fondo.jpeg"
                    alt="foto de fondo"
                    className="absolute inset-0 object-cover w-full h-full opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white z-10 w-full">
                    <div className="w-2/3">
                        <div className="flex flex-col items-start justify-start h-[15rem] md:h-[8rem]">
                            <TypewriterEffect words={words} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full min-h-[80vh] bg-gradient-to-b from-black to-gray-950 relative overflow-hidden inset-0 flex items-center justify-center p-10 flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center h-full mb-8 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-3 scale-105"></div>
                        <Image
                            width={500}
                            height={1000}
                            src="/alumnos/Miguel_Calderon/miguel-calderon.jpeg"
                            alt="foto de Miguel Calderon"
                            className="rounded-3xl shadow-lg shadow-slate-950 h-[400px] w-[300px] object-cover relative z-10 border-4 border-white"
                        />
                    </motion.div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center flex-col h-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-extrabold text-gray-300 xl:m-8 xl:text-5xl pb-5"
                    >
                        <span className="border-b-2 border-blue-300">Sobre mí</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-gray-300 text-base md:text-lg lg:text-xl"
                    >
                        Soy Miguel Angel Calderon Guevara, estudiante de Ingeniería de Sistemas en el cuarto ciclo de la UNTELS. Mi pasión es crear soluciones innovadoras utilizando tecnologías como React, Node.js y Python. Me especializo en desarrollo web, bases de datos y algoritmos de optimización. Busco constantemente aprender nuevas tecnologías y aplicarlas en proyectos que mejoren la experiencia del usuario y resuelvan problemas complejos.
                    </motion.p>
                </div>
            </div>

            <div className="bg-gray-950 text-gray-300 p-8 w-full min-h-[50vh] flex justify-center flex-col">
                <InfiniteMovingCardsDemo />
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-300 xl:m-8 xl:text-5xl pb-5"
                >
                    <span className="border-b-2 border-blue-300">Habilidades Técnicas</span>
                </motion.h2>
                <div className="grid gap-4 md:gap-10 grid-cols-1 md:grid-cols-2">
                    {[
                        { skill: "Desarrollo Web (React, Node.js)", percentage: 80 },
                        { skill: "Bases de Datos (SQL, MongoDB)", percentage: 75 },
                        { skill: "Programación en Python", percentage: 85 },
                        { skill: "Algoritmos y Estructuras de Datos", percentage: 70 },
                        { skill: "Redes y Seguridad Informática", percentage: 65 },
                        { skill: "Machine Learning", percentage: 60 },
                        { skill: "DevOps y CI/CD", percentage: 55 },
                        { skill: "Desarrollo de APIs RESTful", percentage: 70 },
                    ].map(({ skill, percentage }) => (
                        <div key={skill} className="mb-4">
                            <div className="flex justify-between">
                                <span>{skill}</span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {percentage}%
                                </motion.span>
                            </div>
                            <div className="relative w-full h-2 bg-gray-700 rounded">
                                <motion.div
                                    className="absolute h-full bg-blue-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${percentage}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-900 text-gray-300 p-8 w-full min-h-[50vh]">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-300 xl:m-8 xl:text-5xl pb-5 text-center"
                >
                    <span className="border-b-2 border-blue-300">Proyectos Destacados</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </>
    );
}

