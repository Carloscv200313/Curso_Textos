"use client";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Student {
  name: string;
  description: string;
  image: string;
  slug?: string; // Opcional
}


const students: Student[] = [
  { name: "Carlos Calderón", description: "Desarrollador full-stack.", image: "/alumnos/carlos_calderon/foto.png", slug: "Carlos-Calderon" },
  { name: "Carbajal Solano", description: "Desarrollador full-stack.", image: "/alumnos/carlos_calderon/foto.png", slug: "Carbajal-Solano" },
  { name: "Jorge Ramírez", description: "Desarrollador backend con Java.", image: "/alumnos/carlos_calderon/foto.png", slug: "jorge-ramirez" },
  { name: "Caos Calderón", description: "Desarrollador full-stack.", image: "/alumnos/carlos_calderon/foto.png", slug: "caos-calderon" },
  { name: "Leria Soto", description: "Experta en diseño UX/UI.", image: "/alumnos/carlos_calderon/foto.png", slug: "leria-soto" },
  { name: "Rge Ramírez", description: "Desarrollador backend con Java.", image: "/alumnos/carlos_calderon/foto.png", slug: "rge-ramirez" },
  { name: "Carlos Calderón", description: "Desarrollador full-stack.", image: "/alumnos/carlos_calderon/foto.png", slug: "carlos-calderon-2" },
  { name: "Valeria Soto", description: "Experta en diseño UX/UI.", image: "/alumnos/carlos_calderon/foto.png", slug: "valeria-soto" },
  { name: "Jorge Ramírez", description: "Desarrollador backend con Java.", image: "/alumnos/carlos_calderon/foto.png", slug: "jorge-ramirez-2" },
];


const container = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: i * 0.3,
      staggerChildren: 0.3,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Animación lenta
    },
  },
};

export default function TarjetasAlumnosComponent() {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path); // Redirige a la ruta especificada
  };

  return (
    <div>
      {/* Fondo con destellos blancos */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#030303] to-[#2517f5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen pt-24">
        {/* Título con animación */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }} // Animación lenta
          className="text-4xl font-bold text-center mb-10 text-white"
        >
          NUESTROS ALUMNOS
        </motion.h1>

        {/* Contenedor de la lista de alumnos */}
        <motion.div
          className="w-full flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Activa la animación cuando esté el 20% visible
          variants={container}
        >
          {students.map((student, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center justify-center mb-8 bg-transparent rounded-lg shadow-lg "
              custom={index}
              variants={item}
              
            >
              {/* Imagen del alumno */}
              <Image
                src={student.image}
                width="1000"
                height="1000"
                alt={student.name}
                onClick={() => handleNavigation(`/alumnos/${student.slug}`)}
                className="w-auto h-48 rounded-full mb-5 object-cover  cursor-pointer"
              />
              {/* Nombre y descripción */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white">{student.name}</h2>
                <p className="text-gray-400">{student.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
