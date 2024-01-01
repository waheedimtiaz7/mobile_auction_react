
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrEMTRf38iWOexDqWZXQPTdpBgz9XfEfk",
  authDomain: "mobile-auction-system.firebaseapp.com",
  projectId: "mobile-auction-system",
  storageBucket: "mobile-auction-system.appspot.com",
  messagingSenderId: "796572106492",
  appId: "1:796572106492:web:5bf10109949f730984e179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);