// Import the functions you need from the SDKs you need
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/client";
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
