import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { setPersistence, browserSessionPersistence } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyA8PGPIgo9zW7zMKvtCtQDv33x4c5o0ILc",
  authDomain: "authentication-5cpr.firebaseapp.com",
  databaseURL: "https://authentication-5cpr-default-rtdb.firebaseio.com",
  projectId: "authentication-5cpr",
  storageBucket: "authentication-5cpr.appspot.com",
  messagingSenderId: "774408520068",
  appId: "1:774408520068:web:2af692e12f9275171f5dd1",
  measurementId: "G-CSWK3G8NKB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence);

export { auth };
