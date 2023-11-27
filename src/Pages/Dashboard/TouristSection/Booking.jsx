import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { RxCross1 } from "react-icons/rx";

const Booking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: userBookings } = useQuery({
    queryKey: ["userBookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${user?.email}`);
      return res?.data;
    },
  });
  console.log(userBookings);

  return (
    <div>
      <h1 className="text-center my-10 text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
        My Booking Packages
      </h1>
      <div className="bg-[#F6F6F6] p-10 rounded-xl">
        <div>
          <div className="flex justify-between">
            <h1 className="text-4xl  font-semibold">
              Total Bookings: {userBookings?.length}
            </h1>
          </div>
          {/*  */}
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full mb-10">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-lg text-black">Package</th>
                    <th className="text-lg text-black">Tour Guide</th>
                    <th className="text-lg text-black">TourDate</th>
                    <th className="text-lg text-black">Price</th>
                    <th className="text-lg text-black">Status</th>
                    <th className="text-lg text-black">Payment</th>
                    <th className="text-lg text-black">Discount</th>
                    <th className="text-lg text-black"></th>
                  </tr>
                </thead>
                <tbody>
                  {userBookings?.map((user) => (
                    <tr key={user._id}>
                      <th className="text-gray-500">{user?.trip_title}</th>
                      <td className="text-gray-500">
                        {user?.select_tour_guide?.replaceAll("_"," ")}
                      </td>
                      <td className="text-gray-500">{user?.date}</td>
                      <td className="text-gray-500 ">{user?.price} $</td>
                      <td className="text-gray-500 ">
                        {user?.status === 'In Review' &&
                         <p>{user?.status}</p>
                         }
                        {user?.status === 'Rejected' &&
                         <p className="text-red-500">{user?.status}</p>
                         }
                        {user?.status === 'Accepted' &&
                         <p className="text-green-500">{user?.status}</p>
                         }
                        </td>
                      <th>
                        {user?.status === "Accepted" ? (
                          <button
                            className="mx-auto block w-full select-none rounded-lg bg-blue-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true">
                            Pay
                          </button>
                        ) : (
                          <button
                            className="mx-auto block w-full select-none rounded-lg bg-blue-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            disabled
                            data-ripple-light="true">
                            Pay
                          </button>
                        )}
                      </th>
                      <th>
                        <button
                          className="mx-auto block w-full select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          disabled
                          data-ripple-light="true">
                          Apply
                        </button>
                      </th>
                      <th>
                        {user?.status === "In Review" && (
                          <button className="btn rounded-full bg-red-400 hover:bg-red-300">
                          <RxCross1 className="text-base"></RxCross1>
                        </button>
                        )}
                      </th>
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

export default Booking;
