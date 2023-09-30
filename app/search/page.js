"use client";
import React from "react";
import SearchBox from "@/components/searchBox";
import Card from "@/components/bookCard";
import { useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import Link from 'next/link'

const searchPage = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = async (evt) => {
    if (evt.key === "Enter" || evt.type === "click") {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=" +
          process.env.NEXT_PUBLIC_GOOGLE_API_KEY +
          "&maxResults=40"
      );
      setData(response.data.items);
    }
  };

  return (
    <>
      <div className="w-full flex flex-row max-md:flex-col justify-center  text-center h-screen gap-y-6 bg-black/[0.2]">
        <div className="h-full flex flex-col justify-center gap-y-4 p-10 max-md:p-2">
          <div>
            <h1 className="appTitle">Book Tracking App</h1>
          </div>
          <div className="mt-1">
          <SearchBox search={search} setSearch={setSearch} searchBook={searchBook} />
          </div>
          <div className="w-full flex flex-row max-md:flex-col justify-center ">
            <div className="w-full flex items-center justify-center gap-5">
              <Button
                className="text-white relative my-3 overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl  after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                size="lg"
                onKeyDown={(e) => searchBook(e)}
                onClick={(e) => searchBook(e)}
                color="warning"
              >
                search
              </Button>
              <Link href="/readingList" className="text-white hover:-translate-y-1 hover:-scale-2">
                My reading list <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-h-screen flex flex-col gap-y-5 p-10 overflow-y-auto hideScrollbar max-md:overflow-visible">
          {<Card  book={...bookData}></Card>}    
        </div>
      </div>
    </>
  );
};
export default searchPage;
