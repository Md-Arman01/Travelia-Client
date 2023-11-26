import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="flex flex-col gap-1 mt-3">
      <NavLink
        to="/dashboard/adminProfile"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        My Profile
      </NavLink>
      <NavLink
        to="/dashboard/addPackage"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        Add Packages
      </NavLink>
      <NavLink
        to="/dashboard/manageUser"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        Manage User
      </NavLink>
    </div>
  );
};

export default AdminMenu;
