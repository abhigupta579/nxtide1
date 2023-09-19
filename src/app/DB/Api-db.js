// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB8l7KaM2xPQTSIlojcXT3jZ4z2H6V9AUw",
  authDomain: "nxtide1.firebaseapp.com",
  projectId: "nxtide1",
  storageBucket: "nxtide1.appspot.com",
  messagingSenderId: "848023591658",
  appId: "1:848023591658:web:4370680974bc0f9933d593",
  measurementId: "G-FH69KGWKKZ",
  databaseURL: 'https://console.firebase.google.com/project/nxtide1/database/nxtide1-default-rtdb/data/~2F'
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db,app};