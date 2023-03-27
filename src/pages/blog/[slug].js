import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const BlogPost = () => {
    const router = useRouter()
    const {slug} = router.query
  return (
    <>
    <Head>
        <title>{slug} </title>
        <meta name="description" content="This is blog post page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Blog Post :- {slug}</div>
    </>
  )
}

export default BlogPost