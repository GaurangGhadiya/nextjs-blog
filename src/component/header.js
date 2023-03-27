import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <main className={styles.main}>
    <ul className={styles.list}>
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/blog"}>Blog</Link></li>
      <li><Link href={"/contact"}>Contact</Link></li>
    </ul>
  </main>
  )
}

export default Header