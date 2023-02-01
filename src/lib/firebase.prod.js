
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// import { seedDatabase } from "../seed";


const firebaseConfig = {
  apiKey: "AIzaSyCKajhWgOZ3-v9v7LQJPfAoxNwm33n6Hzk",
  authDomain: "netflix-clone-226e2.firebaseapp.com",
  projectId: "netflix-clone-226e2",
  storageBucket: "netflix-clone-226e2.appspot.com",
  messagingSenderId: "199918125292",
  appId: "1:199918125292:web:5f6e288cd50dcaf4dee5c9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// seedDatabase(firebase);/// This will seed the database

export { db, auth, storage, firebaseApp };
