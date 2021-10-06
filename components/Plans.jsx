import styles from '../styles/Plans.module.css';

const Plans = () => (
  <section id="plans" className={styles.section_container}>
    <div className={styles.section_title}>
      <h2>Escoge el plan que mejor se ajuste a ti.</h2>
      <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
    </div>
    <section className={styles.cards_container}>
      <article className={styles.card}>
        <p className={styles.card_recomended}>Recomendado</p>
        <div className={styles.card_content}>
          <h3 className={styles.card__title}>Pago Anual</h3>
          <p className={styles.card__price}><sup>$</sup>99</p>
          <p className={styles.card__saving}>* Ahorras $129 comparado al plan mensual.</p>
          <button className={styles.card__button}>
            Escoger este<span className={styles.button__icon}></span>
          </button>
        </div>
      </article>
      <article className={styles.card}>
        <p className={styles.card_recomended}>Recomendado</p>
        <div className={styles.card_content}>
          <h3 className={styles.card__title}>Pago Anual</h3>
          <p className={styles.card__price}><sup>$</sup>99</p>
          <p className={styles.card__saving}>* Ahorras $129 comparado al plan mensual.</p>
          <button className={styles.card__button}>
            Escoger este<span className={styles.button__icon}></span>
          </button>
        </div>
      </article>
      <article className={styles.card}>
        <p className={styles.card_recomended}>Recomendado</p>
        <div className={styles.card_content}>
          <h3 className={styles.card__title}>Pago Anual</h3>
          <p className={styles.card__price}><sup>$</sup>99</p>
          <p className={styles.card__saving}>* Ahorras $129 comparado al plan mensual.</p>
          <button className={styles.card__button}>
            Escoger este<span className={styles.button__icon}></span>
          </button>
        </div>
      </article>
    </section>
  </section>
)

export default Plans;
