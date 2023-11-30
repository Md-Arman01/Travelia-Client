import Container from "../../Component/Container";
import StoryDetails from "../../Component/StoryDetails";
import useAllStory from "../../Hooks/useAllStory";

const AllStory = () => {
  const [allStory] = useAllStory();
  console.log(allStory);
  return (
    <div>
      <Container>
        <div className="pt-5">
          <h1 className="text-center my-10 text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
            All Story
          </h1>
        </div>
        <div className="px-5 lg:px-0">
          {allStory?.map((storyDetails) => (
            <StoryDetails
              key={storyDetails._id}
              storyDetails={storyDetails}></StoryDetails>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllStory;
