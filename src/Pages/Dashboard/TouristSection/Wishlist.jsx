import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: userWishlist, refetch } = useQuery({
    queryKey: ["userWishlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist/${user?.email}`);
      return res?.data;
    },
  });

  const handleWishlistDelete = (id) => {
    const toastId = toast.loading("Wishlist Deleting...");

    axiosSecure.delete(`/wishlist/${id}`).then((res) => {
      if (res?.data._id) {
        refetch();
        toast.success("Wishlist Deleted!", { id: toastId });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Travelia | Wishlist</title>
      </Helmet>
      <h1 className="text-center mb-10 lg:my-10 text-3xl  md:text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
        My Wishlist
      </h1>
      <div className="bg-[#F6F6F6] p-10 rounded-xl">
        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl md:text-4xl   font-semibold">
              Total Wishlists: {userWishlist?.length}
            </h1>
          </div>
          {/*  */}
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full mb-10">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-lg text-black">Image</th>
                    <th className="text-lg text-black">Package</th>
                    <th className="text-lg text-black">Price</th>
                    <th className="text-lg text-black text-center">
                      Visit Package
                    </th>
                    <th className="text-lg text-black">Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {userWishlist?.map((wishlist) => (
                    <tr key={wishlist._id}>
                      <th className="text-gray-500">
                        <div className="avatar">
                          <div className="w-24 h-16 object-cover rounded-lg">
                            <img src={wishlist?.image} />
                          </div>
                        </div>
                      </th>
                      <td className="text-gray-500">{wishlist?.trip_title}</td>
                      <td className="text-gray-500 ">{wishlist?.price} $</td>
                      <td className="text-gray-500 ">
                        <Link to={`/packageDetails/${wishlist?.package_id}`}>
                          <button
                            className={` mx-auto block select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl py-3.5 px-7 text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                            type="button"
                            data-ripple-light="true">
                            View Package
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleWishlistDelete(wishlist?._id)}
                          className="btn rounded-full bg-red-400 hover:bg-red-300">
                          <RxCross1 className="text-base"></RxCross1>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
