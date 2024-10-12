"use client";
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
                    className="absolute inset-0 object-cover w-full h-full z-0"
                    style={{ filter: "brightness(0.1)" }} // Oscurece la imagen
                />
                {/* Texto en la parte superior */}
                <div className="absolute inset-0 flex items-center justify-center text-white z-10 w-full">
                    <div className="w-2/3" >
                        <TypewriterEffectDemo />
                    </div>

                </div>
            </div>
            <div className="h-screen bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">

            </div>
        </>
    );
}
