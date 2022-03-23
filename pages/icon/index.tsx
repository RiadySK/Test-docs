import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import IconScreen from '../../screens/icon';

function IconPage() {
  return (
    <div>
      <Head>
        <title>Kaskus UI - Docs - Icon</title>
        <meta name="description" content="UI by Kaskus" />
      </Head>
      <Layout>
        <IconScreen />
      </Layout>
    </div>
  );
}

export default IconPage;
