import PropTypes from "prop-types";
import { MdAddLocationAlt } from "react-icons/md";

const TourPlan = ({ item }) => {
  return (
    <div>
      <h1 className="border-b-4 border-orange-400 w-fit my-5 text-5xl font-Rancho font-semibold ">
        Tour plan :
      </h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
            <div className="flex items-center gap-1 bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border w-fit p-2 rounded-xl">
                <MdAddLocationAlt></MdAddLocationAlt>
                <span className="font-semibold text-xl">Day 1:</span>
            </div>
        </div>
        <div className="collapse-content">
          <p className="text-lg">{item?.day_1}</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200 mb-2">
        <div className="collapse-title text-xl font-medium">
        <div className="flex items-center gap-1 bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border w-fit p-2 rounded-xl">
                <MdAddLocationAlt></MdAddLocationAlt>
                <span className="font-semibold text-xl">Day 2:</span>
            </div>
            </div>
        <div className="collapse-content">
          <p className="text-lg">{item?.day_2}</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200">
        <div className="collapse-title text-xl font-medium">
        <div className="flex items-center gap-1 bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border w-fit p-2 rounded-xl">
                <MdAddLocationAlt></MdAddLocationAlt>
                <span className="font-semibold text-xl">Day 3:</span>
            </div>
            </div>
        <div className="collapse-content">
          <p className="text-lg">{item?.day_3}</p>
        </div>
      </div>
    </div>
  );
};
TourPlan.propTypes = {
  item: PropTypes.object.isRequired,
};
export default TourPlan;
