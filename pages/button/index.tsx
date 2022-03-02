import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import parse from 'html-react-parser';
import Layout from '../../components/layout';
import CodeEditorComponent from '../../components/codeEditor';

const code = `
  <div className="grid grid-cols-2 gap-4 bg-slate-100 p-8 w-full">
    <div className="w-full">
      <kaskus-button
        data-id="riady"
        data-ga="riyeayady"
        text="Primary"
        onclick="alert('I love kaskus')"
      ></kaskus-button>
    </div>
    <div className="w-full">
      <kaskus-button
        variant="secondary"
        text="Secondary"
      ></kaskus-button>
    </div>
    <div className="w-full">
      <kaskus-button
        variant="alternate"
        text="Alternate"
      ></kaskus-button>
    </div>
  </div>
`;

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
