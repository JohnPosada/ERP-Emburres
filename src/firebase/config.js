// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB883iC2jJc0VVbmVZY0bGCFLGZPoUzgxQ',
  authDomain: 'emburres.firebaseapp.com',
  projectId: 'emburres',
  storageBucket: 'emburres.appspot.com',
  messagingSenderId: '309695268475',
  appId: '1:309695268475:web:e5de5ed303e7b2b7c884de',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
