import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const TourGuideAssigned = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const tourGuideName = user?.displayName?.replaceAll(" ", "_");

  const { data: tourAssignedAll, refetch } = useQuery({
    queryKey: ["tourAssignedAll"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings2/${tourGuideName}`);
      return res?.data;
    },
  });
  console.log(tourAssignedAll);

  const handleAccepted = (id) => {
    const toastId = toast.loading("Accepting...");

    const changeStatus = {
      status: "Accepted",
    };
    axiosSecure.put(`/bookings/${id}`, changeStatus).then((res) => {
      if (res?.data.status === "Accepted") {
        console.log(res?.data?.status);
        refetch();
        toast.success("Accepted!", { id: toastId });
      }
    });
  };

  const handleRejected = (id) => {
    const toastId = toast.loading("Rejecting...");

    const changeStatus = {
      status: "Rejected",
    };
    axiosSecure.put(`/bookings/${id}`, changeStatus).then((res) => {
      if (res?.data.status === "Rejected") {
        console.log(res?.data?.status);
        refetch();
        toast.success("Rejected!", { id: toastId });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Travelia | TourGuide | Assign</title>
      </Helmet>
      <h1 className="text-center my-10 text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
        Assigned Tour
      </h1>
      <div className="bg-[#F6F6F6] p-10 rounded-xl">
        <div>
          <div className="flex justify-between">
            <h1 className="text-4xl  font-semibold">Assigned Tours:</h1>
          </div>
          {/*  */}
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full mb-10">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-lg text-black">Package</th>
                    <th className="text-lg text-black">Tourist Name</th>
                    <th className="text-lg text-black">Tour Date</th>
                    <th className="text-lg text-black">Price</th>
                    <th className="text-lg text-black text-center">Accept</th>
                    <th className="text-lg text-black text-center">Reject</th>
                  </tr>
                </thead>
                <tbody>
                  {tourAssignedAll?.map((tourAssigned) => (
                    <tr key={tourAssigned._id}>
                      <th className="text-gray-500">
                        {tourAssigned?.trip_title}
                      </th>
                      <td className="text-gray-500">
                        {tourAssigned?.user_name}
                      </td>
                      <td className="text-gray-500 ">{tourAssigned?.date}</td>
                      <td className="text-gray-500 ">
                        {tourAssigned?.price} $
                      </td>
                      <td>
                        {tourAssigned?.status === "Accepted" ? (
                          <button
                            onClick={() => handleAccepted(tourAssigned?._id)}
                            className="mx-auto block select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            disabled
                            data-ripple-light="true">
                            Accepted
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAccepted(tourAssigned?._id)}
                            className="mx-auto block select-none rounded-lg bg-green-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true">
                            Accept
                          </button>
                        )}
                      </td>
                      <td>
                        {tourAssigned?.status === "Rejected" ? (
                          <button
                            onClick={() => handleRejected(tourAssigned?._id)}
                            className="mx-auto block select-none rounded-lg bg-red-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            disabled
                            data-ripple-light="true">
                            Rejected
                          </button>
                        ) : (
                          <button
                            onClick={() => handleRejected(tourAssigned?._id)}
                            className="mx-auto block select-none rounded-lg bg-red-500 hover:rounded-3xl py-2 px-5 normal-case text-center align-middle font-sans text-base font-semibold  text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true">
                            Reject
                          </button>
                        )}
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

export default TourGuideAssigned;
