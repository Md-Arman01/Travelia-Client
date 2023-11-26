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
        My Profile
      </NavLink>
      <NavLink
        to="/dashboard/tourGuideAssigned"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        My  Assigned Tour
      </NavLink>
    </div>
  );
};

export default TourGuideMenu;
