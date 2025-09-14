// redactar la biografia
'use client'

import BioScene from '@/components/scenes/BioScene'
import Link from 'next/link'
import React from 'react'
import styles from './biography.module.css'
import { Leva } from 'leva'

export default function BiographyPage() {
  return (
    <main className="h-screen w-screen">
      <div>
        <Link href="/" className={styles.backButton}>
          Ir a home
        </Link>
      </div>
      <BioScene/>
      <Leva collapsed />
    </main>
  )
}
// import React from 'react'

// export default function BiographyPage() {
//   return (
//     <div className="p-8 max-w-3xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6">Biografía</h1>
//       <p className="mb-4">
//         ¡Hola! Soy Gabriela, una desarrolladora Full Stack con una pasión por la programación y el diseño. Con experiencia en frontend y backend, disfruto creando interfaces atractivas e intuitivas, así como resolviendo desafíos técnicos en todo el stack.
//       </p>
//       <p className="mb-4">
//         Mi viaje en el mundo de la tecnología comenzó hace varios años, y desde entonces he trabajado con diversas tecnologías como React, Next.js, Vite, TypeScript, Python, Flask y MySQL. Me encanta combinar mi experiencia previa en diseño y modelado 3D con el desarrollo web, lo que me permite aportar creatividad y atención al detalle a cada proyecto.
//       </p>
//       <p className="mb-4">
//         Además de mis habilidades técnicas, cuento con más de 8 años de experiencia en atención al cliente, lo que me ha permitido desarrollar habilidades de comunicación y trabajo en equipo. Estoy siempre dispuesta a aprender y afrontar nuevos retos en el mundo del desarrollo web.
//       </p>      

//       <ul className="list-disc list-inside mb-4">
//         <li>Full Stack Developer con experiencia en frontend y backend, trabajando con tecnologías como React, Next.js, Vite, TypeScript, Python, Flask y MySQL.</li>
//         <li>Apasionada por el mundo de la programación, disfruto especialmente del frontend y la creación de interfaces atractivas e intuitivas, aunque también me desenvuelvo en el backend y estoy siempre dispuesta a afrontar cualquier reto en todo el stack.</li>
//       </ul>
//         <p className="mb-4">
//         Me motiva combinar mi experiencia previa en diseño y modelado 3D con el desarrollo web, llevando la creatividad y la atención al detalle a cada proyecto en el que participo.
//         </p>
//       <h2 className="text-2xl font-semibold mb-4">Habilidades Técnicas</h2>
//         <ul className="list-disc list-inside mb-4">
//         <li><strong>Lenguajes de programación:</strong> JavaScript, TypeScript, Python, Java.</li>
//         <li><strong>Desarrollo web:</strong> HTML5 / CSS3, Node.js, WordPress.</li>
//         <li><strong>Frameworks y librerías:</strong> Flask, React, ThreeJS, Next.js, Vite, GSAP, Framer Motion, React Bits, Bootstrap, Tailwind.</li>
//         <li><strong>Control de versiones:</strong> GIT, GitHub.</li>
//         <li><strong>Base de datos y APIs:</strong> MySQL, APIs.</li>
//         <li><strong>Herramientas de desarrollo:</strong> Visual Studio Code, Eclipse, Slack.</li>
//         <li><strong>Diseño:</strong> Photoshop, Figma, Illustrator, Publisher, KitchenDraw.</li>
//         <li><strong>Modelado 3D:</strong> AutoCAD, Cinema4D, Blender.</li>
//       </ul>
//         <p className="mb-4">
//         Con más de 8 años de experiencia en atención al cliente, aporto habilidades de comunicación, atención a los detalles y creatividad, que fortalecen la colaboración en equipos multidisciplinarios.
//         </p>
//     </div>
//   )
// }

// Me motiva combinar mi experiencia previa en diseño y modelado 3D con el desarrollo web, llevando la creatividad y la atención al detalle a cada proyecto en el que participo.

// ❇Como full stack developer:

// ◼Lenguajes de programación
// JavaScript, TypeScript, Python, Java.

// ◼Desarrollo web
// HTML5 / CSS3, Node.js, WordPress.

// ◼Frameworks y librerías
// Flask, React, ThreeJS, Next.js, Vite, GSAP, Framer Motion, React Bits, Bootstrap, Tailwind.

// ◼Control de versiones
// GIT, GitHub.

// ◼Base de datos y APIs
// MySQL, APIs.

// ◼Herramientas de desarrollo
// Visual Studio Code, Eclipse, Slack.

// ❇Como diseñadora:
// Photoshop, Figma , Illustrator, Publisher, KitchenDraw
// Modelado 3D, AutoCAD, Cinema4D y Blender.

// Con más de 8 años de experiencia en atención al cliente, aporto habilidades de 
// comunicación, atención a los detalles y creatividad, que fortalecen la 
// colaboración en equipos multidisciplinarios.