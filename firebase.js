// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmWqDbYfbx1a_MySoYwkoXQbTVWVNyT0U",
  authDomain: "fail2fwd-verification.firebaseapp.com",
  projectId: "fail2fwd-verification",
  storageBucket: "fail2fwd-verification.appspot.com",
  messagingSenderId: "216090999481",
  appId: "1:216090999481:web:bf2fe3a521e61cdc6a7968",
  measurementId: "G-Y46QCM8HD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
