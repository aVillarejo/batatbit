import styles from '../styles/Exchange.module.css'

const Exchange = () => {
  return (
    <section className={styles.exchange_container}>
      {/* imagen */}
      <div className={styles.backgroundImg}></div>
      {/* title and text */}
      <div className={styles.exchange_container__title}>
        <h2 >Visibilizamos todas las tasas de cambio.</h2>
        <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
      </div>  
      {/* tablas */}
      <section className={styles.tables_section__container}>
        <div className={styles.table__container}>
          <p className={styles.table__title}>Monedas</p>
          <div className={styles.table_content__container}>
            <table>
              <tr>
                <td className={styles.table__top_left}>Bitcoin</td>
                <td className={`${styles.table__top_right} ${styles.table__right}`}>
                  $1.96
                  <span className={`${styles.trendingDown} ${styles.table__icon}`}></span>
                </td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td className={styles.table__right}>
                  $0.07
                  <span className={`${styles.trendingUp} ${styles.table__icon}`}></span>
                </td>
              </tr>
              <tr>
                <td>Ripple</td>
                <td className={styles.table__right}>
                  $2.15
                  <span className={`${styles.trendingDown} ${styles.table__icon}`}></span>
                </td>
              </tr>
              <tr>
                <td className={styles.table__bottom_left}>Stellar</td>
                <td className={`${styles.table__bottom_right} ${styles.table__right}`}>
                  $4.96
                  <span className={`${styles.trendingDown} ${styles.table__icon}`}></span>
                </td>
              </tr>  
            </table>    
          </div>
          <div className={styles.table__footer}>
            <p><b>Actualizado:</b>19 Julio 23:45</p>
          </div>
        </div>
                <div className={styles.table__container}>
          <p className={styles.table__title}>Monedas</p>
          <div className={styles.table_content__container}>
            <table>
              <tr>
                <td className={styles.table__top_left}>Bitcoin</td>
                <td className={`${styles.table__top_right} ${styles.table__right}`}>
                  $1.96
                  <span className={`${styles.trendingDown} ${styles.table__icon}`}></span>
                </td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td className={styles.table__right}>
                  $0.07
                  <span className={`${styles.trendingUp} ${styles.table__icon}`}></span>
                </td>
              </tr>
              <tr>
                <td>Ripple</td>
                <td className={styles.table__right}>
                  $2.15
                  <span className={`${styles.trendingDown} ${styles.table__icon}`}></span>
                </td>
              </tr>
              <tr>
                <td className={styles.table__bottom_left}>Stellar</td>
                <td className={`${styles.table__bottom_right} ${styles.table__right}`}>
                  $4.96
                  <span className={`${styles.trendingDown} ${styles.table__icon}`}></span>
                </td>
              </tr>  
            </table>    
          </div>
          <div className={styles.table__footer}>
            <p><b>Actualizado:</b>19 Julio 23:45</p>
          </div>
        </div>   
      </section>
    </section>
  )
}

export default Exchange
