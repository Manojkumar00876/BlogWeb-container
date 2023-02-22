

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBbwbcKT-RSKIB2oJ8hpYcuh6rHJ342lVo",
  authDomain: "blog-50a97.firebaseapp.com",
  projectId: "blog-50a97",
  storageBucket: "blog-50a97.appspot.com",
  messagingSenderId: "137895414290",
  appId: "1:137895414290:web:018632e3049482a74526cb",
  measurementId: "G-JV0JY5H7RY"

};

 const app = initializeApp(firebaseConfig);
 export default app;
export const db = getFirestore(app);
