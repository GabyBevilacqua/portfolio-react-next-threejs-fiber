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
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Portfolio para el escultor Carloleonardo Aponte</h3>
            <p>Diseñé y desarrollé el sitio web oficial de un escultor contemporáneo, combinando diseño, desarrollo y fotografía para crear una experiencia digital inmersiva..</p>
            <ul>
              <li>🎨 Diseño UI/UX: Definición de la estructura, wireframes y estilo visual.</li>
              <li>💻 Desarrollo front-end: React + Vite con animaciones fluidas mediante Framer Motion, GSAP y componentes de React Bits.</li>
              <li>✍️ Contenido y curaduría: Redacción de textos, organización y selección de material.</li>
              <li>📷 Fotografía y edición de las obras</li>
              <li>🖼️ Galería interactiva: Vista de detalle para cada obra con navegación desde la galería principal.</li>
              <li>📩 Funcionalidad de contacto: Sistema serverless con Nodemailer y alertas con SweetAlert2.</li>
              <li>🚀 Deploy en Vercel + configuración de dominio</li>
            </ul>
            <p>El resultado: una plataforma profesional, estética y escalable que permite al artista mostrar su obra al mundo con impacto y claridad.</p>

            <a href="https://www.carloleonardoaponte.com/" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
          <div className={styles.card}>
            <h3>GB.Franchi – Chef Portfolio</h3>
            <p>Actualmente estoy desarrollando un sitio web profesional para una chef privada, combinando biografía, servicios y venta de productos digitales.</p>

            <ul>
              <li>🎨 Diseño UI/UX: Definición de la estructura, wireframes y estilo visual.</li>
              <li>👩‍🍳 Sección de biografía y oferta de servicios.</li>
              <li>🖼️ Galerías de imágenes almacenadas en Cloudinary.</li>
              <li>📚 Venta de libros digitales en Amazon Brasil.</li>
              <li>💻 Interfaz moderna con React, GSAP y React Bits.</li>
              <li>📩 Funcionalidad de contacto: Sistema serverless con Nodemailer y alertas con SweetAlert2.</li>
              <li>🚀 Deploy en Vercel para rendimiento y escalabilidad.</li>
            </ul>

            <a href="https://chef-portfolio-lovat.vercel.app/" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
          <div className={styles.card}>Proyecto 3</div>
          <div className={styles.card}>Proyecto 4</div>
          <div className={styles.card}>Proyecto 5</div>
          <div className={styles.card}>Proyecto 6</div>
        </div>
      </section>
            
        <ProjScene />
      
    </main>
  )
}