import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css'

const About = () => {
  return (
    <>
    <Head>
        <title>About</title>
        <meta name="description" content="This is about page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
      <h1 className='text-center'>About Us</h1>
      <section className={styles.mt2}>
        <h3 className={styles.mt2}>Introduction</h3>
        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <h3 className={styles.mt2}>Terms & Conditions</h3>
        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <h3 className={styles.mt2}>Contact Us</h3>
        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </section>

        </main>
    </>
  )
}

export default About