'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words }) => {
  const controls = useAnimation()
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (subIndex === words[index].text.length) {
        setTimeout(() => {
          controls.start('hidden')
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % words.length)
            setSubIndex(0)
          }, 500)
        }, 1000)
      } else {
        setSubIndex((prev) => prev + 1)
      }
    }, 150)

    return () => clearTimeout(timeout)
  }, [subIndex, index, words, controls])

  useEffect(() => {
    controls.start('visible')
  }, [index, controls])

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {words.map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold ${word.className}`}
          style={{ display: index === wordIndex ? 'block' : 'none' }}
        >
          {word.text.substring(0, subIndex)}
        </motion.div>
      ))}
    </div>
  )
}

