/* eslint-disable react/no-unescaped-entities */
import useAuth from "../../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useUserInfo from "../../../../../Hooks/useUserInfo";
const image_bb_API = import.meta.env.VITE_IMAGE_API;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_bb_API}`;

const BookingForm = ({ item }) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [userInfo] = useUserInfo();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: allTourGuides } = useQuery({
    queryKey: ["allTourGuides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tourGuides");
      return res?.data;
    },
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Booking Pending...");

    const imageFile = { image: data?.image[0] };
    const res = await axios.post(image_hosting_API, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = res?.data?.data?.display_url;

    const bookingInfo = {
      user_name: data?.name || user?.displayName,
      user_email: data?.email || user?.email,
      select_tour_guide: data?.select,
      date: data?.date,
      price: item?.price,
      user_image: image,
      tour_type: item?.tour_type,
      trip_title: item?.trip_title,
      status: "In Review",
    };
    axiosSecure.post("/bookings", bookingInfo).then((res) => {
      if(res?.data?._id){
        toast.success("Booking Successfully!", { id: toastId });
      }
    });
  };

  return (
    <div className="flex items-center">
      <div className="">
        <img
          className="w-[600px]"
          src="https://i.ibb.co/SJxT62g/Screenshot-176.png"
          alt=""
        />
      </div>
      <div className="w-full flex-1">
        <h1 className="text-3xl font-semibold text-center mb-3 w-fit border-b-4 border-orange-500 mx-auto">
          {" "}
          {item?.trip_title}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5 p-6">
            {/* 1 */}
            <div>
              <label className="label">
                <span className="label-text">Enter your name</span>
              </label>
              <input
                {...register("name")}
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </div>
            {/* 2 */}
            <div>
              <label className="label">
                <span className="label-text">Enter your email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>
            {/* 3 */}
            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price")}
                defaultValue={item?.price}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            {/* 4 */}
            <div>
              <label className="label">
                <span className="label-text">Select tour date</span>
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Tour Date"
                className="input input-bordered w-full"
              />
              {errors.date && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>
            {/* 5 */}
            <div>
              <label className="label">
                <span className="label-text">Select tour guide</span>
              </label>
              <select
                required
                {...register("select")}
                className="select select-bordered w-full">
                {allTourGuides?.map((tourGuide) => (
                  <option key={tourGuide._id}>
                    {tourGuide?.provider_name}
                  </option>
                ))}
                <option>Greedo</option>
              </select>
            </div>
            {/* 6 */}
            <div>
              <label className="label">
                <span className="label-text">Select image</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full"
              />
              {errors.image && (
                <span className="text-red-400 text-xs">
                  This field is required
                </span>
              )}
            </div>

            {/* -- */}
          </div>
          <div className="p-6 pt-0">
            {/* modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {user && userInfo?.role === "Tourist" ? (
              <h1
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="hover:rounded-3xl block w-48 mx-auto select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-2 px-6 text-center align-middle font-Rancho text-xl  text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true">
                Book Now
              </h1>
            ) : (
              <div
                className="tooltip flex justify-center mt-5"
                data-tip={`You can't booking package because you are (${userInfo?.role ? userInfo?.role : 'Sign out'})`}>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  disabled
                  className=" hover:rounded-3xl block w-48 select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-2 px-6 text-center align-middle font-Rancho text-xl  text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true">
                  Book Now
                </button>
              </div>
            )}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle">
              <div className=" modal-box">
                <div className="py-10">
                  <h1 className="text-2xl font-semibold text-center mb-5">
                    Are you sure confirm this package?
                  </h1>
                  <div className="flex flex-col items-center gap-5">
                    <button
                      className="hover:rounded-3xl block w-48 mx-auto select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-2 px-6 text-center align-middle font-Rancho text-xl  text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true">
                      Confirm Booking
                    </button>
                    <Link to="/dashboard/bookings">
                      <p className="link link-error">
                        See your booking package
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="modal-action">
                  <form className="absolute right-3 top-3" method="dialog">
                    <button className="btn rounded-full bg-red-400 hover:bg-red-300">
                      <RxCross1 className="text-base"></RxCross1>
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </form>
      </div>
    </div>
  );
};
BookingForm.propTypes = {
  item: PropTypes.object.isRequired,
};
export default BookingForm;
