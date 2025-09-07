import Scene from "@/components/Scene"
import styles from "./home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <div className={styles.container}>
        <div className={styles.homecontainer}>
          <h1 className={styles.title}>Gabriella Bevilacqua</h1>
          <p className={styles.description}>Full Stack Developer</p>
          <div>
            <Link href="#" className={styles.links}>GitHub</Link>
            <Link href="#" className={styles.links}>LinkedIn</Link>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/biography" className={styles.exploreButton}>
            Biografía
          </Link>
          <Link href="/projects" className={styles.exploreButton}>
            Proyectos
          </Link>
          <Link href="/studies" className={styles.exploreButton}>
            Estudios
          </Link>
          <Link href="/experience" className={styles.exploreButton}>
            Experiencia
          </Link>
          <Link href="/contact" className={styles.exploreButton}>
            Contacto
          </Link>
        </div>
      </div>
      <Scene />
    </main>
  )
}
