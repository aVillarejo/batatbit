import styles from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__links}>
        <ul>
          <li><a>LinkedIn</a></li>
          <li><a>Crounchbase</a></li>
          <li><a>Hackernews</a></li>
        </ul>
      </section>
      <section className={styles.footer__brand}>
        <figure>
          <Image
            src="/assets/img/footer-logo.svg"
            className={styles.batata_logo}
            alt="Batata-logo"
            layout="fill"
          />
        </figure>
        <p>&reg; Batatabit 2020</p>
      </section>

    </footer>
  )
}

export default Footer