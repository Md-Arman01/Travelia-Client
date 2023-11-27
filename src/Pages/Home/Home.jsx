import Banner from "./Banner/Banner";
import Container from "../../Component/Container";
import TravelGuide from "./TravelGuide/TravelGuide";
import TourType from "./TourType/TourType";
import TouristStory from "./TouristStory/TouristStory";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Container>
        <TravelGuide></TravelGuide>
        <TourType></TourType>
        <TouristStory></TouristStory>
      </Container>
      
    </>
  );
};

export default Home;
