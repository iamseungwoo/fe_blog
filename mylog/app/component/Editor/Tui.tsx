import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useTheme } from 'next-themes';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

const Tui = () => {
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

  return (
    <>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        toolbarItems={toolbarItems}
        theme={resolvedTheme}
      />
    </>
  );
};
export default Tui;
