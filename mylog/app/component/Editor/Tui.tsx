import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { Editor } from '@toast-ui/react-editor';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { uploadBoardImage } from '@/app/api/fileupload/uploadBoardImage';

type Props = {
  initValue: string;
};

type HookCallback = (url: string, text?: string) => void;

export type HookMap = {
  addImageBlobHook?: (blob: Blob | File, callback: HookCallback) => void;
};

const TUITHEME = 'toastui-editor-dark';

const Tui = (props: Props) => {
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync'],
  ];
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme;

  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editor = document.querySelector('.toastui-editor-defaultUI');
    if (theme == 'light') {
      editor?.classList.remove(TUITHEME);
    } else {
      editor?.classList.add(TUITHEME);
    }
  }, [theme]);

  const handleSubmit = () => {
    const content = editorRef.current?.getInstance().getHTML() || '';
    console.log(content);
  };
  /*
  const addImageBlobHook = async (blob: Blob, callback: any) => {
    const formData = new FormData();
    formData.append('image', blob);

    try {
      const res = await uploadBoardImage(formData);
      callback(res.data.imageUrl, `image`);
    } catch (err: any) {
      console.error(err);
      callback(`이미지 업로드 실패, ${err.message}`);
    }
  };*/
  const onUploadImage = async (blob: any, callback: HookCallback) => {
    const formData = new FormData();
    formData.append("image", blob);

    try {
      const res = await uploadBoardImage(formData);
      console.log(res);
      callback(res.data.imageUrl, `image`);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <div id="editor">
        <Editor
          ref={editorRef}
          initialValue={props.initValue}
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          toolbarItems={toolbarItems}
          theme={theme}
          plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
          hooks={{
            addImageBlobHook: onUploadImage,
          }}
        />
      </div>
      <button onClick={handleSubmit}>save</button>
    </>
  );
};
export default Tui;
