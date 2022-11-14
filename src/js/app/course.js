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
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const nameDbCourse = "course";
const db = getFirestore();

export const createCourse = (title, description) =>
    addDoc(collection(db, nameDbCourse), { title, description });

export const onGetCourses = (callback) =>
    onSnapshot(collection(db, nameDbCourse), callback);


export const deleteCourse = (id) => deleteDoc(doc(db, nameDbCourse, id));

export const getCourse = (id) => getDoc(doc(db, nameDbCourse, id));

export const updateCourse = (id, newFields) =>
    updateDoc(doc(db, nameDbCourse, id), newFields);

export const getAllCourse = () => getDocs(collection(db, nameDbCourse));