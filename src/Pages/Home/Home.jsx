import Banner from "./Banner/Banner";
import Container from "../../Component/Container";
import TravelGuide from "./TravelGuide/TravelGuide";
import TourType from "./TourType/TourType";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Container>
        <TravelGuide></TravelGuide>
        <TourType></TourType>
      </Container>
      
    </>
  );
};

export default Home;
