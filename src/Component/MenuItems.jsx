import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF4804] underline underline-offset-8 text-lg font-medium"
              : "text-lg font-medium  hover:text-[#FF4804] hover:underline hover:underline-offset-8"
          }>
          Home
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF4804] underline underline-offset-8 text-lg font-medium"
              : "text-lg font-medium  hover:text-[#FF4804] hover:underline hover:underline-offset-8"
          }>
          Community
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF4804] underline underline-offset-8 text-lg font-medium"
              : "text-lg font-medium  hover:text-[#FF4804] hover:underline hover:underline-offset-8"
          }>
          Blogs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF4804] underline underline-offset-8 text-lg font-medium"
              : "text-lg font-medium  hover:text-[#FF4804] hover:underline hover:underline-offset-8"
          }>
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#FF4804] underline underline-offset-8 text-lg font-medium"
              : "text-lg font-medium hover:text-[#FF4804] hover:underline hover:underline-offset-8"
          }>
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default MenuItems;
