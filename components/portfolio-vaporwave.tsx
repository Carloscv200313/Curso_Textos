'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function PortfolioVaporwave() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-pink-500 to-cyan-400 text-white p-8 overflow-x-hidden font-['VT323',_monospace]">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-50 border-4 border-cyan-300 rounded-lg p-8 shadow-[0_0_15px_5px_rgba(80,199,199,0.7)]">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-cyan-300 animate-pulse">Mi Página Vaporwave</h1>
          <div className="mt-2 text-pink-300 text-2xl font-bold animate-bounce">¡Bienvenido al futuro retro!</div>
        </header>

        {/* Sección Sobre Mí */}
        <div className={`space-y-6 transform transition-transform duration-1000 ease-out ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 text-center">Sobre Mí</h2>
            <div className="space-y-4 text-white">
              <p>¡Hola! Soy Nguyen Duc Thang.</p>
              <p>Soy un Diseñador UI/UX basado en Hanoi, Vietnam, con experiencia en proyectos universitarios.</p>
              <p className="font-bold">
                Mi objetivo: Desafiarme en un nuevo entorno para aprender, desarrollar y mejorar mis habilidades a través de diferentes proyectos
                y contribuir más a la empresa con mis habilidades.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="mt-8 bg-purple-700 bg-opacity-50 p-4 rounded-xl border-2 border-dashed border-pink-400">
          <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Contáctame</h2>
          <div className="grid grid-cols-2 gap-4">
            <a href="mailto:thangndh15097@gmail.com" className="flex items-center gap-2 text-pink-300 hover:text-cyan-300 underline">
              <span>📧 thangndh15097@gmail.com</span>
            </a>
            <a href="tel:0397166247" className="flex items-center gap-2 text-pink-300 hover:text-cyan-300 underline">
              <span>📞 0397 166 247</span>
            </a>
            <a href="https://linkedin.com/in/thngnguynvc20" className="flex items-center gap-2 text-pink-300 hover:text-cyan-300 underline">
              <span>💼 LinkedIn</span>
            </a>
            <a href="https://behance.net/thngnguynvc20" className="flex items-center gap-2 text-pink-300 hover:text-cyan-300 underline">
              <span>🎨 Behance</span>
            </a>
          </div>
        </div>

        {/* Sección de Educación y Habilidades */}
        <div className={`mt-8 relative bg-black bg-opacity-50 rounded-xl p-6 transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-50 blur-md rounded-xl"></div>
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Educación */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Educación</h2>
                <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg shadow-inner">
                  <span className="px-4 py-1 bg-pink-500 rounded-full text-sm font-bold">2020 - Ahora</span>
                  <p className="mt-2 text-cyan-200">Universidad FPT - Diseño Gráfico</p>
                </div>
              </div>

              {/* Habilidades Blandas */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Habilidades Blandas</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-600 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Trabajo en Equipo</div>
                  <div className="bg-purple-600 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Pensamiento Crítico</div>
                  <div className="bg-cyan-600 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Comunicación</div>
                  <div className="bg-blue-600 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Gestión del Tiempo</div>
                </div>
              </div>
            </div>

            {/* Habilidades Técnicas */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Habilidades Técnicas</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {['Figma', 'Premiere Pro', 'After Effects', 'Illustrator', 'InDesign', 'Photoshop'].map((tool) => (
                  <div
                    key={tool}
                    className="bg-purple-700 bg-opacity-50 p-2 rounded-lg text-center shadow-lg hover:bg-pink-600 hover:bg-opacity-50 transition-colors duration-300"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Conjunto de Habilidades */}
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Conjunto de Habilidades</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Investigación de Usuario</div>
                  <div className="bg-purple-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Diseño Web</div>
                  <div className="bg-cyan-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Wireframing</div>
                  <div className="bg-blue-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Diseño de Apps</div>
                  <div className="bg-indigo-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Lluvia de Ideas</div>
                  <div className="bg-violet-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Prototipado</div>
                </div>
              </div>

              {/* Idiomas */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Idiomas</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Vietnamita</div>
                  <div className="bg-purple-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Inglés (Pre-Intermedio)</div>
                </div>
              </div>
            </div>

            {/* Intereses */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">Intereses</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-pink-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Tendencias de Diseño</div>
                <div className="bg-purple-700 bg-opacity-50 p-2 rounded-lg text-center shadow-md">Tecnología</div>
                <Link href="/interest-photo" className="ml-4">
                  <button 
                    className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 animate-spin-slow" 
                    aria-label="Ver foto de interés"
                  >
                    <span className="sr-only">Ver foto de interés</span>
                    <span className="text-2xl">🌟</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <footer className="mt-8 text-center text-sm text-cyan-300">
          <p>© 2023 Mi Página Vaporwave. Todos los derechos reservados.</p>
          <p className="mt-2 animate-pulse">¡Gracias por visitar mi página! Vuelve pronto 😊</p>
        </footer>
      </div>
    </div>
  )
}