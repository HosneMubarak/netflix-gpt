import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO, USER_AVATAR } from "../utils/constants.js";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("useEffect called");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="absolute w-full px-12 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4 text-white">
          <img src={user.photoURL || USER_AVATAR} alt="userprofile" />
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
