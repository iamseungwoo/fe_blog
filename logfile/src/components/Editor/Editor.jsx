import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import CodeBox from "./CodeBox";

const Editor = () => {
    const [value, setValue] = useState("");

    return (
        <div className="h-[40vh]">
            <MDEditor
                codeHighlighting
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
