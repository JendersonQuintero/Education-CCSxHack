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
const db = getFirestore();

export const createCourse = (course) =>
    addDoc(collection(db, nameDbCourse), course);

export const onGetCourses = (callback) =>
    onSnapshot(collection(db, nameDbCourse), callback);

export const deleteCourse = (course) => deleteDoc(doc(db, nameDbCourse, id));

export const getCourse = (course) => getDoc(doc(db, nameDbCourse, id));

export const updateCourse = (id, course) =>
    updateDoc(doc(db, nameDbCourse, id), course);

export const getAllCourse = () => getDocs(collection(db, nameDbCourse));