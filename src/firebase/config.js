// Firebase Core SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbHDzsUidP_u5jVNELiqb6ASv0ZmdZVE4",
  authDomain: "swapx-d1672.firebaseapp.com",
  projectId: "swapx-d1672",
  storageBucket: "swapx-d1672.appspot.com",
  messagingSenderId: "763881251026",
  appId: "1:763881251026:web:573387bd6f439df2c60d0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication instance
export const auth = getAuth(app);
