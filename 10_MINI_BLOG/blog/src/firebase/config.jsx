import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7blS5UyJ4oN_K5CwxieB27QbM4aJgy_Y",
  authDomain: "miniblog-9b0ad.firebaseapp.com",
  projectId: "miniblog-9b0ad",
  storageBucket: "miniblog-9b0ad.appspot.com",
  messagingSenderId: "166534880419",
  appId: "1:166534880419:web:c6d7df99eaba1272363316"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
const auth = getAuth(app);
 
export { db, auth };