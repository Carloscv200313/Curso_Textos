'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import TechBackground from '@/components/TechBackground'
import AboutMeCard from '@/components/AboutMeCard'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si'

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm font-medium">
      <span>{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="mt-1 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-blue-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
)

export default function Page() {
  const words = [
    { text: "Ingeniero" },
    { text: "de" },
    { text: "Sistemas" },
    { text: "Developer", className: "text-blue-500" },
    { text: "Web", className: "text-blue-500" },
    { text: "Experto", className: "text-red-500" },
    { text: "en", className: "text-red-500" },
    { text: "Hacking", className: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <TechBackground />
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fondo abstracto tecnológico"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            priority
          />
        </div>
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">David Carbajal Solano</h1>
          <TypewriterEffect words={words} />
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 flex flex-col md:flex-row items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0"
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Foto de perfil de David Carbajal Solano"
            width={400}
            height={400}
            className="rounded-full shadow-lg shadow-blue-500/50"
          />
        </motion.div>
        <div className="w-full md:w-1/2 flex justify-center">
          <AboutMeCard />
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 bg-opacity-80 p-8 w-full min-h-screen flex flex-col justify-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          <span className="border-b-2 border-blue-500">Habilidades</span>
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto z-10">
          <SkillBar skill="React" percentage={80} />
          <SkillBar skill="JavaScript" percentage={90} />
          <SkillBar skill="Node.js" percentage={70} />
          <SkillBar skill="TypeScript" percentage={60} />
          <SkillBar skill="Tailwind CSS" percentage={80} />
          <SkillBar skill="Express" percentage={70} />
          <SkillBar skill="MongoDB" percentage={75} />
          <SkillBar skill="Git" percentage={90} />
          <SkillBar skill="Hacking Ético" percentage={85} />
          <SkillBar skill="Seguridad Web" percentage={80} />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-8 max-w-3xl mx-auto z-10"
        >
          <FaHtml5 className="text-5xl text-orange-500" />
          <FaCss3Alt className="text-5xl text-blue-500" />
          <FaJs className="text-5xl text-yellow-400" />
          <FaReact className="text-5xl text-blue-400" />
          <FaNodeJs className="text-5xl text-green-500" />
          <SiExpress className="text-5xl text-white" />
          <SiMongodb className="text-5xl text-green-400" />
          <SiMysql className="text-5xl text-blue-300" />
          <FaGitAlt className="text-5xl text-red-500" />
          <SiTypescript className="text-5xl text-blue-600" />
          <SiTailwindcss className="text-5xl text-cyan-400" />
        </motion.div>
      </section>
    </div>
  )
}

