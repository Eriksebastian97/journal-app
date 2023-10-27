// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" //toma la parte de la autenticacion
import {getFirestore} from "firebase/firestore/lite" //acceso a la base datos pueden ser Cloud Firestorm o realm data base

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaCyAswSltWHpEtYpEaMYfDpNwPOKdtqA",
  authDomain: "react-practica-c607d.firebaseapp.com",
  projectId: "react-practica-c607d",
  storageBucket: "react-practica-c607d.appspot.com",
  messagingSenderId: "585285961498",
  appId: "1:585285961498:web:584be0c05e96a4b4af0ea3"
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);

 //autenticacion 
 export const firebaseAuth = getAuth(FirebaseApp)
 //bases de datos
 export const FirebaseDB = getFirestore(FirebaseApp)