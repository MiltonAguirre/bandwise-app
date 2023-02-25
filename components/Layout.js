import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, Navbar, Text } from "@nextui-org/react";
import BandwiseLogo from "./BandwiseLogo";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";

export default function Layout({ children, title, description }) {
  const [isLogged, setIsLogged] = useState(false);
  const { handleSignOut } = useUser();
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <BandwiseLogo />
          <Text b color="Dark" hideIn="xs">
            Bandwise
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          {isLogged && (
            <Navbar.Item>
              <Button auto flat color="secondary" onPress={handleSignOut}>
                Logout
              </Button>
            </Navbar.Item>
          )}
        </Navbar.Content>
      </Navbar>
      <main>{children}</main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
Layout.defaultProps = {
  title: "Bandwise",
  description: "Plataforma de musica",
};
