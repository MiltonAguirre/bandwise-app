import { useEffect, useState } from "react";
import { logOut, signIn, signUp } from "../firebase/client";
import styles from "../styles/Home.module.css";
import { validateEmail, validatePasswords } from "../utils";
import DashboardLayout from "./layout";

export default function Home() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = async () => {
    console.log("handleSignIn");
    console.log(email, password);
    const v_email = validateEmail(email);
    const v_password = validatePasswords(password);
    if (v_email || v_password) {
      const { accessToken } = await signIn(email, password);
      setUser({ accessToken });
    }
  };
  const handleSignUp = async () => {
    console.log("handleSignUp");
    console.log(email, password);
    const res = await signUp(email, password);
    console.log(res);
    if (res) {
      setUser(res);
    }
  };
  const handleSignOut = () => {
    console.log("handleSignOut");
    logOut();
    console.log("out");
    setUser(null);
  };

  return (
    <DashboardLayout>
      <img src="/bandwise-logo.png" alt="Bandwise" className={styles.logo} />
      <h1 className={styles.title}>Bandwise</h1>
      <p className={styles.description}>
        Encontrá la data de tus bandas favoritas!
      </p>
      <section>
        {!user ? (
          <div>
            <div className={styles.card}>
              <h4>Ingresa a la plataforma</h4>
              <input
                value={email}
                onChange={onChangeEmail}
                name="email"
                type="email"
                className={styles.input}
                placeholder="Correo electrónico"
              />
              <input
                value={password}
                onChange={onChangePassword}
                name="password"
                type="password"
                className={styles.input}
                placeholder="Contraseña"
              />
              <button
                type="button"
                className={styles.button}
                onClick={handleSignIn}
                disabled={!email || !password}
              >
                Ingresar
              </button>

              <button
                type="button"
                className={styles.button}
                onClick={handleSignUp}
                disabled={!email || !password}
              >
                Registrar
              </button>
            </div>
          </div>
        ) : (
          <>
            <h4>Bienvenido</h4>
            <button
              type="button"
              className={styles.button}
              onClick={handleSignOut}
            >
              Salir
            </button>
          </>
        )}
      </section>
    </DashboardLayout>
  );
}
