import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProjectSection() {
  const projectImages = [
    {
      src: "/Correa/FisicaI.jpeg",
      description: "Simulación de Física I: Dinámica de fluidos",
    },
    {
      src: "/Correa/ArrayListObjetosconHerencia.jpeg",
      description: "Uso de ArrayList con Herencia en Java",
    },
    {
      src: "/Correa/TicTacToe.jpeg.jpeg",
      description: "Proyecto Tic Tac Toe con Inteligencia Básica",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">MIS PROYECTOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectImages.map((project, index) => (
            <div key={index} className="space-y-4">
              <div className="relative w-full h-64">
                <Image
                  src={project.src}
                  alt={`Project screenshot ${index + 1}`}
                  layout="fill"
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="text-center text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto text-center space-y-6 mt-12">
          <p className="text-gray-600 text-justify">
            Estos son algunos de los proyectos que he desarrollado hasta el momento a lo largo de mi carrera
            universitaria. Cada uno de ellos refleja mi crecimiento profesional y mi pasión por la tecnología. A lo
            largo de mi formación, he aprendido valiosas lecciones que me han permitido enfrentar desafíos complejos y
            encontrar soluciones creativas. Estoy emocionado por seguir ampliando mi experiencia y espero poder
            emprender más proyectos que me permitan seguir aprendiendo y contribuir al desarrollo de soluciones
            innovadoras.
          </p>

        </div>
      </div>
    </section>
  );
}
