'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
interface Props{
  text: string,
  className?:string
}
const GlitchText = ({ text, className }:Props) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute top-0 left-0 -ml-[2px] -mt-[2px] text-red-500 opacity-70 animate-glitch-1">{text}</span>
      <span className="absolute top-0 left-0 -ml-[1px] -mt-[1px] text-blue-500 opacity-70 animate-glitch-2">{text}</span>
      {text}
    </span>
  )
}

const DistortedImage = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover animate-distort"></div>
  </div>
)

export default function PortfolioLain() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      className={`min-h-screen bg-black text-green-500 p-8 overflow-x-hidden ${robotoMono.className} cursor-none`}
    >
      <div 
        className="screen-effect"
        style={{
          backgroundImage: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0) 10%)`,
        }}
      ></div>
      <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        <img src="/placeholder.svg?height=40&width=20" alt="Monster Energy can cursor" className="w-5 h-10" />
      </div>
      <DistortedImage />
      <div className="max-w-4xl mx-auto bg-black bg-opacity-80 border border-green-500 rounded-lg p-8 shadow-[0_0_15px_5px_rgba(0,255,0,0.1)] relative overflow-hidden">
        <div className="glitch-overlay"></div>
        <header className="text-center mb-8 relative z-10">
          <h1 className="text-5xl font-bold text-green-400 mb-4 animate-flicker">
            <GlitchText text="Jeshua Avalos Mendozaz" className={undefined} />
          </h1>
          <div className="mt-2 text-red-500 text-2xl font-bold animate-pulse">
            <GlitchText text="¡Bienvenido al mi página web!" className={undefined} />
          </div>
        </header>

        {/* Sección Sobre Mí */}
        <div className={`space-y-6 transform transition-transform duration-1000 ease-out ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-xl shadow-lg border border-green-500 relative overflow-hidden">
            <div className="scanline"></div>
            <h2 className="text-3xl font-bold text-green-300 mb-4 text-center relative z-10">
              <GlitchText text="Sobre Mí" className={undefined} />
            </h2>
            <div className="space-y-4 text-green-400 relative z-10">
              <p>¡Hola! Soy Jeshua Raúl Avalos Mendoza.</p>
              <p>Soy un estudiante de la carrera de Ingeniería de Sistemas de la Universidad Nacional Tecnológica de Lima Sur ubicada en Villa el Salvador.</p>
              <p className="font-bold">
                Mi objetivo: Lograr aprender todo los conceptos de mi carrera lo mejor posible y aplicarlos en la vida real. Adentrarme poco a poco en el área de seguridad cibernética y promover la cultura e historia del continente sudamericano a travez del desarrollo de videojuegos.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="mt-8 bg-black bg-opacity-50 p-4 rounded-xl border border-green-500 relative overflow-hidden">
          <div className="static-effect"></div>
          <h2 className="text-2xl font-bold mb-4 text-center text-green-300 relative z-10">
            <GlitchText text="Contáctame" className={undefined} />
          </h2>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <a href="mailto:2313010018@untels.edu.pe" className="flex items-center gap-2 text-green-400 hover:text-red-500 underline transition-colors duration-300">
              <span>📧 2313010018@untels.edu.pe</span>
            </a>
            <a href="tel:941623269" className="flex items-center gap-2 text-green-400 hover:text-red-500 underline transition-colors duration-300">
              <span>📞 941 623 269</span>
            </a>
            <a href="https://linkedin.com/in/thngnguynvc20" className="flex items-center gap-2 text-green-400 hover:text-red-500 underline transition-colors duration-300">
              <span>💼 LinkedIn</span>
            </a>
            <a href="https://behance.net/thngnguynvc20" className="flex items-center gap-2 text-green-400 hover:text-red-500 underline transition-colors duration-300">
              <span>🎨 Behance</span>
            </a>
          </div>
        </div>

        {/* Sección de Educación y Habilidades */}
        <div className={`mt-8 relative bg-black bg-opacity-50 rounded-xl p-6 transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-50 blur-md rounded-xl"></div>
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Educación */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-green-300">
                  <GlitchText text="Educación" className={undefined} />
                </h2>
                <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg shadow-inner border border-green-500 relative overflow-hidden">
                  <div className="data-noise"></div>
                  <span className="px-4 py-1 bg-green-900 rounded-full text-sm font-bold relative z-10">2023 - Ahora</span>
                  <p className="mt-2 text-green-400 relative z-10">Universidad Nacional Tecnológica de Lima Sur - Ingeniería de Sistemas</p>
                </div>
              </div>

              {/* Habilidades Blandas */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-green-300">
                  <GlitchText text="Habilidades Blandas" className={undefined} />
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Trabajo en Equipo', 'Pensamiento Crítico', 'Creatividad', 'Gestión del Tiempo'].map((skill, index) => (
                    <div key={index} className="bg-gray-900 bg-opacity-50 p-2 rounded-lg text-center shadow-md border border-green-500 relative overflow-hidden">
                      <div className="data-noise"></div>
                      <span className="relative z-10">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Habilidades Técnicas */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-green-300">
                <GlitchText text="Habilidades Técnicas" className={undefined} />
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {['Figma', 'Premiere Pro', 'After Effects', 'Illustrator', 'InDesign', 'Photoshop'].map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 bg-opacity-50 p-2 rounded-lg text-center shadow-lg hover:bg-green-900 hover:bg-opacity-50 transition-colors duration-300 border border-green-500 relative overflow-hidden"
                  >
                    <div className="data-noise"></div>
                    <span className="relative z-10">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conjunto de Habilidades */}
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-green-300">
                  <GlitchText text="Conjunto de Habilidades" className={undefined} />
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Investigación de Usuario', 'Lluvia de Ideas', 'Prototipado'].map((skill, index) => (
                    <div key={index} className="bg-gray-900 bg-opacity-50 p-2 rounded-lg text-center shadow-md border border-green-500 relative overflow-hidden">
                      <div className="data-noise"></div>
                      <span className="relative z-10">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Idiomas */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-green-300">
                  <GlitchText text="Idiomas" className={undefined} />
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Español', 'Inglés (Intermedio)'].map((language, index) => (
                    <div key={index} className="bg-gray-900 bg-opacity-50 p-2 rounded-lg text-center shadow-md border border-green-500 relative overflow-hidden">
                      <div className="data-noise"></div>
                      <span className="relative z-10">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Intereses */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-green-300">
                <GlitchText text="Intereses" className={undefined} />
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-gray-900 bg-opacity-50 p-2 rounded-lg text-center shadow-md border border-green-500 relative overflow-hidden">
                  <div className="data-noise"></div>
                  <span className="relative z-10">Desarrollo y diseño de videojuegos</span>
                </div>
                <div className="bg-gray-900 bg-opacity-50 p-2 rounded-lg text-center shadow-md border border-green-500 relative overflow-hidden">
                  <div className="data-noise"></div>
                  <span className="relative z-10">Ciber-seguridad</span>
                </div>
                <Link href="/kasane-teto-gif" className="ml-4">
                  <button 
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-black rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 animate-pulse relative overflow-hidden"
                    aria-label="Ver GIF de Kasane Teto"
                  >
                    <div className="absolute inset-0 bg-green-500 opacity-50 animate-ping"></div>
                    <span className="sr-only">Ver GIF de Kasane Teto</span>
                    <span className="text-2xl relative z-10">🌟</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <footer className="mt-8 text-center text-sm text-green-500 relative z-10">
          <p>© 2024 Mi Página Personal. Todos los derechos reservados.</p>
          <p className="mt-2 animate-pulse text-red-500">¡Gracias por visitar mi página! Vuelva pronto (^^)/ </p>
        </footer>
      </div>
    </div>
  )
}