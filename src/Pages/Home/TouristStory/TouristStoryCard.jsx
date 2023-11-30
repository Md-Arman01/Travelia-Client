import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristStoryCard = ({ story }) => {
  const { provider_name, provider_image, tour_place, story_image, _id } =
    story || {};
  const dynamicStyles = {
    backgroundImage: `url('${story_image}')`,
  };

  return (
    <div>
      <Link to={`/storyDetails/${_id}`}>
        <div className="relative grid h-[350px] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
          <div
            style={dynamicStyles}
            className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 block font-Rancho text-5xl font-medium leading-[1.5] tracking-normal text-white antialiased">
              {tour_place}
            </h2>
            <h5 className="block mb-4 text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
              {provider_name}
            </h5>
            <img
              alt="tania andrew"
              src={provider_image}
              className="relative inline-block outline outline-offset-4 outline-blue-500 h-[60px] w-[60px] md:h-[74px] md:w-[74px]  rounded-full  object-cover object-center"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

TouristStoryCard.propTypes = {
  story: PropTypes.object.isRequired,
};

export default TouristStoryCard;
