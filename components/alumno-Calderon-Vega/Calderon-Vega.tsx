import Image from "next/image";
import { TypewriterEffectDemo } from "./titulo";

export default function PaginaCarlosCalderon() {
    return (
        <>
            <div className="h-screen bg-black relative overflow-hidden">
                {/* Imagen de fondo con filtro de brillo */}
                <Image
                    width={10000}
                    height={500}
                    src="/alumnos/carlos_calderon/fondo.jpg"
                    alt="foto de fondo"
                    className="absolute inset-0 object-cover w-full h-full"
                    style={{ filter: "brightness(0.1)" }} // Oscurece la imagen
                />
                {/* Texto en la parte superior */}
                <div className="absolute inset-0 flex items-center justify-center text-white z-10 w-full">
                    <div className="w-2/3">
                        <TypewriterEffectDemo />
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[100vh] bg-gradient-to-b from-black to-gray-950 relative overflow-hidden inset-0 flex items-center justify-center p-10 flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center h-full mb-8 md:mb-0">
                    <Image
                        width={500}
                        height={1000}
                        src="/alumnos/carlos_calderon/foto.png"
                        alt="foto de fondo"
                        className="rounded-3xl shadow-lg shadow-slate-950 h-5/6 w-4/6" // Clases para bordes redondos y sombra
                    />
                </div>
                <div className="w-full md:w-1/2 flex justify-center flex-col h-full">
                    <p className="text-3xl md:text-4xl font-extrabold text-gray-300 xl:m-8 xl:text-5xl pb-5">
                        <span className="border-b-2 border-yellow-800">Sobre Mi</span>
                    </p>
                    <p className="mb-4 text-gray-300 text-base md:text-lg lg:text-xl">
                        Hola, soy Carlos Calderón, estudiante de Ingeniería de Sistemas en el cuarto ciclo de mi carrera y un apasionado programador de páginas web con un enfoque Full Stack. Tengo experiencia en el desarrollo frontend utilizando HTML, CSS y JavaScript, así como en frameworks como React. En el backend, trabajo con Node.js y Express, y manejo bases de datos como MongoDB y MySQL. Además, estoy familiarizado con herramientas de control de versiones como Git. Me motiva crear soluciones completas que mejoren la experiencia del usuario, y busco constantemente aprender y aplicar nuevas tecnologías en mis proyectos. Estoy emocionado por las oportunidades que se presenten para seguir creciendo en este campo.
                    </p>
                    <div className="grid gap-4 md:gap-20 grid-cols-1 md:grid-cols-2 mt-6">
                        <button className="rounded-3xl bg-yellow-500 text-gray-800 px-4 py-2 hover:bg-yellow-400">Contáctame</button>
                        <button className="rounded-3xl border border-yellow-500 text-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white">Download CV</button>
                    </div>
                </div>
            </div>
        </>
    );
}
