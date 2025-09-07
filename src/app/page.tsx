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
          <Link href="/biografi">
            <button className={styles.exploreButton}>Biografía</button>
          </Link>
          <Link href="/projects">
            <button className={styles.exploreButton}>Proyectos</button>
          </Link>
          <Link href="/studies">
            <button className={styles.exploreButton}>Estudios</button>
          </Link>
          <Link href="/experience">
            <button className={styles.exploreButton}>Experiencia</button>
          </Link>
          <Link href="/contact">
            <button className={styles.exploreButton}>Contacto</button>
          </Link>
        </div>
      </div>
      <Scene />
    </main>
  )
}
