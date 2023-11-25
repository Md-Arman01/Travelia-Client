import Banner from "./Banner/Banner";
import Container from "../../Component/Container";
import TravelGuide from "./TravelGuide/TravelGuide";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Container>
        <TravelGuide></TravelGuide>
      </Container>
    </>
  );
};

export default Home;
