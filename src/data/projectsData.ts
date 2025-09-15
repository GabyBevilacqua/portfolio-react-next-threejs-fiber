export interface Project {
  title: string;
  description: string;
  details: string[];
  result: string;
  link?: string;
  image?: string; // Optional image property
}

export const projects: Project[] = [
  {
    title: "Este portfolio",
    description:
      "Diseño y desarrollo de ésta web, historia de un viaje: un mundo de creatividad donde el código se convierte en océano y las ideas llegan a puerto.",
    details: [
      "Diseño UI/UX: Definición de la estructura, wireframes y estilo visual.",
      "Historia de un océano, una isla, un náufrago que regresa a puerto y comienza su siguiente etapa en la vida.",
      "Desarrollo front-end: React + Next + Three Fiber, TypeScript.",
      "Tecnologías adicionales: animaciones fluidas mediante GSAP, uso de Drei, Leva, escenas 3D con elementos GLTF elaborados en Blender.",
      "Funcionalidad de contacto: Sistema serverless con Nodemailer y alertas con SweetAlert2.",
      "Deploy en Vercel + configuración de dominio.",
    ],
    result:
      "El resultado: una experiencia inmersiva y cautivadora que invita a los usuarios a explorar y descubrir.",
    image: "/projects/portfolio.png",
  },
  {
    title: "Portfolio Carloleonardo Aponte",
    description:
      "Diseño y desarrollo del sitio web oficial de un escultor contemporáneo, combinando diseño, desarrollo y fotografía.",
    details: [
      "Diseño UI/UX: Definición de la estructura, wireframes y estilo visual.",
      "Desarrollo front-end: React + Vite con animaciones fluidas mediante Framer Motion, GSAP y componentes de React Bits.",
      "Contenido y curaduría: Redacción de textos, organización y selección de material.",
      "Fotografía y edición de las obras.",
      "Galería interactiva: Vista de detalle para cada obra con navegación desde la galería principal.",
      "Funcionalidad de contacto: Sistema serverless con Nodemailer y alertas con SweetAlert2.",
      "Deploy en Vercel + configuración de dominio.",
    ],
    result:
      "El resultado: una plataforma profesional, estética y escalable que permite al artista mostrar su obra al mundo con impacto y claridad.",
      link: "https://www.carloleonardoaponte.com/",
      image: "/projects/webCarlo.webp",
  },
  {
    title: "Portfolio GB.Franchi",
    description:
      "Actualmente en desarrollo, sitio web profesional para una chef privada, combinando biografía, servicios y venta de productos digitales.",
    details: [
      "Diseño UI/UX: Definición de la estructura, wireframes y estilo visual.",
      "Sección de biografía y oferta de servicios.",
      "Galerías de imágenes almacenadas en Cloudinary.",
      "Venta de libros digitales en Amazon Brasil.",
      "Interfaz moderna con React, GSAP y React Bits.",
      "Funcionalidad de contacto: Sistema serverless con Nodemailer y alertas con SweetAlert2.",
      "Deploy en Vercel para rendimiento y escalabilidad.",
    ],
    result:
      "El resultado: una plataforma profesional y atractiva que resalta la experiencia culinaria y servicios exclusivos de la chef.",
    link: "https://chef-portfolio-lovat.vercel.app/",
    image: "/projects/webGaby.webp",
  },
  {
    title: "Proyecto 3",
    description: "Placeholder para un próximo proyecto.",
    details: [],
    result: "",
  },
];
