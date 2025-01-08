// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn2VIOnf9FQ-taOZJDCtpVlsCZILaXaks",
  authDomain: "notion-ai-9ad3c.firebaseapp.com",
  projectId: "notion-ai-9ad3c",
  storageBucket: "notion-ai-9ad3c.firebasestorage.app",
  messagingSenderId: "12697503116",
  appId: "1:12697503116:web:30a5ec4785e33803fbc2a9"
};

// Initialize Firebase
const app = getApps().length === 0 ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db};