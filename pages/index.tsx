import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../components/layout';

const HomePage: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Head>
        <title>Kaskus UI - Docs</title>
        <meta name="description" content="UI by Kaskus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="text-3xl font-bold">
          Welcome
        </h1>
      </Layout>
    </div>
  )
}

export default HomePage
