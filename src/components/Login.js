import React, { useState, useRef } from "react";
import Header from "./Header";
import { BACKGROUND_IMG } from "../utils/Constants";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import USER_ICON from "../assets/user.png"

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    let msg = checkValidData(
      email.current.value,
      password.current.value,
      isSignIn
    );
    setErrMsg(msg);

    if (msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setErrMsg("User Registered Successfully");
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: {USER_ICON},
          })
            .then(() => {
              const { uid, email, photoURL, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                  displayName: displayName,
                })
              );
            })
            .catch((err) => {
              //console.log(err);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.Message;
          //console.log(errorCode + "-" + errorMessage);
          setErrMsg("User Already Registered");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.Message;
          //console.log(errorCode + "-" + errorMessage);
          setErrMsg("Incorrect Email/Password ");
        });
    }
  };
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrMsg("");
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="fixed md:h-auto h-screen object-cover" src={BACKGROUND_IMG} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-opacity-85 bg-black absolute w-10/12 md:w-3/12 p-11 my-40 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="text-2xl md:text-3xl font-bold my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full my-4 p-3 rounded-lg bg-opacity-40 bg-black border border-gray-200"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full my-4 p-3 rounded-lg bg-opacity-40 bg-black border border-gray-200"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" w-full my-4 p-3 rounded-lg bg-opacity-40 bg-black border border-gray-200"
        />
        {errMsg != null && (
          <p className="font-bold text-red-700 text-lg py-2">{errMsg}</p>
        )}
        <button
          onClick={handleButtonClick}
          className="w-full my-6 p-4 bg-red-700 rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p className="text-md">
            {isSignIn ? "New to Netflix? " : "Already a user? "}
          </p>
          <p
            className="hover:underline cursor-pointer px-1"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign Up Now." : "Sign In Now."}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
