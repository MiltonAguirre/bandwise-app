// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPs_PUbBw0pFNLI0sc4godZwGdG2kDOpo",
  authDomain: "bandwiseapp.firebaseapp.com",
  projectId: "bandwiseapp",
  storageBucket: "bandwiseapp.appspot.com",
  messagingSenderId: "850570536955",
  appId: "1:850570536955:web:57d5391e90845bdaf30d5e",
  measurementId: "G-BEEJ79R8MQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};
export const logOut = () => {
  try {
    signOut(auth)
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("Logout error: ", error);
      });
  } catch (error) {
    console.log(error);
  }
};
