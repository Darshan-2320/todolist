// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfZJkpOU3YVNCkwLBvNKUFey8pajjGEKw",
  authDomain: "todolist-f23d7.firebaseapp.com",
  projectId: "todolist-f23d7",
  storageBucket: "todolist-f23d7.firebasestorage.app",
  messagingSenderId: "1000395601992",
  appId: "1:1000395601992:web:08163fbd8034d7fe0a007d",
  measurementId: "G-WVGC82G285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);