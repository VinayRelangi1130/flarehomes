import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import booksData from '../services/books.json';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData.books);
    setFilteredBooks(booksData.books);
  }, []);

  const handleSearch = (query) => {
    const searchResults = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(searchResults);
  };

  return (
    <div>
      <h1>Book Library</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
