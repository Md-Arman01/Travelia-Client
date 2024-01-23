import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 items-center">
        <div className="relative group tracking-[1px]">
          <p className="absolute bottom-0 left-0 w-[0%] group-hover:w-[100%] duration-500 border-b-2 border-[#FF4804]"></p>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF4804] underline underline-offset-[5px] text-xl font-bold"
                : "text-xl font-bold text-gray-500"
            }>
            Home
          </NavLink>
        </div>
        <div className="relative group tracking-[1px]">
          <p className="absolute bottom-0 left-0 w-[0%] group-hover:w-[100%] duration-500 border-b-2 border-[#FF4804]"></p>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF4804] underline underline-offset-[5px] text-xl font-bold"
                : "text-xl font-bold text-gray-500"
            }>
            Community
          </NavLink>
        </div>
        <div className="relative group tracking-[1px]">
          <p className="absolute bottom-0 left-0 w-[0%] group-hover:w-[100%] duration-500 border-b-2 border-[#FF4804]"></p>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF4804] underline underline-offset-[5px] text-xl font-bold"
                : "text-xl font-bold text-gray-500"
            }>
            Blogs
          </NavLink>
        </div>
        <div className="relative group tracking-[1px]">
          <p className="absolute bottom-0 left-0 w-[0%] group-hover:w-[100%] duration-500 border-b-2 border-[#FF4804]"></p>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF4804] underline underline-offset-[5px] text-xl font-bold"
                : "text-xl font-bold text-gray-500"
            }>
            About Us
          </NavLink>
        </div>
        <div className="relative group tracking-[1px]">
          <p className="absolute bottom-0 left-0 w-[0%] group-hover:w-[100%] duration-500 border-b-2 border-[#FF4804]"></p>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF4804] underline underline-offset-[5px] text-xl font-bold"
                : "text-xl font-bold text-gray-500"
            }>
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
