import React from "react";
import HeaderComponent from "../components/shared/HeaderComponent";
import BookList from "../components/BookList";

function HomePage() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <BookList></BookList>
    </div>
  );
}

export default HomePage;
