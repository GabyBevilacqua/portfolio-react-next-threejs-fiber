export interface Study {
  title: string
  description: string
  details?: string[]
  result?: string
  link?: string
}

export const studies: Study[] = [
  {
    title: "Full Stack Developer",
    description: "4Geeks Academy España, 2024 - 2025.",
    details: [
      "Bootcamp intensivo de 8 meses enfocado en desarrollo web Full Stack.",
      "Stack: HTML, CSS, TypeScript, React, Node.js.",
      "Proyecto final: desarrollo de una aplicación web completa."
    ],
    result: "Certificado de finalización."
  },
  {
    title: "Arquitecto",
    description: "Universidad Central de Venezuela, 1999 - 2007.",
    details: [
      "Estudios en arquitectura con énfasis en diseño creativo.",
      "Proyecto final: diseño y planificación de un Centro Cultural."
    ],
    result: "Licenciatura en arquitectura."
  },
  {
    title: "Web Development with Python",
    description: "IBM SkillBuilds, 2025.",
    details: [
      "Aprendizaje de Python y sus aplicaciones en desarrollo web.",
      "Proyecto final: creación de una aplicación web básica con Flask."
    ]
  }
]
