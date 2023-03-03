import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Footer } from "./Layout/Footer/Index";
import { Header } from "./Layout/Header/Index";
import { ErrorPage } from "./pages/ErrorPage/Index";
import { Home } from "./pages/Home/Index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
