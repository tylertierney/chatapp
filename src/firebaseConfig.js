import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";

import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

import { GithubAuthProvider } from "firebase/auth";

export const provider = new GithubAuthProvider();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
// connectStorageEmulator(storage, "192.168.254.32", 9199);
export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://192.168.254.32:9099");
export const db = getFirestore();
// connectFirestoreEmulator(db, "192.168.254.32", 8080);

export default app;
