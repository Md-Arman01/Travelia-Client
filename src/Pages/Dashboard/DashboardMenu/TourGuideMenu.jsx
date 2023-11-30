import { FaUserTie } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import { NavLink } from "react-router-dom";

const TourGuideMenu = () => {
  return (
    <div className="flex flex-col gap-1 mt-3">
      <NavLink
        to="/dashboard/tourGuideProfile"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        <span className="flex items-center gap-3">
          <FaUserTie className="text-orange-400" />
          My Profile
        </span>
      </NavLink>
      <NavLink
        to="/dashboard/tourGuideAssigned"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        <span className="flex items-center gap-3">
          <MdAssignment className="text-orange-400" />
          My Assigned Tour
        </span>
      </NavLink>
    </div>
  );
};

export default TourGuideMenu;
