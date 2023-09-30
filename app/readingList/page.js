"use client";
import React from "react";
import Book from "@/components/book";
import "@/app/globals.css";
import { useBooksState } from "@/providers/BooksContext";
const ReadingList = ({ items }) => {
  const { listBooks } = useBooksState();
  return (
    <div>
      <h2 className=" appTitle text-center py-4">My Reading List</h2>
      {listBooks.length > 0 &&
        listBooks.map((book, i) => (
          <div className="max-h-screen flex flex-col gap-y-5 py-5">
            <Book key={i} items={book} />
          </div>
        ))}
    </div>
  );
};
export default ReadingList;
