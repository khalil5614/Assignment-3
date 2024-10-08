import React from "react";
import logo from "../../assets/book-shop.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <div className="btn btn-ghost">
            <img className="w-14" src={logo} alt="Logo" />
            <a className="text-xl">Book Store</a>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/"} className="btn btn-primary mr-2">
          Buy Book
        </Link>
        <a className="btn btn-primary ">Sign In</a>
      </div>
    </div>
  );
}

export default Navbar;
