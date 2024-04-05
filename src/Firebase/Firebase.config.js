// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_PASS)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_PASS,
  authDomain: "dragon-news-auth-3ad39.firebaseapp.com",
  projectId: "dragon-news-auth-3ad39",
  storageBucket: "dragon-news-auth-3ad39.appspot.com",
  messagingSenderId: import.meta.env.VITE_PASS,
  appId: "1:479530589830:web:24884e2027ae0fff77fb07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;