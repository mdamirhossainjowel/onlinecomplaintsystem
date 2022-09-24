
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgXBS8DyN6zbOtX6Fh8KK4G6pV0ahrJi8",
  authDomain: "onlinecomplaintsystem.firebaseapp.com",
  projectId: "onlinecomplaintsystem",
  storageBucket: "onlinecomplaintsystem.appspot.com",
  messagingSenderId: "418108704464",
  appId: "1:418108704464:web:3595fb886937dd7a4b40d5",
  measurementId: "G-M41DBV4SED"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;