import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button, Space } from 'antd';
import { useRef } from 'react';


export default function EditorDemo () {
  const editor = useRef<Editor>(null);
  return <>
    <Editor
      ref={editor}
      initialEditType='wysiwyg'
      hideModeSwitch
      height='600px'
    />
    <Space>
      <Button onClick={() => {
        console.log(editor.current?.getInstance().getMarkdown());
      }}>console get markdown</Button>
      <Button onClick={() => {
        console.log(editor.current?.getInstance().getHTML());
      }}>console get HTML</Button>
    </Space>
  </>;
}