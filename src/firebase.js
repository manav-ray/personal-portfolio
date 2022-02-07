// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmKzz9ab7gw4ohEH4OEz0CaLssWVaXrUg",
  authDomain: "portfolio-website-messages.firebaseapp.com",
  projectId: "portfolio-website-messages",
  storageBucket: "portfolio-website-messages.appspot.com",
  messagingSenderId: "714134543818",
  appId: "1:714134543818:web:4cb21d8235c06cbec80333",
  measurementId: "G-1CCXTPGLV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var database = getDatabase(app);
export default database;