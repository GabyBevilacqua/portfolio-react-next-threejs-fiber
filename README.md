# 🌐 Portafolio Interactivo 3D

Este es mi portafolio personal desarrollado con **Next.js**, **React Three Fiber**, **Drei** y **Leva**.  
Incluye una escena interactiva en 3D con geometrías personalizadas y servirá como base para mostrar mi **biografía, experiencia y proyectos**.

---

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) – Framework de React para SSR/SSG y aplicaciones modernas.  
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) – Renderizador de Three.js en React.  
- [Drei](https://github.com/pmndrs/drei) – Colección de helpers y componentes listos para usar con R3F.  
- [Leva](https://github.com/pmndrs/leva) – Panel de control interactivo (similar a dat.GUI).  
- [Three.js](https://threejs.org/) – Motor gráfico 3D en WebGL.  
- [TypeScript](https://www.typescriptlang.org/) – Tipado estático para un desarrollo más robusto.  

---

## 📂 Estructura del proyecto

```bash
📦 src
 ┣ 📂 components
 ┃ ┣ Scene.tsx        # Componente principal con la escena 3D
 ┃ ┣ PlaneGeometry.tsx # Ejemplo de geometría interactiva con Leva
 ┣ 📂 pages
 ┃ ┣ index.tsx        # Página principal
 ┃ ┣ proyectos.tsx    # Sección de proyectos
 ┃ ┣ experiencia.tsx  # Sección de experiencia
 ┃ ┣ biografia.tsx    # Sección sobre mí
 ┣ 📂 styles
 ┃ ┗ globals.css
 ┗ README.md

## 🎨 Características

- ✅ Escena 3D interactiva con geometrías personalizadas.
- ✅ Panel de control con Leva para modificar parámetros en tiempo real.
- ✅ Diseño modular para agregar nuevas páginas: biografía, experiencia, proyectos, contacto, etc.
- ✅ Preparado para desplegar en Vercel o cualquier hosting compatible con Next.js.

# Clonar
git clone https://github.com/tu-usuario/tu-portafolio.git

# Entrar en el proyecto
cd tu-portafolio

# Instalar dependencias
npm install

npm run dev
