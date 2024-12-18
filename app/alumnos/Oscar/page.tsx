'use client'
import Image from "next/image"
import { motion } from 'framer-motion';
import ProjectCard from '../../../components/cart';
import FlipText from "@/components/ui/flip-text";
import TypingAnimation from "@/components/ui/text-reveal";
const projects = [
  {
    title: "Asistente virtual en consultas de admision",
    description: "Desarrollo de un chatbot destinado a responder preguntas frecuentes para la direccion de admision de la Universidad Nacional Tecnologica de Lima Sur (UNTELS)",
    link: "https://github.com/Carloscv200313/pyto_progrmacion_MRUV",
    imageUrl: "/alumnos/Oscar/proyec_01.jpeg"
  },
  {
    title: "Simulador de un cuerpo en MRU",
    description: "Proyecto realizado para poder graficar como es el movimiento de un cuerpo en MRU y hallar los calculos necesarios para el desarrollo de algunas variables",
    link: "https://proyecto2.com",
    imageUrl: "/alumnos/Oscar/1.png"
  },
  {
    title: "Sistema de ventas para una panizeria",
    description: "Se hizo un sistema web para poder gesionar las ventas en tiempo real de una panizeria ",
    link: "https://panizzeria.vercel.app/",
    imageUrl: "/alumnos/Oscar/2.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container py-0 space-y-24">
        {/* Home Section */}
        <section
          className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/alumnos/Oscar/compu.jpeg')" }}
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          {/* Contenido sobre la imagen */}
          <div className="flex flex-col justify-center space-y-20 ">

            <FlipText
              className="text-5xl font-bold -tracking-widest text-white md:text-9xl md:leading-[5rem]"
              word="OSCAR    MANUEL"
            />
            <FlipText
              className="text-5xl font-bold -tracking-widest text-blue-500 md:text-9xl md:leading-[5rem]"
              word="NUÑEZ    BUSTOS"
            />
          </div>
        </section>
        {/* About Section */}
        <section
          className={`grid lg:grid-cols-2 gap-12 transition-opacity duration-1000 min:h-[100vh]`}
        >
          {/* Contenido del texto */}
          <div className="space-y-6 flex flex-col justify-center h-auto">
            <h2 className="text-4xl font-bold tracking-tighter">ACERCA DE MI</h2>
            <p className="text-muted-foreground">2313010780@untels.edu.pe</p>
            <TypingAnimation
              className="text-xl text-white"
              text="¡Hola! Soy estudiante de Ingeniería de Sistemas, actualmente cursando el cuarto ciclo y construyendo mi camino hacia el fascinante mundo de la ciencia de datos. Mi formación incluye cursos en programación con Python, visualización de datos tanto en Python como en R, y un sólido enfoque en estadística descriptiva e inferencial, abarcando técnicas como regresión lineal y múltiple. También he explorado las bases de datos, el aprendizaje automático (machine learning) y el procesamiento del lenguaje natural (NLP), herramientas que considero esenciales para transformar datos en decisiones y generar impacto.  

Me apasiona el análisis y la resolución de problemas complejos a través de la tecnología, y creo firmemente en el poder de los datos para contar historias, descubrir oportunidades y cambiar el mundo. Mi meta es seguir aprendiendo, colaborando en proyectos desafiantes y creciendo como profesional en este emocionante campo. ¡Siempre estoy listo para convertir desafíos en logros y números en insights que impulsen el futuro!"
            />
            <p className="text-muted-foreground">Lima, Perú</p>
          </div>

          {/* Imagen con comportamiento sticky */}
          <div className="relative flex items-center justify-center">
            <div className="sticky  ">
              <Image
                src="/alumnos/Oscar/perfil.jpeg"
                alt="Professional portrait"
                width={500}
                height={500}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </section>


        {/* Resume Section */}
        <section className={`transition-opacity duration-1000`}>
          <div className="min-h-screen bg-transparent text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.h1
                className="text-4xl font-bold text-center mb-12"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Mis Proyectos
              </motion.h1>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {projects.map((project, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      link={project.link}
                      imageUrl={project.imageUrl}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

