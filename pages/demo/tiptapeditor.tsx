import Image from '@tiptap/extension-image';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useCallback } from 'react';
import ImageResize from 'tiptap-resize-image';

import { Layout } from '@/components/Layout';


const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit, Image, ImageResize
    ],
    content: '<p>Hello World! 🌎️</p>',
  });

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return <Layout>
    <button onClick={addImage}>setImage</button>
    <EditorContent
      editor={editor}
    />
  </Layout>;
};

export default Tiptap;