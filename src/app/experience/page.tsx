'use client'

import Link from 'next/link'
import React from 'react'
import styles from './experience.module.css'
import ExperienceScene from '@/components/scenes/ExperienceScene'


export default function ExperiencePage() {
  return (
    <main className="h-screen w-screen">
      <div>
        <Link href="/" className={styles.backButton}>
          Ir a home
        </Link>
      </div>
      <ExperienceScene />
    </main>
  )
}

/* 

"El océano es mi lienzo y la programación, mi brújula.
Cada proyecto es un viaje donde el diseño y el código se encuentran,
dando vida a mundos digitales que cuentan historias."

⚡ Profesional

"Soy una full stack developer apasionada por transformar ideas
en experiencias digitales únicas, donde el diseño y la programación
se unen para crear proyectos que inspiran y conectan."

🌱 Minimalista

"Diseño y desarrollo webs que son viajes:
un mundo de creatividad donde el código se convierte en océano
y las ideas llegan a puerto."

*/