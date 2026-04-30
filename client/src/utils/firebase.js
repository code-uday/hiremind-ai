import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "hiremindai-dfb8c.firebaseapp.com",
  projectId: "hiremindai-dfb8c",
  storageBucket: "hiremindai-dfb8c.firebasestorage.app",
  messagingSenderId: "432253563906",
  appId: "1:432253563906:web:0e50f47b00bf2b752d631b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
