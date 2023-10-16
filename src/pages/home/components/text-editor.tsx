import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import styles from './text-editor.module.scss';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
// @ts-ignore Could not find types for this package
import { constrainedEditor } from 'constrained-editor-plugin';
import js from '../../../assets/images/js.png';
import python from '../../../assets/images/python.png';
import { Button } from 'common/button';
import { FileInput } from 'common/file-input';
import {
  javascriptStartFunction, pythonStartFunction , getRange, convertToBase64
} from '../../../helpers/text-editor-helpers';
import { TextField } from 'common/text-field';

const optionsWithImages = [
  {
    value: 'javascript',
    label: <div className={styles.label}><img src={js} alt="js" className={styles.image} />Javascript</div>,
  },
  {
    value: 'python',
    label: <div className={styles.label}><img src={python} alt="python" className={styles.image} />Python</div>,
  },
];


const TextEditor = () => {
  const [code, setCode] = useState(javascriptStartFunction);
  const [language, setLanguage] = useState('javascript');
  const [botName, setBotName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);
  const editorRef = React.useRef<any>(null);
  let restrictions: { range: number[]; allowMultiline: boolean; }[] = [];

  const onEditorChange = (newValue: string) => {
    setCode(newValue);
  };
  
  const handleSubmission = () => {
    console.log('Bot name: ', btoa(botName));
    console.log('Email: ', btoa(email));
    console.log('Code: ', btoa(code));
    console.log('Language: ', btoa(language));
    if (avatar) {
      convertToBase64(avatar).then((res) => {
        console.log(res);
      });
    }
  };

  const onLanguageChange = (option: Option) => {
    setLanguage(option.value);
    if (option.value === 'javascript') {
      setCode(javascriptStartFunction);
      editorRef.current.setValue(javascriptStartFunction);
    }
    if (option.value === 'python') {
      setCode(pythonStartFunction);
      editorRef.current.setValue(pythonStartFunction);
    }
  };

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
    const constrainedInstance = constrainedEditor(monaco);
    const model = editor.getModel();
    constrainedInstance.initializeIn(editor);
    restrictions.push({
      range: [1, getRange(language), 3, 1],
      allowMultiline: true
    });
    constrainedInstance.addRestrictionsTo(model, restrictions);
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <Dropdown
        options={optionsWithImages}
        onChange={onLanguageChange}
        value={language}
        placeholder="Select an option"
        className={styles.dropdown} 
      />
      <span>Bot name</span>
      <TextField
        name='bot-name'
        value={botName}
        onChange={(e) => setBotName(e.target.value)} 
      />
      <span>Email</span>
      <TextField
        name='user-email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <FileInput
        onChange={(e) => handleFileUpload(e)}
        file={avatar}
        text="Upload Avatar"
        accept='image/png, image/jepg'
      />
      <MonacoEditor
        className={styles.editor}
        height="50vh"
        language={language}
        theme="vs-light"
        value={code}
        onChange={(newValue) => onEditorChange(newValue || '')}
        onMount={handleEditorDidMount}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: 'line',
          automaticLayout: true,
          glyphMargin: true,
          minimap: {
            enabled: false,
          },
        }}
      />
      <div className={styles.buttonContainer}>
        <Button onClick={handleSubmission} bSize='m'>SUBMIT CODE</Button>
      </div>
    </div>
  );
};

export default TextEditor;
