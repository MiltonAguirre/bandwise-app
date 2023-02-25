import { useEffect } from "react";
import Layout from "../components/Layout";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import { Col, Container, Text } from "@nextui-org/react";
import SignIn from "../components/SignIn";
import BandwiseLogo from "../components/BandwiseLogo";

export default function Home() {
  const { user, loading, error, handleSignIn, handleSignUp } = useUser();
  const login = (email, password) => {
    handleSignIn(email, password);
  };
  const register = (email, password) => {
    handleSignUp(email, password);
  };
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/bands");
    }
  }, [user]);

  return (
    <Layout>
      <Container
        display="flex"
        direction="column"
        alignItems="center"
        css={{ minHeight: "100vh" }}
      >
        <Col align="center" justify="center">
          <BandwiseLogo width={240} />
          <Text
            h1
            size={36}
            weight="bold"
            css={{
              as: "center",
            }}
          >
            Bandwise
          </Text>
        </Col>
        <SignIn
          login={login}
          register={register}
          loading={loading}
          error={error}
        />
      </Container>
    </Layout>
  );
}
