// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-8746c.firebaseapp.com",
  projectId: "netflixgpt-8746c",
  storageBucket: "netflixgpt-8746c.appspot.com",
  messagingSenderId: "984560672362",
  appId: "1:984560672362:web:26762a0bb6a0a49e943413",
  measurementId: "G-QDTZ9KRS6K",
};

const firebaseConfig1 = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY2,
  authDomain: "netflixgpt-629f3.firebaseapp.com",
  projectId: "netflixgpt-629f3",
  storageBucket: "netflixgpt-629f3.appspot.com",
  messagingSenderId: "856380327084",
  appId: "1:856380327084:web:bc228cda0d5d4d175e4b09",
  measurementId: "G-WS7XJQ1HQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig1);
export const auth = getAuth();
const analytics = getAnalytics(app);
