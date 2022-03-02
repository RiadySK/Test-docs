import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import parse from 'html-react-parser';
import Layout from '../../components/layout';
import CodeEditorComponent from '../../components/codeEditor';
import code from './_code'

const ButtonPage: NextPage = () => {
  const [editorCode, setEditorCode] = useState(code);

  return (
    <div>
      <Head>
        <title>Kaskus UI - Docs - Buttons</title>
        <meta name="description" content="UI by Kaskus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-3xl font-bold">
          Buttons
        </h1>
        <div className="p-4">
          <h2>Preview</h2>
          {parse(editorCode)}
          <h2>Code</h2>
          <CodeEditorComponent
            code={editorCode}
            onChangeCode={(newCode: string) => setEditorCode(newCode)}
          />
        </div>
      </Layout>
    </div>
  )
}

export default ButtonPage
