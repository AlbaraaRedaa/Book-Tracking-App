"use client";
import React from "react";
import Book from "@/components/book";
import "@/app/globals.css";
import { useBooksState } from "@/providers/BooksContext";
import Link from "next/link";
const ReadingList = ({ items }) => {
  const { listBooks } = useBooksState();
  return (
    <>
      <div className="h-full w-full flex flex-row max-md:flex-col justify-center text-center gap-y-6  ">
        <div className="md:h-screen flex flex-col justify-center gap-y-4 p-10 md:mt-0 mt-10 max-md:p-2">
          <div>
            <h2 className=" appTitle text-center py-4">My Reading List</h2>
          </div>
          <div className="w-full flex flex-row max-md:flex-col justify-center ">
            <div className="w-full flex items-center justify-center gap-5">
              <Link
                href="/"
                className="text-white hover:-translate-y-1 hover:-scale-2"
              >
                Search Page <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:max-h-screen flex flex-col gap-y-5 p-10 overflow-y-auto hideScrollbar max-md:overflow-visible">
          {listBooks.length > 0 &&
            listBooks.map((book, i) => <Book key={i} items={book} />)}
        </div>
      </div>
    </>
  );
};
export default ReadingList;
