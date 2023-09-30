"use client";
import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const useBooksState = () => {
  return useContext(BookContext);
};

export const BookContextProvider = ({ children }) => {
  const [listBooks, setListBooks] = useState([]);

  const addBookToList = (book) => {
    setListBooks((prev) => [...prev, book]);
  };

  const removeBookFromList = (book) => {
    const newBooks = listBooks.filter((listBook) => listBook.id !== book.id);
    setListBooks(newBooks);
  };

  return (
    <BookContext.Provider
      value={{ listBooks, addBookToList, removeBookFromList }}
    >
      {children}
    </BookContext.Provider>
  );
};
