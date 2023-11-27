import PropTypes from "prop-types";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useUserInfo from "../../../../Hooks/useUserInfo";

const PackagesCard = ({ packageInfo }) => {
  const { user } = useAuth();
  const [userInfo] = useUserInfo();
  const axiosSecure = useAxiosPublic();
  const { about, image, price, tour_type, trip_title, _id } = packageInfo || {};

  const handleWishlist = (id) => {
    const toastId = toast.loading("Wishlist Adding...");

    const wishlistData = {
      package_id: id,
      user_name: user?.displayName,
      user_email: user?.email,
      image: image,
      tour_type: tour_type,
      trip_title: trip_title,
      price: price,
    };
    axiosSecure.post("/wishlist", wishlistData).then((res) => {
      if (res?.status === 200) {
        toast.success("Wishlist Added!", { id: toastId });
      }
    });
  };

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          className="h-60 object-cover"
          src={image}
          alt="ui/ux review check"
        />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        {user && userInfo?.role === "Tourist" ? (
          <button
            onClick={() => handleWishlist(_id)}
            className="!absolute hover:scale-150 top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true">
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
              </svg>
            </span>
          </button>
        ) : (
          <div
            className="!absolute  top-4 right-5 tooltip tooltip-left tooltip-error flex justify-center"
            data-tip={`Can't add wishlist.You are(${
              userInfo?.role ? userInfo?.role : "Sign out"
            })`}>
            <button
              onClick={() => handleWishlist(_id)}
              className=" right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              disabled
              data-ripple-dark="true">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
      <div className="px-6 pt-5">
        <h5 className="block font-sans text-2xl mb-3 antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
          {trip_title} <span className="text-sm">({tour_type})</span>
        </h5>

        <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700 min-h-[82px]">
          {about?.slice(0, 100)}...
        </p>
        <p className="text-lg font-semibold">Price: ${price}</p>
      </div>
      <div className="p-6 pt-3">
        <Link to={`/packageDetails/${_id}`}>
          <button
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl normal-case  hover:scale-110 py-3.5 px-7 text-center align-middle  text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true">
            View Package
          </button>
        </Link>
      </div>
    </div>
  );
};

PackagesCard.propTypes = {
  packageInfo: PropTypes.object.isRequired,
};

export default PackagesCard;
