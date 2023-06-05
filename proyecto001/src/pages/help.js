import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Help() {
  /* Esto es una promesa de obtener datos desde algun backend*/
  /*fetch(urlRequest)
    .then(response => console.log("Se cumplio la promesa: " + response))
    .catch(reason => console.log("NO cumplio la promesa: " + reason))
*/
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Esto el Help
      </main>
    </>
  )
}
