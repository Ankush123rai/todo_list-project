import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA33iHl08AZwataqJ8Nbs4WsvTJcNVVziw",
  authDomain: "todo-list-d5fe3.firebaseapp.com",
  projectId: "todo-list-d5fe3",
  storageBucket: "todo-list-d5fe3.appspot.com",
  messagingSenderId: "733454241374",
  appId: "1:733454241374:web:1db222d54508ba95d6aecf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
