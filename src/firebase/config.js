// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSHIh1LMdRK_5yaYNQn1x4E7pK8irxtGk",
  authDomain: "react-cursos-a1c70.firebaseapp.com",
  projectId: "react-cursos-a1c70",
  storageBucket: "react-cursos-a1c70.appspot.com",
  messagingSenderId: "601794300967",
  appId: "1:601794300967:web:348c18bcd7ee2ed2b0d202"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp ); 
export const FirebaseDB = getFirestore( FirebaseApp ); 