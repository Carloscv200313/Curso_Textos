"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Bienvenido",
            
            
        },
        {
            text: "a",
            
        },
        {
            text: "nuestra",
            
        },
        {
            text: "Pagina",
            className: "text-indigo-500 dark:text-indigo-500",
        },
        {
            text: "de",
            className: "text-indigo-500 dark:text-indigo-500",
        },
        {
            text: "Recuerdos",
            className: "text-indigo-500 dark:text-indigo-500",
        },
        
        
    ];
    return (
        <div className="flex flex-col items-start justify-start h-[50rem] md:h-[10rem]">
            <TypewriterEffect words={words} />
        </div>
    );
}
