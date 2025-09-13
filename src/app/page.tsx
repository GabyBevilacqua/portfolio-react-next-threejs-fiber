import Scene from "@/components/Scene"
import styles from "./home.module.css"
import Link from "next/link"
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <div className={styles.container}>
        <div className={styles.homecontainer}>
          <h1 className={styles.title}>Gabriella Bevilacqua</h1>
          <p className={styles.description}>Full Stack Developer</p>
          <p className={styles.description2}>Navego mares de código y diseño,
            tejiendo universos digitales donde cada línea es una ola
            y cada interfaz, una historia por descubrir. Te invito a navegar
            mi portfolio y descubrir ésta historia e interactuar con los elementos</p>
          <div>
            <div className={styles.links}>
              <Link href="https://github.com/GabyBevilacqua" className={styles.githubLink}>
                <span className={styles.iconWrapper}>
                  <span className={styles.github1}>
                    <Image
                      src="/github1.svg"
                      alt="GitHub"
                      fill
                      sizes="32px"
                    />
                  </span>
                  <span className={styles.github2}>
                    <Image
                      src="/github2.svg"
                      alt="GitHub"
                      fill
                      sizes="32px"
                    />
                  </span>
                </span>
              </Link>

              <Link href="https://www.linkedin.com/in/gabriellabevilacqua/" className={styles.githubLink}>
                <span className={styles.iconWrapper}>
                  <span className={styles.github1}>
                    <Image
                      src="/linkedin1.svg"
                      alt="LinkedIn"
                      fill
                      sizes="32px"
                    />
                  </span>
                  <span className={styles.github2}>
                    <Image
                      src="/linkedin2.svg"
                      alt="LinkedIn"
                      fill
                      sizes="32px"
                    />
                  </span>
                </span>
              </Link>

            </div>
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
