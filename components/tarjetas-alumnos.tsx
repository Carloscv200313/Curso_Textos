"use client"

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Facebook, Linkedin, Instagram, Github } from 'lucide-react'
import Image from 'next/image';
const alumnos = [
  {
    id: "Carlos-Calderon",
    nombre: "Carlos Calderon",
    foto: "/alumnos/carlos_calderon/foto.png",
    descripcionBreve: "Estudiante de Ingeniería de Sistemas",
    redes: {
      facebook: "https://www.facebook.com/profile.php?id=100070618440202",
      linkedin: "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/",
      instagram: "https://www.instagram.com/cscv200313/",
      gitHub: "https://github.com/Carloscv200313"

    },
  },
  {
    id: "Carlos-Calderon",
    nombre: "Carlos Calderon",
    foto: "/alumnos/carlos_calderon/foto.png",
    descripcionBreve: "Estudiante de Ingeniería de Sistemas",
    redes: {
      facebook: "https://www.facebook.com/profile.php?id=100070618440202",
      linkedin: "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/",
      instagram: "https://www.instagram.com/cscv200313/",
      gitHub: "https://github.com/Carloscv200313"

    },
  },
]

export default function TarjetasAlumnosComponent() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-950 p-8 relative overflow-hidden ">
      {/* Destellos blancos */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.h1
        className="m-10 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-800 xl:m-8 text-center relative -z-0 xl:text-8xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Lista de Alumnos
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 relative ">
        {alumnos.map((alumno) => (
          <motion.div
            key={alumno.id}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-0 m-0 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden shadow-lg cursor-pointer transform perspective-1000"

          >
            <div className="relative w-full h-auto " onClick={() => router.push(`/alumnos/${alumno.id}`)}>
              <Image
                width={10000}
                height={500}
                src={alumno.foto}
                alt={alumno.nombre}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Ver perfil</p>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{alumno.nombre}</h2>
              <p className="text-gray-300 mb-4">{alumno.descripcionBreve}</p>
              <div className="flex justify-center space-x-4">
                <a href={alumno.redes.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  <Facebook size={24} />
                </a>
                <a href={alumno.redes.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <a href={alumno.redes.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors duration-200">
                  <Instagram size={24} />
                </a>
                <a href={alumno.redes.gitHub} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors duration-200">
                  < Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}