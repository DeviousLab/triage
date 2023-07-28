import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrQM9q0vVLzJoFvDu8PU43azqMePqBYaI",
  authDomain: "triage-25f2d.firebaseapp.com",
  projectId: "triage-25f2d",
  storageBucket: "triage-25f2d.appspot.com",
  messagingSenderId: "834485143567",
  appId: "1:834485143567:web:14d02908953e1a47ae3b7a",
  measurementId: "G-XSVHK9NHFP"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };