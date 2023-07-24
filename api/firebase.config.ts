import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCmoLLyUoQYRANYUFrrmD0Oz_zajFXWHv0",
  authDomain: "nuxt-ecommerce-debdb.firebaseapp.com",
  projectId: "nuxt-ecommerce-debdb",
  storageBucket: "nuxt-ecommerce-debdb.appspot.com",
  messagingSenderId: "1065232411087",
  appId: "1:1065232411087:web:0b03e974aa615220e34aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export { auth, firestore }