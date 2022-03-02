import React, { ChangeEvent } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

const CodeEditor = dynamic((): any => import(
  "@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

interface CodeEditorComponentProps {
  code: string,
  onChangeCode: (value: string) => void,
}

const CodeEditorComponent = (
  {
    code,
    onChangeCode,
  }: CodeEditorComponentProps) => {
  return (
    <CodeEditor
      // @ts-ignore: (JSX attribute) value: string
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChangeCode(event.target.value);
      }}
      padding={8}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: "ui-monospace, monospace",
      }}
    />
  );
}

export default CodeEditorComponent;