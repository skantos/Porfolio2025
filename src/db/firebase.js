// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw0DW5omFnQFzs63PQQ-lqZX2OK9cMUEY",
  authDomain: "porfoliosamuel-33f2d.firebaseapp.com",
  projectId: "porfoliosamuel-33f2d",
  storageBucket: "porfoliosamuel-33f2d.firebasestorage.app",
  messagingSenderId: "487707105514",
  appId: "1:487707105514:web:6228a4481f5e44ad2bdf93",
  measurementId: "G-S0RGQEL1Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);