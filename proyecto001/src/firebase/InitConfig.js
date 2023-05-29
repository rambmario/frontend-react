// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcc8zZZbkBiqkFvvfopR-Cbi5arxJ44cg",
  authDomain: "front-end-23301.firebaseapp.com",
  projectId: "front-end-23301",
  storageBucket: "front-end-23301.appspot.com",
  messagingSenderId: "438298744427",
  appId: "1:438298744427:web:5c5121578126b61385832e"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(appFirebase);