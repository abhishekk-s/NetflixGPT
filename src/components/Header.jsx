import React, { useEffect } from "react";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import USER_ICON from "../assets/user.png";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            photoURL: photoURL,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const gptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  const handleGptSearchView = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageSelect = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-4 cursor-pointer"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex justify-between">
          {gptSearch && (
            <select
              onChange={handleLanguageSelect}
              className="m-2 p-2 bg-yellow-400 rounded-lg h-fit"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchView}
            className=" w-32 m-2 p-2 bg-purple-700 text-white rounded-lg h-fit"
          >
            {gptSearch ? "Browse Movies" : "GPT Search"}
          </button>
          <div className="flex">
            <img
              className="p-2 w-[3.5rem] rounded-xl h-fit"
              alt="user"
              src={user?.photoURL ?? USER_ICON}
            />
            <button
              onClick={handleSignOut}
              className=" m-2 p-2 text-white rounded-md bg-red-700 h-fit"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
