// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA-j5DO-xL134O9F4dSCDOwyaPvCbKWZ9k",

  authDomain: "blog-ai-a934c.firebaseapp.com",

  projectId: "blog-ai-a934c",

  storageBucket: "blog-ai-a934c.appspot.com",

  messagingSenderId: "575749132805",

  appId: "1:575749132805:web:6346ac5d3032303766026c",

  measurementId: "G-G3YDF3K66J"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);