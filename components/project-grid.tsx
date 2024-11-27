"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
  {
    title: "Proyecto 4",
    description: "Descripción del proyecto 4",
    image: "/placeholder.svg?height=300&width=300",
    link: "#",
  },
];

export const ProjectGridComponent = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300 mb-8">
        <span className="border-b-2 border-yellow-800">Mis Proyectos</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-yellow-500 hover:text-yellow-400 font-medium"
              >
                Ver más →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

