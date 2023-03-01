import Layout from "../../components/Layout";
import { Container, Grid, Text } from "@nextui-org/react";
import BandCard from "../../components/BandCard";

const Bands = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Text h1>Bands</Text>
        <Grid.Container gap={2} justify="center">
          {data &&
            data.map((item, index) => (
              <Grid key={index} xs={6}>
                <BandCard {...item} />
              </Grid>
            ))}
        </Grid.Container>
      </Container>
    </Layout>
  );
};
export default Bands;
export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://my-json-server.typicode.com/improvein/dev-challenge/bands"
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("Error api", error);
  }
}
