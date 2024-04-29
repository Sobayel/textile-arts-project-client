
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5xuQDlywubnZFJPwVUyWddGYwyy6rIvs",
  authDomain: "textile-arts-da163.firebaseapp.com",
  projectId: "textile-arts-da163",
  storageBucket: "textile-arts-da163.appspot.com",
  messagingSenderId: "438862144431",
  appId: "1:438862144431:web:320ae416355aecda0e855a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;