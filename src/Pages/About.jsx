import { Helmet } from "react-helmet-async";
import Container from "../Component/Container";

const About = () => {
  return (
    <Container>
      <Helmet>
        <title>Travelia | About Us</title>
      </Helmet>
      <div>
        <h1>this is about page</h1>
      </div>
    </Container>
  );
};

export default About;
