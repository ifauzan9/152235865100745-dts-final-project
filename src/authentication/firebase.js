// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdpSlWyHg8LoLCckhK-1AOfm3dwA001_M",
  authDomain: "dtsfinalproject-ef064.firebaseapp.com",
  projectId: "dtsfinalproject-ef064",
  storageBucket: "dtsfinalproject-ef064.appspot.com",
  messagingSenderId: "974450975074",
  appId: "1:974450975074:web:33d594cb8fca4407190c3b",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async ({ email, password }) => {
  try {
    const userYangRegister = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user yang berhasil registrasi", userYangRegister.user);
  } catch (err) {
    console.log(err);
    console.log("Error code auth: ", err.code);
    console.log("Error msg auth", err.message);
  }
};

const loginDenganEmailDanPassword = async ({ email, password }) => {
  try {
    const userYangLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user yang berhasil login", userYangLogin.user);
  } catch (err) {
    console.log(err);
    console.log("Error code auth: ", err.code);
    console.log("Error msg auth", err.message);
  }
};

const keluarDariAplikasi = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  keluarDariAplikasi,
  auth,
};
