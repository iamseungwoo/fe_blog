import { useRef, useState } from "react";

const InputTitle = () => {
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
    <div>
      <textarea
        placeholder="제목을 입력하세요"
        rows={1}
        ref={textareaRef}
        value={text}
        onChange={onChange}
        className="w-full py-1 resize-none text-base md:text-4xl rounded-lg h-[1.5rem] md:h-[3.5rem] flex items-center"
      ></textarea>
    </div>
  );
};


export default InputTitle;