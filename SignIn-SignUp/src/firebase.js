import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';

const firebaseConfig = {
    apiKey: "AIzaSyDHzUlB-Q09iOSBdN0PLg7Sv9kicu2WJSc",
    authDomain: "holidaypool-1e806.firebaseapp.com",
    databaseURL: "https://holidaypool-1e806-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "holidaypool-1e806",
    storageBucket: "holidaypool-1e806.appspot.com",
    messagingSenderId: "816045711614",
    appId: "1:816045711614:web:135cc0f2081129314a45af",
    measurementId: "G-PG4G1K4YMN"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        toast.error(error.code)
    }
}

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
       toast.error(error.code)
    }
}
