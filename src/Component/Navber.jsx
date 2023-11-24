import { NavLink } from "react-router-dom";
import logo from "../../public/Tourist Guide Logo.png";
import Container from "./Container";
import { FiMenu } from "react-icons/fi";

const Navber = () => {


  const menuItems = (
    <>
      <div className="flex gap-5 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#EB3951] underline underline-offset-8 text-lg"
              : "text-lg  hover:text-[#EB3951] hover:underline hover:underline-offset-8"
          }>
          Home
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive
              ? "text-[#EB3951] underline underline-offset-8 text-lg"
              : "text-lg  hover:text-[#EB3951] hover:underline hover:underline-offset-8"
          }>
          Community
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-[#EB3951] underline underline-offset-8 text-lg"
              : "text-lg  hover:text-[#EB3951] hover:underline hover:underline-offset-8"
          }>
          Blogs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#EB3951] underline underline-offset-8 text-lg"
              : "text-lg  hover:text-[#EB3951] hover:underline hover:underline-offset-8"
          }>
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#EB3951] underline underline-offset-8 text-lg"
              : "text-lg hover:text-[#EB3951] hover:underline hover:underline-offset-8"
          }>
          Contact Us
        </NavLink>
      </div>
    </>
  );

  return (
    <div className=" sticky top-0 inset-0 z-10 border border-white/80 bg-white bg-opacity-80 shadow-md backdrop-blur-2xl backdrop-saturate-200 ">
      {/* ----------- */}
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <FiMenu className="text-3xl"></FiMenu>
              </label>
              <ul
                tabIndex={0}
                className="flex flex-col gap-2 dropdown-content mt-3 z-[1] py-4 px-5  shadow text-black bg-gray-100 rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <div className=" flex flex-col items-center">
              <img className="w-16" src={logo} alt="" />
              <h1 className="text-2xl font-Rancho font-semibold -mt-3">
                Travelia
              </h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* navber */}
              <div>{menuItems}</div>
            </ul>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Navber;
