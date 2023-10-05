// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfU8foc-G1C2q53WAUZUY8sJHeK7q8bbQ",
  authDomain: "react-firebase-auth-9d62d.firebaseapp.com",
  projectId: "react-firebase-auth-9d62d",
  storageBucket: "react-firebase-auth-9d62d.appspot.com",
  messagingSenderId: "850119858102",
  appId: "1:850119858102:web:a202e7537c0dc0ef801317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);