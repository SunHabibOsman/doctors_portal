// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr64e49k8WawO1dqh2BcaHJTvtbVP3Gp0",
  authDomain: "doctors-portel.firebaseapp.com",
  projectId: "doctors-portel",
  storageBucket: "doctors-portel.appspot.com",
  messagingSenderId: "583180414847",
  appId: "1:583180414847:web:74faa80c6e0b84d692744a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;