import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1 className='text-center'>Hello World!!</h1>
        <div className={`${styles.mt2} text-center ${styles.imgWrapper}`}>

        <Image src="/home.jpg" alt="home"  className="border-rounded" layout="fill" loading="lazy"
        objectFit="contain"/>
        </div>

        

      <section className={styles.mt2}>
      <h2 className={styles.mt2}>Latest Data</h2>
        <h3 className={styles.mt2}>Learn JavaScript</h3>
        <p className={styles.elipsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <h3 className={styles.mt2}>Learn JavaScript</h3>
        <p className={styles.elipsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <h3 className={styles.mt2}>Learn JavaScript</h3>
        <p className={styles.elipsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </section>
      </main>
      {/* <main className={styles.main}>
        <ul className={styles.list}>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/blog"}>Blog</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </main> */}
    </>
  )
}
