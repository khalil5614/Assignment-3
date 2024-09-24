import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

function BookList() {
  const books = useLoaderData();
  return (
    <section>
      <div>
        <h1 className="text-2xl">Popular Books:</h1>
        <div className="grid grid-cols-3 gap-5">
          {books.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;
