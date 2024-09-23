import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Book from "../Book";

function HeaderComponent() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Book></Book>
    </div>
  );
}

export default HeaderComponent;
