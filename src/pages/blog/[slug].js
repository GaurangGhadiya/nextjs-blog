import axios from "axios";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";

const BlogPost = ({data}) => {
  return (
    <>
      <Head>
        <title>{data?.slug} </title>
        <meta name="description" content="This is blog post page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <section className={styles.mt2}>
          <h2 className={`${styles.mt2} text-center `}>{data?.title}</h2>
          <div className={styles.mt2} dangerouslySetInnerHTML={{__html: data?.longDesc}} />
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps(content) {
  let data = await axios.get(`http://localhost:7000/api/blogPost?slug=${content?.query?.slug}`).then((res) => {
    return res?.data?.response;
  });

  return { props: { data: data } };
}

export default BlogPost;
