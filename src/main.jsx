import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BookDetailsPage from "./pages/BookDetailsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CommonLayout from "./components/shared/CommonLayout.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    // loader: fetch("./books.json"),
    element: <CommonLayout />,
    //errorElement: ErrorPage,
    children: [
      {
        path: "/",
        //loader: () => fetch("./books.json"),
        element: <HomePage />,
      },
      {
        // path: "/books/:bookId",
        // loader:({ params }) =>
        //   fetch("./books.json").filter((book)=>(book.id==params.bookId))}),
        path: "/bookdetails/:id",
        element: <BookDetailsPage />,
      },
    ],
  },
]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
