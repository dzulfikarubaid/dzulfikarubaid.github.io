// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSlzgr_fRmLsvt1ZmJwU1OY07xOc2qNWw",
  authDomain: "riri-project.firebaseapp.com",
  databaseURL: "https://riri-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "riri-project",
  storageBucket: "riri-project.appspot.com",
  messagingSenderId: "989667302238",
  appId: "1:989667302238:web:ce87d7e2a108a4f1020dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db