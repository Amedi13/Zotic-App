import React, { useState } from 'react'

const SearchBar = ({ data }) => {

    // State to hold the current value of the search input(People) 
    const [searchValue, setSearchValue] = useState('');
    const [suggestions, setSuggestions] = useState([]); 


  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value)

    if (value) {
    // Fitlered results will eventually contain the list of people whose names match the search query. 
      const filteredSuggestions = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions); // suggetions will be updated based on the filtered results 
    } else {
        // else the set of suggestions will be an empty array, 
        // meaning that no suggestions will be shown when the search input is cleared.
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;