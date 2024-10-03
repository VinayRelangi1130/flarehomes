import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder="Search by title, author, or genre..." 
      onChange={handleSearch} 
    />
  );
};

export default SearchBar;
