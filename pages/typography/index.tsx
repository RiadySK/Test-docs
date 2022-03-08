import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import TypographyScreen from '../../screens/typography';

function TypographyPage() {
  return (
    <div>
      <Head>
        <title>Kaskus UI - Docs - Typography</title>
        <meta name="description" content="UI by Kaskus" />
      </Head>

      <Layout>
        <TypographyScreen />
      </Layout>
    </div>
  );
}

export default TypographyPage;
