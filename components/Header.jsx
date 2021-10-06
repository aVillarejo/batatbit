import styles from '../styles/Header.module.css'
import Image from 'next/image'
const Header = () => {
  return  (
    <header className={styles.header}>
      <div className={styles.header__title_container}>
        {/* <img src="/assets/img/logo.svg" alt="batatbit-main-logo" /> */}
        <figure className={styles.header__logo}>
        <Image src="/assets/img/logo.svg" alt="batatbit-main-logo" layout="fill" />
        </figure>
        <h1 className={styles.header__title}>La próxima revolución en el intercambio de criptomonedas.</h1>
        <p className={styles.header__text}>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
      </div>
      <a className={styles.header__button} href="#plans">Conoce Nuestros Planes<span></span></a>
    </header>
  )
}

export default Header
