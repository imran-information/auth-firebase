// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh2pFiZZ5d6zXafmAAbxH4gBi0F3UrjCY",
    authDomain: "auth-firebase-5d8d5.firebaseapp.com",
    projectId: "auth-firebase-5d8d5",
    storageBucket: "auth-firebase-5d8d5.firebasestorage.app",
    messagingSenderId: "160173826537",
    appId: "1:160173826537:web:591fe484c6a21f76cd6b78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);