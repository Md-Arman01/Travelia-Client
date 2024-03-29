import logo from "../../public/Tourist Guide Logo.png";
import Container from "./Container";
import { FiMenu } from "react-icons/fi";
import MenuItems from "./MenuItems";
import { FaArrowRightToBracket } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import useUserInfo from "../Hooks/useUserInfo";

const Navber = () => {
  const { user, logoutUser, setUser } = useAuth();
  const [userInfo] = useUserInfo();
  const { displayName, photoURL, email } = user || {};
  const menuItems = <MenuItems></MenuItems>;

  const handleLogout = () => {
    const toastId = toast.loading("Sign Outing...");
    logoutUser()
      .then(() => {
        // Sign-out successful.
        setUser();
        toast.success("Sign Out Successfully!", { id: toastId });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode, { id: toastId });
      });
  };

  return (
    <div className="fixed top-o z-50 h-fit inset-0 border border-white/80 bg-white bg-opacity-80 shadow-md backdrop-blur-2xl backdrop-saturate-200 ">
      {/* ----------- */}
      <Container>
        <div className="navbar">
          <div className="navbar-start ">
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
            <Link to="/">
              <div className="hover:cursor-pointer flex flex-col items-center">
                <img className="w-16" src={logo} alt="" />
                <h1 className="text-2xl font-Rancho font-semibold -mt-3">
                  Travelia
                </h1>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* navber */}
              <div>{menuItems}</div>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            {user ? (
              <div>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0}>
                    <div className="avatar rounded-full hover:cursor-pointer">
                      <div className="w-12 rounded-full">
                        <img src={photoURL} />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-5 text-center shadow bg-base-100 rounded-box min-w-[250px] space-y-3">
                    <div>
                      <h1 className="text-xl font-semibold py-2">
                        {displayName}
                      </h1>
                      <h1 className="text-xs pb-2 text-gray-400">{email}</h1>
                      <hr />
                    </div>
                    <div>
                      {user && userInfo?.role === "Tourist" && (
                        <Link to="/dashboard/touristProfile">
                          <h1 className="text-lg font-medium hover:text-gray-600 hover:cursor-pointer">
                            Dashboard
                          </h1>
                        </Link>
                      )}
                      {user && userInfo?.role === "Tour Guide" && (
                        <Link to="/dashboard/tourGuideProfile">
                          <h1 className="text-lg font-medium hover:text-gray-600 hover:cursor-pointer">
                            Dashboard
                          </h1>
                        </Link>
                      )}
                      {user && userInfo?.role === "Admin" && (
                        <Link to="/dashboard/adminProfile">
                          <h1 className="text-lg font-medium hover:text-gray-600 hover:cursor-pointer">
                            Dashboard
                          </h1>
                        </Link>
                      )}
                    </div>
                    <div
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-2 text-lg text-red-400 hover:text-red-500 hover:cursor-pointer">
                      <p>Sign out</p>
                      <FaArrowRightToBracket></FaArrowRightToBracket>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink to="/signIn">
                <button
                  className="hover:rounded-3xl  block w-full select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-2 px-8 text-center align-middle font-Rancho text-xl  text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true">
                  Sign In
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
