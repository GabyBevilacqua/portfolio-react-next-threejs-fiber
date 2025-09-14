'use client'

import Link from 'next/link'
import React from 'react'
import styles from './studies.module.css'
import StudiesScene from '@/components/scenes/StudiesScene'


export default function StudiesPage() {
  return (
    <main className="h-screen w-screen">
      <div>
        <Link href="/" className={styles.backButton}>
          Ir a home
        </Link>
      </div>
      < StudiesScene />
    </main>
  )
}