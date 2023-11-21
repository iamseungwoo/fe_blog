import React, { useState } from 'react';

interface SearchBoxProps {
  // 다른 필요한 속성들을 추가할 수 있습니다.
}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    setQuery(userInput);

    // 간단한 검색어 추천 배열 (실제로는 API 호출 등을 통해 데이터를 받아와야 함)
    const mockSuggestions = ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML'];
    const filteredSuggestions = mockSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(userInput.toLowerCase()),
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]); // 추천을 클릭하면 추천 목록을 비웁니다.
  };

  return (
    <div>
      <input
        className='className="p-1 mb-2 rounded-lg'
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type your Series"
      />

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
