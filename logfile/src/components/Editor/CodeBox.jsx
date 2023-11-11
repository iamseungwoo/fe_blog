import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
const CodeBox = ({ inline, children = [], className, ...props }) => {
    const language = className.split(" ")[0].split("-")[1];
    const content = children.map((el) => el.props.children[0]);
    const [codes, setCodes] = useState(content);
    return (
        <CodeEditor
            value={codes}
            language={language}
            placeholder="Please enter JS code."
            onChange={(evn) => setCodes(evn.target.value)}
            padding={15}
            style={{
                fontSize: 12,
                backgroundColor: "#f5f5f5",
                fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
        />
    );
};

export default CodeBox;
