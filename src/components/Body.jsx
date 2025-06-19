import React from "react";
import Login from "./Login.jsx";
import Browser from "./Browser.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};
export default Body;
