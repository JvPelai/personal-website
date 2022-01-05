import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JvPelai - Dev</title>
        <meta name="description" content="João Pelai Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Profile />
      <DarkModeSwitch />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
