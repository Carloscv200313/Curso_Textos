'use client'

import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutMeCard = () => {
  return (
    <StyledWrapper>
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-info">
          <h2 className="title">Sobre Mí</h2>
          <div className="content">
            <p>
              Hola, soy David Carbajal, estudiante de Ingeniería de Sistemas en el cuarto ciclo de mi carrera.
            </p>
            <p>
              Como experto en hacking ético, me especializo en identificar vulnerabilidades en sistemas y aplicaciones web. Utilizo mis habilidades para mejorar la seguridad de las aplicaciones que desarrollo y para asesorar sobre mejores prácticas de ciberseguridad. Me apasiona la intersección entre el desarrollo web y la seguridad informática, y constantemente busco formas de integrar principios de seguridad en el ciclo de vida del desarrollo de software.
            </p>
          </div>
        </div>
      </motion.div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .card {
    --background: linear-gradient(to right, #74ebd5 0%, #acb6e5 100%);
    width: 100%;
    max-width: 500px;
    padding: 5px;
    border-radius: 1rem;
    overflow: visible;
    background: #74ebd5;
    background: var(--background);
    position: relative;
    z-index: 1;
  }

  .card::before,
  .card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    z-index: -1;
  }

  .card::before {
    background: linear-gradient(to bottom right, #f6d365 0%, #fda085 100%);
    transform: rotate(2deg);
  }

  .card::after {
    background: linear-gradient(to top right, #84fab0 0%, #8fd3f4 100%);
    transform: rotate(-2deg);
  }

  .card-info {
    --color: #1a202c;
    background: var(--color);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: 0.7rem;
    position: relative;
    z-index: 2;
    padding: 2rem;
  }

  .card .title {
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #74ebd5;
  }

  .card .content {
    font-size: 1rem;
    line-height: 1.5;
  }

  .card .content p {
    margin-bottom: 1rem;
  }

  .card:hover::before,
  .card:hover::after {
    opacity: 0;
  }

  .card:hover .card-info {
    color: #74ebd5;
    transition: color 1s;
  }

  .card:hover .card-info .title {
    color: #fff;
    transition: color 1s;
  }
`

export default AboutMeCard

