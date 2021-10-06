import styles from '../styles/Benefits.module.css'
const Benefits = () => {
  return (
    <section className={styles.section_container}>
      <span className={styles.batata_logo}></span>
      <div className={styles.section_title}>
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </div>
      <section className={styles.cards_container}>
        <article className={styles.card}>
          <span className={`${styles.card__icon} ${styles.clock}`}></span>
          <p className={styles.card__title}>Tiempo real</p>
          <p className={styles.card__description}>
            Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.
          </p>
        </article>
        <article className={styles.card}>
          <span className={`${styles.card__icon} ${styles.eye}`}></span>
          <p className={styles.card__title}>No hay tasas escondidas</p>
          <p className={styles.card__description}>
            Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.
          </p>
        </article>
        <article className={styles.card}>
          <span className={`${styles.card__icon} ${styles.dollar}`}></span>
          <p className={styles.card__title}>Compara monedas</p>
          <p className={styles.card__description}>
            No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.
          </p>
        </article>
        <article className={styles.card}>
          <span className={`${styles.card__icon} ${styles.check_circle}`}></span>
          <p className={styles.card__title}>Información confiable</p>
          <p className={styles.card__description}>
            Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.
          </p>
        </article>
      </section>
    </section>
  )
}
export default Benefits