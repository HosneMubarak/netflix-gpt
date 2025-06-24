import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants.js";
import { addToggleGptSearch } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const user = useSelector((state) => state.user);
  const gptSearch = useSelector((store) => store.gpt.toggleGptSearch);
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
  const handleGptSearch = () => {
    dispatch(addToggleGptSearch());
  };
  const langValueRef = useRef({ lang: "en" });
  const handleLanguageChange = () => {
    dispatch(changeLanguage(langValueRef.current.value));
  };

  return (
    <div className="absolute w-full px-12 py-2 bg-gradient-to-b from-black flex justify-between z-50">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4 text-white">
          {gptSearch && (
            <select
              ref={langValueRef}
              className="p-2 text-white bg-black m-2 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}

          <img src={user.photoURL || USER_AVATAR} alt="userprofile" />
          <span>{user.displayName || "username"}</span>
          <button
            className="bg-red-600 hove:bg-red-700 text-white px-4 py-1 rounded cursor-pointer"
            onClick={handleGptSearch}
          >
            {!gptSearch ? "GPT Search" : "Home"}
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hove:bg-red-700 text-white px-4 py-1 rounded cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
