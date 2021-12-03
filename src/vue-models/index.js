import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBW_781nz7l3DzTtYLUhbEav462gidJOwg",
    authDomain: "mario-s-pizza-2b2ff.firebaseapp.com",
    projectId: "mario-s-pizza-2b2ff",
    storageBucket: "mario-s-pizza-2b2ff.appspot.com",
    messagingSenderId: "813221598605",
    appId: "1:813221598605:web:2ca3b46f723b53ae4cd9c4",
    measurementId: "G-4717W181DB"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};