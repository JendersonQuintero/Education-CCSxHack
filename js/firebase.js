import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const nameDbCourse = "course";

const firebaseConfig = {
    apiKey: "AIzaSyDl8Hfe5sROEFMZdZIN9epN7UN0krD5DWk",
    authDomain: "education-ccsxhack.firebaseapp.com",
    projectId: "education-ccsxhack",
    storageBucket: "education-ccsxhack.appspot.com",
    messagingSenderId: "75636545417",
    appId: "1:75636545417:web:947761e2502a07020a3358"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const createCourse = (course) =>
    addDoc(collection(db, nameDbCourse), course);

export const onGetCourses = (callback) =>
    onSnapshot(collection(db, nameDbCourse), callback);

export const deleteCourse = (course) => deleteDoc(doc(db, nameDbCourse, id));

export const getCourse = (course) => getDoc(doc(db, nameDbCourse, id));

export const updateCourse = (id, course) =>
    updateDoc(doc(db, nameDbCourse, id), course);

export const getAllCourse = () => getDocs(collection(db, nameDbCourse));