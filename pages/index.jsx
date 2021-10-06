import Head from 'next/head'
import Header from '../components/Header'
import Exchange from '../components/Exchange'
import Exchange2 from '../components/Exchange2'
import styles from '../styles/Home.module.css'
import Benefits from '../components/Benefits'
import Banner from '../components/Banner'
import Plans from '../components/Plans'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <title>Batata Bit | Home</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Exchange />  
        <Benefits />
        <Banner />
        <Plans/>
      </main>
      <Footer />
    </div>
  )
}
