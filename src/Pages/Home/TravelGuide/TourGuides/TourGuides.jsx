import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const TourGuides = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allTourGuides } = useQuery({
    queryKey: ["allTourGuides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tourGuides");
      return res?.data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>
              <h1 className="text-lg">Image</h1>
            </th>
            <th>
              <h1 className="text-lg">Name</h1>
            </th>
            <th>
              <h1 className="text-lg">Email</h1>
            </th>
            <th>
              <h1 className="text-lg">Number</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {allTourGuides?.map((tourGuide, index) => (
            <tr key={tourGuide._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-14 h-14">
                      <img
                        src={tourGuide?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h1 className="text-gray-500">{tourGuide?.provider_name}</h1>
              </td>
              <td>
                <h1 className="text-gray-500">{tourGuide?.provider_email}</h1>
              </td>
              <td>
                <h1 className="text-gray-500">+{tourGuide?.phone_number}</h1>
              </td>
              <th>
                <Link to={`/tourGuideProfile/${tourGuide._id}`}>
                  <button
                    className=" mx-auto block select-none rounded-lg  bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border hover:rounded-3xl py-2 px-7 text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true">
                    Details
                  </button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourGuides;
