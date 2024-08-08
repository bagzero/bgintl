// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCua3o2NzzRAildK_3rXNKsXdYOfSnkWFc",
  authDomain: "bgintl-contact-form.firebaseapp.com",
  projectId: "bgintl-contact-form",
  storageBucket: "bgintl-contact-form.appspot.com",
  messagingSenderId: "824507729341",
  appId: "1:824507729341:web:8657c4ade2c1ef130abed4",
  measurementId: "G-4KBQG4XFJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const db = getFirestore(app);