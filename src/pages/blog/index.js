import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import axios from "axios";

const Blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="This is blog page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1 className="text-center">All Blogs</h1>
        <section className={styles.mt2}>
          {data?.map((v,i) => {
            return (
              <div key={i}>
                <h2 className={styles.mt2}>{v?.title}</h2>
                <p className={styles.elipsis}>{v?.desc}</p>
                  <p className={styles.readMore}>
                <Link href={`/blog/${v?.slug}`} >
                    {/* <a area-label={v?.slug}> */}
                      Read more about {v?.slug}
                      {/* </a> */}
                </Link>
                    </p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  let data = await axios.get("http://localhost:7000/api/blogs").then((res) => {
    return res?.data?.response;
  });

  return { props: { data: data } };
}

export default Blog;
