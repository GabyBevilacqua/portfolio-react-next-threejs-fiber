'use client'

import Link from 'next/link'
import React from 'react'
import styles from './contact.module.css'
import ContactScene from '@/components/ContactScene'

export default function ContactPage() {
  return (
    <main className="h-screen w-screen">
      <div>
        <Link href="/" className={styles.backButton}>
          Ir a home
        </Link>
      </div>
      <ContactScene />
    </main>
  )
}