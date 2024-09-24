import React from "react";
import HeaderComponent from "./HeaderComponent";
import { Outlet } from "react-router-dom";

function CommonLayout() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <div>
        <footer></footer>
      </div>
    </div>
  );
}

export default CommonLayout;
