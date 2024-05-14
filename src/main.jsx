import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProviders from "./providers/AuthProviders";
import PrivateRoute from "./routes/PrivateRoute";
import AddBook from "./pages/AddBook";
import AllBooks from "./pages/AllBooks";
import BorrowedBooks from "./pages/BorrowedBooks";
import ErrorPage from "./pages/ErrorPage";
import UpdateBook from "./pages/UpdateBook";
import CategoryWiseBooks from "./pages/CategoryWiseBooks";
import BookDetails from "./pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allbooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedbooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:category",
        element: (
          <PrivateRoute>
            <CategoryWiseBooks></CategoryWiseBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatebook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
      },
      {
        path: "/bookdetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
