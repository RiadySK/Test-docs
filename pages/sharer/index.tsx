import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import SharerScreen from '../../screens/sharer';

function SharerPage() {
  return (
    <div>
      <Head>
        <title>Kaskus UI - Docs - Sharer</title>
        <meta name="description" content="UI by Kaskus" />
      </Head>
      <Layout>
        <SharerScreen />
      </Layout>
    </div>
  );
}

export default SharerPage;
