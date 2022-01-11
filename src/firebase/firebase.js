// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyASuZGKJ84asJ9XqeQB7QioHK-LsO8B8Cw",

  authDomain: "apliakcjaam.firebaseapp.com",

  projectId: "apliakcjaam",

  storageBucket: "apliakcjaam.appspot.com",

  messagingSenderId: "723817357056",

  appId: "1:723817357056:web:37cede4fb3757765c65de5",

  measurementId: "G-08E5K1V6L9"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const auth = getAuth(app)