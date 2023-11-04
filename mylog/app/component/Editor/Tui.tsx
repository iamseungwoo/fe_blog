import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Prism from 'prismjs';

type Props = {
  initValue: string;
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
        />
      </div>
      <button onClick={handleSubmit}>save</button>
    </>
  );
};
export default Tui;
