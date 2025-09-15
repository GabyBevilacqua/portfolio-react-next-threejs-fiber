import Image from 'next/image'
import styles from './card.module.css'

interface CardProps {
  title: string
  description: string
  details?: string[]
  result?: string
  link?: string
  image?: string
}

export default function Card({ title, description, details, result, link, image }: CardProps) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      {details && (
        <ul>
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
      {result && <p>{result}</p>}

      {image && link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
          <Image
            src={image}
            alt={`Imagen del proyecto ${title}`}
            width={400}
            height={250}
            className={styles.image}
          />
          <span className={styles.overlayText}>Ver más</span>
        </a>
      )}

      {image && !link && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={`Imagen del proyecto ${title}`}
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
      )}
    </article>
  )
}
