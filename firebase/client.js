// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
export const auth = getAuth(app);
