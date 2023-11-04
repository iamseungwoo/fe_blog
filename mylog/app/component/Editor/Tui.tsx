import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
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

  const onUploadImage = async (blob, callback) => {
    // blob은 base64 인코딩된 이미지 파일
    // formData에 담아 서버로 보내고, 서버에서는 s3에 이미지 저장후 s3에서 url을 받아 다시 프론트로 값 전송
    const formData = new FormData()
    formData.append('image', blob)
    try {
        const imageRes = await apiInstance.post('/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        const image_URL = imageRes.data.imageURL
        setImage(image_URL)
        // 글 화면에 이미지 띄우기
        callback(image_URL, 'image')
    } catch (e) {
        console.error(e.response)
    }
}

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
        blob={{
          addImageBlobHook: onAddImageBlob,
        }}
      />
    </>
  );
};


export default Tui;
