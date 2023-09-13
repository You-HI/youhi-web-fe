
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from "next/dynamic";

import { Layout } from "@/components/Layout";

const ToastUiEditor = dynamic(() => import('@/components/editor/ToastUiEditor'), { ssr: false });

export default function EditorDemo () {  
  return <Layout>
    <ToastUiEditor />
  </Layout>;
}