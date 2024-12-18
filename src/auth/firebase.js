// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWY9tBMsFk8eFuaM4fsNzKPvoBXXmTF9o",
  authDomain: "vestea-98231.firebaseapp.com",
  projectId: "vestea-98231",
  storageBucket: "vestea-98231.firebasestorage.app",
  messagingSenderId: "192707109597",
  appId: "1:192707109597:web:c308e9b21b43c7ce403134",
  measurementId: "G-ZBBK0ZE21W",
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
export default appFireBase;
