import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (book) => {
    setLibrary([...library, book]);
  };

  const removeFromLibrary = (id) => {
    setLibrary(library.filter(book => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
