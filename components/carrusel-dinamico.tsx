"use client"
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    imageUrl: "/img/imagen-00.jpg",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    imageUrl: "/img/imagen-01.jpg",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    imageUrl: "/img/imagen-02.jpg",
  },
  {
    id: 4,
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    imageUrl: "/img/imagen-03.jpg",
  },
  {
    id: 5,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    imageUrl: "/img/imagen-04.jpg",
  },
  {
    id: 6,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    imageUrl: "/img/imagen-05.jpg",
  },
]

export function CarruselDinamicoComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 15000)

    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative w-[100vw] h-[89vh] mx-auto overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={slides[currentIndex].imageUrl}
            alt={slides[currentIndex].title}
            width={100000}
            height={50000}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-0 w-full h-full">
            <h2 className="text-white text-3xl font-bold mb-2">{slides[currentIndex].title}</h2>
            <p className="text-white text-lg">{slides[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
        aria-label="Siguiente diapositiva"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
