'use client'

import ProjScene from '@/components/scenes/ProjScene'
import Link from 'next/link'
import React from 'react'
import styles from './projects.module.css'
import { Leva } from 'leva'


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
            <h3>Este portfolio</h3>
            <p>Diseño y desarrollo de ésta web, historia de un viaje:
              un mundo de creatividad donde el código se convierte en océano
              y las ideas llegan a puerto.</p>
            <ul>
              <li> Diseño UI/UX: Definición de la estructura, wireframes y estilo visual.</li>
              <li> Historia de un océano, una isla, un náufrago que regresa a puerto y comienza su siguiente etapa en la vida</li>
              <li> Desarrollo front-end: React + Next + Three Fiber, TypeScript.</li>
              <li> Tecnologias adicionales: animaciones fluidas mediante GSAP, uso de Drei, Leva, escenas 3D con elementos GLT elaborados en Blender.</li>
              <li> Funcionalidad de contacto: Sistema serverless con Nodemailer y alertas con SweetAlert2.</li>
              <li> Deploy en Vercel + configuración de dominio.</li>
            </ul>
            <p>El resultado: una experiencia inmersiva y cautivadora que invita a los usuarios a explorar y descubrir.</p>
          </div>
          <div className={styles.card}>
            <h3>Portfolio Carloleonardo Aponte</h3>
            <p>Diseño y desarrollo del sitio web oficial de un escultor contemporáneo, combinando diseño, desarrollo y fotografía.</p>
            <ul>
              <li> Diseño UI/UX: Definición de la estructura, wireframes y estilo visual.</li>
              <li> Desarrollo front-end: React + Vite con animaciones fluidas mediante Framer Motion, GSAP y componentes de React Bits.</li>
              <li> Contenido y curaduría: Redacción de textos, organización y selección de material.</li>
              <li> Fotografía y edición de las obras</li>
              <li> Galería interactiva: Vista de detalle para cada obra con navegación desde la galería principal.</li>
              <li> Funcionalidad de contacto: Sistema serverless con Nodemailer y alertas con SweetAlert2.</li>
              <li> Deploy en Vercel + configuración de dominio</li>
            </ul>
            <p>El resultado: una plataforma profesional, estética y escalable que permite al artista mostrar su obra al mundo con impacto y claridad.</p>

            <a href="https://www.carloleonardoaponte.com/" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
          <div className={styles.card}>
            <h3>Portfolio GB.Franchi</h3>
            <p>Actualmente en desarrollo, sitio web profesional para una chef privada, combinando biografía, servicios y venta de productos digitales.</p>

            <ul>
              <li> Diseño UI/UX: Definición de la estructura, wireframes y estilo visual.</li>
              <li> Sección de biografía y oferta de servicios.</li>
              <li> Galerías de imágenes almacenadas en Cloudinary.</li>
              <li> Venta de libros digitales en Amazon Brasil.</li>
              <li> Interfaz moderna con React, GSAP y React Bits.</li>
              <li> Funcionalidad de contacto: Sistema serverless con Nodemailer y alertas con SweetAlert2.</li>
              <li> Deploy en Vercel para rendimiento y escalabilidad.</li>
            </ul>
            <p>El resultado: una plataforma profesional y atractiva que resalta la experiencia culinaria y servicios exclusivos de la chef.</p>

            <a href="https://chef-portfolio-lovat.vercel.app/" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
          <div className={styles.card}>Proyecto 3</div>
        </div>
      </section>

      <ProjScene />
      <Leva collapsed />
    </main>
  )
}