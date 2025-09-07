// poner todos mis proyectos
'use client'

import ProjScene from '@/components/ProjScene'
import Link from 'next/link'
import React from 'react'
import styles from './projects.module.css'

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <div>
        <Link href="/" className={styles.backButton}>
          Ir a home
        </Link>
      </div>
      <ProjScene />
      <div className={styles.cardsContainer}>
        {/* Ejemplo de 6 cards */}
        <div className={styles.card}>Proyecto 1</div>
        <div className={styles.card}>Proyecto 2</div>
        <div className={styles.card}>Proyecto 3</div>
        <div className={styles.card}>Proyecto 4</div>
        <div className={styles.card}>Proyecto 5</div>
        <div className={styles.card}>Proyecto 6</div>
      </div>
    </main>
  )
}