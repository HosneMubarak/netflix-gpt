// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA72pmODwq_qJs42npnVaFpjpcXKs8q5dI",
  authDomain: "netflixgpt-78167.firebaseapp.com",
  projectId: "netflixgpt-78167",
  storageBucket: "netflixgpt-78167.firebasestorage.app",
  messagingSenderId: "818523449601",
  appId: "1:818523449601:web:c8cdc1970192005054d300",
  measurementId: "G-M5GZM58V3Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
