import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyClWjnj9soXvZKsvR-498s4M84XRHbBQY8',
  authDomain: 'crown-db-245e9.firebaseapp.com',
  databaseURL: 'https://crown-db-245e9.firebaseio.com',
  projectId: 'crown-db-245e9',
  storageBucket: 'crown-db-245e9.appspot.com',
  messagingSenderId: '890159646324',
  appId: '1:890159646324:web:5700c4f0fd1134b8527321',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
