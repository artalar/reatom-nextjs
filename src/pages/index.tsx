import Head from 'next/head'
import { Search } from '~/features/Search'
import styles from './styles.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Reatom 🖤 Next.js</title>
        <meta name="description" content="Next.js + Reatom example app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Search />
      </main>
    </>
  )
}
