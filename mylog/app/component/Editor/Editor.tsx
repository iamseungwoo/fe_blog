import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import CodeBox from './CodeBox';

const Editor = ({initValue}: {initValue: string}) => {
  const [value, setValue] = useState<string | any>(initValue || '');

  return (
    <div className="h-[40vh]">
      <MDEditor
        value={value}
        onChange={setValue}
        height={700}
        previewOptions={{
          components: {
            Code: CodeBox,
          },
        }}
        highlightEnable={true}
      />
    </div>
  );
};

export default Editor;
