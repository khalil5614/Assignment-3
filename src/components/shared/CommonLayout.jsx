import React from "react";
import HeaderComponent from "./HeaderComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "./FooterComponent";

function CommonLayout() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default CommonLayout;
