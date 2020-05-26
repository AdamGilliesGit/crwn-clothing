import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCN08asTB5rRICAIEPf9oPsIuFLc-0VBuQ',
  authDomain: 'crwn-db-4aa4b.firebaseapp.com',
  databaseURL: 'https://crwn-db-4aa4b.firebaseio.com',
  projectId: 'crwn-db-4aa4b',
  storageBucket: 'crwn-db-4aa4b.appspot.com',
  messagingSenderId: '721041778181',
  appId: '1:721041778181:web:b03ff884b7174c92d75e6c',
  measurementId: 'G-GT55SDN10E',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
