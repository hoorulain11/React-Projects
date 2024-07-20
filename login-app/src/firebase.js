// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeUeqZK34RZp_yjjAsJiU4Yb7rNebWVKg",
  authDomain: "login-app-cbce0.firebaseapp.com",
  projectId: "login-app-cbce0",
  storageBucket: "login-app-cbce0.appspot.com",
  messagingSenderId: "1010759035402",
  appId: "1:1010759035402:web:5f0fc5e6b03279289a8df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);