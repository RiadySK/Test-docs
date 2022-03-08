import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';

function HomePage() {
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
  );
}

export default HomePage;
