import PropTypes from 'prop-types'
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
  } from "react-share";


const StoryDetails = ({storyDetails}) => {
    const {
        provider_name,
        provider_email,
        provider_image,
        tour_place,
        story_image,
        tour_experience,
      } = storyDetails || {};
    const shearURl = 'https://book-finder-a4e89.web.app/'

  return (
    <div className="mb-10">
      <div>
        <img className="w-full rounded-lg" src={story_image} alt="" />
        <div className="mt-10 mb-5 flex gap-5">
          <img
            alt="tania andrew"
            src={provider_image}
            className="relative inline-block outline outline-offset-4 outline-blue-500 md:h-[50px] md:w-[50px]  rounded-full  object-cover object-center"
          />
          <div>
            <h1 className="text-xl font-semibold">{provider_name}</h1>
            <h1 className="text-xs text-gray-500">{provider_email}</h1>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold border-b-2 w-fit border-black mb-5">
            {tour_place}
          </h1>
          <p className="text-gray-500 text-base">{tour_experience}</p>
        </div>
        <div className="flex items-center gap-3 justify-end my-3">
          <FacebookShareButton url={shearURl}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TelegramShareButton url={shearURl}>
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <TwitterShareButton url={shearURl}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};
StoryDetails.propTypes ={
    storyDetails: PropTypes.object.isRequired,

}

export default StoryDetails;
