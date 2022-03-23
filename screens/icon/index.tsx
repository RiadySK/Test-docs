import type { NextPage } from 'next';
import React, { useState } from 'react';
import parse from 'html-react-parser';
import TableInfo from '../../components/tableInfo';
import CodeEditorComponent from '../../components/codeEditor';
import code from './_code';
import docs from './_docs';

const IconScreen: NextPage = () => {
  const [editorCode, setEditorCode] = useState(code);

  return (
    <>
      <kaskus-header color="primary" variant="h1">Icons</kaskus-header>
      <div className="p-4">
        <kaskus-header color="secondary" variant="h3">Preview</kaskus-header>
        {parse(editorCode)}
        <kaskus-header color="secondary" variant="h3">Code</kaskus-header>
        <CodeEditorComponent
          code={editorCode}
          onChangeCode={(newCode: string) => setEditorCode(newCode)}
        />
        <kaskus-header color="secondary" variant="h3">Info</kaskus-header>
        <TableInfo docs={docs}></TableInfo>
      </div>
    </>
  )
}

export default IconScreen;
