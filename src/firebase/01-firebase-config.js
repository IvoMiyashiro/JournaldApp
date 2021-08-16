import firebase from "firebase/app";
import 'firebase/auth';        
import 'firebase/storage';     
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyBpBDos_l00VtEVjtuNKUE7xf7W2mhRiO8",
    authDomain: "journaldapp.firebaseapp.com",
    projectId: "journaldapp",
    storageBucket: "journaldapp.appspot.com",
    messagingSenderId: "701394980592",
    appId: "1:701394980592:web:751170d1290a19ee657c35"
}

firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}