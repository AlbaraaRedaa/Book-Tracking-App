import { React, useState } from "react";
import Book from "./book";
let bookCard = ({ book }) => {
  return (
    <>
      {book.map((items, i) => (
        <Book key={i} items={items} />
      ))}
    </>
  );
};
export default bookCard;
