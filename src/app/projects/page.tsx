// poner todos mis proyectos
'use client'

import ProjScene from '@/components/ProjScene'
import Link from 'next/link'
import React from 'react'

export default function ProjectsPage() {
  return (
    <main className="h-screen w-screen">
      <div>
        <Link href="/">
          <button>Ir a home</button>
        </Link>
      </div>
      <ProjScene />
    </main>
  )
}