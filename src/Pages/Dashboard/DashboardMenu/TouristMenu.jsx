import { FaUserTie } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const TouristMenu = () => {
  return (
    <div className="flex flex-col gap-1 mt-3">
      <NavLink
        to="/dashboard/touristProfile"
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
        to="/dashboard/bookings"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        <span className="flex items-center gap-3">
          <MdAssignmentAdd className="text-orange-400" />
          My Bookings
        </span>
      </NavLink>
      <NavLink
        to="/dashboard/wishlist"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        <span className="flex items-center gap-3">
          <GiSelfLove className="text-orange-400" />
          My Wishlist
        </span>
      </NavLink>
    </div>
  );
};

export default TouristMenu;
