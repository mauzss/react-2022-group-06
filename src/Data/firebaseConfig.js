// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDLvnIoq1VzJRN_b56NeZsTAa14-BS82vA",
	authDomain: "login-codoacodo.firebaseapp.com",
	projectId: "login-codoacodo",
	storageBucket: "login-codoacodo.appspot.com",
	messagingSenderId: "204198864819",
	appId: "1:204198864819:web:17a08442e4e78183090dc6"
  };
/*const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);