"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Importa useInView de Framer Motion
import { InfiniteMovingCardsDemo } from "../infinito";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { ProjectGridComponent } from "../project-grid";
export default function PaginaCarlosCalderon() {
    const words = [
        {
            text: "Ingeniero",
        },
        {
            text: "de",

        },
        {
            text: "Sistemas",

        },
        {
            text: "Developer",
            className: "text-blue-500 dark:text-indigo-500",
        },
        {
            text: "Web",
            className: "text-blue-500 dark:text-indigo-500",
        },
    ];
    return (
        <>
            <div className="h-screen bg-black relative overflow-hidden">
                {/* Imagen de fondo con filtro de brillo */}
                <Image
                    width={10000}
                    height={500}
                    src="/alumnos/CARBAJAL/fondo.jpg"
                    alt="foto de fondo"
                    className="absolute inset-0 object-cover w-full h-full"
                    style={{ filter: "brightness(0.3)" }} // Oscurece la imagen
                />
                {/* Texto en la parte superior */}
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
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            width={3000}
                            height={1000}
                            src="/alumnos/carlos_calderon/foto.png"
                            alt="foto de fondo"
                            className="rounded-3xl shadow-lg shadow-slate-950 h-full w-full" // Clases para bordes redondos y sombra
                        />
                    </motion.p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center flex-col h-full">
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-extrabold text-gray-300 xl:m-8 xl:text-5xl pb-5"
                    >
                        <span className="border-b-2 border-yellow-800">Sobre Mi</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-gray-300 text-base md:text-lg lg:text-xl"
                    >
                        Hola, soy Carlos Calderón, estudiante de Ingeniería de Sistemas en el cuarto ciclo de mi carrera y un apasionado programador de páginas web con un enfoque Full Stack. Tengo experiencia en el desarrollo frontend utilizando HTML, CSS y JavaScript, así como en frameworks como React. En el backend, trabajo con Node.js y Express, y manejo bases de datos como MongoDB y MySQL. Además, estoy familiarizado con herramientas de control de versiones como Git. Me motiva crear soluciones completas que mejoren la experiencia del usuario, y busco constantemente aprender y aplicar nuevas tecnologías en mis proyectos. Estoy emocionado por las oportunidades que se presenten para seguir creciendo en este campo.
                    </motion.p>
                    {/* Aseguramos que los botones están fuera de los párrafos */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid gap-4 md:gap-20 grid-cols-1 md:grid-cols-2 mt-6"
                    >
                        <button className="rounded-3xl bg-yellow-500 text-gray-800 px-4 py-2 hover:bg-yellow-400">Contáctame</button>
                        <button className="rounded-3xl border border-yellow-500 text-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white">Download CV</button>
                    </motion.div>
                </div>
            </div>
            <div className="bg-gray-950 text-gray-300 p-8 w-full min-h-[50vh] flex  justify-center  flex-col md:flex-col">
                <InfiniteMovingCardsDemo />
                <p className="text-3xl md:text-4xl font-extrabold text-gray-300 xl:m-8 xl:text-5xl pb-5">
                    <span className="border-b-2 border-yellow-800">Skills</span>
                </p>
                <div className="grid gap-4 md:gap-10 grid-cols-1 md:grid-cols-2">
                    {[
                        { skill: "React", percentage: 80 },
                        { skill: "JavaScript", percentage: 90 },
                        { skill: "Node Js", percentage: 70 },
                        { skill: "TypeScript", percentage: 60 },
                        { skill: "Tailwind", percentage: 80 },
                        { skill: "Express", percentage: 70 },
                        { skill: "SQL Server", percentage: 75 },
                        { skill: "Git", percentage: 90 },
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
                                    className="absolute h-full bg-yellow-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${percentage}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="min-h-screen bg-transparent">
                    <ProjectGridComponent/>
                </div>
            </div>
        </>
    );
}
