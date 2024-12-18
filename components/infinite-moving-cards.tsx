"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 100);
  }, []);

  const duration = speed === "fast" ? 20 : speed === "normal" ? 40 : 60;

  return (
    <div
      ref={containerRef}

      className={`scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <motion.div
        className="flex min-w-full shrink-0 gap-4 py-4"
        animate={start ? { x: direction === "left" ? "-100%" : "100%" } : { x: "0%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        {...(pauseOnHover && { onHoverStart: () => {}, onHoverEnd: () => {} })}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center w-[350px] h-[200px] rounded-2xl border border-slate-700 bg-slate-800 px-8 py-6 text-center"
          >
            <p className="text-slate-300 font-semibold">{item.quote}</p>
            <p className="text-slate-400 mt-4">{item.name}</p>
            <p className="text-slate-500 text-sm">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const InfiniteMovingCardsDemo = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gray-950 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={[
          {
            quote: "Desarrollo Web",
            name: "Frontend",
            title: "HTML, CSS, JavaScript",
          },
          {
            quote: "Frameworks",
            name: "React, Next.js",
            title: "Desarrollo de aplicaciones modernas",
          },
          {
            quote: "Diseño UI/UX",
            name: "Figma, Adobe XD",
            title: "Creación de interfaces atractivas",
          },
          {
            quote: "Backend",
            name: "Node.js, Express",
            title: "Desarrollo de APIs y servidores",
          },
          {
            quote: "Bases de Datos",
            name: "MongoDB, PostgreSQL",
            title: "Gestión y optimización de datos",
          },
        ]}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

