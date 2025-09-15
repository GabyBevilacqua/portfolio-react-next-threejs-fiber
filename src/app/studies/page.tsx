'use client'

import Link from 'next/link'
import React from 'react'
import styles from './studies.module.css'
import StudiesScene from '@/components/scenes/StudiesScene'
import Card from '@/components/ui/Card'
import { studies } from '@/data/studiesData'

export default function StudiesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.sceneBg}>
        <StudiesScene />
      </div>
      <div>
        <Link href="/" className={styles.backButton}>
          Ir a home
        </Link>
      </div>
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          {studies.map((study, index) => (
            <Card key={index} {...study} />
          ))}
        </div>
      </section>
    </main>
  )
}