import { KeyboardEvent, useState } from 'react';
import TagBox from '../Tags/TagBox';

const InputTag = () => {
  const [tagValue, setTagValue] = useState<string>('');

  const [tagList, setTagList] = useState<string[]>([]);

  const addTagList = () => {
    if (tagValue.trim() !== '' && tagList.indexOf(tagValue.trim()) === -1) {
      setTagList(prevTagList => [...prevTagList, tagValue]);
      setTagValue('');
    }
  };

  const deleteTag = (tagValueToDelete: string) => {
    setTagList(prevTagList =>
      prevTagList.filter(tag => tag !== tagValueToDelete),
    );
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(event.target.value);
  };

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tagList.map((tag, i) => (
        <div onClick={() => deleteTag(tag)}>
          <TagBox tagName={tag} key={i} />
        </div>
      ))}
      <input
        placeholder="태그를 입력하세요"
        value={tagValue}
        onChange={onChange}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            addTagList();
          }
        }}
      ></input>
    </div>
  );
};

export default InputTag;
