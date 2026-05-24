// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNhzznWGJQQL9_Hs32apbiWKFs4pl1Ig4",
    authDomain: "prenzlauer-fad3c.firebaseapp.com",
    projectId: "prenzlauer-fad3c",
    storageBucket: "prenzlauer-fad3c.appspot.com",
    messagingSenderId: "1074142769462",
    appId: "1:1074142769462:web:5a1f09ff4f92437b260397",
    measurementId: "G-4ZG78KSML0"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth};