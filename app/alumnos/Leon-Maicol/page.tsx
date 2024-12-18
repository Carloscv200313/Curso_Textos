"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Importa useInView de Framer Motion
import { InfiniteMovingCardsDemo } from "../../../components/infinito";
import { TypewriterEffect } from "../../../components/ui/typewriter-effect";
import ProjectTimeline from "@/components/proyect";
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
            text: "Ciberseguridad",
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
                    src="/alumnos/Oscar/fondo-maicol.jpg"
                    alt="foto de fondo"
                    className="absolute inset-0 object-cover w-full h-full"
                    style={{ filter: "brightness(0.1)" }} // Oscurece la imagen
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
                            src="/alumnos/Oscar/maicol.png"
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
                        Soy un estudiante de cuarto ciclo de la carrera de Ingeniería de Sistemas en la Universidad Nacional Tecnológica de Lima Sur. El proyecto presentado es para la elaboración de un trabajo final en el curso de Interpretación y Producción de Textos. Actualmente, estoy estudiando diversas áreas de la ciberseguridad, que es lo que más me interesa, y me mantengo informado sobre noticias relacionadas con este tema. Como ejemplo, quiero mencionar lo sucedido hace unos días, cuando se vulneró la base de datos de la Universidad Tecnológica del Perú (UTP) para luego vender aquellos datos, los cuales terminaron siendo filtrados.
                    </motion.p>
                </div>
            </div>
            <div className="bg-gray-950 text-gray-300 p-8 w-full min-h-[50vh] flex  justify-center  flex-col md:flex-col">
                <InfiniteMovingCardsDemo />
                
                <div className="min-h-screen bg-transparent">
                    
                    <ProjectTimeline/>
                </div>
            </div>
        </>
    );
}
