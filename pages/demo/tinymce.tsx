import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';

import { Layout } from '@/components/Layout';

const TinymceEditor = () => {
  const editorRef = useRef<Editor>(null);
  const tinymcePlugins = ['link', 'lists', 'autoresize', 'image'];
  const tinymceToolbar =
    'blocks fontfamily |' +
    'bold italic underline strikethrough forecolor backcolor |' +
    'alignleft aligncenter alignright alignjustify |' +
    'bullist numlist blockquote link image';

  return (
    <Layout>
      <Editor
        onInit={(_, editor) => (editorRef.current = editor)}
        init={{
          plugins: tinymcePlugins,
          toolbar: tinymceToolbar,
          min_height: 500,
          menubar: false,
          branding: false,
          statusbar: false,
          block_formats: '제목1=h2;제목2=h3;제목3=h4;본문=p;',
          image_caption: true,
        }}
      />
    </Layout>
  );
};

export default TinymceEditor;
