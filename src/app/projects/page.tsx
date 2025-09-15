'use client'

import Link from 'next/link'
import { Leva } from 'leva'
import ProjScene from '@/components/scenes/ProjScene'
import Card from '@/components/ui/Card'
import styles from './projects.module.css'
import { projects } from '@/data/projectsData'

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <div>
        <Link href="/" className={styles.backButton}>
          Ir a home
        </Link>
      </div>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </section>

      <ProjScene />
      <Leva collapsed />
    </main>
  )
}
