import toast from "react-hot-toast";
import useUserInfo from "../../../Hooks/useUserInfo";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const image_bb_API = import.meta.env.VITE_IMAGE_API;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_bb_API}`;

const TourGuideProfile = () => {
  const [userInfo] = useUserInfo();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Updating...");

    const imageFile = { image: data?.image[0] };
    const res = await axios.post(image_hosting_API, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = res?.data?.data?.display_url;

    const updateInfo = {
      user_name: data?.name,
      user_image: image,
      phone_number: data?.number,
      education: data?.education,
      skills: data?.skills,
      work_experience: data?.work_experience,
    };

    axiosSecure.put(`/users/${userInfo?._id}`, updateInfo).then((res) => {
      console.log(res?.data);
      if (res?.data?._id) {
        toast.success("Update Successfully!", { id: toastId });
        reset();
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Travelia | TourGuide | Profile</title>
      </Helmet>
      <h1 className="text-center mb-10 lg:my-10 text-3xl md:text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
        My Profile
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* profile */}
        <div className="relative flex flex-col text-gray-700 h-fit bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
            <img
              className="h-full w-full object-cover"
              src={userInfo?.user_image}
              alt="profile-picture"
            />
          </div>
          <div className="px-5 mt-5 text-center">
            <h4 className="block  text-4xl font-Rancho antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {userInfo?.user_name}
            </h4>
          </div>
          <div className="p-5 space-y-1">
            <h1 className="text-base font-semibold text-gray-500">
              Skill: {userInfo?.skills}
            </h1>
            <h1 className="text-base font-semibold text-gray-500">
              Work Experience: {userInfo?.work_experience} years
            </h1>
            <h1 className="text-base font-semibold text-gray-500">
              Education: {userInfo?.education}
            </h1>
            <h1 className="text-base font-semibold text-gray-500">
              Email: {userInfo?.user_email}
            </h1>
            <h1 className="text-base font-semibold text-gray-500">
              Contact No: {userInfo?.phone_number}
            </h1>
          </div>
        </div>
        {/* form */}
        <div className="flex items-center justify-center bg-[#F6F6F6] p-10 rounded-xl">
          <div>
            <h1 className="text-4xl font-Rancho border-b-4 border-dashed w-fit pb-2 mx-auto mb-10">
              Update Profile
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 1 */}
                <div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      {...register("name", { required: true })}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Your name
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
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      {...register("skills", { required: true })}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Skills
                    </label>
                  </div>
                  {errors.skills && (
                    <span className="text-red-400 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                {/* 3 */}
                <div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="number"
                      {...register("work_experience", { required: true })}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Work Experience
                    </label>
                  </div>
                  {errors.work_experience && (
                    <span className="text-red-400 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                {/* 4 */}
                <div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      {...register("education", { required: true })}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Education
                    </label>
                  </div>
                  {errors.education && (
                    <span className="text-red-400 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                {/* 5 */}
                <div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      {...register("number", { required: true })}
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Contact Number
                    </label>
                  </div>
                  {errors.number && (
                    <span className="text-red-400 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                {/* 6 */}
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
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfile;
