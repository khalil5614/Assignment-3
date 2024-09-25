import React from "react";
import book1 from "../../assets/Book1.webp";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.webp";
import book4 from "../../assets/book4.jpg";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  return (
    <div>
      <div className="carousel w-full  bg-blue-100">
        <div id="item1" className="carousel-item  w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="place-content-center text-center">
              <h1 className="text-2xl lg:text-5xl font-bold">
                Unlock a World of Stories
              </h1>
              <p className="py-6">Find Your Next Favorite Book at Book Store</p>
              <Link to={"/"} className="btn btn-primary">
                Buy Book
              </Link>
            </div>
            <img className=" m-auto" src={book1} />
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
              <div className="place-content-center text-center">
                <h1 className="text-2xl lg:text-5xl font-bold">
                  Unlock a World of Stories
                </h1>
                <p className="py-6">
                  Find Your Next Favorite Book at Book Store
                </p>
                <Link to={"/"} className="btn btn-primary">
                  Buy Book
                </Link>
              </div>
              <img src={book2} />
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
              <div className="place-content-center text-center">
                <h1 className="text-2xl lg:text-5xl font-bold">
                  Unlock a World of Stories
                </h1>
                <p className="py-6">
                  Find Your Next Favorite Book at Book Store
                </p>
                <Link to={"/"} className="btn btn-primary">
                  Buy Book
                </Link>
              </div>
              <img src={book3} />
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full">
          <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
              <div className="place-content-center text-center">
                <h1 className="text-2xl lg:text-5xl font-bold">
                  Unlock a World of Stories
                </h1>
                <p className="py-6">
                  Find Your Next Favorite Book at Book Store
                </p>
                <Link to={"/"} className="btn btn-primary">
                  Buy Book
                </Link>
              </div>
              <img src={book4} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}

export default Banner;
