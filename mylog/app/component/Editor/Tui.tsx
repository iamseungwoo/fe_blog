import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { Editor } from '@toast-ui/react-editor';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import { uploadBoardImage } from '@/app/api/fileupload/uploadBoardImage';
import InputTag from './InputTag';

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
    const content = editorRef.current?.getInstance().getMarkdown() || '';
    console.log(content);
  };

  const onUploadImage = async (blob: any, callback: HookCallback) => {
    const formData = new FormData();
    formData.append('image', blob);

    try {
      const res = await uploadBoardImage(formData);
      console.log(res);
      callback(res.data.imageUrl, `image`);
    } catch (err: any) {
      console.error(err);
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    // textarea 높이 조절
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight + 10;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  };

  return (
    <>
      <div>
        <textarea
          placeholder="제목을 입력하세요"
          rows={1}
          ref={textareaRef}
          value={text}
          onChange={onChange}
          className="w-full resize-none text-base md:text-4xl rounded-lg h-[1.5rem] md:h-[3.5rem]"
        ></textarea>
      </div>
      <InputTag />
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
          hooks={
            {
              // 백엔드 배포시 사용
              // addImageBlobHook: onUploadImage,
            }
          }
        />
      </div>
      <button onClick={handleSubmit}>save</button>
    </>
  );
};
export default Tui;
