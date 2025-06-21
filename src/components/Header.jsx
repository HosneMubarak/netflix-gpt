import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute w-full px-12 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex items-center space-x-4 text-white">
          <img
            src={user.photoURL || "https://i.pravatar.cc/40"}
            alt="userprofile"
          />
          <span>{user.displayName || "username"}</span>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hove:bg-red-700 text-white px-4 py-1 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
