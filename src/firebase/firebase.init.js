// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpGdoS2Q4zImJA1lZwlhxreSfk6-2-ncU",
  authDomain: "email-password-auth-proj-13cf3.firebaseapp.com",
  projectId: "email-password-auth-proj-13cf3",
  storageBucket: "email-password-auth-proj-13cf3.appspot.com",
  messagingSenderId: "668418531714",
  appId: "1:668418531714:web:35abdde7764656fa646f9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;