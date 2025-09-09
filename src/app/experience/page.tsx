'use client'

import Link from 'next/link'
import React from 'react'
import styles from './experience.module.css'

export default function ExperiencePage() {
  return (
    <main className="h-screen w-screen">
      <div>
        <Link href="/" className={styles.backButton}>
          Ir a home
        </Link>
      </div>
      
    </main>
  )
}