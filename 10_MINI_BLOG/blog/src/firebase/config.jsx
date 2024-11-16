import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARRmDf1owu9wNdQ8E8g61q_yRU6rPvARQ",
  authDomain: "miniblog-e2ab0.firebaseapp.com",
  projectId: "miniblog-e2ab0",
  storageBucket: "miniblog-e2ab0.firebasestorage.app",
  messagingSenderId: "1038995921344",
  appId: "1:1038995921344:web:61b901769f308b64f8d025"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
const auth = getAuth(app);
 
export { db, auth };
