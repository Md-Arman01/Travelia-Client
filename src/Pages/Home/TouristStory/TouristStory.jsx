import useAllStory from "../../../Hooks/useAllStory";
import TouristStoryCard from "./TouristStoryCard";

const TouristStory = () => {
    const [allStory] = useAllStory()

  return (
    <div>
      <div>
        <h1 className="text-6xl mb-10 font-Rancho text-center bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
          Tourist Story 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            {
                allStory?.map(story => <TouristStoryCard key={story?._id} story={story}></TouristStoryCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default TouristStory;
