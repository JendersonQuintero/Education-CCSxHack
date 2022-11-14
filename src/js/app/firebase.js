import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDl8Hfe5sROEFMZdZIN9epN7UN0krD5DWk",
    authDomain: "education-ccsxhack.firebaseapp.com",
    projectId: "education-ccsxhack",
    storageBucket: "education-ccsxhack.appspot.com",
    messagingSenderId: "75636545417",
    appId: "1:75636545417:web:947761e2502a07020a3358"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)