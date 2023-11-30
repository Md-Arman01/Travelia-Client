import { NavLink } from "react-router-dom";
import { FaUserTie ,FaUsers } from "react-icons/fa";
import { MdNoteAdd } from "react-icons/md";

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
        <span className="flex items-center gap-3">
          <FaUserTie className="text-orange-400" />
          My Profile
        </span>
      </NavLink>
      <NavLink
        to="/dashboard/addPackage"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
        <span className="flex items-center gap-3">
          <MdNoteAdd className="text-orange-400" />
          Add Packages
        </span>
      </NavLink>
      <NavLink
        to="/dashboard/manageUser"
        className={({ isActive }) =>
          isActive
            ? "text-xl font-semibold bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text"
            : "text-white text-xl font-semibold"
        }>
            <span className="flex items-center gap-3">
          <FaUsers className="text-orange-400" />
          Manage User
        </span>
        
      </NavLink>
    </div>
  );
};

export default AdminMenu;
