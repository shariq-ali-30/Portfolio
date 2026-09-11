import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLTvSPf5yNCE4k7p3lcGHW0baxu6ki1vw",
  authDomain: "portfolio-89735.firebaseapp.com",
  projectId: "portfolio-89735",
  storageBucket: "portfolio-89735.firebasestorage.app",
  messagingSenderId: "22702305321",
  appId: "1:22702305321:web:6df2a1d508eb35d7afac38",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)