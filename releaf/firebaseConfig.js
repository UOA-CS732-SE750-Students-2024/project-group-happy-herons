// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlWcrOZFKrN8ALYQcxFna5-KHaP1LJEbs",
  authDomain: "cs732-db.firebaseapp.com",
  projectId: "cs732-db",
  storageBucket: "cs732-db.appspot.com",
  messagingSenderId: "353376112017",
  appId: "1:353376112017:web:8993f6d48fddc706c0de30",
  measurementId: "G-9L4PPJK43R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

