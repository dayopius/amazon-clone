// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2N6VapocCgmYgu6Gowjp7nIYuWPV1EMQ",
  authDomain: "clone-f32ce.firebaseapp.com",
  projectId: "clone-f32ce",
  storageBucket: "clone-f32ce.appspot.com",
  messagingSenderId: "1020482000078",
  appId: "1:1020482000078:web:c1654eddd7e902025a6c9f",
  measurementId: "G-3773RW9E3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
