import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import BookList from '../components/BookList';

const MyLibraryPage = () => {
  const { library, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h1>My Library</h1>
      {library.length === 0 ? (
        <p>No books in your library.</p>
      ) : (
        <div>
          <BookList books={library} />
          {library.map(book => (
            <button key={book.id} onClick={() => removeFromLibrary(book.id)}>
              Remove {book.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLibraryPage;
