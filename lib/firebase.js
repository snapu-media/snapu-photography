import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,deleteDoc,doc } from "firebase/firestore";  // <-- Correct imports here
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQeKHbGEG9ZLyzYIHDH32QRsXOZzII6rA",
  authDomain: "snapuphotography1.firebaseapp.com",
  projectId: "snapuphotography1",
  storageBucket: "snapuphotography1.appspot.com",
  messagingSenderId: "1005767806001",
  appId: "1:1005767806001:web:58e4ca359db7f33022d910",
  measurementId: "G-D44XMMHZJH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, getDocs ,deleteDoc,doc};  // <-- Export the necessary functions
