import React from "react";
import Ratings from "./shared/Ratings";

function Book({ book }) {
  console.log("Book= ", book);
  const { bookName, image, tags, author, category, rating } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={bookName} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{bookName}</h2>
        <h3>{author}</h3>
        <h4>{category}</h4>
        <p>{tags}</p>
        <Ratings rating={rating}></Ratings>
        <div className="card-actions">
          <button className="btn btn-primary">Book Details</button>
        </div>
      </div>
    </div>
  );
}

export default Book;
