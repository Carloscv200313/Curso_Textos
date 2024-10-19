"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    className,
}: {
    items: {
        url: string;
        alter: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "60s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-2 py-0 w-max flex-nowrap",
                    start && "animate-scroll",
                )}
            >
                {items.map((item) => (
                    <li
                        className={cn(
                            "relative flex-shrink-0 mx-3 ",
                            "w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:w-[50px] md:h-[50px] lg:w-[90px] lg:h-[90px]", // Tamaño fijo de 10x10 en pantallas pequeñas
                            "transition-transform duration-300 ease-in-out" // Transición suave al cambiar el tamaño
                        )}
                        key={item.alter}
                    >
                        <Image
                            width={10000}
                            height={500}
                            src={item.url}
                            alt={item.alter}
                            className="w-full h-full object-contain" // Ajuste para mantener la imagen completa
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
