import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useTheme } from 'next-themes';

type Props = {
  initValue: string;
};

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

  return (
    <>
      <Editor
        initialValue={props.initValue}
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
