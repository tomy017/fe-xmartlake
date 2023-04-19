import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

const TextEditor = () => {
  const [code, setCode] = useState('');

  const onChange = (newValue: string) => {
    setCode(newValue);
  };

  return (
    <MonacoEditor
      height="100vh"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={(newValue) => onChange(newValue || '')}
      options={{
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
      }}
    />
  );
};

export default TextEditor;
