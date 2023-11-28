import { Link, useParams } from "react-router-dom";
import Container from "../../../Component/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import StoryDetails from "../../../Component/StoryDetails";

const TouristStoryDetails = () => {
  const axiosPublic = useAxiosPublic();

  const { id } = useParams();
  console.log(id);
  const { data: singleStory } = useQuery({
    queryKey: ["singleStory"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/storys/${id}`);
      return res?.data;
    },
  });
  const [storyDetails] = singleStory || [];

  return (
    <div>
      <Container>
        <div>
          <h1 className="text-center my-10 text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
            Story Details
          </h1>
        </div>
        {/* content */}
        <StoryDetails storyDetails={storyDetails}></StoryDetails>
        <Link to="/allStory">
          <button
            className={`mx-auto block select-none rounded-lg my-10 bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl py-3 px-7 text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            type="button"
            data-ripple-light="true">
            All Story
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default TouristStoryDetails;
