'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Skill {
  id: string
  title: string
  icon: string
  description: string
}

const GlitchText = ({ text = '' }: { text: string }) => {
  const [isVisible, setIsVisible] = useState(false)
  const titleRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  return (
    <h1 ref={titleRef} className="text-8xl font-bold tracking-tight mb-4 relative">
      {Array.from(text).map((char, index) => (
        <span
          key={index}
          className={`glitch-char ${isVisible ? 'animate' : ''}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {char}
        </span>
      ))}
      <span className="absolute -mt-6 ml-1 text-4xl text-green-500">*</span>
    </h1>
  )
}

const GlowingText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`relative inline-block group ${className}`}>
      {children}
      <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"></span>
    </span>
  )
}

export default function Component() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false)
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const skills: Skill[] = [
    { id: '01', title: 'Desarrollo Web', icon: '🌐', description: 'Creación de sitios web modernos e interactivos que puedan ser el agrado de millones de usuarios.' },
    { id: '02', title: 'Diseño UI/UX', icon: '🎨', description: 'Interfaces intuitivas y experiencias de usuario personalizadas' },
    { id: '03', title: 'Ciberseguridad', icon: '🔒', description: 'Protección y seguridad de sistemas informáticos' },
    { id: '04', title: 'Desarrollo de Videojuegos', icon: '🎮', description: 'Creación de experiencias interactivas que puedan hacer sentir emociones al jugador, introducir al Perú en el mercado de videojuegos como eje central del continente.' },
  ]

  useEffect(() => {
    setIsLoaded(true)

    const carousel = carouselRef.current
    if (carousel) {
      const scrollWidth = carousel.scrollWidth
      const clientWidth = carousel.clientWidth

      let animationFrame: number

      const animate = () => {
        if (carousel.scrollLeft >= scrollWidth - clientWidth) {
          carousel.scrollLeft = 0
        } else {
          carousel.scrollLeft += 1
        }
        animationFrame = requestAnimationFrame(animate)
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-black bg-opacity-80 backdrop-blur-sm">
        <div className="text-xl font-bold"><GlowingText>Wired</GlowingText></div>
        <div className="flex items-center gap-8">
          <Link href="#" className="hover:text-blue-400 transition-colors"><GlowingText>Conexión</GlowingText></Link>
          <Link href="#" className="hover:text-blue-400 transition-colors"><GlowingText>Protocolos</GlowingText></Link>
          <Link href="#" className="hover:text-blue-400 transition-colors"><GlowingText>Navi</GlowingText></Link>
          <button className="px-6 py-2 bg-transparent border border-green-500/20 rounded-full hover:bg-green-500/10 transition-colors">
            <GlowingText>Login</GlowingText>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-10" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-20">
          <GlitchText text="JESHUA RAÚL AVALOS MENDOZA" />
          <p className="max-w-2xl text-xl text-green-300 mb-8">
            <GlowingText>
              Soy un Ingeniero de sistemas de la Universidad Nacional Tecnológica de Lima Sur. Actualmente resido en Lima, distrito de Chorrilos junto con mi familia.
              Soy un apasionado del internet, no por que tenga algún vicio, si no que me encanta ver que hay tantas comunidades que se forman dentro de ella, como si fuera otra forma de vida ajena al cuerpo físico. Algunos otros temas que me interesan son la historia, la antropología, psicologia, el desarrollo de videojuegos y me encantaría poder abordar temas de ciberseguridad. Mi meta es unir la cultura y la historia de mi país gracias a la programación. Poner en boca de todos al Perú en esta época moderna mediante, lo que considero yo, el décimo arte.
            </GlowingText>
          </p>
          <button className="w-fit px-8 py-3 bg-green-700 rounded-full hover:bg-green-600 transition-colors">
            <GlowingText>Iniciar Conexión</GlowingText>
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-20 py-24 bg-gray-900 overflow-hidden">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4"><GlowingText>Protocolos de Navegación</GlowingText></h2>
          <p className="text-green-400 max-w-2xl">
            <GlowingText>
              Algunos de los temas de mi carrera en los que estoy interesado son:
            </GlowingText>
          </p>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-hidden"
          >
            {skills.map((skill, index) => (
              <div
                key={`${skill.id}-${index}`}
                className="w-80 flex-shrink-0 bg-black bg-opacity-50 rounded-3xl p-8 border border-green-500/20"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-green-700 to-blue-700 rounded-2xl mb-6 flex items-center justify-center text-4xl">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2"><GlowingText>{skill.title}</GlowingText></h3>
                <p className="text-green-400 mb-6"><GlowingText>{skill.description}</GlowingText></p>
                <button className="px-6 py-2 bg-green-700 rounded-full text-sm hover:bg-green-600 transition-colors">
                  <GlowingText>Explorar</GlowingText>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}