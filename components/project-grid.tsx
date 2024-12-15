'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {projects} from "@/components/alumno-Calderon-Vega/Prpyectos"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}
export function ProjectGridComponent() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-5">
      <p className="text-3xl md:text-4xl font-extrabold text-gray-300 xl:m-8 xl:text-5xl pb-5">
                    <span className="border-b-2 border-yellow-800">Mis Proyectos</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project,  setHoveredProject }: { project: Project, hoveredProject: number | null, setHoveredProject: (id: number | null) => void }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between items-center p-6 pt-0">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <Link href={project.link} passHref>
            <Button  rel="noopener noreferrer">
              Ver Proyecto
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}