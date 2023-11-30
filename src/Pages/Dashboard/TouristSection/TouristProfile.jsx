import useAuth from "../../../Hooks/useAuth";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const image_bb_API = import.meta.env.VITE_IMAGE_API;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_bb_API}`;

const Profile = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Adding story...");
    const imageFile = { image: data?.image[0] };
    const res = await axios.post(image_hosting_API, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = res?.data?.data?.display_url;

    const storyInfo = {
      provider_image: user?.photoURL,
      provider_name: data?.name,
      provider_email: user?.email,
      tour_place: data?.tourPlace,
      tour_experience: data?.tourExperience,
      story_image: image,
    };
    console.log(storyInfo);
    axiosPublic.post("/storys", storyInfo).then((res) => {
      if (res?.data?._id) {
        reset();
        toast.success("Story Added Successfully..!", { id: toastId });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Travelia | Tourist Profile</title>
      </Helmet>
      <h1 className="text-center mb-5 lg:mb-10  md:my-10 text-3xl md:text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
        My Profile
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-5">
        {/* profile */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
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
        {/* form */}
        <div className="flex items-center justify-center bg-[#F6F6F6] rounded-xl w-full  lg:h-[540px] flex-1 py-10 lg:py-0">
          <div>
            <h1 className="text-4xl font-Rancho border-b-4 border-dashed w-fit pb-2 mx-auto mb-10">
              Add Story
            </h1>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* 1 */}
                  <div>
                    <div className="relative h-11 w-full ">
                      <input
                        {...register("name", { required: true })}
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Enter your name
                      </label>
                    </div>
                    {errors.name && (
                      <span className="text-red-400 text-xs">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* 2 */}
                  <div>
                    <div className="relative h-11 w-full ">
                      <input
                        {...register("tourPlace", { required: true })}
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Tour Place
                      </label>
                    </div>
                    {errors.tourPlace && (
                      <span className="text-red-400 text-xs">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* 3 */}
                  <div>
                    <div className="relative h-11 w-full">
                      <input
                        {...register("tourExperience", { required: true })}
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Shear tour experience
                      </label>
                    </div>
                    {errors.tourExperience && (
                      <span className="text-red-400 text-xs">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* 4 */}
                  <div>
                    <input
                      type="file"
                      {...register("image", { required: true })}
                      className="file-input file-input-bordered file-input-md w-full"
                    />
                    {errors.image?.type === "required" && (
                      <span className="text-red-400 text-xs ">
                        Image is required
                      </span>
                    )}
                  </div>
                  {/* --- */}
                </div>
                <button
                  className="block w-52 normal-case mx-auto select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl mt-10 py-3.5 px-7 text-center align-middle  text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true">
                  Add Story
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
