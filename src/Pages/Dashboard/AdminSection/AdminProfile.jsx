import { BsFacebook } from "react-icons/bs";
import useAuth from "../../../Hooks/useAuth";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const AdminProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Travelia | Admin_Profile</title>
      </Helmet>
      <h1 className="text-center my-10 text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
        My Profile
      </h1>
      <div className="flex justify-center">
        <div className="relative flex flex-col w-[400px] text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img
              src={user?.photoURL}
              alt="profile-picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-Rancho text-5xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {user?.displayName}
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              {user?.email}
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <BsFacebook className="text-xl text-[#2B92EA]" />
            <FaTwitter className="text-xl text-[#1AACF0]" />
            <AiFillInstagram className="text-2xl text-[#A43EB7]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
