// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const appfirebase = firebase.initializeApp({
  apiKey: "AIzaSyD1OnLr5TyeibRILxf1AcRn1aTDz1fqgZs",
  authDomain: "fichajefactoria.firebaseapp.com",
  databaseURL: "https://fichajefactoria-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fichajefactoria",
  storageBucket: "fichajefactoria.appspot.com",
  messagingSenderId: "286191229427",
  appId: "1:286191229427:web:293284f0735d361b361a86",
  measurementId: "G-PCE4NW3QN7"
});

// Initialize Firebase

const analytics = getAnalytics(appfirebase);