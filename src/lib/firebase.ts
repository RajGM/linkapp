// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXPmiv1wO5u-vMXYdj02oJeoFwYw8sC-I",
  authDomain: "linkapp-ba28c.firebaseapp.com",
  projectId: "linkapp-ba28c",
  storageBucket: "linkapp-ba28c.appspot.com",
  messagingSenderId: "533320638069",
  appId: "1:533320638069:web:f41b60d7bf59465e01e23c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
