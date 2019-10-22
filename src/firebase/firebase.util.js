import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBIKoZHjBRMJOupkKpvhDRBKeEWidmFth4",
    authDomain: "crwn-db-59a71.firebaseapp.com",
    databaseURL: "https://crwn-db-59a71.firebaseio.com",
    projectId: "crwn-db-59a71",
    storageBucket: "crwn-db-59a71.appspot.com",
    messagingSenderId: "651005334043",
    appId: "1:651005334043:web:458d3c9395c0dec113debe"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
