import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import ButtonScreen from '../../screens/button';

function ButtonPage() {
  return (
    <div>
      <Head>
        <title>Kaskus UI - Docs - Buttons</title>
        <meta name="description" content="UI by Kaskus" />
      </Head>
      <Layout>
        <ButtonScreen />
      </Layout>
    </div>
  );
}

export default ButtonPage;
