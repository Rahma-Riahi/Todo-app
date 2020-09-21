import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSpUjgbCB4Y-AZaL1Eu5fI9_i904mbmYo",
    authDomain: "todolist-4174d.firebaseapp.com",
    databaseURL: "https://todolist-4174d.firebaseio.com",
    projectId: "todolist-4174d",
    storageBucket: "todolist-4174d.appspot.com",
    messagingSenderId: "90839055539",
    appId: "1:90839055539:web:ea511ec2cc47cbb269c4c6",
    measurementId: "G-0SN7ZCTDJZ"
}) ;

const db = firebaseApp.firestore();
export default db;
