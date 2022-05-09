// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOVGClL_BmpWpAGmR5vKbN3g0oZsSXQ3o",
    authDomain: "books-inventory-49d55.firebaseapp.com",
    projectId: "books-inventory-49d55",
    storageBucket: "books-inventory-49d55.appspot.com",
    messagingSenderId: "207207697055",
    appId: "1:207207697055:web:ef862f45fbf667f151b0aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;