
const firebaseConfig = {
    apiKey: "AIzaSyBW_781nz7l3DzTtYLUhbEav462gidJOwg",
    authDomain: "mario-s-pizza-2b2ff.firebaseapp.com",
    projectId: "mario-s-pizza-2b2ff",
    storageBucket: "mario-s-pizza-2b2ff.appspot.com",
    messagingSenderId: "813221598605",
    appId: "1:813221598605:web:0884efbbfaa9b23e4cd9c4",
    measurementId: "G-2K18GTW5S4"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage().ref('/orders');