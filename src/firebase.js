// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxmT-1LrP4qRghnBArC3PQav-_BEKLskw",
  authDomain: "factoriaf5-proyecto.firebaseapp.com",
  projectId: "factoriaf5-proyecto",
  storageBucket: "factoriaf5-proyecto.appspot.com",
  messagingSenderId: "276240914151",
  appId: "1:276240914151:web:8d084031b6c977195db442"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)