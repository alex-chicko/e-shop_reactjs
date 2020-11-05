import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';


const config  =  {
    apiKey: "AIzaSyADhLROyM_y89ZweIfNOuqSaGFP6Nls67g",
    authDomain: "e-shop-50283.firebaseapp.com",
    databaseURL: "https://e-shop-50283.firebaseio.com",
    projectId: "e-shop-50283",
    storageBucket: "e-shop-50283.appspot.com",
    messagingSenderId: "368519409197",
    appId: "1:368519409197:web:d2192df9b447491ed4d2a4",
    measurementId: "G-9H8QDLR86G"
  };


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;