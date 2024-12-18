import React from 'react';
import { 
  Code, 
  Laptop, 
  BookOpenText, 
  PenTool,
  FileCode,
  LayoutGrid,
  Github,
  Link2,
  LucideIcon
} from 'lucide-react';
import Image from 'next/image';
// Tipos para la tecnología
interface Technology {
  name: string;
  icon: LucideIcon;
  color: string;
}

// Tipos para las props del ProjectCard
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const TechSlider: React.FC = () => {
  const technologies: Technology[] = [
    { name: 'HTML', icon: FileCode, color: 'text-orange-500' },
    { name: 'CSS', icon: LayoutGrid, color: 'text-blue-600' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-500' },
    { name: 'React', icon: Laptop, color: 'text-cyan-500' },
    { name: 'TypeScript', icon: BookOpenText, color: 'text-blue-700' },
    { name: 'Tailwind', icon: PenTool, color: 'text-teal-500' },
    // Duplicar para crear efecto de slider infinito
    { name: 'HTML', icon: FileCode, color: 'text-orange-500' },
    { name: 'CSS', icon: LayoutGrid, color: 'text-blue-600' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-500' },
    { name: 'React', icon: Laptop, color: 'text-cyan-500' },
    { name: 'TypeScript', icon: BookOpenText, color: 'text-blue-700' },
    { name: 'Tailwind', icon: PenTool, color: 'text-teal-500' }
  ];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-slide space-x-8 py-4">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center w-24 shrink-0 transform transition-all duration-300 hover:scale-110 hover:brightness-125"
          >
            {React.createElement(tech.icon, { 
              size: 48, 
              className: `${tech.color} mb-2 animate-pulse` 
            })}
            <span className="text-sm text-white font-bold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  liveLink 
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex space-x-2">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white"
            >
              <Github size={24} />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white"
            >
              <Link2 size={24} />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex space-x-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-gray-700 text-xs rounded-full text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 animate-gradient-x">
          Portafolio de Desarrollo Web
        </h1>
        <p className="text-xl text-gray-400 tracking-wider">
          Desarrollador Web Full Stack | Innovación Digital
        </p>
      </header>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10"></div>
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">Sobre Mí</h2>
        <div className="flex items-center space-x-8 relative z-10">
          <Image
            width={100}
            height={100}
            src="/api/placeholder/300/300" 
            alt="Foto de perfil" 
            className="w-64 h-64 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
          />
          <div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Desarrollador web apasionado por crear experiencias digitales innovadoras. 
              Combino habilidades técnicas avanzadas con creatividad para desarrollar 
              soluciones web de vanguardia.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Mi enfoque se centra en la excelencia técnica, la innovación constante 
              y la creación de interfaces de usuario intuitivas y de alto rendimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Tecnologías</h2>
        <TechSlider />
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            title="E-Commerce Platform" 
            description="Plataforma de comercio electrónico con panel de administración completo y pasarela de pagos integrada."
            technologies={['React', 'TypeScript', 'Tailwind', 'Node.js']}
            githubLink="#"
            liveLink="#"
          />
          <ProjectCard 
            title="Social Media Dashboard" 
            description="Panel de control de redes sociales con análisis en tiempo real y visualización de datos interactiva."
            technologies={['React', 'Redux', 'Chart.js', 'Firebase']}
            githubLink="#"
            liveLink="#"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-600">
        <p className="text-gray-400">© 2024 Mi Portafolio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};




export default function home()  {
    return (
        <div >
            <Portfolio/>
        </div>
    )
}