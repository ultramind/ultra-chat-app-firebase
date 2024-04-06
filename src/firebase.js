// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCY4YPWOHPwa_hDWWnjvc8UnIhtyglzM0Y",
  authDomain: "ultrachap-9b242.firebaseapp.com",
  projectId: "ultrachap-9b242",
  storageBucket: "ultrachap-9b242.appspot.com",
  messagingSenderId: "286863815563",
  appId: "1:286863815563:web:2dc87c78d21acae231358e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
