import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Ratings from "../components/shared/Ratings";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookDetailsPage() {
  const { id } = useParams();
  //console.log("BookId==", id);

  //const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("./books.json").then((response) =>
  //     response.json().then((data) =>
  //     {
  //
  // data.find((element) => {
  //   return element.bookId === id;
  // }
  //     }
  //       setBook(data))
  //   );
  // }, []);

  const { state } = useLocation();
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = state;

  const notifyWishlist = () =>
    toast(
      bookId +
        " " +
        bookName +
        " has been successfully added to Add to Wishlist."
    );
  const notifyAddCart = () =>
    toast(
      bookId + " " + bookName + " has been successfully added to Add to Cart."
    );
  return (
    <div className="grid grid-cols-2 gap-2">
      <img src={image} className="shadow-2xl " />
      <div className="bg-base-200 p-5">
        <h1 className="text-3xl p-1">{bookName}</h1>
        <h3 className="p-1">
          <b>By: </b>
          {author}
        </h3>
        <h4 className="p-1">
          <b>Category: </b>
          {category}
        </h4>
        <p className="p-1">
          <b>Reviews: </b>
          {review}
        </p>
        <p className="p-1">
          {tags.map((tag) => (
            <span key={tag}>{tag} </span>
          ))}
        </p>

        <p className="p-1">
          Total
          <b>{totalPages}</b> Page
        </p>
        <p className="p-1">
          <b>Publication: </b>
          {publisher}
        </p>
        <p className="p-1">
          <b>Published: </b>
          {yearOfPublishing}
        </p>
        <Ratings rating={rating}></Ratings>
        <div className="card-actions mt-5">
          <button onClick={() => notifyWishlist()} className="btn btn-outline">
            Wish to Read
          </button>
          <button onClick={() => notifyAddCart()} className="btn btn-primary">
            Add to Cart
          </button>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default BookDetailsPage;
