import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('there was an error creating the user', error.message);
    }
  }
  return userDocRef;
};
