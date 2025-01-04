import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVnSKMTTmyMiN0yeUVag5zQleEiQoyiOc",
  authDomain: "blog-news1010.firebaseapp.com",
  projectId: "blog-news1010",
  storageBucket: "blog-news1010.firebasestorage.app",
  messagingSenderId: "529008597763",
  appId: "1:529008597763:web:9d430589304495e6d0a736",
  measurementId: "G-KQWD5K30VZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export { app, auth };
