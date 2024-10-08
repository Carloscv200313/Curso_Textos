"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
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
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Web",
            className: "text-blue-500 dark:text-blue-500",
        },
        
        
    ];
    return (
        <div className="flex flex-col items-start justify-start h-[10rem]">
            <TypewriterEffect words={words} />
        </div>
    );
}
