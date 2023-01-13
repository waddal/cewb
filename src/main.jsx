import { Buffer } from "buffer";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Block from "./routes/Block";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error";
// window.Buffer = Buffer;
globalThis.Buffer = Buffer;


const router = createBrowserRouter([
  // {
  //   path: "/projects",
  //   element: <Block face={`1, 0, 0, 90deg`}/>,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/skills",
  //   element: <Block face={`0, 1, 0, 90deg`}/>,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/social",
  //   element: <Block face={`0, 1, 0, -90deg`}/>,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/",
  //   element: <Block face={`1, 0, 0, 0deg`}/>,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/back",
    element: <Block />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Block />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills",
    element: <Block />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/social",
    element: <Block />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Block />,
    errorElement: <ErrorPage />,
  },
  {
    path: "root",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
