export interface Study {
  title: string
  description: string
  details?: string[]
  result?: string
  link?: string
}

export const studies: Study[] = [
  {
    title: "Licenciatura en Diseño Gráfico",
    description: "Universidad de Ejemplo, 2015 - 2019.",
    details: [
      "Enfoque en branding, ilustración y diseño editorial.",
      "Proyectos académicos con clientes simulados.",
      "Participación en exposiciones de diseño universitarias."
    ],
    result: "Graduado con honores."
  },
  {
    title: "Curso Avanzado de Desarrollo Web",
    description: "Plataforma Online, 2021.",
    details: [
      "Stack: HTML, CSS, JavaScript, React y Node.js.",
      "Proyecto final: desarrollo de una aplicación web completa."
    ],
    result: "Certificado de finalización."
  },
  {
    title: "Workshop: Animaciones con GSAP",
    description: "Workshop intensivo de 20 horas, 2022.",
    details: [
      "Animaciones avanzadas en interfaces web.",
      "Integración de GSAP con React y Three.js."
    ]
  }
]
