import Head from 'next/head'
import React, { useState } from 'react'
import styles from "@/styles/Home.module.css";
import axios from 'axios';

const Contact = () => {
  const [data, setData] = useState({})

  const onChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:7000/api/contact",data).then(res => {
      setData({...data, name : "", email : "",phone : "",desc: ""})
      alert("Submitted Sucessfull!!")
    }).catch(err => {
      alert("Something went wrong!!")
    })
  }
  return (
    <>
    <Head>
        <title>Contact</title>
        <meta name="description" content="This is contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1 className="text-center">Contact Us</h1>
        <section className={styles.mt2}>
          <form onSubmit={handleSubmit}>
            <div className={styles.mt2}>
            <label htmlFor='name'>Name :</label>
            <input type="text" name="name" id="name" onChange={onChange} value={data?.name}/>
            </div>
           <div className={styles.mt2}>
           <label htmlFor='email'>Email :</label>
            <input type="email" id="email" name="email" onChange={onChange} value={data?.email}/>
           </div>
           <div className={styles.mt2}>
           <label htmlFor='phone'>Phone :</label>
            <input type="number" id="phone" name="phone" onChange={onChange} value={data?.phone}/>
           </div>
           <div className={styles.mt2}> 
           <label htmlFor='desc'>description :</label>
            <textarea name="desc" id="desc" onChange={onChange} value={data?.desc}/>
           </div>
           <div className={`text-center ${styles.mt2}`}>
            <button className={styles.readMore}>Submit</button>
           </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default Contact