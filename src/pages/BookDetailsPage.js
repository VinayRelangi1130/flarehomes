import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../services/books.json';
import { LibraryContext } from '../context/LibraryContext';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { addToLibrary } = useContext(LibraryContext);
  const book = booksData.books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <button onClick={() => addToLibrary(book)}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
