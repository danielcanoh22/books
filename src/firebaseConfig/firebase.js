import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl4ZdkTL7BurVlMLqT7OfB-u1iopUv5Wg",
  authDomain: "books-tecnicas.firebaseapp.com",
  projectId: "books-tecnicas",
  storageBucket: "books-tecnicas.appspot.com",
  messagingSenderId: "134529223152",
  appId: "1:134529223152:web:c19014b5eacd51ab2af535",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);