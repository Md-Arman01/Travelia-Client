import axios from "axios";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
const image_bb_API = import.meta.env.VITE_IMAGE_API;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_bb_API}`;

const AddPackage = () => {
    const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Adding Package...");
    const imageFile = { image: data?.image[0] };
    const res = await axios.post(image_hosting_API, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = res?.data?.data?.display_url;

    const packageData = {
        image: image,
        tour_type: data?.type,
        trip_title: data?.title,
        about: data?.about,
        day_1: data?.day_1,
        day_2: data?.day_2,
        day_3: data?.day_3,
        price: data?.price
    }
    axiosSecure.post('packages', packageData)
    .then(res => {
        console.log(res?.data)
        if(res?.data?.price){
            reset()
            toast.success("Package added Successfully!", { id: toastId });
        }
    })



  };

  return (
    <>
      <div>
        <h1 className="text-center my-10 text-5xl font-semibold font-Rancho">
          Add Package
        </h1>
      </div>
      <div className="bg-[#F6F6F6] p-20 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 1 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("title", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Trip title
                </label>
              </div>
              {errors.title && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 2 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("type", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Tour type
                </label>
              </div>
              {errors.type && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 3 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("about", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  About
                </label>
              </div>
              {errors.about && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 4 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("day_1", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Day 1 plan
                </label>
              </div>
              {errors.day_1 && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 5 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("day_2", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Day 2 plan
                </label>
              </div>
              {errors.day_2 && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 6 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("day_3", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Day 3 plan
                </label>
              </div>
              {errors.day_3 && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 7 */}
            <div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("price", { required: true })}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#FFA828] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFA828] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFA828] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Price
                </label>
              </div>
              {errors.price && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 8 */}
            <div>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered file-input-md w-full"
              />
              {errors.image?.type === "required" && (
                <span className="text-red-400 text-xs ">Image is required</span>
              )}
            </div>
            {/* --- */}
          </div>
          <button
            className="block w-52 normal-case mx-auto select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl mt-10 py-3.5 px-7 text-center align-middle  text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true">
            View Package
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPackage;
