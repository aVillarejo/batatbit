import styles from '../styles/Exchange2.module.css'

const Exchange = () => {
  return (
    <section className={styles.section_container}> 
      {/* tablas */}
      <section className={styles.tables_container}>
        <Table />
        <Table />
      </section>
    </section>
  )
}

export default Exchange

const Table = () => (
  <div className={styles.table__container}>          
    <p className={styles.table__title}>Monedas</p>
    <div className={styles.table}></div>
    <div className={styles.table__footer}>Actualizado</div>
  </div>
)
