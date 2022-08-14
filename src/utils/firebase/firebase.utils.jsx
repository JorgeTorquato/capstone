import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
// App firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCVvoW9fFQ7YM0Ma0GUyNquGr0gWNPXuac',
  authDomain: 'capstone-e-commerce.firebaseapp.com',
  projectId: 'capstone-e-commerce',
  storageBucket: 'capstone-e-commerce.appspot.com',
  messagingSenderId: '432830267957',
  appId: '1:432830267957:web:bf9ae931ce8123e09f677c',
  measurementId: 'G-0ZK6NTZTLJ',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
