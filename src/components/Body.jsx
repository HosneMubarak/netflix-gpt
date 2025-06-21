import React, { useEffect } from "react";
import Login from "./Login.jsx";
import Browser from "./Browser.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { addUser, removeUser } from "../utils/userSlice.js";

const Body = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoUrl } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoUrl,
          }),
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return <RouterProvider router={appRouter} />;
};
export default Body;
