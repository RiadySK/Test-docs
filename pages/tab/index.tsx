import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import TabScreen from '../../screens/tab';

function TabPage() {
  return (
    <div>
      <Head>
        <title>Kaskus UI - Docs - Tab</title>
        <meta name="description" content="UI by Kaskus" />
      </Head>
      <Layout>
        <TabScreen />
      </Layout>
    </div>
  );
}

export default TabPage;
