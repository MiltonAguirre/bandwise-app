import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { logOut, signIn, signUp } from "../services/auth";
import { validateEmail, validatePassword } from "../utils";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (email, password) => {
    console.log("handleSignIn");
    console.log(email, password);
    setLoading(true);
    try {
      const v_email = validateEmail(email);
      const v_password = validatePassword(password);
      if (v_email || v_password) {
        const response = await signIn(email, password);
        console.log("Response: ", response);
        if (!response) {
          setError("Ups, algo salió mal!");
        } else {
          const { accessToken, email } = response;
          setUser({ accessToken, email });
          window.localStorage.setItem(
            "loggedUser",
            JSON.stringify({ accessToken, email })
          );
        }
      }
    } catch (err) {
      console.error(error);
      setError(err);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  const handleSignUp = async (email, password) => {
    console.log("handleSignUp");
    console.log(email, password);
    setLoading(true);
    try {
      const response = await signUp(email, password);
      console.log("Response: ", response);
      if (!response) {
        setError("Ups, algo salió mal!");
      } else {
        const { accessToken, email } = response;
        setUser({ accessToken, email });
        window.localStorage.setItem(
          "loggedUser",
          JSON.stringify({ accessToken, email })
        );
      }
    } catch (err) {
      console.error(error);
      setError(err);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  const handleSignOut = () => {
    console.log("handleSignOut");
    logOut();
    console.log("out");
    setUser(null);
    window.localStorage.removeItem("loggedUser");
  };
  const router = useRouter();
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser)  {
      const user = JSON.parse(loggedUser);
      setUser(user);
    }
  }, []);
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (!loggedUser) {
      setUser(null);
      router.push("/");
    }
  }, [user]);
  return { error, loading, user, handleSignIn, handleSignOut, handleSignUp };
};

export default useUser;
