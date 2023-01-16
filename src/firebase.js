// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-oETioWCaudCwwR6OjiTGxmlQjCE9yN4",
  authDomain: "madlibsclone.firebaseapp.com",
  projectId: "madlibsclone",
  storageBucket: "madlibsclone.appspot.com",
  messagingSenderId: "414240177468",
  appId: "1:414240177468:web:7b60499b6160e0a9a3b239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)