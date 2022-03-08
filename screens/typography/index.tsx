import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import TableInfo from '../../components/tableInfo';
import CodeEditorComponent from '../../components/codeEditor';
import {
  HeadingCode as initialHeadingCode,
  TextCode as initialTextCode,
} from './_code';
import { HeadingDocs, TextDocs } from './_docs';

const TypographyScreen: NextPage = () => {
  const [headingCode, setHeadingCode] = useState(initialHeadingCode);
  const [textCode, setTextCode] = useState(initialTextCode);

  useEffect(() => {
    console.log('headingCode', headingCode);
  }, [headingCode])

  return (
    <>
      <kaskus-header color="primary" variant="h1">Typogpraphy</kaskus-header>
      <div className="p-4">
        {/* Headings */}
        <kaskus-header color="primary" variant="h2">Heading</kaskus-header>
        <kaskus-header color="secondary" variant="h3">Preview</kaskus-header>
        {parse(headingCode)}
        <kaskus-header color="secondary" variant="h3">Code</kaskus-header>
        <CodeEditorComponent
          code={headingCode}
          onChangeCode={(newCode: string) => setHeadingCode(newCode)}
        />
        <kaskus-header color="secondary" variant="h3">Info</kaskus-header>
        <TableInfo docs={HeadingDocs}></TableInfo>
        {/* Body */}
        <span className="bg-grey-2 h-1 w-full block my-10"></span>
        <kaskus-header color="primary" variant="h2">Body (text)</kaskus-header>
        <kaskus-header color="secondary" variant="h3">Preview</kaskus-header>
        {parse(textCode)}
        <kaskus-header color="secondary" variant="h3">Code</kaskus-header>
        <CodeEditorComponent
          code={textCode}
          onChangeCode={(newCode: string) => setTextCode(newCode)}
        />
        <kaskus-header color="secondary" variant="h3">Info</kaskus-header>
        <TableInfo docs={TextDocs}></TableInfo>
      </div>
    </>
  )
}

export default TypographyScreen
