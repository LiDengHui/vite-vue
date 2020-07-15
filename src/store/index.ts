import  firebase from "firebase/app/dist/index.esm";
import 'firebase/firestore'
import {useFirestore} from '@vueuse/firebase'
import * as firebaseui from "firebaseui";

const db = firebase.initializeApp({
    apiKey: "AIzaSyCEvECHJsQJie25WYPcm7QXRStBeCnAYOk",
    authDomain: "rocket-e0db7.firebaseapp.com",
    databaseURL: "https://rocket-e0db7.firebaseio.com",
    projectId: "rocket-e0db7",
    storageBucket: "rocket-e0db7.appspot.com",
    messagingSenderId: "716105266391",
    appId: "1:716105266391:web:a702c6faa8f85668c62c92",
    measurementId: "G-692WZXYX16"
}).firestore()

var ui = new firebaseui.auth.AuthUI(firebase.auth());
// in setup()
// const todos = useFirestore(db.collection('todos'))
// // or
// const user = useFirestore(db.collection('users').doc('my-user-id'))
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}:`, doc);
    });
});