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
        My Profile
      </NavLink>
      <NavLink
        to="/dashboard/bookings"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        My Bookings
      </NavLink>
      <NavLink
        to="/dashboard/wishlist"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        My Wishlist
      </NavLink>
    </div>
  );
};

export default TouristMenu;
