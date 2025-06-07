// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Removed Firestore import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc80OiphK4Lgb22u94Z2lxa_1ECMKdw2A",
  authDomain: "united-crane-450308-i8.firebaseapp.com",
  projectId: "united-crane-450308-i8",
  storageBucket: "united-crane-450308-i8.firebasestorage.app",
  messagingSenderId: "854157985414",
  appId: "1:854157985414:web:08b97b8651505dec32f307",
  measurementId: "G-7QMGZRS2F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Removed Firestore initialization

export { app, analytics }; // Export app and analytics 