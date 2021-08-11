import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBm3x4oSv_ObP6qcKP_vXCB07CHuk7yFOE",
    authDomain: "plengzwebsite.firebaseapp.com",
    projectId: "plengzwebsite",
    storageBucket: "plengzwebsite.appspot.com",
    messagingSenderId: "956735798235",
    appId: "1:956735798235:web:e7efde7afc874c689e05fe",
});

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};
