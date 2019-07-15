import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDI70MTuH5NH5R8rUdtcUmjVZufZlYgiaY",
    authDomain: "mycrown-db.firebaseapp.com",
    databaseURL: "https://mycrown-db.firebaseio.com",
    projectId: "mycrown-db",
    storageBucket: "",
    messagingSenderId: "366737388825",
    appId: "1:366737388825:web:e43ae6b605af7b47"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


