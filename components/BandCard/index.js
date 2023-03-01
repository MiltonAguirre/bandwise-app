import { Badge, Card, Col, Grid, Link, Row, Text } from "@nextui-org/react";

const BandCard = ({ id, country, genreCode, members, name, year }) => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{year}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Grid.Container gap={2}>
          <Grid>
            <Badge color="success" enableShadow disableOutline>
              {country}
            </Badge>
          </Grid>
          <Grid>
            <Badge color="secondary" variant="flat">
              {genreCode}
            </Badge>
          </Grid>
        </Grid.Container>
        <Text>Members: </Text>
        <Row gap={1}>
          {members.map((member, index) => (
            <Col key={index}>
              <Text size={12}>{member.name}</Text>
            </Col>
          ))}
        </Row>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          Show all
        </Link>
      </Card.Footer>
    </Card>
  );
};
export default BandCard;
