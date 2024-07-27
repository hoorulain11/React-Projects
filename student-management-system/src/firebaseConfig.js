// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw0vFRWdQpBVHG_QggXqJFsK7FwecCVWk",
  authDomain: "student-management-syste-97638.firebaseapp.com",
  projectId: "student-management-syste-97638",
  storageBucket: "student-management-syste-97638.appspot.com",
  messagingSenderId: "322903270397",
  appId: "1:322903270397:web:020b8761c3397a98396f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app)
export  { db }